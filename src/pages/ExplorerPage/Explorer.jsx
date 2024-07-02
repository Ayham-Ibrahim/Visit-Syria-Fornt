import img from '../../assets/images/Rectangle 140.png'
import Card from "../../shared/Card/Card"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import './Explorer.css'
import PageLayout from "../../shared/PageLayout/PageLayout"
import { mainURL } from '../../helpers/ExploreServices/ExploreURLs'
import * as exploreServices from '../../helpers/ExploreServices/ExploreServices'
const Explorer = () => {
    const [cards, setCards] = useState([]);
    const { cities, cityNames, isLoadingCities } = exploreServices.useFetchCities();
    console.log('cities', cities);
    console.log('cityNames', cityNames);

    const sortByListLandmarks = [
        { label: 'ID', value: 'id' },
        { label: 'الاسم', value: 'name' },
        { label: 'المحافظة', value: 'city' },
        { label: 'الموقع', value: 'location' },
    ];
    const sortByListHotelsRestorants = [
        { label: 'ID', value: 'id' },
        { label: 'الاسم', value: 'name' },
        { label: 'المحافظة', value: 'city_name' },
        { label: 'الموقع', value: 'location' },
    ];

    const [selectedCity, setSelectedCity] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('');
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        console.log("ffffffff");
    };

    //_______________________________________



    const { section } = useParams();

    console.log(section);

    const to = useNavigate();


    const getAllData = async () => {
        setLoading(true);
        const apiName =
            section === "resturants" ? "restaurants/page/"
                :
                section === "hotels" ? "hotels" : "landmarks" || 'restaurants/page/1'
        try {
            setLoading(false);
            const response = await exploreServices.getAllExploreData(apiName, currentPage, (selectedCity != "" ? selectedCity : null), (sortBy != "" ? sortBy : null));
            console.log('response', response);
            setCards(response.data);
            console.log('cards', cards);
            setTotalPages(response.pagination.total_pages);

        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        console.log('currentPage', currentPage);
        getAllData();
    }, [section]);


    useEffect(() => {
        console.log('loading', loading);
    }, [loading]);


    const [search, setSearch] = useState();
    const [select1, setSelect1] = useState([]);
    const [select2, setSelect2] = useState([]);

    const handleSearch = () => {
        if (search) {
            setCards(cards?.filter(e => e.name === search));
        }
    }


    useEffect(() => {
        console.log('select1', select1);
        console.log('select2', select2);
        setSelectedCity(select1);
        setSortBy(select2);

    }, [select1, select2]);

    useEffect(() => {
        console.log('currentPage', currentPage);
        console.log('selectedCity', selectedCity);
        getAllData();
    }, [currentPage, selectedCity, sortBy]);

    return (
        <div className="position-relative">
            <PageLayout
                img={img}
                options1={cityNames}
                options2={(section === 'lands'? sortByListLandmarks:sortByListHotelsRestorants )}
                setFirstSelect={setSelect1}
                setSecondSelect={setSelect2}
                select1={select1}
                select2={select2}
                setValue={(e) => setSearch(e.target.value)}
                onClickBtn={handleSearch}>


                {!loading && section === 'lands' && cards && cards.map((card, index) =>
                    <Card
                        brief={card.primary_description}
                        button={'أقرأ المزيد'}
                        image={mainURL + card.internal_image}
                        location={card.city}
                        price={""}
                        price_exists={false}
                        rate={4.7}
                        title={card.name}
                        text={''}
                        key={card.id} />)}

                {!loading && section === 'hotels' && cards && cards.map((card, index) =>
                    <Card
                        brief={card.primary_description}
                        button={'احجز الآن'}
                        image={mainURL + card.logo}
                        location={`${card.city_name} - ${card.location}`}
                        price={card.price}
                        price_exists={true}
                        rate={4.7}
                        title={card.name}
                        text={"في الليلة"}
                        key={card.id} />)}

                {!loading && section === 'resturants' && cards && cards.map((card, index) =>
                    <Card
                        brief={card.primary_description}
                        button={'احجز الآن'}
                        image={mainURL + card.logo}
                        location={`${card.city_name} - ${card.location}`}
                        price={card.table_price}
                        price_exists={true}
                        rate={4.7}
                        title={card.name}
                        text={"مغلق الآن"}
                        key={card.id} />)}

                <div className='buttons-slider desktop d-flex justify-content-center gap-3 position-absolute ' >
                    {Array.from({ length: totalPages }, (_, index) => (
                        <div
                            key={index}
                            className={`${currentPage == index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        />
                    ))}
                </div>


            </PageLayout>
        </div>
    )
}

export default Explorer
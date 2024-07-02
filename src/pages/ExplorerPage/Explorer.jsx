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
    const [cities, setCities] = useState([]);

    //_______________________________________
    const [selectedCity, setSelectedCity] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('');
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    //_______________________________________



    const { section } = useParams();

    console.log(section);

    const to = useNavigate();

    const [cityNames, setCityNames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/api/cities')
    //         .then(res => {
    //             console.log(res.data.data);
    //             setCities(res.data.data);
    //             const names = res.data.data.map(city => city.name);
    //             setCityNames(names);
    //         })
    // }, []);

    const [page, setPage] = useState(1);
    // useEffect(() => {
    //     if (!["lands", "resturants", "hotels"].includes(section)) {
    //         to('/error');
    //     }

    //     setIsLoading(true);

    //     const apiName =
    //         section === "resturants" ? "restaurants/page/"
    //             :
    //             section === "hotels" ? "hotels" : "landmarks" || 'restaurants/page/1'

    //     axios.get('http://127.0.0.1:8000/api/' + apiName)
    //         .then(res => {
    //             console.log("landmarks api", res);
    //             setCards(res.data.data);
    //             setTotalPages(res.data.pagination.total_pages);
    //             setCurrentPage(res.data.pagination.currentPage);
    //             console.log("cards api", cards);


    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }, [section]);

    const getAllData = async () => {
        setIsLoading(true);

        const apiName =
            section === "resturants" ? "restaurants/page/"
                :
                section === "hotels" ? "hotels" : "landmarks" || 'restaurants/page/1'
        try {
            setLoading(false);
            const response = await exploreServices.getAllExploreData(apiName, currentPage, '', '');
            console.log('response', response);
            setCards(response.data);
            console.log('cards', cards);

            setTotalPages(response.pagination.total_pages);
            // setCurrentPage(response.pagination.currentPage);

        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        console.log('currentPage', currentPage);
        getAllData();
    }, [currentPage]);

    useEffect(() => {
        console.log('currentPage', currentPage);
        getAllData();
    }, []);
    useEffect(() => {
        console.log('loading', loading);
    }, [loading]);


    const [search, setSearch] = useState();
    const [select1, setSelect1] = useState();
    const [select2, setSelect2] = useState();

    const handleSearch = () => {
        if (search) {
            setCards(cards?.filter(e => e.name === search));
        }
    }

    const handleSelect1 = () => {
        if (select1) {
            setCards(cards?.filter(e => e.city_id === select1))
        }
    }

    const handleSelect2 = () => {
        if (select2) {
            setCards(cards?.sort((a, b) => a.select2 < a.select2))
        }
    }

    return (
        <div className="position-relative">
            <PageLayout
                img={img}
                options1={cities}
                onClickBtn={handleSearch}
                setFirstSelect={handleSelect1}
                setSecondSelect={handleSelect2}
                setValue={(e) => setSearch(e.target.value)}
                select1={select1}
                select2={select2}>

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
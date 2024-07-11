import img from '../../assets/images/Rectangle 140.png'
import Card from "../../shared/Card/Card"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import './RecommendationsPage.css'
import PageLayout from "../../shared/PageLayout/PageLayout"
import { mainURL } from '../../helpers/ExploreServices/ExploreURLs'
import * as exploreServices from '../../helpers/ExploreServices/ExploreServices'
import { hotelsHero, restaurantsHero, landmarksHero } from '../../helpers/ExploreServices/ExploreMainHero';
import Button from '../../shared/Button/Button'

const RecommendationsPage = () => {
    const [cards, setCards] = useState([]);

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

    const getAllData = async () => {
        setLoading(true);
        const apiName =
            section === "resturants" ? "restaurants/page/"
                :
                section === "hotels" ? "hotels" : "landmarks" || 'restaurants/page/1'
        try {
            setLoading(false);
            const response = await exploreServices.getAllExploreData(apiName, currentPage, (selectedCity != "" ? (selectedCity === "كامل القطر" ? null : selectedCity) : null), (sortBy != "" ? sortBy : null));
            setCards(response.data);
            setTotalPages(response.pagination.total_pages);

        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        setCurrentPage(1);
        getAllData();
    }, [section]);


    useEffect(() => {
        console.log('loading', loading);
    }, [loading]);


    const [search, setSearch] = useState();
    const [select1, setSelect1] = useState([]);
    const [select2, setSelect2] = useState([]);


    useEffect(() => {
        setSelectedCity(select1);
        setSortBy(select2);

    }, [select1, select2]);

    useEffect(() => {
        getAllData();
    }, [currentPage, selectedCity, sortBy]);


    const navigate = useNavigate();

    const handleReadMoreClick = (id) => {
        let path;
        switch (section) {
            case 'hotels':
                path = '/hotel-details';
                break;
            case 'resturants':
                path = '/restaurant-details';
                break;
            case 'lands':
                path = '/landmark-details';
                break;
            default:
                path = '/';
        }

        navigate(path + `/${id}`);
    };

    const [searchQuery, setSearchQuery] = useState("");



    const searchedCards = searchQuery
        ? cards.filter(card =>
            card.name.includes(searchQuery.toLowerCase())
        )
        : cards;

    // useEffect(() => {
    //     console.log('searchQuery', searchQuery);
    //     console.log('searchedCards', searchedCards);
    // }, [searchQuery])

    useEffect(() => {
        setSearchQuery("");
    }, [cards]);

    return (
        <div className="position-relative">
            <PageLayout
                img={
                    section === 'hotels'
                        ? hotelsHero
                        : section === 'resturants'
                            ? restaurantsHero
                            : section === 'lands'
                                ? landmarksHero
                                : img
                }

            >


                {!loading && section === 'lands' && searchedCards && searchedCards.map((card, index) =>
                    <Card
                        brief={card.primary_description}
                        button={<Button btnText="اقرأ المزيد" radius="10px" className="BY_CardsButtons" onClick={() => handleReadMoreClick(card.id)} />}
                        onclick={() => handleReadMoreClick(card.id)}
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
                        button={<Button btnText="إحجز الآن" radius="10px" className="BY_CardsButtons"
                            onClick={(event) => {
                                event.stopPropagation();
                                navigate(`/booking`);
                            }} />}
                        onclick={() => handleReadMoreClick(card.id)}
                        image={mainURL + card.cover_image}
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
                        onclick={() => handleReadMoreClick(card.id)}
                        button={<Button btnText="إحجز الآن" radius="10px" className="BY_CardsButtons"
                            onClick={(event) => {
                                event.stopPropagation();
                                navigate('/booking');
                            }} />}
                        image={mainURL + card.cover_image}
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

export default RecommendationsPage

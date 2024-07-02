import img from '../../assets/images/Rectangle 140.png'
import Card from "../../shared/Card/Card"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import './Explorer.css'
import PageLayout from "../../shared/PageLayout/PageLayout"

const Explorer = () => {
    const [cards, setCards] = useState([]);
    const [cities, setCities] = useState([]);

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

    useEffect(() => {
        if (!["lands", "resturants", "hotels"].includes(section)) {
            to('/error');
        }

        setIsLoading(true);

        const apiName =
            section === "resturants" ?
                "restaurants/page/" + page :
                section === "hotels" ?
                    "hotels" : "landmarks"
                    || 'restaurants/page/1'

        axios.get('http://127.0.0.1:8000/api/' + apiName)
            .then(res => {
                console.log(res);
                setCards(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [section]);

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
                {/* {cards && cards.map((card, i) => <Card brief={card?.primary_description} button={section === 'lands'? 'أقرأ المزيد': 'أحجز الآن'} image={section !== 'lands'? card.cover_image :card.external_image} location={card.location} price={card?.table_price} price_exists={section !== 'lands'} rate={4.7} title={card.name} text={section === 'lands'? card.location:'مغلق الان'} key={i}/>)} */}
                {[1, 2, 3, 4, 5, 6, 7, 8].map((card, i) =>
                    <Card
                        brief={"qvwveeeeeeeeeeeeeeee"}
                        button={section === 'lands' ? 'أقرأ المزيد' : 'أحجز الآن'}
                        image={img} location={'se2se2s'}
                        price={'200'}
                        price_exists={section !== 'lands'}
                        rate={4.7} title={"x2xe2x"}
                        text={section === 'lands' ? "d2d2ed2e" : 'مغلق الان'}
                        key={i} />)}
                    {/* <div className='buttons-slider desktop d-flex justify-content-center gap-3 position-absolute' > */}
                    <div className='buttons-slider desktop d-flex justify-content-center gap-3 position-absolute ' >
                        {[1, 2, 3, 4].map((e, i) => (
                            <div
                                key={i}
                                className={`${page == i + 1 ? 'active' : ''}`}
                                onClick={() => setPage(i + 1)}
                            />
                        ))}

                    
                </div>


            </PageLayout>
        </div>
    )
}

export default Explorer
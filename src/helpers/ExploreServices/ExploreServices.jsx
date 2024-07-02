import {apiUrl} from './ExploreURLs'
import axios from "axios"

// const apiName =
// section === "resturants" ? "restaurants/page/"
//     :
//     section === "hotels" ? "hotels" : "landmarks" || 'restaurants/page/1'

// axios.get('http://127.0.0.1:8000/api/' + apiName)
// .then(res => {
//     console.log("landmarks api", res);
//     setCards(res.data.data);
//     setTotalPages(res.data.pagination.total_pages);
//     setCurrentPage(res.data.pagination.currentPage);
//     console.log("cards api", cards);

//     if (apiName == "landmarks") {
//     }
// })
// .catch(err => {
//     console.log(err);
// })


export async function getAllExploreData(apiName, currentPage, selectedCity, sortBy) {
    try {
        const cityQuery = selectedCity ? `&city=${selectedCity}` : '';
        const sortQuery = sortBy ? `&sort_by=${sortBy}` : '';
        const response = await axios.get(apiUrl + apiName + `?page=${currentPage}${cityQuery}${sortQuery}`);
        if (response.status === 200) {
            const allData = response.data;
            return allData;
        } else {
            throw new Error(`Failed to get allData  from ${apiName}`);
        }
    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
}
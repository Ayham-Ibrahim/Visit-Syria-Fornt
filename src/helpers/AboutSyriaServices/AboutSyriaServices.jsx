import { AboutSyriaAPIURL } from './AboutSyriaURLs'

import axios from "axios"


export async function getAllAboutData(currentPage,category = null) {
    const categoryQuery = category ? `&category=${category}` : '';
    const pageQuery = currentPage ? `?page=${currentPage}` : '';
    const perPageQuery = `&per_page=1`;

    try {
        console.log("URL", AboutSyriaAPIURL+categoryQuery);
        const response = await axios.get(AboutSyriaAPIURL+pageQuery+perPageQuery+categoryQuery);
        if (response.status === 200) {
            const allData = response.data;
            console.log("allData api", allData)
            return allData;
        } else {
            throw new Error(`Failed to get allData from AboutSyria`);
        }
    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
}
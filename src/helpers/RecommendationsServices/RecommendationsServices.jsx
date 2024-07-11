import { LandMarkAPIURL } from '../ExploreServices/ExploreURLs'
import axios from "axios"



export async function getRecommendationslandmarks(currentPage) {
    const pageQuery = currentPage ? `?page=${currentPage}` : '';
    const perPageQuery = `&per_page=3`;
    try {
        const response = await axios.get(LandMarkAPIURL + pageQuery + perPageQuery);
        if (response.status === 200) {
            const landmarks = response.data;
            return landmarks;
        } else {
            throw new Error(`Failed to get landmarks`);
        }
    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
}
import { RestaurantAPIURL } from '../ExploreServices/ExploreURLs'
import axios from "axios"



export async function getRestaurantByID(id) {
    try {

        const response = await axios.get(RestaurantAPIURL + `/${id}`);
        if (response.status === 200) {
            const restaurant = response.data;
            return restaurant;
        } else {
            throw new Error(`Failed to get restaurant with id =  ${id}`);
        }
    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
}
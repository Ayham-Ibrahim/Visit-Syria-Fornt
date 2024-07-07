import { HotelAPIURL } from '../ExploreServices/ExploreURLs'
import axios from "axios"



export async function getHotelByID(id) {
    try {

        const response = await axios.get(HotelAPIURL + `/${id}`);
        if (response.status === 200) {
            const hotel = response.data;
            return hotel;
        } else {
            throw new Error(`Failed to get hotel with id =  ${id}`);
        }
    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
}
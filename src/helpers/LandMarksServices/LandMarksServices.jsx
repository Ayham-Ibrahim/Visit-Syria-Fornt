import { LandMarkAPIURL } from '../ExploreServices/ExploreURLs'
import axios from "axios"



export async function getlandmarkByID(id) {
    try {

        const response = await axios.get(LandMarkAPIURL + `/${id}`);
        if (response.status === 200) {
            const landmark = response.data;
            return landmark;
        } else {
            throw new Error(`Failed to get landmark with id =  ${id}`);
        }
    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
}
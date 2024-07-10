import { apiUrl, mainURL, CitiesAPIURL } from './ExploreURLs'
import { useEffect, useState } from "react"

import axios from "axios"

export function useFetchCities() {
    const [cities, setCities] = useState([]);
    const [cityNames, setCityNames] = useState([]);
    const [isLoadingCities, setIsLoadingCities] = useState(false);

    useEffect(() => {
        setIsLoadingCities(true);
        axios.get(CitiesAPIURL)
            .then(res => {
                setCities(res.data.data);
                const names = res.data.data.map(city => city.name);
                setCityNames(names);
            })
            .finally(() => setIsLoadingCities(false));
    }, []);

    return { cities, cityNames, isLoadingCities };
}

export async function getAllExploreData(apiName, currentPage, selectedCity = null, sortBy = null) {
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
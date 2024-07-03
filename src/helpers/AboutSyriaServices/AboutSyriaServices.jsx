import { apiUrl, mainURL, AboutSyriaAPIURL } from './AboutSyriaURLs'
import { useEffect, useState } from "react"

import axios from "axios"


export async function getAllAboutData() {
    try {
        const response = await axios.get(AboutSyriaAPIURL);
        if (response.status === 200) {
            const allData = response.data;
            return allData;
        } else {
            throw new Error(`Failed to get allData from AboutSyria`);
        }
    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
}
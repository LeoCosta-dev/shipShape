import axios from "axios";

export async function covidRisk(countryCode){
    const url = `https://shipshapetravel.azurewebsites.net/Covid?country=${countryCode}`
    try {
        const response = (await axios.get(url)).data
        return response?.data?.diseaseRiskLevel?.text
    } catch (error) {
        console.log(error.message);
        return {}
    }
}


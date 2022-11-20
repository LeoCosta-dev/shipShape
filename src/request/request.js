import axios from "axios";

export async function requestCity(payload){
    const url = "https://shipshapetravel.azurewebsites.net/Cities"
    try {
        const response = (await axios.post(url, payload)).data
        return response
    } catch (error) {
        console.log(error.message);
        return {}
    }
}
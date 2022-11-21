import axios from "axios";
import Amadeus from "amadeus";


export async function requestCity(payload){
    const url = "https://cors-anywhere.herokuapp.com/https://shipshapetravel.azurewebsites.net/Cities"
    try {
        const response = (await axios.post(url, payload)).data
        return response
    } catch (error) {
        console.log(error.message);
        return {}
    }
}

export async function requestCovid(countryCode){
    const amadeus = new Amadeus({
        clienteId: "AlASor8p1FD2tQxlsdOfYzIoq9PkLuYs",
        clientSecret: "pGfaxt5EAG64GlSJ"
    })
    const url = `v2/duty-of-care/diseases/covid19-area-report?countryCode=${countryCode}`
    const response = await amadeus.client.get()
}

requestCovid("ES").then(response => console.log(response))
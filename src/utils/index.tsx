'use client'
import axios from "axios";

export const changeRoot = async(name:string,property:string) =>{
    const body = document.body;
    body.style.setProperty('--' + name, property);
}

interface geo {
    asn: string
    city: string
    continent_code: string
    country: string
    country_area: number
    country_calling_code: string
    country_capital: string
    country_code: string
    country_code_iso3: string
    country_name: string
    country_population: number
    country_tld: string
    currency: string
    currency_name: string
    in_eu: boolean
    ip: string
    languages: string
    latitude: number
    longitude: number
    network: string
    org: string
    postal: string
    region: string
    region_code: string
    timezone: string
    utc_offset: string
    version: string
}

export const geoLocation = async() => {
    const checkEnter = localStorage.getItem('enter');
    const checkCities = localStorage.getItem('cities');
    
    if(!checkEnter) axios.get('https://ipapi.co/json').then(res=>res.data).then(async(data:geo)=> {
        const cites = await getCountryCity(data.country)
        localStorage.setItem('cites',cites)
        localStorage.setItem('enter',JSON.stringify(data));
    }) 
    else {
        if(checkCities) {
            const country = JSON.parse(checkEnter).country;
            const cites = await getCountryCity(country)
            localStorage.setItem('cites',cites)
        }
        
    }
}

export const getLocalStorage =(item:string)=>{
    return localStorage.getItem(item);
}

export const setLocalStorage = (item:string,value:string) => {
    localStorage.setItem(item,value);
}

const getCountryCity = async(country:string)=> {
    try {
        const url = `http://api.geonames.org/searchJSON?country=${country}&maxRows=1000&username=darkciel`;
        const response = await axios.get(url);
        const result = response.data.geonames.map((item:any) => item.toponymName)
        return result;
    } catch (error) {
        console.error(error);
        return undefined
    }
}

// axios.get('https://ip-geo-location4.p.rapidapi.com/',{
//     params: {format:"json"},
//     headers: {
//         'X-RapidAPI-Key': '0b5d9b2ea9msh6bccc9ff05175f3p15afbbjsn590912e7c004',
//         'X-RapidAPI-Host': 'ip-geo-location4.p.rapidapi.com'
//     }
// })
// .then(res=>res.data)
// .then(async(data:geo)=>{
//     const cites = await getCountryCity(data.country.country_code)
//     localStorage.setItem('cites',cites)
//     localStorage.setItem('enter',JSON.stringify(data));
// })
// if(!checkEnter) axios.get('https://ipapi.co/json').then(res=>res.data).then(async(data:geo)=> {
//         const cites = await getCountryCity(data.country)
//         localStorage.setItem('cites',cites)
//         localStorage.setItem('enter',JSON.stringify(data));
//     }) 
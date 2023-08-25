'use client'
import axios, { AxiosResponse } from "axios";

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

    
    if(!checkEnter) axios.get('https://ipapi.co/json').then(res=>res.data).then(async(data:geo)=> {
        const cites = await getCountryCity(data.country)
        localStorage.setItem('cites',cites)
        localStorage.setItem('enter',JSON.stringify(data));
    }) 
    else {
        const country = JSON.parse(checkEnter).country;
        const cites = await getCountryCity(country)
        localStorage.setItem('cites',cites)
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
// @ts-ignore
import { RadioBrowserApi } from 'radio-browser-api';

const api = new RadioBrowserApi('My Radio App')
const limit = 20;

export async function getStations() {
   return await api.searchStations({
        limit,
        offset: 0 // this is the default - can be omited
      });
}

export async function getStationsByName(name:string) {
    return await api.searchStations({
        name,
        limit,
        offset: 0 // this is the default - can be omited
      });
}

export async function getStationsByCountry(countryCode:string) {
    return await api.searchStations({
        countryCode,
        limit,
        offset: 0 // this is the default - can be omited
      });
}

export async function getStationsByLanguage(language:string) {
    return await api.searchStations({
        language,
        limit,
        offset: 0 // this is the default - can be omited
      });
}

export async function getStationsByTag(tag:string) {
    return await api.searchStations({
        tag,
        limit,
        offset: 0 // this is the default - can be omited
      });
}



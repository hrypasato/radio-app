import { create } from "zustand";

import { Station } from "@/data/station";
// @ts-ignore
import { getStations, getStationsByCountry, getStationsByLanguage, getStationsByTag } from "@/data/radio-api";

interface OffsetState {
    offset: number
    increment: () => void
    decrement: () => void
    reset: () => void
}

export const useOffset = create<OffsetState>()((set) => ({
    offset: 0,
    increment: () => set((state:any) => ({ offset: state.offset + 1 })),
    decrement: () => set((state:any) => ({ offset: state.offset - 1 })),
    reset: () => set((_) => ({ offset: 0 })),
}));


interface StationState {
    station: Station | null
    updateStation: (newStation:Station) => void
}

export const useStation = create<StationState>()((set) => ({
    station:null,
    updateStation: (newStation:Station) => set({ station: newStation })
}))

interface ListState {
    stations: Station[];
    load:() => void;
    listByName: (name:string) => void;
    listByCountry: (country:string) => void;
    listByLanguage: (language:string) => void;
    listByTag: (tag:string) => void;
}

export const useList = create<ListState>()((set) => ({
    stations:[],
    load: async () => {
        const response = await getStations();
        set({ stations: response });
    },
    listByName: async (name:string) => {

    },
    
    listByCountry: async (countryCode:string) => {
        const response = await getStationsByCountry(countryCode);
        set({ stations: response });
    },

    listByLanguage: async (language:string) => {
        const response = await getStationsByLanguage(language);
        set({ stations: response });
    },
    
    listByTag: async (tag:string) => {
        const response = await getStationsByTag(tag);
        set({ stations: response });
    }
}))
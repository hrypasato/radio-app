import { create } from "zustand";

// @ts-ignore
import { Station } from 'radio-browser-api';

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

interface CardState {
    stations: Station[];
    load:() => void;
    listByName: (name:string) => void;
    listByCountry: (country:string) => void;
    listByLanguage: (language:string) => void;
    listByTag: (tag:string) => void;
}

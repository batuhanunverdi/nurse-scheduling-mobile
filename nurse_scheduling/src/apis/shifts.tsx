import {BASE_URL} from "./auth.tsx";
import {useFetch} from "./utilities.tsx";
import {ShiftType} from "../types/ShiftType.tsx";


export const useGetMyShifts = (date:string,credentials:string,isFocused:boolean) => {
    const url = `${BASE_URL}/api/shifts/my-shifts?date=${date}`;
    const {data,isLoading} = useFetch(url,isFocused,credentials);
    let shift: ShiftType | undefined;
    if (data) {
        shift = data as ShiftType;
    }
    return {shift,isLoading};
}

export const useGetShiftsByDate = (date:string,credentials:string,isFocused:boolean) => {
    const url = `${BASE_URL}/api/shifts/other-shifts?date=${date}`;
    const {data,isLoading} = useFetch(url,isFocused,credentials);
    let shifts: ShiftType[] | undefined;
    if (data) {
        shifts = data as ShiftType[];
    }
    return {shifts,isLoading};
}

export const useGetShiftsByMonthAndYear = (id:string,month:string,year:string,credentials:string,isFocused:boolean) => {
    const url = `${BASE_URL}/api/shifts/${id}/${month}/${year}`;
    const {data,isLoading} = useFetch(url,isFocused,credentials);
    let shifts: ShiftType[] | undefined;
    if (data) {
        shifts = data as ShiftType[];
    }
    return {shifts,isLoading};
}

export function useFetchAvailableShiftsByNurseIdAndShift(id: string,credentials: string,month:string,year:string,shiftId:string,isFocused:boolean) {

    let url = `${BASE_URL}/api/shifts/${shiftId}/${id}?month=${month}&year=${year}`;


    const {data,isLoading} = useFetch(url,isFocused, credentials);

    let shifts: ShiftType[] | undefined;

    if (data) {
        shifts = data as ShiftType[];
    }

    return {shifts,isLoading};
}

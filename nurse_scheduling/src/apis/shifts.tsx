import {BASE_URL} from "./auth.tsx";
import {useFetch} from "./utilities.tsx";
import {ShiftType} from "../types/ShiftType.tsx";


export const useGetMyShifts = (date:string,credentials?:string) => {
    const url = `${BASE_URL}/api/shifts/my-shifts?date=${date}`;
    const {data,isLoading} = useFetch(url,credentials);
    let shift: ShiftType | undefined;
    if (data) {
        shift = data as ShiftType;
    }
    return {shift,isLoading};
}

export const useGetShiftsByDate = (date:string,credentials?:string) => {
    const url = `${BASE_URL}/api/shifts/date?date=${date}`;
    const {data,isLoading} = useFetch(url,credentials);
    let shifts: ShiftType[] | undefined;
    if (data) {
        shifts = data as ShiftType[];
    }
    return {shifts,isLoading};
}
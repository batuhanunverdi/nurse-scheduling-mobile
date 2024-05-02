import React, { useContext } from 'react';
import { AuthContext } from "../contexts/AuthContext.tsx";
import { Box, FlatList, Text, Spinner } from "native-base";
import moment from "moment/moment";
import { useGetShiftsByDate } from "../apis/shifts.tsx";
import { useIsFocused } from "@react-navigation/native";

function NurseCard() {
    const { selectedDate, credentials } = useContext(AuthContext);
    //"-"ler "." olacak.
    const momentDate = moment(selectedDate, "DD.MM.YYYY").format("YYYY-MM-DD");
    const isFocused = useIsFocused();
    const { shifts, isLoading } = useGetShiftsByDate(momentDate, credentials, isFocused);
    const convertDate = (date: Date) => {
        const newDate = new Date(date);
        return newDate.toLocaleDateString("tr-TR", { hour: '2-digit', minute: '2-digit' });
    }

    return (
        <Box>
            {isLoading ? (
                <Spinner accessibilityLabel="Loading shifts" />
            ) : (
                <FlatList
                    data={shifts}
                    renderItem={({ item }) => {
                        return (
                            <Box
                                key={`${item.nurseFirstName}-${item.nurseLastName}`}
                                backgroundColor="gray.300"
                                rounded="xl"
                                p="2"
                                m="1"
                                alignItems="center"
                            >
                                <Text fontSize="lg">{item.nurseFirstName} {item.nurseLastName}</Text>
                                <Text fontSize="lg">{convertDate(item.startDate)} - {convertDate(item.endDate)}</Text>
                            </Box>
                        );
                    }}
                />
            )}
        </Box>
    );
}

export default NurseCard;

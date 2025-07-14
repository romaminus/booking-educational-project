import BookingForm from "../components/BookingForm";
import BookingDescription from "../components/BookingDescription";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@chakra-ui/react";

function MainPage() {
  return (
    <Box m={"0 5px"}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <BookingForm />
        </LocalizationProvider>
        <BookingDescription />
    </Box>
  );
}

export default MainPage;

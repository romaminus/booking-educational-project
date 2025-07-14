import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Typography,
  Stack,
  InputLabel,
  FormControl,
  Select,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";
import useBookingStore from "../store/useBookingStore";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  const [destinations, setDestinations] = useState([]);
  const [errorText, setErrorText] = useState('');
  const { searchParams, setSearchParams, setHotelsList } = useBookingStore();
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${API_BASE_URL}/destination`)
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleChange = (field, value) => {
    setSearchParams({ [field]: value });
    setErrorText('')
  };

  const handleSearch = () => {
    if (searchParams.destination) {
      fetch(`${API_BASE_URL}/${searchParams.destination}`)
        .then((res) => res.json())
        .then((data) => {
          setHotelsList(data);
          navigate("/hotels");
        })
        .catch((err) => console.error("Fetch error:", err));
    } else {
      setErrorText('Enter a value in the destination field.');
      return;
    }
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", md: "fit-content" },
        margin: "10px auto 0",
        overflow: "visible",
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h5" color="darkblue" gutterBottom>
        Reserve
      </Typography>

      <Stack
        spacing={{ xs: 3, md: 2 }}
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "stretch", md: "flex-end" }}
      >
        <FormControl fullWidth sx={{ minWidth: { xs: "100%", md: 200 } }}>
          <InputLabel id="destination-label">Direction</InputLabel>
          <Select
            labelId="destination-label"
            value={searchParams.destination || ''}
            label="Напрямок"
            onChange={(e) => handleChange("destination", e.target.value)}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 300,
                  width: "250px",
                },
              },
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
              slotProps: {
                popper: {},
              },
            }}
          >
            {destinations.map((dest) => (
              <MenuItem key={dest.id} value={dest.id}>
                {dest.label}
              </MenuItem>
            ))}
          </Select>
          
        </FormControl>
        <DatePicker
          label="Chek-In"
          value={searchParams.checkIn || null}
          onChange={(date) => handleChange("checkIn", date)}
          format="YYYY-MM-DD"
          sx={{ width: { xs: "100%", md: "auto" } }}
        />
        <DatePicker
          label="Chek-Out"
          value={searchParams.checkOut || null}
          onChange={(date) => handleChange("checkOut", date)}
          format="YYYY-MM-DD"
          sx={{ width: { xs: "100%", md: "auto" } }}
        />
        <TextField
          label="Adults"
          type="number"
          inputProps={{ min: 1 }}
          value={searchParams.adults}
          onChange={(e) => handleChange("adults", parseInt(e.target.value))}
          sx={{ width: { xs: "100%", md: 120 } }}
        />
        <TextField
          label="Children"
          type="number"
          inputProps={{ min: 0 }}
          value={searchParams.children}
          onChange={(e) => handleChange("children", parseInt(e.target.value))}
          sx={{ width: { xs: "100%", md: 120 } }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            height: 56,
            width: { xs: "100%", md: "auto" },
            background: "darkblue",
          }}
        >
          Search
        </Button>
      </Stack>
      {errorText && (
            <Typography sx={{ ml: 2, mt: 1 }} variant="caption" color="error">
              {errorText}
            </Typography>
          )}
    </Box>
  );
}

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const useBookingStore = create(
  devtools(
    immer((set) => ({
      searchParams: {
        destination: '',
        checkIn: null,
        checkOut: null,
        adults: 1,
        children: 0,
      },
      setSearchParams: (params) =>
        set((state) => {
          state.searchParams = { ...state.searchParams, ...params };
        }),
      resetSearchParams: () =>
        set((state) => {
          state.searchParams = {
            destination: '',
            checkIn: null,
            checkOut: null,
            adults: 1,
            children: 0,
          };
        }),
      hotels: [],
      setHotelsList: (list) => 
        set((state) => {
          state.hotels = list
        }),
    }))
  )
);

export default useBookingStore;
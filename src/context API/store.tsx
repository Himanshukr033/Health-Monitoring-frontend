import {configureStore} from '@reduxjs/toolkit';
import locationSlice from './NavigationContext';

const store = configureStore({
  reducer: {
    location: locationSlice,
  },
});

export default store;

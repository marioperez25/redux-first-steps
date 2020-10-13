import { configureStore } from '@reduxjs/toolkit';
import componentTestSlice from '../features/firstSlice/componentTestSlice';

export default configureStore({
  reducer: {
    name: componentTestSlice,
  },
});

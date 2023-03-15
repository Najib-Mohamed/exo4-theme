import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/themes/themeSlice.js';

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
})
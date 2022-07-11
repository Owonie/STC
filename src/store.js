import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './reducers/userData';

export default configureStore({
  reducer: {
    userData: userDataReducer,
  },
});

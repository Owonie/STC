import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './reducers/userData';
import videoListReducer from './reducers/videoList';

export default configureStore({
  reducer: {
    userData: userDataReducer,
    videoList: videoListReducer,
  },
});

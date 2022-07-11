import { createSlice } from '@reduxjs/toolkit';

export const videoListSlice = createSlice({
  name: 'videoList',
  initialState: {
    myVideoList: [{}],
  },
  reducers: {
    addVideo: (state, action) => {
      state.myVideoList.push(action.payload);
    },
    deleteVideo: (state, action) => {
      state.myVideoList = state.filter(
        (video) => video.id !== action.payload.id
      );
    },
    resetVideoList: (state) => {
      state.myVideoList = [];
    },
  },
});

export const { addVideo, deletVideo, resetVideoList } = videoListSlice.actions;

export default videoListSlice.reducer;

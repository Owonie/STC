import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    userId: null,
    displayName: null,
    roomId: null,
    photoURL: null,
    currentTime: null,
    videoId: null,
    inRoom: false,
  },
  reducers: {
    updateUserId: (state, action) => {
      state.userId = action.payload;
    },
    updateDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
    updateRoomId: (state, action) => {
      state.roomId = action.payload;
    },
    updatePhotoURL: (state, action) => {
      state.photoURL = action.payload;
    },
    updateCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    updateVideoId: (state, action) => {
      state.videoId = action.payload;
    },
    updateInRoom: (state, action) => {
      state.inRoom = action.payload;
    },
  },
});

export const {
  updateUserId,
  updateDisplayName,
  updateRoomId,
  updatePhotoURL,
  updateCurrentTime,
  updateVideoId,
  updateInRoom,
} = userDataSlice.actions;

export default userDataSlice.reducer;

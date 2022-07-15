import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    userId: null,
    displayName: null,
    roomId: null,
    masterId: null,
    photoURL: null,
    videoState: 0,
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
    updateMasterId: (state, action) => {
      state.masterId = action.payload;
    },
    updatePhotoURL: (state, action) => {
      state.photoURL = action.payload;
    },
    updateVideoState: (state, action) => {
      state.videoState = action.payload;
    },
  },
});

export const {
  updateUserId,
  updateDisplayName,
  updateRoomId,
  updateMasterId,
  updatePhotoURL,
  updateVideoState,
} = userDataSlice.actions;

export default userDataSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    userId: null,
    displayName: null,
    roomId: null,
    photoURL: null,
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
  },
});

export const { updateUserId, updateDisplayName, updateRoomId, updatePhotoURL } =
  userDataSlice.actions;

export default userDataSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type userDataType = {
  userId: string;
  displayName: string;
  roomId: string;
  photoURL: string;
  currentTime: number;
  inRoom: boolean;
  playedVideo: string;
  location: string;
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    userId: null,
    displayName: null,
    roomId: null,
    photoURL: null,
    currentTime: null,
    inRoom: false,
    playedVideo: null,
    location: null,
  },
  reducers: {
    updateUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    updateDisplayName: (state, action: PayloadAction<string>) => {
      state.displayName = action.payload;
    },
    updateRoomId: (state, action: PayloadAction<string>) => {
      state.roomId = action.payload;
    },
    updatePhotoURL: (state, action: PayloadAction<string>) => {
      state.photoURL = action.payload;
    },
    updateCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    updateInRoom: (state, action) => {
      state.inRoom = action.payload;
    },
    updatePlayedVideo: (state, action: PayloadAction<string>) => {
      state.playedVideo = action.payload;
    },
    updateLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
  },
});

export const {
  updateUserId,
  updateDisplayName,
  updateRoomId,
  updatePhotoURL,
  updateCurrentTime,
  updateInRoom,
  updatePlayedVideo,
  updateLocation,
} = userDataSlice.actions;

export default userDataSlice.reducer;

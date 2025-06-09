import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile, WorkStatus } from '../types';
import { mockUser2 } from '../models/mockData';

export interface UserState {
  profile: UserProfile;
  statusUpdateNotification: boolean;
}

const initialState: UserState = {
  profile: mockUser2,
  statusUpdateNotification: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateWorkStatus: (state, action: PayloadAction<WorkStatus>) => {
      state.profile.workStatus = action.payload;
      state.statusUpdateNotification = true;
    },
    clearStatusNotification: (state) => {
      state.statusUpdateNotification = false;
    },
  },
  selectors: {
    selectProfile: (state: UserState) => state.profile,
    selectWorkStatus: (state: UserState) => state.profile.workStatus,
    selectStatusNotification: (state: UserState) =>
      state.statusUpdateNotification,
  },
});

export const { updateWorkStatus, clearStatusNotification } = userSlice.actions;

export const { selectProfile, selectWorkStatus, selectStatusNotification } =
  userSlice.selectors;

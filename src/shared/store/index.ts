import {
  combineSlices,
  configureStore,
  createDynamicMiddleware,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { userSlice } from './userSlice';

// Create dynamic middleware for future extensions
export const dynamicMiddleware = createDynamicMiddleware();

export const rootReducer =
  combineSlices(userSlice).withLazyLoadedSlices<LazyLoadedSlices>();

export const sharedStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dynamicMiddleware.middleware),
});

export interface LazyLoadedSlices {
  [key: string]: unknown;
}

export type RootState = ReturnType<typeof sharedStore.getState>;
export type AppDispatch = typeof sharedStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

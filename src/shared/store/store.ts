import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/store/baseApi'
import { appSlice } from '@/shared/store/appSlice'

export const makeStore = () => configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [appSlice.name]: appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
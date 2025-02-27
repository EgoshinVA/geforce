import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/app/store/baseApi'
import appSlice from '@/app/appSlice'

export const makeStore = () => configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    appSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
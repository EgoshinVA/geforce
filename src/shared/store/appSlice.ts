import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  error: null as null | string,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: create => ({
    setIsAuth: create.reducer<boolean>((state, action) => {
      state.isAuth = action.payload
    }),
    setError: create.reducer<null | string>((state, action) => {
      state.error = action.payload
    })
  }),
  selectors: {
    selectIsAuth: state => state.isAuth,
    selectAppError: state => state.error
  },
})

export const { setIsAuth, setError } = appSlice.actions
export const { selectIsAuth, selectAppError } = appSlice.selectors

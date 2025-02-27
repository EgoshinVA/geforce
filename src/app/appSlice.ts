import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: create => ({
    setIsAuth: create.reducer<boolean>((state, action) => {
      state.isAuth = action.payload
    }),
  }),
  selectors: {
    selectIsAuth: state => state.isAuth,
  },
})

export const { setIsAuth } = appSlice.actions
export const { selectIsAuth } = appSlice.selectors
export default appSlice.reducer

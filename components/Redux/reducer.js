import { createSlice } from '@reduxjs/toolkit'

export const mySlice = createSlice({
  name: 'redux/reducer',
  initialState: [],
  reducers: {
    getState: (state, { payload }) => {
      state.push(payload)
    },
    removeItem: (state, { payload }) => {
      state = state.filter((el) => el.id !== payload.id)
    },
  },
})

export const allActions = mySlice.actions
export default mySlice.reducer

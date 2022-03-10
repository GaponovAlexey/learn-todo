import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_URL, CountryService } from '../../api/service/Country'

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (_, { dispatch }) => {
    const res = await CountryService.getAll()
    return res
  }
)

export const mySlice = createSlice({
  name: 'redux/reducer',
  initialState: [],
  reducers: {
    removeElement: (state, { payload }) => {
      return state = state.filter((el) => el.id !== payload)
    },
  },
  extraReducers: (build) => {
    build.addCase(fetchUserById.fulfilled, (state, { payload }) => {
      state.push(...payload)
    })
  },
})

export const { removeElement } = mySlice.actions
export default mySlice.reducer

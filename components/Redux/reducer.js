import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_URL, CountryService } from '../../api/service/Country'

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (_, { dispatch }) => {
    const res = await CountryService.getAll()
    return dispatch(getState(res))
  }
)

export const mySlice = createSlice({
  name: 'redux/reducer',
  initialState: [],
  reducers: {
    getState: (state, { payload }) => {
      state.push(payload)
    },
    RemoveItem: (state, { payload }) => {
      state[0] = state[0].filter((el) => el.id !== payload)
    },
  },
  extraReducers: (build) => {
    build.addCase(fetchUserById.fulfilled, (state, { payload }) => {
      state.push(payload)
    })
  },
})

export const allActions = mySlice.actions
export default mySlice.reducer

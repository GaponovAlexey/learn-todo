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
    updateValue(state, action) {
      const { id, title } = action.payload
      console.log('stateTitle-', title)
      console.log('stateid-', id)
      state[id - 1] = { ...state[id - 1], title }
    },
    isCompleted: (state, { payload }) => {
      const index = payload
      return state.map((todo, i) => {
        if (i !== index) return todo
        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    },
    addData: (state, { payload }) => {
      state.unshift(payload)
    },
    removeElement: (state, { payload }) => {
      return state.filter((el) => el.id !== payload)
    },
  },
  extraReducers: (build) => {
    build.addCase(fetchUserById.fulfilled, (state, { payload }) => {
      state.push(...payload)
    })
  },
})

export const { removeElement, isCompleted } = mySlice.actions
export const allActions = mySlice.actions
export default mySlice.reducer

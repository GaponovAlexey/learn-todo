import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { allActions, fetchUserById } from '../Redux/reducer'
const allAction = {
  ...allActions,
  fetchUserById
}

export const useAllActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(allAction, dispatch)
}

import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { allActions } from '../Redux/reducer'

const allAction = {
  ...allActions,
}

export const useAllActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(allActions, dispatch)
}

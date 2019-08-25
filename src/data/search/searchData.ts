import { SET_SEARCH } from './searchActions'
import { Action } from '../../types/Action'

const defaultState = {
  search: '',
}

const SearchData = (state = defaultState, action: Action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      }
    default:
      return state
  }
}

export default SearchData
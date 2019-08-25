export const SET_SEARCH = 'SET_SEARCH'

export function setSearch (search?: string) {
  return {
    type: SET_SEARCH,
    payload: search,
  }
}
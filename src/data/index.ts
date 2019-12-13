// Libaries
import { combineReducers } from 'redux'

// Utils
import AlbumsData from './albums/albumsData'
import ArtistsData from './artists/artistsData'
import RoomCodeData from './roomCode/roomCodeData'
import SearchData from './search/searchData'
import TracksData from './tracks/tracksData'

export default combineReducers({
  AlbumsData,
  ArtistsData,
  RoomCodeData,
  SearchData,
  TracksData,
})

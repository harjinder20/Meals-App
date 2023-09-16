import { createSlice } from '@reduxjs/toolkit'
const favoriteSlice = createSlice({
  name: 'favorite',
  initialState:{
    ids:['m1']
  },
  reducers: {
    addFavorite:(state,action)=>{
        state.ids=[action.payload.id,...state.ids];
    },
    removeFavorite:(state,action)=>{
        state.ids.splice(state.ids.indexOf(action.payload.id),1);
    }
  },
})

export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;
export default favoriteSlice.reducer;
const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  isOpen: false,
}

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

const { reducer, actions } = menuSlice

export const { toggleMenu } = actions
export default reducer

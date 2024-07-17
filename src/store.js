const { configureStore } = require("@reduxjs/toolkit")
import menuReducer from "./redux/menu-slice"

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
})

export default store

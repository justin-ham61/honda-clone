import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
  }
})

store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
})

export default store
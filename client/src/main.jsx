import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import authReducer from "./state"
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE, 
  PERSIST,
  PURGE,
  REGISTER 
} from "redux-persist"
import Storage from "redux-persist/lib/storage"
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = { key: "root", storage, version: 1}
const persistedReducer = persistReducer(persistConfig, authReducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>{
    getDefaultMiddleware({
      serializableCheck: ({
        ignoreActions: {FLUSH, REHYDRATE, REGISTER, PERSIST, PURGE, PAUSE}
      })
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
    <App />
    </PersistGate>
  </React.StrictMode>,
)

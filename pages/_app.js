import '../styles/globals.css'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../components/Redux/index'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

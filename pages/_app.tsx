import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store'
import { Provider } from 'react-redux'
import Router from 'next/router'
import {useState} from "react"
import {Loader} from "../components/Loader"

function MyApp({ Component, pageProps }: AppProps) {
  const [loading,setLoading] = useState(false)
  Router.events.on('routeChangeStart',(url)=>{
    console.log("Route is loading.")
    setLoading(true)
  })
  Router.events.on('routeChangeComplete',(url)=>{
    console.log("Route changing is complete.")
    setLoading(false)
  })

  
  return (<>
  {loading && (<Loader/>)}
  {!loading && (
     <Provider store={store }><Component {...pageProps} /></Provider>
  )}
 
  </>)
}

export default MyApp

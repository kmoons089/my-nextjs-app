import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { resolve } from 'path'
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement, selectedValue} from "../slices/counterSlide"
import type { RootState } from '../store'
import Link from 'next/link'

const Home: NextPage = () => {
  const count = useSelector(selectedValue)
  const dispatch = useDispatch();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
       <h1>The value of count is {count}</h1>


       <button onClick={()=>dispatch(increment())} className='w-full h10 bg-green-400/50' >Increment</button>
       <button onClick={()=>dispatch(decrement())} className='w-full h10 bg-red-400/50' >Decrement</button>

       <Link href="/about">about</Link>
      </main>

     
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  await new Promise((resolve)=>{
    setTimeout(resolve,1000);
  })

  return {
    props:{

    }
  }
}
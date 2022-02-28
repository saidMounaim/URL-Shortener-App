import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-400">
      <Head>
        <title>Url Shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-2xl bg-white rounded-md w-full p-6 ">

        <h1 className='font-semibold text-2xl'>URL Shortener</h1>

        <form className='mt-4'>
          <input 
            type="url" 
            className='bg-gray-100 w-full h-10 px-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-sm text-1xl text-neutral-500' 
            placeholder='Enter Your URL'
          />
          <button className="p-3 bg-red-400 hover:bg-red-500 rounded-lg transition-all duration-100 text-sm text-white mt-4">
            Shorten me
          </button>
        </form>

      </div>

    </div>
  )
}

export default Home

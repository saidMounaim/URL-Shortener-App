import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const Home: NextPage = () => {

  const [url, setUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const config: AxiosRequestConfig = {
      method: "POST",
      url: "/api/add",
      headers: {
        "Content-Type": "application/json"
      },
      data: {url}
    }

    const res = await axios(config);

  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-400">
      <Head>
        <title>Url Shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-2xl bg-white rounded-md w-full p-6 ">

        <h1 className='font-semibold text-2xl'>URL Shortener</h1>

        <form onSubmit={handleSubmit} className='mt-4'>
          <input 
            type="url" 
            className='bg-gray-100 w-full h-10 px-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-sm text-1xl text-neutral-500' 
            placeholder='Enter Your URL'
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type='submit' className="p-3 bg-red-400 hover:bg-red-500 rounded-lg transition-all duration-100 text-sm text-white mt-4">
            Shorten me
          </button>
        </form>

      </div>

    </div>
  )
}

export default Home

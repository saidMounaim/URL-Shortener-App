import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-400">
      <Head>
        <title>Url Shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-2xl bg-white rounded-md">

        <h1>URL Shortener</h1>

      </div>

    </div>
  )
}

export default Home

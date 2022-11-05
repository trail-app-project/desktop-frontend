import Head from 'next/head'
import Image from 'next/image'

import Dashboard from './Dashboard/'
import Footer from './Footer/'
import Home from './Home/'
import Login from './Login/'
import Recovery from './Recovery/'
import Register from './Register/'

export default function Main() {
  return (
    <div >
      <Head>
        <title>Trail</title>
        <meta name="Trail App" content="Trail App website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
          <Home />
        </main>
    </div>
  )
}

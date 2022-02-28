import Head from 'next/head'
import Main from './main'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Longs Peak Grocery Market</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Main/>
      </div>
    </div>
  )
}

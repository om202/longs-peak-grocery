import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Main from './main'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* main body */}
      <div>
        <Main/>
      </div>

      <footer>
      <h3>This is Footer</h3>
      </footer>
    </div>
  )
}

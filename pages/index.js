import Head from 'next/head'
import NavigationBar from "../components/NavigationBar"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavigationBar/>
      </main>

      <footer>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="PRLX ETF - Dashboard" />
        <p className="description">
          Parallax Decentralized Finance
        </p>
        </main>

      <Footer />
    </div>
  )
}

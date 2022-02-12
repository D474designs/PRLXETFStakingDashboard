import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <script type="stylesheet" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"></script>
        <script type="stylesheet" src="https://unicons.iconscout.com/release/v3.0.6/css/line.css"></script>
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

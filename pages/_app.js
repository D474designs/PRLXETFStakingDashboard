import '@styles/globals.css'
import '@styles/style.css';
import Script from 'next/script'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default function Home() {

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.bundle.js"
      />
    </>
  )
}

export default Application

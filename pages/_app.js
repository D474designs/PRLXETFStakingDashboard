import '@styles/globals.css'
import '@styles/style.css';
import Script from 'next/script'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

<Script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.bundle.js" strategy="lazyOnload" />
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
<Script src="./script.js" strategy="lazyOnload" />

export default Application

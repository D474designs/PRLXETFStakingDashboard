import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script'
/*****************************************/
/* Detect the MetaMask Ethereum provider */
/*****************************************/

import detectEthereumProvider from '@metamask/detect-provider';

// this returns the provider, or null if it wasn't detected
const provider = await detectEthereumProvider();

if (provider) {
  startApp(provider); // Initialize your app
} else {
  console.log('Please install MetaMask!');
}

function startApp(provider) {
  // If the provider returned by detectEthereumProvider is not the same as
  // window.ethereum, something is overwriting it, perhaps another wallet.
  if (provider !== window.ethereum) {
    console.error('Do you have multiple wallets installed?');
  }
  // Access the decentralized web!
}

/**********************************************************/
/* Handle chain (network) and chainChanged (per EIP-1193) */
/**********************************************************/

const chainId = await ethereum.request({ method: 'eth_chainId' });
handleChainChanged(chainId);

ethereum.on('chainChanged', handleChainChanged);

function handleChainChanged(_chainId) {
  // We recommend reloading the page, unless you must do otherwise
  window.location.reload();
}

/***********************************************************/
/* Handle user accounts and accountsChanged (per EIP-1193) */
/***********************************************************/

let currentAccount = null;
ethereum
  .request({ method: 'eth_accounts' })
  .then(handleAccountsChanged)
  .catch((err) => {
    // Some unexpected error.
    // For backwards compatibility reasons, if no accounts are available,
    // eth_accounts will return an empty array.
    console.error(err);
  });

// Note that this event is emitted on page load.
// If the array of accounts is non-empty, you're already
// connected.
ethereum.on('accountsChanged', handleAccountsChanged);

// For now, 'eth_accounts' will continue to always return an array
function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log('Please connect to MetaMask.');
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    // Do any other work!
  }
}

/*********************************************/
/* Access the user's accounts (per EIP-1102) */
/*********************************************/

// You should only attempt to request the user's accounts in response to user
// interaction, such as a button click.
// Otherwise, you popup-spam the user like it's 1999.
// If you fail to retrieve the user's account(s), you should encourage the user
// to initiate the attempt.
document.getElementById('connectButton', connect);

// While you are awaiting the call to eth_requestAccounts, you should disable
// any buttons the user can click to initiate the request.
// MetaMask will reject any additional requests while the first is still
// pending.
function connect() {
  ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    });
}

const transactionParameters = {
  nonce: '0x00', // ignored by MetaMask
  gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
  gas: '0x2710', // customizable by user during MetaMask confirmation.
  to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
  from: ethereum.selectedAddress, // must match user's active address.
  value: '0x00', // Only required to send ether to the recipient from the initiating external account.
  data:
    '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
  chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
};

// txHash is a hex string
// As with any RPC call, it may throw an error
const txHash = await ethereum.request({
  method: 'eth_sendTransaction',
  params: [transactionParameters],
});

export default function Home() {
  return (
    <div className="container">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.bundle.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/dashboardConcept/script.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/dashboardConcept/metaMask.js"
        strategy="beforeInteractive"
      />
      <Head>
        <meta charSet="UTF-8" />
        <title>PRLX ETF - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css" />
        <link rel="stylesheet" href="/dashboardConcept/style.css" />
      </Head>

      {/*
        <main>
          <Header title="UNDER CONSTRUCTION" />
          <p className="description">
            Parallax Decentralized Finance
          </p>
        </main>
      */}

      <div>
        {/* partial:index.partial.html */}
        <aside className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
          <i className="uil-bars close-aside d-md-none d-lg-none" data-close="show-side-navigation1" />
          <div className="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
            <img className="rounded-pill img-fluid" width={65} src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance" alt />
            <div className="ms-2">
              <h5 className="fs-6 mb-0">
                <a className="text-decoration-none" href="#">PRLX HODLer</a>
              </h5>
              <p className="mt-1 mb-0">Development of platforms and protocols</p>
            </div>
          </div>
          <center>
            {/*<a href="/dAppConcept/src/index.html">*/}<button id="connectButton" className="connectWallet" style={{"background-color":"#ffc107","color":"#fff","outline":"7px solid #313348","-webkit-text-shadow":"-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000","text-shadow":"-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000"}}>&nbsp;
              Connect wallet &nbsp;</button>{/*</a>*/}
          </center>
          <div className="search position-relative text-center px-4 py-3 mt-2">
            <input type="text" className="form-control w-100 border-0 bg-transparent" placeholder="Search here" />
            <i className="fa fa-search position-absolute d-block fs-6" />
          </div>
          <ul className="categories list-unstyled">
            <li className="has-dropdown">
              <i className="uil-estate fa-fw" /><a href="#"> Dashboard</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li className>
              <i className="uil-folder" /><a href="#"> File Manager</a>
            </li>
            <li className="has-dropdown">
              <i className="uil-calendar-alt" /><a href="#"> Calender</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <i className="uil-envelope-download fa-fw" /><a href="#"> Mailbox</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <i className="uil-shopping-cart-alt" /><a href="#"> eCommerce</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <i className="uil-bag" /><a href="#"> Projects</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li className>
              <i className="uil-setting" /><a href="#"> Settings</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <i className="uil-chart-pie-alt" /><a href="#"> Components</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <i className="uil-panel-add" /><a href="#"> Charts</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">ipsum dolor</a></li>
                <li><a href="#">dolor ipsum</a></li>
                <li><a href="#">amet consectetur</a></li>
                <li><a href="#">ipsum dolor sit</a></li>
              </ul>
            </li>
            <li className>
              <i className="uil-map-marker" /><a href="#"> Maps</a>
            </li>
          </ul>
        </aside>
        <section id="wrapper">
          <nav className="navbar navbar-expand-md">
            <div className="container-fluid mx-2">
              <div className="navbar-header">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggle-navbar" aria-controls="toggle-navbar" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="uil-bars text-white" />
                </button>
                <a className="navbar-brand" href="#">Parallax<span className="main-color">DeFi</span></a>
              </div>
              <div className="collapse navbar-collapse" id="toggle-navbar">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Settings
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a className="dropdown-item" href="#">My account</a>
                      </li>
                      <li><a className="dropdown-item" href="#">My inbox</a>
                      </li>
                      <li><a className="dropdown-item" href="#">Help</a>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Log out</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="uil-comments-alt" /><span>23</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="uil-bell" /><span>98</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i data-show="show-side-navigation1" className="uil-bars show-side-btn" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="p-4">
            <div className="welcome">
              <div className="content rounded-3 p-3">
                <h1 className="fs-3">Welcome to Parallax Finance</h1>
                <p className="mb-0">Hello John Mac! Welcome to your ETF Fund dashboard!</p>
              </div>
            </div>
            <section className="statistics mt-4">
              <div className="row">
                <div className="col-lg-4">
                  <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <i className="uil-envelope-shield fs-2 text-center bg-primary rounded-circle" />
                    <div className="ms-3">
                      <div className="d-flex align-items-center">
                        <h3 className="mb-0">1,245</h3> <span className="d-block ms-2">Emails</span>
                      </div>
                      <p className="fs-normal mb-0">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <i className="uil-file fs-2 text-center bg-danger rounded-circle" />
                    <div className="ms-3">
                      <div className="d-flex align-items-center">
                        <h3 className="mb-0">34</h3> <span className="d-block ms-2">Projects</span>
                      </div>
                      <p className="fs-normal mb-0">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box d-flex rounded-2 align-items-center p-3">
                    <i className="uil-users-alt fs-2 text-center bg-success rounded-circle" />
                    <div className="ms-3">
                      <div className="d-flex align-items-center">
                        <h3 className="mb-0">5,245</h3> <span className="d-block ms-2">Users</span>
                      </div>
                      <p className="fs-normal mb-0">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="charts mt-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="chart-container rounded-2 p-3">
                    <h3 className="fs-6 mb-3">Daily Volume</h3>
                    <canvas id="myChart" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="chart-container rounded-2 p-3">
                    <h3 className="fs-6 mb-3">Market Capitalization</h3>
                    <canvas id="myChart2" />
                  </div>
                </div>
              </div>
            </section>
            <section className="admins mt-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="box">
                    {/* <h4>Admins:</h4> */}
                    <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                      <div className="img">
                        <img className="img-fluid rounded-pill" width={75} height={75} src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148906966/small/1501685402/enhance" alt="admin" />
                      </div>
                      <div className="ms-3">
                        <h3 className="fs-5 mb-1">Hampus Obama</h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
                      </div>
                    </div>
                    <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                      <div className="img">
                        <img className="img-fluid rounded-pill" width={75} height={75} src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907137/small/1501685404/enhance" alt="admin" />
                      </div>
                      <div className="ms-3">
                        <h3 className="fs-5 mb-1">Ukko Heinonen</h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
                      </div>
                    </div>
                    <div className="admin d-flex align-items-center rounded-2 p-3">
                      <div className="img">
                        <img className="img-fluid rounded-pill" width={75} height={75} src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907019/small/1501685403/enhance" alt="admin" />
                      </div>
                      <div className="ms-3">
                        <h3 className="fs-5 mb-1">Warwick Bátori</h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box">
                    {/* <h4>Moderators:</h4> */}
                    <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                      <div className="img">
                        <img className="img-fluid rounded-pill" width={75} height={75} src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907114/small/1501685404/enhance" alt="admin" />
                      </div>
                      <div className="ms-3">
                        <h3 className="fs-5 mb-1">Bakir Assendorp</h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
                      </div>
                    </div>
                    <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                      <div className="img">
                        <img className="img-fluid rounded-pill" width={75} height={75} src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907086/small/1501685404/enhance" alt="admin" />
                      </div>
                      <div className="ms-3">
                        <h3 className="fs-5 mb-1">Ivaylo Panosyan</h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
                      </div>
                    </div>
                    <div className="admin d-flex align-items-center rounded-2 p-3">
                      <div className="img">
                        <img className="img-fluid rounded-pill" width={75} height={75} src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance" alt="admin" />
                      </div>
                      <div className="ms-3">
                        <h3 className="fs-5 mb-1">Joge Lucky</h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="statis mt-4 text-center">
              <div className="row">
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <div className="box bg-primary p-3">
                    <i className="uil-eye" />
                    <h3>5,154</h3>
                    <p className="lead">Views</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <div className="box bg-danger p-3">
                    <i className="uil-user" />
                    <h3>245</h3>
                    <p className="lead">KYC</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                  <div className="box bg-warning p-3">
                    <i className="uil-shopping-cart" />
                    <h3>5,154</h3>
                    <p className="lead">Sales</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="box bg-success p-3">
                    <i className="uil-feedback" />
                    <h3>5,154</h3>
                    <p className="lead">Transactions</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="charts mt-4">
              <div className="chart-container p-3">
                <h3 className="fs-6 mb-3">PRLX DeFi Price Chart</h3>
                <div style={{"height":"300px"}}>
                  <canvas id="chart3" width="100%" />
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* partial */}

      </div>

      {/*
        <Footer />
      */}
    </div>
  )
}

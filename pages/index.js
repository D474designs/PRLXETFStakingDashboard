import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.bundle.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://unpkg.com/@metamask/detect-provider/dist/detect-provider.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.5.4/ethers.umd.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://kit.fontawesome.com/04555906ba.js"
        strategy="beforeInteractive"
      />

      <Script
        src="/dashboardConcept/script.js"
        strategy="beforeInteractive"
        crossorigin="anonymous"
      />

      <Head>
        <meta charSet="UTF-8" />
        <title>PRLX ETF - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"
        />
      </Head>

      {/*
        <main>
          <Header title="UNDER CONSTRUCTION" />
          <p className="description">
            Parallax Decentralized Finance
          </p>
        </main>
      */}

      <div class="container" style={{ padding: "0px", margin: "0px" }}>
        {/* partial:index.partial.html */}
        <aside
          className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left"
          id="show-side-navigation1"
        >
          <i
            className="uil-bars close-aside d-md-none d-lg-none"
            data-close="show-side-navigation1"
          />
          <div className="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
            <img
              className="rounded-pill img-fluid"
              width={65}
              src="https://i.imgur.com/GNzT3is.png"
              /* src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance" */
              alt
            />
            <div className="ms-2">
              <h5 className="fs-6 mb-0">
                <a className="text-decoration-none" href="#">
                  PRLX HODLer
                </a>
              </h5>
              <p className="mt-1 mb-0">
                Development of platforms and protocols
              </p>
            </div>
          </div>

          <center>
            {/*<a href="/dAppConcept/src/index.html">*/}
            <button
              id="connectButton"
              class="connectWallet"
              style={{
                "background-color": "#ffc107",
                color: "#fff",
                outline: "7px solid #313348",
                "-webkit-text-shadow":
                  "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                "text-shadow":
                  "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
              }}
            >
              &nbsp; Connect wallet &nbsp;
            </button>
            {/*</a>*/}

            <div className="accountInfo">
              <div class="accounts">
                <span class="showAccount"></span>
                <br></br>
                <span class="showBalance"></span>
                <br></br>

                <form className="position-relative text-center px-4 py-3">
                  <input
                    type="text"
                    className="form-control w-100 border-0"
                    placeholder="Amount of Crypto"
                    id="crypto"
                    name="crypto"
                    value=""
                  />
                  <input
                    type="text"
                    className="form-control w-100 border-0"
                    placeholder="Recipient Address"
                    id="recipient"
                    name="recipient"
                    value=""
                  />
                  <input
                    type="button"
                    value=" Send Crypto "
                    class="sendCrypto"
                    id="sendCrypto"
                    style={{
                      "background-color": "#ffc107",
                      color: "#fff",
                      "-webkit-text-shadow":
                        "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                      "text-shadow":
                        "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                    }}
                  />
                  &nbsp;
                  <i class="qRCode fa fa-qrcode" aria-hidden="true" />
                </form>

                <form action="javascript:viewPoolInformation();" method="post" id="view" className="position-relative text-center px-4 py-3">

                  <div class="field">
                    <label for="pid2"></label>
                    <input type="text" id="pid2" name="pid2" className="form-control w-100 border-0" placeholder="Enter PID" />
                    <small></small>
                  </div>
                  <div class="field">
                    <button type="viewPoolInformation"
                    style={{
                      "background-color": "#ffc107",
                      color: "#fff",
                      "-webkit-text-shadow":
                        "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                      "text-shadow":
                        "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                    }}>&nbsp; Information &nbsp;</button>
                  </div>
                </form>
                <br></br>

                <span class="showPools"></span>
                <br></br>

                {/*
                <form className="position-relative text-center px-4 py-3">
                  <input
                    type="text"
                    className="form-control w-100 border-0"
                    placeholder="Pool ID"
                    id="poolIdNumber"
                    name="poolIdNumber"
                    value=""
                  />

                  <input
                    type="button"
                    value=" Information "
                    class="poolInformation"
                    id="poolInformation"
                    style={{
                      "background-color": "#ffc107",
                      color: "#fff",
                      "-webkit-text-shadow":
                        "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                      "text-shadow":
                        "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                    }}
                  />
                </form>
                */}

                <div class="admin">
                  <br></br>
                  <br></br>
                  <div class="accounts2">Admin Options</div>
                  <span class="showId"></span>
                  <br></br>
                  <span class="showNetwork"></span>
                  <br></br>
                  <span class="showGasPrice"></span>
                  <br></br>
                  <span class="showTransactionCount"></span>

                  {/* */}
              			<form action="javascript:createPool();" method="post" id="create" className="position-relative text-center px-4 py-3">

              				<div class="field">
              					<label for="apy"></label>
              					<input type="text" id="apy" name="apy" className="form-control w-100 border-0" placeholder="APY" />
              					<small></small>
                        <label for="apy"></label>
                        <input type="text" id="days" name="days" className="form-control w-100 border-0" placeholder="Length in Days" />
              					<small></small>
                        <label for="apy"></label>
                        <input type="text" id="endDate" name="endDate" className="form-control w-100 border-0" placeholder="End Date [UNIX]" />
              					<small></small>
                        <label for="apy"></label>
                        <input type="text" id="minContrib" name="minContrib" className="form-control w-100 border-0" placeholder="Minimum" />
              					<small></small>
              				</div>
              				<div class="field">
              					<button type="createPool"
                        style={{
                          "background-color": "#ffc107",
                          color: "#fff",
                          "-webkit-text-shadow":
                            "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                          "text-shadow":
                            "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                        }}>&nbsp; Create Pool &nbsp;</button>
              				</div>
              			</form>

                  {/*
                  <form className="position-relative text-center px-4 py-3">
                    <input
                      type="text"
                      className="form-control w-100 border-0"
                      placeholder="APY"
                      id="apy"
                      name="apy"
                      value=""
                    />
                    <input
                      type="text"
                      className="form-control w-100 border-0"
                      placeholder="Length in Days"
                      id="days"
                      name="days"
                      value=""
                    />
                    <input
                      type="text"
                      className="form-control w-100 border-0"
                      placeholder="End Date"
                      id="endDate"
                      name="endDate"
                      value=""
                    />
                    <input
                      type="text"
                      className="form-control w-100 border-0"
                      placeholder="Minimum Contribution"
                      id="min"
                      name="min"
                      value=""
                    />
                    <input
                      type="button"
                      value=" Create Pool "
                      class="sendCrypto2"
                      id="sendCrypto2"
                      style={{
                        "background-color": "#ffc107",
                        color: "#fff",
                        "-webkit-text-shadow":
                          "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                        "text-shadow":
                          "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                      }}
                    />
                  </form>
                  */}
                </div>

                <div class="admin2">
                  <br></br>

                  <form action="javascript:editPool();" method="post" id="edit" className="position-relative text-center px-4 py-3">

                    <div class="field">
                    <label for="apy"></label>
                    <input type="text" id="pid" name="pid2" className="form-control w-100 border-0" placeholder="Pool ID" />
                    <small></small>
                    <label for="apy"></label>
                    <input type="text" id="apy2" name="apy2" className="form-control w-100 border-0" placeholder="APY" />
                    <small></small>
                    <label for="apy"></label>
                    <input type="text" id="days2" name="days2" className="form-control w-100 border-0" placeholder="Length in Days" />
                    <small></small>
                    <label for="apy"></label>
                    <input type="text" id="endDate2" name="endDate2" className="form-control w-100 border-0" placeholder="End Date [UNIX]" />
                    <small></small>
                    <label for="apy"></label>
                    <input type="text" id="minContrib2" name="minContrib2" className="form-control w-100 border-0" placeholder="Minimum" />
                    <small></small>
                    </div>
                    <div class="field">
                      <button type="editPool"
                      style={{
                        "background-color": "#ffc107",
                        color: "#fff",
                        "-webkit-text-shadow":
                          "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                        "text-shadow":
                          "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                      }}>&nbsp; Edit Pool &nbsp;</button>
                    </div>
                  </form>

                  {/*
                  <form className="position-relative text-center px-4 py-3">
                    <input
                      type="text"
                      className="form-control w-100 border-0"
                      placeholder="Pool ID"
                      id="poolId"
                      name="poolId"
                      value=""
                    />
                    <input
                      type="text"
                      className="form-control w-100 border-0"
                      placeholder="APY"
                      id="apy2"
                      name="apy2"
                      value=""
                    />
                    <input
                      type="text"
                      className="form-control w-100 border-0"
                      placeholder="Length in Days"
                      id="days2"
                      name="days2"
                      value=""
                    />
                    <input
                      type="text"
                      className="form-control w-100 border-0"
                      placeholder="End Date"
                      id="endDate2"
                      name="endDate2"
                      value=""
                    />
                    <input
                      type="text"
                      className="form-control w-100 border-0"
                      placeholder="Minimum Contribution"
                      id="min2"
                      name="min2"
                      value=""
                    />
                    <input
                      type="button"
                      value=" Edit Pool "
                      class="sendCrypto3"
                      id="sendCrypto3"
                      style={{
                        "background-color": "#ffc107",
                        color: "#fff",
                        "-webkit-text-shadow":
                          "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                        "text-shadow":
                          "-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000",
                      }}
                    />
                  </form>
                  */}
                </div>
                <br></br>
                <br></br>

                <div class="pools">
                  <ul class="categories2 list-unstyled2">
                    <li className="has-dropdown2">
                      <i
                        className="uil-chart-pie fa-fw"
                        style={{ color: "#000" }}
                      />
                      <a href="#" style={{ color: "#000" }}>
                        {" "}
                        Pools
                      </a>
                      <ul className="sidebar-dropdown2 list-unstyled2">
                        <li>
                          <a href="#">Pool ID</a>
                        </li>
                        <li>
                          <a href="#">APY</a>
                        </li>
                        <li>
                          <a href="#">End Date</a>
                        </li>
                        <li>
                          <a href="#">Minimum</a>
                        </li>
                        <li>
                          <a href="#">PRLX Invested</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </center>

          <div className="search position-relative text-center w-100 px-4 py-3">
            <i className="fa fa-search" style={{ color: "#6b7280" }} />
            <input
              type="text"
              className="form-control border-0 bg-transparent"
              placeholder="Search Here"
            />
          </div>
          <ul className="categories list-unstyled">
            <li className="has-dropdown">
              <i className="uil-estate fa-fw" />
              <a href="#"> Dashboard</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">ipsum dolor</a>
                </li>
                <li>
                  <a href="#">dolor ipsum</a>
                </li>
                <li>
                  <a href="#">amet consectetur</a>
                </li>
                <li>
                  <a href="#">ipsum dolor sit</a>
                </li>
              </ul>
            </li>
            <li className>
              <i className="uil-folder" />
              <a href="#"> File Manager</a>
            </li>
            <li className="has-dropdown">
              <i className="uil-calendar-alt" />
              <a href="#"> Calender</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">ipsum dolor</a>
                </li>
                <li>
                  <a href="#">dolor ipsum</a>
                </li>
                <li>
                  <a href="#">amet consectetur</a>
                </li>
                <li>
                  <a href="#">ipsum dolor sit</a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <i className="uil-envelope-download fa-fw" />
              <a href="#"> Mailbox</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">ipsum dolor</a>
                </li>
                <li>
                  <a href="#">dolor ipsum</a>
                </li>
                <li>
                  <a href="#">amet consectetur</a>
                </li>
                <li>
                  <a href="#">ipsum dolor sit</a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <i className="uil-shopping-cart-alt" />
              <a href="#"> eCommerce</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">ipsum dolor</a>
                </li>
                <li>
                  <a href="#">dolor ipsum</a>
                </li>
                <li>
                  <a href="#">amet consectetur</a>
                </li>
                <li>
                  <a href="#">ipsum dolor sit</a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <i className="uil-bag" />
              <a href="#"> Projects</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">ipsum dolor</a>
                </li>
                <li>
                  <a href="#">dolor ipsum</a>
                </li>
                <li>
                  <a href="#">amet consectetur</a>
                </li>
                <li>
                  <a href="#">ipsum dolor sit</a>
                </li>
              </ul>
            </li>
            <li className>
              <i className="uil-setting" />
              <a href="#"> Settings</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">ipsum dolor</a>
                </li>
                <li>
                  <a href="#">dolor ipsum</a>
                </li>
                <li>
                  <a href="#">amet consectetur</a>
                </li>
                <li>
                  <a href="#">ipsum dolor sit</a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <i className="uil-chart-pie-alt" />
              <a href="#"> Components</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">ipsum dolor</a>
                </li>
                <li>
                  <a href="#">dolor ipsum</a>
                </li>
                <li>
                  <a href="#">amet consectetur</a>
                </li>
                <li>
                  <a href="#">ipsum dolor sit</a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <i className="uil-panel-add" />
              <a href="#"> Charts</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">ipsum dolor</a>
                </li>
                <li>
                  <a href="#">dolor ipsum</a>
                </li>
                <li>
                  <a href="#">amet consectetur</a>
                </li>
                <li>
                  <a href="#">ipsum dolor sit</a>
                </li>
              </ul>
            </li>
            <li className>
              <i className="uil-map-marker" />
              <a href="#"> Maps</a>
            </li>
          </ul>
        </aside>
        <section id="wrapper">
          <nav className="navbar navbar-expand-md">
            <div className="container-fluid mx-2">
              <div className="navbar-header">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#toggle-navbar"
                  aria-controls="toggle-navbar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="uil-bars text-white" />
                </button>
                <a className="navbar-brand" href="#">
                  Parallax<span className="main-color">DeFi</span>
                </a>
              </div>
              <div className="collapse navbar-collapse" id="toggle-navbar">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Settings
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          My account
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          My inbox
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Help
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Log out
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="uil-comments-alt" />
                      <span>23</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="uil-bell" />
                      <span>98</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i
                        data-show="show-side-navigation1"
                        className="uil-bars show-side-btn"
                      />
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
                <p className="mb-0">
                  Hello John Mac! Welcome to your dashboard!
                </p>
              </div>
            </div>
            <section className="statistics mt-4">
              <div className="row">
                <div className="col-lg-4">
                  <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <i className="uil-envelope-shield fs-2 text-center bg-primary rounded-circle" />
                    <div className="ms-3">
                      <div className="d-flex align-items-center">
                        <h3 className="mb-0">1,245</h3>{" "}
                        <span className="d-block ms-2">Emails</span>
                      </div>
                      <p className="fs-normal mb-0">
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                    <i className="uil-file fs-2 text-center bg-danger rounded-circle" />
                    <div className="ms-3">
                      <div className="d-flex align-items-center">
                        <h3 className="mb-0">34</h3>{" "}
                        <span className="d-block ms-2">Projects</span>
                      </div>
                      <p className="fs-normal mb-0">
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box d-flex rounded-2 align-items-center p-3">
                    <i className="uil-users-alt fs-2 text-center bg-success rounded-circle" />
                    <div className="ms-3">
                      <div className="d-flex align-items-center">
                        <h3 className="mb-0">5,245</h3>{" "}
                        <span className="d-block ms-2">Users</span>
                      </div>
                      <p className="fs-normal mb-0">
                        Lorem ipsum dolor sit amet
                      </p>
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
                        <img
                          className="img-fluid rounded-pill"
                          width={75}
                          height={75}
                          src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148906966/small/1501685402/enhance"
                          alt="admin"
                        />
                      </div>
                      <div className="ms-3">
                        <h3 className="fs-5 mb-1">Hampus Obama</h3>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur elit.
                        </p>
                      </div>
                    </div>
                    <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                      <div className="img">
                        <img
                          className="img-fluid rounded-pill"
                          width={75}
                          height={75}
                          src="https://i.imgur.com/GNzT3is.png"
                          /* src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907137/small/1501685404/enhance" */
                          alt="admin"
                        />
                      </div>
                      <div className="ms-3">
                        <h3 className="fs-5 mb-1">Ukko Heinonen</h3>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur elit.
                        </p>
                      </div>
                    </div>
                    <div className="admin d-flex align-items-center rounded-2 p-3">
                      <div className="img">
                        <img
                          className="img-fluid rounded-pill"
                          width={75}
                          height={75}
                          src="https://i.imgur.com/GNzT3is.png"
                          alt="admin"
                        />
                      </div>
                      <div className="ms-3">
                        <h3 className="fs-5 mb-1">Warwick Bátori</h3>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box">
                    {/* <h4>Moderators:</h4> */}
                    <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                      <div className="img">
                        <img
                          className="img-fluid rounded-pill"
                          width={75}
                          height={75}
                          src="https://i.imgur.com/GNzT3is.png"
                          alt="admin"
                        />
                      </div>
                      <div className="ms-3">
                        <h3 className="fs-5 mb-1">Bakir Assendorp</h3>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur elit.
                        </p>
                      </div>
                    </div>
                    <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                      <div className="img">
                        <img
                          className="img-fluid rounded-pill"
                          width={75}
                          height={75}
                          src="https://i.imgur.com/GNzT3is.png"
                          alt="admin"
                        />
                      </div>
                      <div className="ms-3">
                        <h3 className="fs-5 mb-1">Ivaylo Panosyan</h3>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur elit.
                        </p>
                      </div>
                    </div>
                    <div className="admin d-flex align-items-center rounded-2 p-3">
                      <div className="img">
                        <img
                          className="img-fluid rounded-pill"
                          width={75}
                          height={75}
                          src="https://i.imgur.com/GNzT3is.png"
                          alt="admin"
                        />
                      </div>
                      <div className="ms-3">
                        <h3 className="fs-5 mb-1">Joge Lucky</h3>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur elit.
                        </p>
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
                <div style={{ height: "300px" }}>
                  <canvas id="chart3" width="100%" />
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* partial */}
      </div>
      {/**/}
      <Footer />
    </div>
  );
}

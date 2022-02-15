import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script'

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
      <Script strategy="beforeInteractive">
        {
          // Other important pens.
          // Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
          // Navbar: https://codepen.io/themustafaomar/pen/VKbQyZ

          'use strict'

          function $(selector) {
            return document.querySelector(selector)
          }

          function find(el, selector) {
            let finded
            return (finded = el.querySelector(selector)) ? finded : null
          }

          function siblings(el) {
            const siblings = []
            for (let sibling of el.parentNode.children) {
              if (sibling !== el) {
                siblings.push(sibling)
              }
            }
            return siblings
          }

          const showAsideBtn = $('.show-side-btn')
          const sidebar = $('.sidebar')
          const wrapper = $('#wrapper')

          showAsideBtn.addEventListener('click', function () {
            $(`#${this.dataset.show}`).classList.toggle('show-sidebar')
            wrapper.classList.toggle('fullwidth')
          })

          if (window.innerWidth < 767) {
            sidebar.classList.add('show-sidebar');
          }

          window.addEventListener('resize', function () {
            if (window.innerWidth > 767) {
              sidebar.classList.remove('show-sidebar')
            }
          })

          // dropdown menu in the side nav
          var slideNavDropdown = $('.sidebar-dropdown');

          $('.sidebar .categories').addEventListener('click', function (event) {
            event.preventDefault()

            const item = event.target.closest('.has-dropdown')

            if (! item) {
              return
            }

            item.classList.toggle('opened')

            siblings(item).forEach(sibling => {
              sibling.classList.remove('opened')
            })

            if (item.classList.contains('opened')) {
              const toOpen = find(item, '.sidebar-dropdown')

              if (toOpen) {
                toOpen.classList.add('active')
              }

              siblings(item).forEach(sibling => {
                const toClose = find(sibling, '.sidebar-dropdown')

                if (toClose) {
                  toClose.classList.remove('active')
                }
              })
            } else {
              find(item, '.sidebar-dropdown').classList.toggle('active')
            }
          })

          $('.sidebar .close-aside').addEventListener('click', function () {
            $(`#${this.dataset.close}`).classList.add('show-sidebar')
            wrapper.classList.remove('margin')
          })


          // Global defaults
          Chart.defaults.global.animation.duration = 2000; // Animation duration
          Chart.defaults.global.title.display = false; // Remove title
          Chart.defaults.global.defaultFontColor = '#71748c'; // Font color
          Chart.defaults.global.defaultFontSize = 13; // Font size for every label

          // Tooltip global resets
          Chart.defaults.global.tooltips.backgroundColor = '#111827'
          Chart.defaults.global.tooltips.borderColor = 'blue'

          // Gridlines global resets
          Chart.defaults.scale.gridLines.zeroLineColor = '#3b3d56'
          Chart.defaults.scale.gridLines.color = '#3b3d56'
          Chart.defaults.scale.gridLines.drawBorder = false

          // Legend global resets
          Chart.defaults.global.legend.labels.padding = 0;
          Chart.defaults.global.legend.display = false;

          // Ticks global resets
          Chart.defaults.scale.ticks.fontSize = 12
          Chart.defaults.scale.ticks.fontColor = '#71748c'
          Chart.defaults.scale.ticks.beginAtZero = false
          Chart.defaults.scale.ticks.padding = 10

          // Elements globals
          Chart.defaults.global.elements.point.radius = 0

          // Responsivess
          Chart.defaults.global.responsive = true
          Chart.defaults.global.maintainAspectRatio = false

          // The bar chart
          var myChart = new Chart(document.getElementById('myChart'), {
            type: 'bar',
            data: {
              labels: ["January", "February", "March", "April", 'May', 'June', 'August', 'September'],
              datasets: [{
                label: "Lost",
                data: [45, 25, 40, 20, 60, 20, 35, 25],
                backgroundColor: "#0d6efd",
                borderColor: 'transparent',
                borderWidth: 2.5,
                barPercentage: 0.4,
              }, {
                label: "Succes",
                startAngle: 2,
                data: [20, 40, 20, 50, 25, 40, 25, 10],
                backgroundColor: "#dc3545",
                borderColor: 'transparent',
                borderWidth: 2.5,
                barPercentage: 0.4,
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  gridLines: {},
                  ticks: {
                    stepSize: 15,
                  },
                }],
                xAxes: [{
                  gridLines: {
                    display: false,
                  }
                }]
              }
            }
          })

          // The line chart
          var chart = new Chart(document.getElementById('myChart2'), {
            type: 'line',
            data: {
              labels: ["January", "February", "March", "April", 'May', 'June', 'August', 'September'],
              datasets: [{
                label: "My First dataset",
                data: [4, 20, 5, 20, 5, 25, 9, 18],
                backgroundColor: 'transparent',
                borderColor: '#0d6efd',
                lineTension: .4,
                borderWidth: 1.5,
              }, {
                label: "Month",
                data: [11, 25, 10, 25, 10, 30, 14, 23],
                backgroundColor: 'transparent',
                borderColor: '#dc3545',
                lineTension: .4,
                borderWidth: 1.5,
              }, {
                label: "Month",
                data: [16, 30, 16, 30, 16, 36, 21, 35],
                backgroundColor: 'transparent',
                borderColor: '#f0ad4e',
                lineTension: .4,
                borderWidth: 1.5,
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  gridLines: {
                    drawBorder: false
                  },
                  ticks: {
                    stepSize: 12,
                  }
                }],
                xAxes: [{
                  gridLines: {
                    display: false,
                  },
                }]
              }
            }
          })

          var chart = document.getElementById('chart3');
          var myChart = new Chart(chart, {
            type: 'line',
            data: {
              labels: ["One", "Two", "Three", "Four", "Five", 'Six', "Seven", "Eight"],
              datasets: [{
                label: "Lost",
                lineTension: 0.2,
                borderColor: '#d9534f',
                borderWidth: 1.5,
                showLine: true,
                data: [3, 30, 16, 30, 16, 36, 21, 40, 20, 30],
                backgroundColor: 'transparent'
              }, {
                label: "Lost",
                lineTension: 0.2,
                borderColor: '#5cb85c',
                borderWidth: 1.5,
                data: [6, 20, 5, 20, 5, 25, 9, 18, 20, 15],
                backgroundColor: 'transparent'
              },
                         {
                           label: "Lost",
                           lineTension: 0.2,
                           borderColor: '#f0ad4e',
                           borderWidth: 1.5,
                           data: [12, 20, 15, 20, 5, 35, 10, 15, 35, 25],
                           backgroundColor: 'transparent'
                         },
                         {
                           label: "Lost",
                           lineTension: 0.2,
                           borderColor: '#337ab7',
                           borderWidth: 1.5,
                           data: [16, 25, 10, 25, 10, 30, 14, 23, 14, 29],
                           backgroundColor: 'transparent'
                         }]
            },
            options: {
              scales: {
                yAxes: [{
                  gridLines: {
                    drawBorder: false
                  },
                  ticks: {
                    stepSize: 12
                  }
                }],
                xAxes: [{
                  gridLines: {
                    display: false,
                  },
                }],
              }
            }
          })

        }
      </Script>
      <Head>
        <meta charSet="UTF-8" />
        <title>PRLX ETF - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css" />
      </Head>

      <main>
        <Header title="UNDER CONSTRUCTION" />
        <p className="description">
          Parallax Decentralized Finance
        </p>
      </main>

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
              <p className="mt-1 mb-0">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <center>
            <button className="connectWallet" onclick="startApp" style={{"background-color":"#ffc107","color":"#fff","outline":"7px solid #313348","-webkit-text-shadow":"-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000","text-shadow":"-1px -1px 0 #000,    1px -1px 0 #000,    -1px 1px 0 #000,    1px 1px 0 #000"}}>&nbsp;
              Connect wallet &nbsp;</button>
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

      <Footer />
    </div>
  )
}

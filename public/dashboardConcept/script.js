// Other important pens.
// Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
// Navbar: https://codepen.io/themustafaomar/pen/VKbQyZ

"use strict";

// D474designs
// https://D474developments.github
// https://docs.metamask.io/guide/

// D474designs
// PRLX Staking Contract Functions

// const ethers = require('ethers');

// import detectEthereumProvider from '@metamask/detect-provider';
// const provider = detectEthereumProvider();

// The Contract interface
const abi = [
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_apy",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_lockPeriodInDays",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "_endDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minContrib",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_pid",
        type: "uint8",
      },
    ],
    name: "claim",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "setBNBwallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_apy",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_lockPeriodInDays",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "_endDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minContrib",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_pid",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_pid",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "unStake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_depositFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_withdrawFee",
        type: "uint256",
      },
    ],
    name: "updateFeeValues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_pid",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "_payout",
    outputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_pid",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "canClaim",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "uint16",
        name: "apy",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "lockPeriodInDays",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "totalDeposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minContrib",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "total_invested",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total_withdrawn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastPayout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalClaimed",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const ethereumButton = document.querySelector(".connectWallet");
const sendEthButton = document.querySelector(".sendCrypto");
const sendEthButton2 = document.querySelector(".sendCrypto2");
const sendEthButton3 = document.querySelector(".sendCrypto3");
const showAccount = document.querySelector(".showAccount");
const showId = document.querySelector(".showId");
const avatarId = document.querySelector(".accounts");
const dashboard = document.querySelector(".admin");
const dashboard2 = document.querySelector(".admin2");

let accounts = [];

// Connect to the network

// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum);

/*
async function getAccount() {
  let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  let account = accounts[0];
  let chainIds = await ethereum.request({ method: 'eth_chainId' });
  let chainId = chainIds;
  showAccount.innerHTML = account;
  showId.innerHTML = chainId;
  avatarId.style.display = 'unset';
  dashboard.style.display = 'unset';
  dashboard2.style.display = 'unset';
}
*/

async function getAccount() {
  // MetaMask requires requesting permission to connect users accounts
  provider.send("eth_requestAccounts", []);

	// The MetaMask plugin also allows signing transactions to
	// send ether and pay to change state within the blockchain.
	// For this, you need the account signer...
  const signer = provider.getSigner();

	// The address from the above deployment example
	let contractAddress = "0x15daf22b26cce33cc5f7e08a9b54d84ecd26c3a2";

	// We connect to the Contract using a Provider, so we will only
	// have read-only access to the Contract
	let contract = new ethers.Contract(contractAddress, abi, provider);

	// Get the current value
	let currentValue = contract.users.total_invested;

	console.log(currentValue);
	// "Hello World"

  let account = await signer.getAddress();

	let chainIds = await provider.getNetwork();
	let chainId = chainIds{name};

	showAccount.innerHTML = account;
	showId.innerHTML = chainId;
	avatarId.style.display = 'unset';
	dashboard.style.display = 'unset';
	dashboard2.style.display = 'unset';
}



ethereumButton.addEventListener("click", () => {
  getAccount();
});

/*
ethereum.on("accountsChanged", function (accounts) {
  // Time to reload your interface with accounts[0]!
});
*/

/*
async function getAccount() {
  let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  let account = accounts[0];
  let chainIds = await ethereum.request({ method: 'eth_chainId' });
  let chainId = chainIds;
  showAccount.innerHTML = account;
  showId.innerHTML = chainId;
  avatarId.style.display = 'unset';
  dashboard.style.display = 'unset';
  dashboard2.style.display = 'unset';
}
*/

/*
// This function detects most providers injected at window.ethereum
if (provider) {
  // From now on, this should always be true:
  // provider === window.ethereum
  startApp(provider); // initialize your app
} else {
  console.log('Please install MetaMask!');
}
*/

/*
ethereum.on('accountsChanged', (accounts) => {
  // Handle the new accounts, or lack thereof.
  // "accounts" will always be an array, but it can be empty.
  // We recommend reloading the page unless you have good reason not to.
  window.location.reload();
});

ethereum.on('chainChanged', (chainId) => {
  // Handle the new chain.
  // Correctly handling chain changes can be complicated.
  // We recommend reloading the page unless you have good reason not to.
  window.location.reload();
});
*/

// Get the contract instance using your contract's abi and address:
// const contractInstance = web3.eth.contract(contractABI).at(contractAddress);
/*
try {
  const contractInstance = ethereum.request({
    method: 'eth_requestAccounts',
    params: [
      {
        contractABI: contractABI,
        contractAdress: '0x15daf22b26cce33cc5f7e08a9b54d84ecd26c3a2',
        // And so on...
      },
    ],
  });

	// Call a function of the contract:
	contractInstance.add({ _apy: apy, _lockPeriodInDays: lockPeriod, _endDate: endDate, _minContrib: minContrib },
	  (err, res) => { 'ERROR: Please input all information correctly!' });

	contractInstance.stake({ _pid: pid, _sender: sender, _amount: amount },
	  (err, res) => { 'ERROR: Please input all information correctly!' });

  // Handle the result
  console.log(contractAddress);
} catch (error) {
  console.error(error);
}
*/

/*
async function connectToMetamask(){
   const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
   // Prompt user for account connections
   await provider.send("eth_requestAccounts", []);
   const signer = provider.getSigner();
   console.log("Account:", await signer.getAddress());
}
*/

//Sending Ethereum to an address
/*
sendEthButton.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: ethereum.selectedAddress,
          to: '0x85Afc81b91a1F75A654473431bd7e81E377ec03E',
          value: '0x29a2241af62c0000',
          gasPrice: '0x09184e72a000',
          gas: '0x2710',
          chainId: '0x3',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

sendEthButton2.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: ethereum.selectedAddress,
          to: '0x85Afc81b91a1F75A654473431bd7e81E377ec03E',
          value: '0x29a2241af62c0000',
          gasPrice: '0x09184e72a000',
          gas: '0x2710',
          chainId: '0x3',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

sendEthButton3.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: ethereum.selectedAddress,
          to: '0x85Afc81b91a1F75A654473431bd7e81E377ec03E',
          value: '0x29a2241af62c0000',
          gasPrice: '0x09184e72a000',
          gas: '0x2710',
          chainId: '0x3',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

ethereumButton.addEventListener('click', () => {
  getAccount();
});

ethereum.on('accountsChanged', function (accounts) {
  // Time to reload your interface with accounts[0]!
});

async function getAccount() {
  let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  let account = accounts[0];
  let chainIds = await ethereum.request({ method: 'eth_chainId' });
  let chainId = chainIds;
  showAccount.innerHTML = account;
  showId.innerHTML = chainId;
  avatarId.style.display = 'unset';
  dashboard.style.display = 'unset';
  dashboard2.style.display = 'unset';
}
*/

/*
ethereum
  .request({
    method: 'wallet_watchAsset',
    params: {
      type: 'BEP20',
      options: {
        address: '0x914F3e2CbE92b3F6e3f41b36c40d90C989e2712e',
        symbol: 'PRLX',
        decimals: 4,
        image: 'https://i.imgur.com/TWBpYZMt.png',
      },
    },
  })
  .then((success) => {
    if (success) {
      console.log('Parallax BSC BEP-20 [PRLX]');
    } else {
      throw new Error('An Error Has Occurred');
    }
  })
  .catch(console.error);
*/

console.log("D474designs x D474media | All Right Reserved 2022 Copyright");

function $(selector) {
  return document.querySelector(selector);
}

function find(el, selector) {
  let finded;
  return (finded = el.querySelector(selector)) ? finded : null;
}

function siblings(el) {
  const siblings = [];
  for (let sibling of el.parentNode.children) {
    if (sibling !== el) {
      siblings.push(sibling);
    }
  }
  return siblings;
}

const showAsideBtn = $(".show-side-btn");
const sidebar = $(".sidebar");
const wrapper = $("#wrapper");

showAsideBtn.addEventListener("click", function () {
  $(`#${this.dataset.show}`).classList.toggle("show-sidebar");
  wrapper.classList.toggle("fullwidth");
});

if (window.innerWidth < 767) {
  sidebar.classList.add("show-sidebar");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 767) {
    sidebar.classList.remove("show-sidebar");
  }
});

// dropdown menu in the side nav
var slideNavDropdown = $(".sidebar-dropdown");

$(".sidebar .categories").addEventListener("click", function (event) {
  event.preventDefault();

  const item = event.target.closest(".has-dropdown");

  if (!item) {
    return;
  }

  item.classList.toggle("opened");

  siblings(item).forEach((sibling) => {
    sibling.classList.remove("opened");
  });

  if (item.classList.contains("opened")) {
    const toOpen = find(item, ".sidebar-dropdown");

    if (toOpen) {
      toOpen.classList.add("active");
    }

    siblings(item).forEach((sibling) => {
      const toClose = find(sibling, ".sidebar-dropdown");

      if (toClose) {
        toClose.classList.remove("active");
      }
    });
  } else {
    find(item, ".sidebar-dropdown").classList.toggle("active");
  }
});

$(".sidebar .close-aside").addEventListener("click", function () {
  $(`#${this.dataset.close}`).classList.add("show-sidebar");
  wrapper.classList.remove("margin");
});

// Global defaults
Chart.defaults.global.animation.duration = 2000; // Animation duration
Chart.defaults.global.title.display = false; // Remove title
Chart.defaults.global.defaultFontColor = "#71748c"; // Font color
Chart.defaults.global.defaultFontSize = 13; // Font size for every label

// Tooltip global resets
Chart.defaults.global.tooltips.backgroundColor = "#111827";
Chart.defaults.global.tooltips.borderColor = "blue";

// Gridlines global resets
Chart.defaults.scale.gridLines.zeroLineColor = "#3b3d56";
Chart.defaults.scale.gridLines.color = "#3b3d56";
Chart.defaults.scale.gridLines.drawBorder = false;

// Legend global resets
Chart.defaults.global.legend.labels.padding = 0;
Chart.defaults.global.legend.display = false;

// Ticks global resets
Chart.defaults.scale.ticks.fontSize = 12;
Chart.defaults.scale.ticks.fontColor = "#71748c";
Chart.defaults.scale.ticks.beginAtZero = false;
Chart.defaults.scale.ticks.padding = 10;

// Elements globals
Chart.defaults.global.elements.point.radius = 0;

// Responsivess
Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;

// The bar chart
var myChart = new Chart(document.getElementById("myChart"), {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "August",
      "September",
    ],
    datasets: [
      {
        label: "Lost",
        data: [45, 25, 40, 20, 60, 20, 35, 25],
        backgroundColor: "#0d6efd",
        borderColor: "transparent",
        borderWidth: 2.5,
        barPercentage: 0.4,
      },
      {
        label: "Succes",
        startAngle: 2,
        data: [20, 40, 20, 50, 25, 40, 25, 10],
        backgroundColor: "#dc3545",
        borderColor: "transparent",
        borderWidth: 2.5,
        barPercentage: 0.4,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {},
          ticks: {
            stepSize: 15,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
});

// The line chart
var chart = new Chart(document.getElementById("myChart2"), {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "August",
      "September",
    ],
    datasets: [
      {
        label: "My First dataset",
        data: [4, 20, 5, 20, 5, 25, 9, 18],
        backgroundColor: "transparent",
        borderColor: "#0d6efd",
        lineTension: 0.4,
        borderWidth: 1.5,
      },
      {
        label: "Month",
        data: [11, 25, 10, 25, 10, 30, 14, 23],
        backgroundColor: "transparent",
        borderColor: "#dc3545",
        lineTension: 0.4,
        borderWidth: 1.5,
      },
      {
        label: "Month",
        data: [16, 30, 16, 30, 16, 36, 21, 35],
        backgroundColor: "transparent",
        borderColor: "#f0ad4e",
        lineTension: 0.4,
        borderWidth: 1.5,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
          },
          ticks: {
            stepSize: 12,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
});

var chart = document.getElementById("chart3");
var myChart = new Chart(chart, {
  type: "line",
  data: {
    labels: ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"],
    datasets: [
      {
        label: "Lost",
        lineTension: 0.2,
        borderColor: "#d9534f",
        borderWidth: 1.5,
        showLine: true,
        data: [3, 30, 16, 30, 16, 36, 21, 40, 20, 30],
        backgroundColor: "transparent",
      },
      {
        label: "Lost",
        lineTension: 0.2,
        borderColor: "#5cb85c",
        borderWidth: 1.5,
        data: [6, 20, 5, 20, 5, 25, 9, 18, 20, 15],
        backgroundColor: "transparent",
      },
      {
        label: "Lost",
        lineTension: 0.2,
        borderColor: "#f0ad4e",
        borderWidth: 1.5,
        data: [12, 20, 15, 20, 5, 35, 10, 15, 35, 25],
        backgroundColor: "transparent",
      },
      {
        label: "Lost",
        lineTension: 0.2,
        borderColor: "#337ab7",
        borderWidth: 1.5,
        data: [16, 25, 10, 25, 10, 30, 14, 23, 14, 29],
        backgroundColor: "transparent",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
          },
          ticks: {
            stepSize: 12,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
});

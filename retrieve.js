let rates = {
  1: {
    name: "LIBOR",
    term: 1,
    rate: 0.004969,
  },
  2: {
    name: "LIBOR",
    term: 2,
    rate: 0.006105,
    isDeveloper: false,
  },
  3: {
    name: "LIBOR",
    term: 3,
    rate: 0.007776,
  },
  4: {
    name: "LIBOR",
    term: 6,
    rate: 0.011442,
  },
  5: {
    name: "LIBOR",
    term: 12,
    rate: 0.014546,
  },
};

const myHeaders = new Headers();

const myRequest = new Request(rates, {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

const getRates = () => Object.values(rates);
const result = getRates();

fetch(myRequest).then(response => response.blob()
                .then(myBlob => {
                    console.log(myBlob);
                }));

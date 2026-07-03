const getData = new Promise((resolve, reject) => {
    // resolve(566665);
    reject('No data available');
});

getData
    .then(data => console.log(data +100))
    .catch(err => console.error('ERR:',err))

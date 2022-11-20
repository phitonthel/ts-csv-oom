const checkMemory = () => console.log((process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB')

const calculateTotalWh = (whs) => {
  return whs.reduce((partialSum, a) => partialSum + a, 0);
}

module.exports = {
  checkMemory,
  calculateTotalWh
}
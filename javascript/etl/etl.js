class ETL {
  transform (oldVal) {
    let newVal = {}
    for (var key in oldVal) {
      oldVal[key].forEach((el) => {
        newVal[el.toLowerCase()] = parseInt(key)
      })
    }
    return newVal
  }
}

module.exports = ETL;

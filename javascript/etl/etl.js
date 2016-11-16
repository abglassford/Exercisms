class ETL {
  transform (oldVal) {
    let newVal = {}
    let newKeys = []
    let newVals = []

    for (var key in oldVal) {
      oldVal[key].forEach((el) => {
        newVal[el.toLowerCase()] = parseInt(key)
      })
    }
    return newVal
  }







}

module.exports = ETL;

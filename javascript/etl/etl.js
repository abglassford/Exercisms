class ETL {
  transform (oldVal) {
    let newVal = {}
    let newKeys = oldVal[1].filter((el) => {
      return el.toLowerCase();
    })
    console.log(newKeys);
  }


}

module.exports = ETL;

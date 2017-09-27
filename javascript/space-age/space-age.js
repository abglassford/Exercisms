class SpaceAge {
  constructor (val) {
    this.seconds = val
    this.year = 31557600
  }
  planetAge (ratio) {
    return parseFloat((this.seconds / (this.year * ratio)).toFixed(2))
  }
  onEarth () {
    return this.planetAge(1)
  }
  onMercury () {
    return this.planetAge(0.2408467)
  }
  onVenus () {
    return this.planetAge(0.61519726)
  }
  onMars () {
    return this.planetAge(1.8808158)
  }
  onJupiter () {
    return this.planetAge(11.862615)
  }
  onSaturn () {
    return this.planetAge(29.447498)
  }
  onUranus () {
    return this.planetAge(84.016846)
  }
  onNeptune () {
    return this.planetAge(164.79132)
  }
}

module.exports = SpaceAge;

export class UserInfo{
  constructor(age, lifeExpectancy) {
    this.age = age; 
    this.lifeExpectancy = lifeExpectancy
  }  
  mercuryAge(years) {
    let mercuryAge = parseFloat((years/.24).toFixed(4))
    return mercuryAge
  }

  venusAge(years) {
    let venusAge = parseFloat((years/.62).toFixed(4))
    return venusAge
  }

  marsAge(years) {
    let marsAge = parseFloat((years/1.88).toFixed(4))
    return marsAge
  }

  jupiterAge(years) {
    let jupiterAge = parseFloat((years/11.86).toFixed(4))
    return jupiterAge
  }
  
  yearsLeftEarth() {
    let yearsLeftEarth = parseFloat((this.lifeExpectancy - this.age).toFixed(4))
    return yearsLeftEarth
  }

  yearsLeftMercury() {
    let yearsLeftMercury = parseFloat(((this.lifeExpectancy - this.age)/.24).toFixed(4))
    return yearsLeftMercury
  }

  yearsLeftVenus() {
    let yearsLeftVenus = parseFloat(((this.lifeExpectancy - this.age)/.62).toFixed(4))
    return yearsLeftVenus
  }

  yearsLeftMars() {
    let yearsLeftMars = parseFloat(((this.lifeExpectancy - this.age)/1.88).toFixed(4))
    return yearsLeftMars
  }

  yearsLeftJupiter() {
    let yearsLeftJupiter = parseFloat(((this.lifeExpectancy - this.age)/11.86).toFixed(4))
    return yearsLeftJupiter
  }
}

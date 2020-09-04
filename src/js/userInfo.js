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
  
  //if negative number is returned, user prompted that the output is the number of years lived past life expectancy
  yearsLeftEarth() {
    let yearsLeftEarth = parseFloat((this.lifeExpectancy - this.age).toFixed(4))
    return yearsLeftEarth
  }

  //if negative number is returned, user prompted that the output is the number of years lived past life expectancy
  yearsLeftMercury() {
    let yearsLeftMercury = parseFloat(((this.lifeExpectancy - this.age)/.24).toFixed(4))
    return yearsLeftMercury
  }

  //if negative number is returned, user prompted that the output is the number of years lived past life expectancy
  yearsLeftVenus() {
    let yearsLeftVenus = parseFloat(((this.lifeExpectancy - this.age)/.62).toFixed(4))
    return yearsLeftVenus
  }

  //if negative number is returned, user prompted that the output is the number of years lived past life expectancy
  yearsLeftMars() {
    let yearsLeftMars = parseFloat(((this.lifeExpectancy - this.age)/1.88).toFixed(4))
    return yearsLeftMars
  }

  //if negative number is returned, user prompted that the output is the number of years lived past life expectancy
  yearsLeftJupiter() {
    let yearsLeftJupiter = parseFloat(((this.lifeExpectancy - this.age)/11.86).toFixed(4))
    return yearsLeftJupiter
  }

  yearsPastEarth() {
    let yearsPastEarth = parseFloat(((this.lifeExpectancy - this.age)*-1).toFixed(4))
    return yearsPastEarth
  }

  yearsPastMercury() {
    let yearsPastMercury = parseFloat((((this.lifeExpectancy - this.age)/.24)*-1).toFixed(4))
    return yearsPastMercury
  }

  yearsPastVenus() {
  let yearsPastVenus = parseFloat((((this.lifeExpectancy - this.age)/.62)*-1).toFixed(4))
  return yearsPastVenus
  }

  yearsPastMars() {
    let yearsPastMars = parseFloat((((this.lifeExpectancy - this.age)/1.88)*-1).toFixed(4))
    return yearsPastMars
    }
}
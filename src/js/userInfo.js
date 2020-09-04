export class UserInfo{
  constructor(age, sex, exercise, lifeExpectancy) {
    this.age = age;
    this.sex = sex;
    this.exercise = exercise;
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

  // marsAge(years) {
  //   let marsAge = parseFloat((years/1.88).toFixed(4))
  //   return marsAge
  // }

  // jupiterAge(years) {
  //   let jupiterAge = parseFloat((year/11.86).toFixed(4))
  //   return jupiterAge
  // }

  
} 
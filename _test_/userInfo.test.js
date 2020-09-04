import {UserInfo} from '../src/js/UserInfo.js';
import { TestScheduler } from 'jest'

describe('UserInfo', () => {
    let reusableUserInfo;

    beforeEach (() => {
      reusableUserInfo = new UserInfo(20, 80);
    });

    test('should return age on Mercury based on user inputted age', () => {
      // const userInfo = new UserInfo(20)
    expect(reusableUserInfo.mercuryAge(reusableUserInfo.age)).toEqual(83.3333);
    })

    test('should return age on Venus based on user inputted age', () => {
      // const userInfo = new UserInfo(20)
      expect(reusableUserInfo.venusAge(reusableUserInfo.age)).toEqual(32.2581);
    })

    test('should return age on Mars based on user inputted age', () => {
      // const userInfo = new UserInfo(20)
      expect(reusableUserInfo.marsAge(reusableUserInfo.age)).toEqual(10.6383);
    })

    test('should return age on Jupiter based on user inputted age', () => {
      // const userInfo = new UserInfo(20)
      expect(reusableUserInfo.jupiterAge(reusableUserInfo.age)).toEqual(1.6863);
    })
    
    test ('should return years left remaining on earth based on user inputted life expectancy', () => {
      expect (reusableUserInfo.yearsLeftEarth()).toEqual(60.0000);
    })

    test ('should return years left remaining on Mercury based on user inputted age and life expectancy', () => {
      expect (reusableUserInfo.yearsLeftMercury()).toEqual(250.0000)
    })

    test ('should return years left remaining on Venus based on user inputted age and life expectancy', () => {
      expect (reusableUserInfo.yearsLeftVenus()).toEqual(96.7742)
    })

    test ('should return years left remaining on Mars based on user inputted age and life expectancy', () => {
      
      expect (reusableUserInfo.yearsLeftMars()).toEqual(31.9149)
    })

    test('should return years left remaining on Jupiter based on user inputted age and life expectancy', () => {
      expect (reusableUserInfo.yearsLeftJupiter()).toEqual(5.0590)
    })

    test('return years past life expectancy on earth when age is greater than life expectancy on earth', () => {
      const userInfo1 = new UserInfo (90, 80);
      expect(userInfo1.yearsPastEarth()).toEqual (10.0000)
    })

    test('return years past life expectancy on mercury when age is greater than life expectancy on earth', () => {
      const userInfo1 = new UserInfo (90, 80);
      expect(userInfo1.yearsPastEarth()).toEqual (10.0000)
    })

})
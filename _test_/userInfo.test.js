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
    
    test ('should return years left remaining on a planet based on user inputted life expectancy', () => {
      if (reusableUserInfo.age < reusableUserInfo.lifeExpectancy)
      expect (reusableUserInfo.yearsLeftEarth()).toEqual(60.0000);
      expect (reusableUserInfo.yearsLeftMercury()).toEqual(250.0000);
      expect (reusableUserInfo.yearsLeftVenus()).toEqual(96.7742);
      expect (reusableUserInfo.yearsLeftMars()).toEqual(31.9149);
      expect (reusableUserInfo.yearsLeftJupiter()).toEqual(5.0590);
    })
    
    test('should return years past life expectancty on plants when age is greater than life expectanct on earth', () => {
      const userInfo1 = new UserInfo (90,80);
      if (userInfo1.age >= userInfo1.lifeExpectancy)
      expect(userInfo1.yearsPastEarth()).toEqual(10.0000);
      expect(userInfo1.yearsPastMercury()).toEqual(41.6667);
      expect(userInfo1.yearsPastVenus()).toEqual(16.1290);
      expect(userInfo1.yearsPastMars()).toEqual(5.3191);
      expect(userInfo1.yearsPastJupiter()).toEqual(0.8432);
    })
})
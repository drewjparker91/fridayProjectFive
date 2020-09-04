import {UserInfo} from '../src/js/UserInfo.js';
import { TestScheduler } from 'jest'

describe('UserInfo', () => {

    test('should return age on Mercury based on user inputted age', () => {
    const userInfo = new UserInfo(20)
    expect(userInfo.mercuryAge(userInfo.age)).toEqual(83.3333);
    })

    test('should return age on Venus based on user inputted age', () => {
      const userInfo = new UserInfo(20)
      expect(userInfo.venusAge(userInfo.age)).toEqual(32.2581);
    })
})
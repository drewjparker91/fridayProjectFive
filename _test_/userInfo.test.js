import {UserInfo} from '../src/js/UserInfo.js'
import { TestScheduler } from 'jest'

describe('UserInfo', () => {

  test('should calculate age on mercury based on user inputted age')
  const userInfo = new UserInfo(20)
  expect(userInfo.mercuryYears(userInfo.age)).toEqual(83.333);
})
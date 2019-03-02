/** @format */

import {createUser} from '../createUser'

const testUser: any = {
  userid: '123123123123',
  group: 'User',
  name: 'philipp',
  email: 'philipp@schmid.de',
  UserPoolId: '123123123-pool',
  workspace: 'worksapcex',
}

it('Test CreateUser', async () => {
  expect(await createUser(testUser)).not.toThrow()
})

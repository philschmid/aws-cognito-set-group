/** @format */

const func = require('../handler')

const testUser = {
  version: '1',
  region: 'eu-central-1',
  userPoolId: 'eu-central-1_DWU7RfBAQ',
  userName: '187ef165-6ddf-476a-bf7c-4eceb809a4e7',
  callerContext: {awsSdkVersion: 'aws-sdk-unknown-unknown', clientId: '1h2qqc4s2sd0ffitcmqblekfvi'},
  triggerSource: 'PostConfirmation_ConfirmSignUp',
  request: {
    userAttributes: {
      sub: '187ef165-6ddf-476a-bf7c-4eceb809a4e7',
      'cognito:email_alias': 'schmidphilipp1995@gmail.com',
      'cognito:user_status': 'CONFIRMED',
      email_verified: 'true',
      name: 'philipp',
      email: 'schmidphilipp1995@gmail.com',
      'custom:workspace': 'test123',
    },
  },
  response: {},
}

it('Test handler', async () => {
  expect(await func.addRole(testUser)).toBe(true)
})

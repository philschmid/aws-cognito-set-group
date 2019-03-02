/** @format */

'use strict'

import {User} from './models/user'
import * as AWS from 'aws-sdk'
import {createUser} from './utils/createUser'

const CognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18',
  region: 'eu-central-1',
})

module.exports.addRole = async (event, context) => {
  console.log(event)
  const user: User = {
    userid: event.userName,
    group: event.group || 'User',
    name: event.request.userAttributes.name,
    email: event.request.userAttributes.email,
    UserPoolId: event.userPoolId,
    workspace: event.request.userAttributes['custom:workspace'],
  }
  console.log(user)
  const params = {
    GroupName: event.group || 'User',
    UserPoolId: event.userPoolId,
    Username: event.userName,
  }
  try {
    await CognitoIdentityServiceProvider.adminAddUserToGroup(params).promise()
  } catch (error) {
    console.error(error)
  }
  try {
    await createUser(user)
  } catch (error) {
    console.error(error)
  }

  console.log(event.userName)
  console.log(event.userPoolId)
  console.log(event.role)
  return true
}

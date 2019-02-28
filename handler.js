'use strict'

var AmazonCognitoIdentity = require('amazon-cognito-identity-js')
const AWS = require('aws-sdk')
const CognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18',
  region: 'eu-central-1'
})

module.exports.addRole = async (event, context) => {
  const params = {
    GroupName: event.group || 'User',
    UserPoolId: event.userPoolId,
    Username: event.userName
  }
  try {
    await CognitoIdentityServiceProvider.adminAddUserToGroup(params).promise()
  } catch (error) {
    console.error(error)
  }

  console.log(event.userName)
  console.log(event.userPoolId)
  console.log(event.role)
  context.done(null, 'Erfolgreich angemeldet!!!!')
  return true
}

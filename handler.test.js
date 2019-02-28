var x = require('./handler')

it('Test CreateUser', async () => {
  expect(
    await x.hello({
      group: 'Admin',
      userPoolId: 'eu-central-1_uwf4A5M8a',
      userName: 'schmidphilipp1995@gmail.com'
    })
  ).toBe(true)
})

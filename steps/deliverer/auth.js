const _ = require('lodash')
const { Given, When, Then } = require('cucumber')
const DelivererLoginRequest = require('support/web/requests/deliverer-api/login')
const DelivererRegistrationRequest = require('support/web/requests/deliverer-api/registration')
const { expect } = require('chai')

Given('Deliverer {string} registers with email {string} and password {string}', async function (
  deliverer,
  email,
  password,
) {
  const request = new DelivererRegistrationRequest.Builder()
    .withEmail(email)
    .withPassword(password)
    .build()
  await this.send(request)
})

Given('Deliverer {string} registers and logs in', async function (deliverer) {
  const email = _.snakeCase(deliverer) + '@minisuper.app'
  const registrationRequest = new DelivererRegistrationRequest.Builder().withEmail(email).build()
  await this.send(registrationRequest)
  const loginRequest = new DelivererLoginRequest.Builder(deliverer).withEmail(email).build()
  await this.send(loginRequest)
})

Given('Deliverer {string} registers with email {string} and logs in', async function (
  deliverer,
  email,
) {
  const registrationRequest = new DelivererRegistrationRequest.Builder().withEmail(email).build()
  await this.send(registrationRequest)
  const loginRequest = new DelivererLoginRequest.Builder(deliverer).withEmail(email).build()
  await this.send(loginRequest)
})

Given(
  'Deliverer {string} registers with email {string}, name {string}, and then and logs in',
  async function (deliverer, email, name) {
    await this.send(
      new DelivererRegistrationRequest.Builder().withEmail(email).withName(name).build(),
    )
    await this.send(new DelivererLoginRequest.Builder(deliverer).withEmail(email).build())
  },
)

When(
  'Deliverer {string} registers with name {string}, email {string}, and password {string}',
  async function (deliverer, name, email, password) {
    const request = new DelivererRegistrationRequest.Builder()
      .withName(name)
      .withEmail(email)
      .withPassword(password)
      .build()
    await this.send(request)
  },
)

When('Deliverer {string} logs in with email {string} and password {string}', async function (
  deliverer,
  email,
  password,
) {
  const request = new DelivererLoginRequest.Builder(deliverer)
    .withEmail(email)
    .withPassword(password)
    .build()
  await this.send(request)
})

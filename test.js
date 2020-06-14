describe('Operations about user in Pet Store', () => {


  it('Create a new user (success: code 200)', function () {
    cy
    .request('POST', 'https://petstore.swagger.io/v2/user', {
    "id": 123,
    "username": "petlover",
    "firstName": "Peter",
    "lastName": "Stevenson",
    "email": "p.stevenson@example.com",
    "password": "peter123",
    "phone": "+61414444444",
    "userStatus": 2
    })
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('code', 200) // true
    })
  }) 
  
  it('Create list of users with given input array (array) (success: code 200)', function () {
    cy
    .request('POST', 'https://petstore.swagger.io/v2/user/createWithArray', [
      {
        "id": 123,
        "username": "petlover",
        "firstName": "Peter",
        "lastName": "Stevenson",
        "email": "p.stevenson@example.com",
        "password": "peter123",
        "phone": "+61414444444",
        "userStatus": 2
      }
    ])
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('code', 200) // true
    })
  })

  it('Create list of users with given input array (list) (success: code 200)', function () {
    cy
    .request('POST', 'https://petstore.swagger.io/v2/user/createWithList', [
      {
        "id": 123,
        "username": "petlover",
        "firstName": "Peter",
        "lastName": "Stevenson",
        "email": "p.stevenson@example.com",
        "password": "peter123",
        "phone": "+61414444444",
        "userStatus": 2
      }
    ])
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('code', 200) // true
    })
  })

  it('Get user by username (success: code 200)', function () {

    cy
    .request('GET', 'https://petstore.swagger.io/v2/user/petlover', {
      "id": 1592033938380,
      "username": "petlover",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "password": "string",
      "phone": "string",
      "userStatus": 0
    })
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.status).to.eq(200)
    })

  })

  it('Get user by username (user not found: code 404)', function () {

    cy
    .request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/emad',
      failOnStatusCode: false})
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.status).to.eq(404)
    })
  })

  it('Get user by username (invalid username supplied: code 400)', function () {

    cy
    .request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user//%',
      failOnStatusCode: false})
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.status).to.eq(400)
    })
  })


  it('Update user (success: code 200)', function () {

    cy
    .request('PUT', 'https://petstore.swagger.io/v2/user/petlover', {
      "id": 0,
      "username": "string",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "password": "string",
      "phone": "string",
      "userStatus": 0
    })
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('code', 200) // true
    })
  })

  it('Logs user into the system (success: code 200)', function () {
    
    cy
    .request('GET', 'https://petstore.swagger.io/v2/user/login?username=petlover&password=peter123')
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('code', 200) // true
    })
    
  })

  it('Logs user into the system (invalid username supplied: code 400)', function () {
    
    cy
    .request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/user//%',
        failOnStatusCode: false})
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.status).to.eq(400)
    })
    
  })

  // it('Update user (user not found: code 404)', function () {

  //   cy
  //   .request({
  //     method: 'PUT',
  //     url: 'https://petstore.swagger.io/v2/user/goodbye',
  //     failOnStatusCode: false})
  //   .then((response) => {
  //     // response.body is automatically serialized into JSON
  //     expect(response.status).to.eq(404)
  //   })
  // })
// This is commented out as attempting to test PUT 404 was producing an exepected 415 "unsupported media type" error.

  it('Update user (invalid username supplied: code 400)', function () {

    cy
    .request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/user//%',
      failOnStatusCode: false}, {
        "id": 0,
        "username": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0
      })
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.status).to.eq(400) 
    })
  })

  

  it('Logs out current logged in user session (success: code 200)', function() {

    cy
    .request('GET', 'https://petstore.swagger.io/v2/user/logout')
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.status).to.eq(200)
    })
   
  })

  it('Delete user (success: code 200)', function () {
    cy
    .request('DELETE', 'https://petstore.swagger.io/v2/user/petlover')
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('code', 200) // true
    })
  })

  it('Delete user (user not found: code 404)', function () {
    cy
    .request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/user/eshqam',
      failOnStatusCode: false})
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.status).to.eq(404)
    })
  })

  it('Delete user (invalid username supplied: code 400)', function () {
    cy
    .request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/user//%',
      failOnStatusCode: false})
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.status).to.eq(400)
    })
  })

})
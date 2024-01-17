import { ExampleRequest } from "../models/example_req";

let exampleReq: ExampleRequest;

describe('template spec', () => {
  before(() => {
    cy.fixture('example').then((data) => {
      exampleReq = data;
    });
  });

  it('calling GET api', () => {
    cy.request({
      method: 'GET',
      url: 'http://universities.hipolabs.com/search?country=thailand&name=Silpakorn',
    }).then((response) => {
      let body = response.body;
      cy.log(body);
      cy.log(body[0].name)
    });
  })

  it('calling POST api', () => {
    cy.request({
      method: 'POST',
      url: 'https://httpbin.org/post',
      headers: { 'Content-Type': 'application/json' },
      body: exampleReq,
    }).then((response) => {
      let res = JSON.parse(response.body.data);
      cy.log(res.name);
    });
  })
})
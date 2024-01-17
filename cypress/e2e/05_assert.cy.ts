import { ExampleRequest } from "../models/example_req";

let exampleReq : ExampleRequest;

describe('template spec', () => {

    before(() => {
        cy.fixture('example').then((data) => {
          exampleReq = data;
        });
      });

    it('visit site passes', () => {
        cy.visit('./pages/query.html');
    })

    it('assert element', () => {
        cy.get('button').should('have.length', 6);
        cy.contains('ome32').should('exist');
        cy.get('textarea[placeholder="Comment 1"]').type('Hello').should('have.value', 'Hello');
    })

    it('assert API response', () => {
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            headers: { 'Content-Type': 'application/json' },
            body: exampleReq
        }).then((response) => {
            let res = JSON.parse(response.body.data);
            expect(res.name).to.equal('hahaha')
        });
    })





})
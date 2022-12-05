describe('process env', () => {
  it('has variable my-ar from cypress.config.js', () => {
    expect(Cypress.env('my-var')).to.equal('ok');
  });

  it('has variables FOO and BAR from process.env', () => {
    // FOO=42 BAR=baz cypress open
    // see how FOO and BAR were copied in the `setupNodeEvents` function
    // in the Cypress configuration
    expect(Cypress.env()).to.contain({
      FOO: '42',
      BAR: 'baz',
    });
  });
  it('has renamed variable "ping" from "CYPRESS_ping"', () => {
    expect(Cypress.env('ping')).to.equal('123');
  });

  it('has variable loaded from .env file', () => {
    expect(Cypress.env('username')).to.equal('aTester');
  });

  // it('Test cypress wrap', () => {
  //   cy.wrap(Cypress.env()).should('include', {
  //     'my-var': 'ok',
  //     CYPRESS_ping: 123,
  //   });
  // });
});

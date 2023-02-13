import Button from './Button';

describe('Testing cypress button component', () => {
  it('Check button Without Content', () => {
    cy.mount(<Button />);
    cy.get('[data-cy=button]').should('have.text', 'No content');
  });
  it('Check button with Content', () => {
    const content = 'This is my content';
    cy.mount(<Button content={content} />);
    cy.get('[data-cy=button]').should('have.text', content);
  });
});

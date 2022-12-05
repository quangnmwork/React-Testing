import Stepper from './Stepper';

// describe("<Stepper>", () => {

// });

describe('Testing Props with Stepper', () => {
  it('mounts', () => {
    cy.mount(<Stepper />);

    cy.get('[data-cy=counter]').should('have.text', '0');
  });
  it('supports an "initial" prop to set the value', () => {
    cy.mount(<Stepper initial={100} />);
    cy.get('[data-cy=counter]').should('have.text', '100');
  });

  it('Increment by one if click plus button', () => {
    cy.mount(<Stepper />);
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=counter]').should('have.text', '1');
  });

  it('clicking + fires a change event with the incremented value', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy');
    cy.mount(<Stepper onChange={onChangeSpy} />);
    cy.get('[data-cy=increment]').click();
    cy.get('@onChangeSpy').should('have.been.calledWith', 1);
  });
});

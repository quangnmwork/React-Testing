import { mount } from 'cypress/react18';
import { ReactNode } from 'react';

Cypress.Commands.add('mount', (component: ReactNode, options) => {
  // Wrap any parent components needed
  // ie: return mount(<MyProvider>{component}</MyProvider>, options)
  return mount(component, options);
});

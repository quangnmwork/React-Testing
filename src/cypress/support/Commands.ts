import { mount } from "cypress/react18";
import { ReactElement, ReactNode } from "react";

Cypress.Commands.add("mount", (component, options) => {
  // Wrap any parent components needed
  // ie: return mount(<MyProvider>{component}</MyProvider>, options)
  return mount(component as any, options);
});

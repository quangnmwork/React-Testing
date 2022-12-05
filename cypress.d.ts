import { mount } from "cypress/react";
import { ReactNode } from "react";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

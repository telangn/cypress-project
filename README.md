# Cypress-Project

## Running Tests

* You can operate cypress through its own CLI or via node scripts listed in `Cypress-Project/package.json`

## Writing Tests

* Specs are written and stored within `cypress/integration`

* Page object models are written within `cypress/support/command.js`

* To expose your POM to intelliSense, list it within `cypress/support/index.d.ts`

* `Cypress-Project/tsconfig.json` exposes the rest to intelliSense ( `cy` object ), from ./node_modules

## Framework

* `Cypress-Project/cypress.json` allows you to add framework configurations.
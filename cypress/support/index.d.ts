export { }
declare global {
    namespace Cypress {
        interface Chainable {
            typeTo(placeholder: string, value: string): Chainable<void>;
        }
    }
}
/// <reference types="Cypress"/>

describe('contact form', () => {
	it('should submit the form', () => {
		cy.visit('http://localhost:5173/about');
		cy.get('[data-cy="contact-input-message"]').type('Test message');
		cy.get('[data-cy="contact-input-name"]').type('Test name');
		cy.get('[data-cy="contact-input-email"]').type('testemail@o2.pl');
		//then
		cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');

		cy.get('@submitBtn').should('not.be.disabled').contains('Send Message');

		cy.get('@submitBtn').click();
		cy.get('@submitBtn').should('be.disabled').contains('Sending...');
	});
});

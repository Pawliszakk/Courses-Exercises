/// <reference types="Cypress"/>

describe('contact form', () => {
	beforeEach(() => {
		cy.visit('/about');
	});

	it('should submit the form', () => {
		cy.get('[data-cy="contact-input-message"]').type('Test message');
		cy.get('[data-cy="contact-input-name"]').type('Test name');
		cy.get('[data-cy="contact-input-email"]').type('testemail@o2.pl{enter}');
		cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
		cy.get('@submitBtn').should('not.be.disabled').contains('Send Message');

		cy.get('@submitBtn').click();
		cy.get('@submitBtn').should('be.disabled').contains('Sending...');
	});
	it('should validate the form input', () => {
		cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
		cy.get('@submitBtn').click();
		cy.screenshot();
		cy.get('@submitBtn')
			.should('not.have.attr', 'disabled')
			.contains('Send Message');

		cy.screenshot();

		cy.get('[data-cy="contact-input-message"]').focus().blur();
		cy.get('[data-cy="contact-input-message"]')
			.parent()
			.should('have.attr', 'class')
			.and('match', /invalid/);
		cy.screenshot();

		cy.get('[data-cy="contact-input-name"]').focus().blur();
		cy.get('[data-cy="contact-input-name"]')
			.parent()
			.should('have.attr', 'class')
			.and('match', /invalid/);
		cy.screenshot();

		cy.get('[data-cy="contact-input-email"]').focus().blur();
		cy.get('[data-cy="contact-input-email"]')
			.parent()
			.should('have.attr', 'class')
			.and('match', /invalid/);
	});
});

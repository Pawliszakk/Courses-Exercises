/// <reference types="Cypress" />

describe('Newsletter', () => {
	beforeEach(() => {
		cy.task('seedDatabase');
		cy.visit('/');
	});

	it('should store email address correctly', () => {
		cy.intercept('POST', '/newsletter*', { status: 201 });
		cy.get('[data-cy="newsletter-email"]').type('johndoe@example.com');
		cy.get('[data-cy="newsletter-submit"]').click();
		cy.get('p').contains('Thanks for signing up!');
	});
});

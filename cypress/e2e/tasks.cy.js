describe('Tasks management', () => {
	it('should open and close the new task modal', () => {
		cy.visit('http://localhost:5173/');
		const addTaskButton = '[data-cy="start-add-task-button"]';

		cy.get(addTaskButton).click();
		cy.get('button').contains('Cancel').click();
		cy.get('.modal').should('not.exist');
		cy.get('.backdrop').should('not.exist');

		cy.get(addTaskButton).click();
		cy.get('.backdrop').click({ force: true });
		cy.get('.modal').should('not.exist');
		cy.get('.backdrop').should('not.exist');
	});

	it('should add new task if values are provided', () => {
		cy.visit('http://localhost:5173/');

		cy.get('[data-cy="start-add-task-button"]').click();
		cy.get('#title').type('Task from cypress');
		cy.get('#summary').type('Summary from cypress');
		cy.get('#category').select('important');
		cy.get('.modal button').contains('Add Task').click();
		cy.get('.modal').should('not.exist');
		cy.get('.backdrop').should('not.exist');
		cy.get('.task').should('have.length', 1);
		cy.get('.task h2').contains('Task from cypress');
		cy.get('.task p').contains('Summary from cypress');
	});

	it('Should validate user Input', () => {
		cy.visit('http://localhost:5173/');

		cy.get('[data-cy="start-add-task-button"]').click();
		cy.get('.modal button').contains('Add Task').click();
		cy.get('.error-message').contains(
			'Please provide values for task title, summary and category!'
		);
	});
	it('should have valid selected category', () => {
		cy.visit('http://localhost:5173/');

		cy.get('[data-cy="start-add-task-button"]').click();
		cy.get('#title').type('Task from cypress');
		cy.get('#summary').type('Summary from cypress');
		cy.get('#category').select('urgent');
		cy.get('.modal button').contains('Add Task').click();
		cy.get('#filter').select('urgent');
		cy.get('.task-category').contains('🚨');
		cy.get('#filter').select('low');
		cy.get('.task').should('not.exist');
		cy.get('#filter').select('urgent');
		cy.get('.task').should('have.length', 1);
		cy.get('#filter').select('all');
		cy.get('.task').should('have.length', 1);
	});


	it('should add new task after another task in correct order', () => {
		cy.visit('http://localhost:5173/');

		cy.get('[data-cy="start-add-task-button"]').click();
		cy.get('#title').type('Task from cypress');
		cy.get('#summary').type('Summary from cypress');
		cy.get('#category').select('important');
		cy.get('.modal button').contains('Add Task').click();
		cy.get('.modal').should('not.exist');
		cy.get('.backdrop').should('not.exist');
		cy.get('.task').should('have.length', 1);
		cy.get('.task h2').contains('Task from cypress');
		cy.get('.task p').contains('Summary from cypress');
	});
});

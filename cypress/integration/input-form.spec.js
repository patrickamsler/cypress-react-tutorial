describe('Input Form', () => {
    beforeEach(() => {
        cy.seedAndVisit([])
    })

    it('focuses input on load', () => {
        cy.focused()
            .should('have.class', 'new-todo')
    })

    it('accepts input', () => {
        cy.get('.new-todo')
            .type('buy milk')
            .should('have.value', 'buy milk')
    });

    context('Form submission', () => {
        it.only('Adds a new todo on submit', () => {
            const itemText = 'Buy eggs'
            cy.server()
            cy.route('POST', '/api/todos', {
                name: itemText,
                id: 1,
                isComplete: false
            })
            cy.get('.new-todo')
                .type(itemText)
                .type('{enter}')
            cy.get('.todo-list li')
                .should('have.length', 1)
                .and('contain', itemText)
        })
    });
})

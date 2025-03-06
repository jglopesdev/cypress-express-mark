/// <reference types="cypress" />

describe('tarefas', () => {
  it('Deve cadastrar uma nova tarefa', () => {
    cy.request({
      url: 'http://localhost:3333/helper/tasks',
      method: 'DELETE',
      body: { name: 'Ler um livro de node.js' }
    }).then(response => {
      expect(response.status).to.eq(204)
    })

    cy.visit('http://127.0.0.1:3000')

    cy.get('input[placeholder="Add a new Task"]')
      .type('Ler um livro de node.js')

    cy.contains('button', 'Create')
      .click()

    cy.contains('main div p', 'Ler um livro de node.js')
      .should('be.visible')
  })
})
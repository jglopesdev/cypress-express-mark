/// <reference types="cypress" />

describe('tarefas', () => {
  it('Deve cadastrar uma nova tarefa', () => {

    const taskName = 'Ler um livro de node.js'
    
    cy.removeTaskByName(taskName)

    cy.createTask(taskName)

    cy.contains('main div p', taskName)
        .should('be.visible')
  })
  it('Não deve permitir tarefa duplicada', () => {

    const task = {
      name: 'Tirar certificação CTFL',
      is_done: false
    }

    cy.removeTaskByName(task.name)
    
    cy.postTask(task)
  
    cy.createTask(task.name)

    cy.get('.swal2-html-container')
        .should('be.visible')
        .and('have.text', 'Task already exists!')
  })

  it('Campo obrigatorio', () => {
    cy.createTask()

    cy.isRequired('This is a required field')
  })




})

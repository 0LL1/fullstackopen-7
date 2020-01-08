describe('Blog', function() {
  it('allows logging in', function() {
    cy.request('POST', '/api/test/reset')
    const user = {
      username: 'testUser',
      name: 'Tester',
      password: 'testPass'
    }
    cy.request('POST', '/api/users', user)
    cy.visit('/')
    cy.get('[data-cy=username]').type(user.username)
    cy.get('[data-cy=password]').type(user.password)
    cy.contains('login').click()
  })

  it('can be added', function() {
    cy.contains('new blog').click()
    const blog = {
      title: 'Cypress is cool',
      author: 'Cypress fan',
      url: 'www.cypress.hill'
    }
    cy.get('[data-cy=title]').type(blog.title)
    cy.get('[data-cy=author]').type(blog.author)
    cy.get('[data-cy=url]').type(blog.url)
    cy.get('[data-cy=create]').click()
    cy.contains(blog.title).click()
  })

  it('can be liked', function() {
    cy.contains('0 likes')
    cy.get('[data-cy=like]').click()
    cy.contains('1 like')
    cy.get('[data-cy=like]').click()
    cy.contains('2 likes')
  })

  it('can be deleted', function() {
    cy.get('.blog')
    cy.get('[data-cy=remove]').click()
    cy.get('.blog').should('not.exist')
  })
})

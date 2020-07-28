describe('Browser Actions', () => {
	it('should load correctly', () => {
		cy.visit('http://www.example.com', { timeout: 1000 })
	})
	it('should load correct URL', () => {
		cy.url().should('include', 'example.com')
	})
})
describe('Browser Actions', () => {
	it('should load the website', () => {
		cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
		cy.url().should('include', 'index.html')
	})
	it('should click the link travel catagory', () => {
		cy.get('a').contains('Travel').click()
		cy.get('h1').contains('Travel')
	})
	it('should display the correct number of books', () => {
		cy.get('.product_pod').its('length').should('eq', 11)
	})
})
describe('Working with inputs', () => {
	it('should load correctly', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
	})
	it('Should fill username', () => {
		cy.get('#user_login').clear()
		cy.get('#user_login').type('akdmhdh', { delay: 200 })
	})
	it('should fill password', () => {
		cy.get('#user_password').clear()
		cy.get('#user_password').type('akdmhdh', { delay: 200 })
	})
	it('Should fill username', () => {
		cy.get('#user_login').as('username')
		cy.get('@username').clear()
		cy.get('@username').type('Some Invalid Name', { delay: 200 })
	})
	it('should fill password', () => {
		cy.get('#user_password').as('password')
		cy.get('@password').clear()
		cy.get('@password').type('Some Invalid Name', { delay: 200 })
	})
	it('should submit login form', () => {
		cy.get('.btn').click()
	})
	it('should display error message', () => {
		cy.get('.alert').should('be.visible')
	})
})

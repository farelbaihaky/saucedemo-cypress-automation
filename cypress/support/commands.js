Cypress.Commands.add('login', (username, password) => {
// LOGIN COMMAND

  // Cek apakah 'username' diisi? Kalau kosong, ambil dari env 'username'
  const userToUse = username || Cypress.env('username')
  // Cek apakah 'password' diisi? Kalau kosong, ambil dari env 'password'
  const passToUse = password || Cypress.env('password')

  cy.visit('/') 
  
  cy.get('[data-test="username"]')
    .should('be.visible')
    .type(userToUse) // Pakai variabel baru
    
  cy.get('[data-test="password"]')
    .should('be.visible')
    .type(passToUse) // Pakai variabel baru
    
  cy.get('[data-test="login-button"]')
    .click()
})

// ADD TO CART COMMAND

Cypress.Commands.add('addToCart', (productName) => {
  // Logic: Cari element yang berisi teks 'productName'
  // Lalu cari parent-nya (div inventory_item)
  // Lalu cari tombol 'Add to cart' di dalam parent itu dan klik
  
  cy.contains('.inventory_item_name', productName) // Cari teks judul produk
    .parents('.inventory_item') // Naik ke container pembungkus produk
    .find('button') // Cari tombol di dalam container itu
    .contains('Add to cart') // Pastikan tombolnya tombol Add (bukan Remove)
    .click()
})

Cypress.Commands.add('logout', () => {
  // 1. Klik tombol Burger Menu (yang garis tiga di pojok kiri atas)
  // Selector ini yang tadi kamu tanyakan
  cy.get('#react-burger-menu-btn').click()

  // 2. Klik tombol Logout di dalam sidebar
  // Kita pastikan dulu sidebar-nya muncul (be.visible) biar aman
  cy.get('#logout_sidebar_link')
    .should('be.visible') 
    .click()
})

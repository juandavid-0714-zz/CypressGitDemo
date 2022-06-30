describe("Buy a t-shirt", () => {

    it("then the t-shirt should be bought", () => {
      cy.visit("http://automationpractice.com/")

      cy.get("#block_top_menu > ul > li:nth-child(3) > a").click()  // Click Label T-SHIRTS

      cy.get("#center_column a.button.ajax_add_to_cart_button.btn.btn-default").click()  // Click Add to Cart button
      cy.get(".button-container > a.btn.btn-default.button.button-medium").click()  // Click Proceed to checkout

      cy.get(".cart_navigation span").click()  // Click Proceed to checkout
  
      //02. Sign in
      cy.get("#email").type("aperdomobo@gmail.com") // Write email
      cy.get("#passwd").type("WorkshopProtractor")  // Write password
      cy.get("#SubmitLogin").click()                // Click on submit Button

      //03. Address
      cy.get('[name="processAddress"]').click() // Click Proceed to checkout
      
      //04. Shipping
      cy.get("div > span > input#cgv").check()  // Accept terms
      cy.get('[name="processCarrier"]').click() // Click Proceed to checkout

      //05. Payment
      cy.get(".bankwire").click() // Click Pay by bank wire
      cy.get("#cart_navigation > button > span").click() // Click Confirm order
  
      cy.get("#center_column > div > p > strong")  // Verify that in final step title say "Your order on My Store is complete."
        .should("have.text", "Your order on My Store is complete.")
    });
  });

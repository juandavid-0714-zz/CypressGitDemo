import {MenuContentPage, ProductListPage, ShoppingCartPage, LoginPage, AddressStepPage,
  ShippingStepPage, PaymentStepPage} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productListPage: ProductListPage;
  let shoppingCartPage: ShoppingCartPage;
  let loginPage: LoginPage;
  let addressStepPage: AddressStepPage;
  let shippingStepPage: ShippingStepPage;
  let paymentStepPage: PaymentStepPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    productListPage = new ProductListPage();
    shoppingCartPage = new ShoppingCartPage();
    loginPage = new LoginPage();
    addressStepPage = new AddressStepPage();
    shippingStepPage = new ShippingStepPage();
    paymentStepPage = new PaymentStepPage();
  });

  it("then the t-shirt should be bought", () => {
    // menu content
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    // product list
    productListPage.addToCart("Faded Short Sleeve T-shirts");
    productListPage.proceedToCheckout();

    // shopping
    shoppingCartPage.proceedToCheckout();

    // 02. Sign in
    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");

    // 03. Address
    addressStepPage.proceedToCheckout();

    // 04. Shipping
    shippingStepPage.acceptTheTerms();
    shippingStepPage.proceedToCheckout();

    // 05. Payment
    paymentStepPage.selectBankWire();
    paymentStepPage.confirmOrder();
    paymentStepPage.verifyConfirmationMessage("Your order on My Store is complete.");
  });
});

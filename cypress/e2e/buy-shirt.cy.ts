import {MenuContentPage, ProductListPage, ShoppingCartPage, LoginPage, AddressStepPage,
  ShippingStepPage, PaymentStepPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    // menu content
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    // product list
    productListPage.addCart();
    productListPage.clickProceedToCheckout();

    // shopping
    shoppingCartPage.clickProceedToCheckout();

    // 02. Sign in
    loginPage.fillFieldsAndSubmit();

    // 03. Address
    addressStepPage.clickProceedToCheckout();

    // 04. Shipping
    shippingStepPage.acceptTheTerms();
    shippingStepPage.clickProceed();

    // 05. Payment
    paymentStepPage.clickBanWire();
    paymentStepPage.clickConfirmOrder();
    paymentStepPage.checkResult();
  });
});

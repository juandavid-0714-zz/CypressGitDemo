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
    productListPage.addToCart();
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
    paymentStepPage.selectBanWire();
    paymentStepPage.confirmOrder();
    paymentStepPage.getConfirmationMessage("Your order on My Store is complete.");
  });
});

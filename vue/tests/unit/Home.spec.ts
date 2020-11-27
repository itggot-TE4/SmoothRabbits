import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import SignInPage from "@/views/SignInPage.vue";

describe("Home.vue", () => {
  it("renders the correct welcome text", () => {
    const msg = "Welcome to Log-o-Matic";

    const wrapper = shallowMount(Home);

    expect(wrapper.text()).toMatch(msg);
  });
});




describe("SignInPage.vue", () => {

    it('has a sign in form header', () => {
        const msg = "Sign In";

        const wrapper = shallowMount(SignInPage);
    
        expect(wrapper.text()).toMatch(msg);

    })


});


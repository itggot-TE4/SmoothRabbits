import { shallowMount } from "@vue/test-utils";
import Admin from "@/views/Admin.vue";

describe("Admin.vue", () => {
  it("renders the TeacherOverview", () => {
    const wrapper = shallowMount(Admin);
    expect(wrapper.findComponent({name: "TeacherOverview"}).exists()).toBe(true)
  });
  it("renders the StudentOverview", () => {
    const wrapper = shallowMount(Admin);
    expect(wrapper.findComponent({name: "StudentOverview"}).exists()).toBe(true)
  });
});

import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import DoggiesSearchFormVue from "../DoggiesSearchForm.vue";

describe("SearchForm", () => {
  it("renders properly", async () => {
    const wrapper = mount(DoggiesSearchFormVue);
    const input = wrapper.find("input");

    await input.setValue("0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6");

    expect(input.element.value).toBe(
      "0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6"
    );
  });

  it("emit doggie token", async () => {
    const wrapper = mount(DoggiesSearchFormVue);

    // trigger the element
    await wrapper.find("button").trigger("click");

    // assert some action has been performed, like an emitted event.
    expect(wrapper.emitted()).toHaveProperty("doggieToken");
  });
});

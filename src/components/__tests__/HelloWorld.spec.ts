import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import DoggiesHeader from "../DoggiesHeader.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(DoggiesHeader, {
      props: { msg: "The Doggies Explorer" },
    });
    expect(wrapper.text()).toContain("The Doggies Explorer");
  });
});

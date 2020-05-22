import { createLocalVue, mount } from "@vue/test-utils";
import InputForm from "../../../src/components/InputForm";

const localVue = createLocalVue();

describe("InputForm component", () => {
	it("is VueInstance", () => {
		const wrapper = mount(InputForm, { localVue });
		expect(wrapper.isVueInstance()).toBe(true);
	});
	
	it("can emit submit event", () => {
		const wrapper = mount(InputForm, { localVue });
		wrapper.setData({ text: 'submitted text' });
		const input = wrapper.find('input');
		input.trigger('keydown', { code: 'Enter' });
		expect(wrapper.emitted().submit).toEqual([['submitted text']]);
	});
})

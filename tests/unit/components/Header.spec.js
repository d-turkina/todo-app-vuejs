import { createLocalVue, mount } from '@vue/test-utils';
import Header from '../../../src/components/Header';

const localVue = createLocalVue();

describe("Header component", () => {
	it("is VueInstance", () => {
		const wrapper = mount(Header, { localVue });
		expect(wrapper.isVueInstance()).toBe(true);
	});
	
	it("displays titles", () => {
		const wrapper = mount(Header, { localVue });
		expect(wrapper.find('h2').text()).toBe('The best To Do App at the whole World');
		expect(wrapper.find('span').text()).toBe(`There is two lists just to demonstrate to you scalability of solution I've delivered`);
	});
})

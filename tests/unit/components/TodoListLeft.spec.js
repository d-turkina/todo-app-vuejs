import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import routes from '../../../src/router/routes.js';
import TodoListLeft from "../../../src/components/TodoListLeft";

const localVue = createLocalVue();
localVue.use(VueRouter);

localVue.use(Vuex);
const mockedStore = new Vuex.Store({
	state: {
		todosLeft: {
			todos: [
				{ id: '312312', text: 'First of left', isCompleted: false },
				{ id: '432423', text: 'Second of left', isCompleted: false }
			]
		}
	}
});

describe("TodoListLeft component", () => {
	it("is VueInstance", () => {
		const router = new VueRouter({ routes, mode: 'history' });
		const wrapper = mount(TodoListLeft, { localVue, router, store: mockedStore });
		expect(wrapper.isVueInstance()).toBe(true);
	});
	
	it("can display list of todos", () => {
		const router = new VueRouter({ routes, mode: 'history' });
		const wrapper = mount(TodoListLeft, { localVue, router, store: mockedStore });
		expect(wrapper.findAll('li').length).toBeGreaterThanOrEqual(1);
	});
})

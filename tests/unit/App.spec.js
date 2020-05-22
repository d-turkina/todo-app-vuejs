import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '../../src/App.vue';
import VueRouter from 'vue-router';
import Lists from '../../src/views/Lists';
import Todo from '../../src/views/Todo';
import routes from '../../src/router/routes.js';

const localVue = createLocalVue();
localVue.use(VueRouter);

localVue.use(Vuex)
const mockedStore = new Vuex.Store({
	state: {
		todosLeft: {
				todos: [{ id: '312312', text: 'First of left', isCompleted: false }]
		},
		todosRight: {
				todos: [{ id: '423423', text: 'First of right', isCompleted: false }]
		}
	}
})

describe("App router", () => {
	it("renders Lists view by default", async () => {
		const router = new VueRouter({ routes, mode: 'history' });
		const appWrapper = mount(App, { localVue, router, store: mockedStore });
		await appWrapper.vm.$nextTick();
		expect(appWrapper.find(Lists).exists()).toBe(true);
	})
	
	it("renders Todo view by /todo/:id path", async () => {
		const router = new VueRouter({ routes, mode: 'history' });
		const appWrapper = mount(App, { localVue, router, store: mockedStore });
		await router.push("/todo/id");
		await appWrapper.vm.$nextTick();
		expect(appWrapper.find(Todo).exists()).toBe(true);
	})
})
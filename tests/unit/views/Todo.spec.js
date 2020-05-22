import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import Todo from '../../../src/views/Todo';

const localVue = createLocalVue();

localVue.use(Vuex);
const mockedStore = new Vuex.Store({
	state: {
		todosLeft: {
			todos: [{ id: '312312', text: `Shouldn't be matched`, isCompleted: false }]
		},
		todosRight: {
			todos: [{ id: '423423', text: `Should be matched`, isCompleted: false }]
		}
	}
});
describe("Todo view", () => {
	it("is VueInstance", () => {
		const wrapper = mount(Todo, {
			localVue,
			store: mockedStore,
			mocks: {
				$route: {
					params: { id: '423423' }
				}
			}
		});
		expect(wrapper.isVueInstance()).toBe(true);
	});
	
	it("displays data of specific todo", () => {
		const wrapper = mount(Todo, {
			localVue,
			store: mockedStore,
			mocks: {
				$route: {
					params: { id: '423423' }
				}
			}
		});
		expect(wrapper.vm.$data.id).toBe('423423');
		expect(wrapper.vm.$data.text).toBe('Should be matched');
		expect(wrapper.vm.$data.isCompleted).toBe(false);
	});
	
	it("displays default data if provided wrong todo id", () => {
		const wrapper = mount(Todo, {
			localVue,
			store: mockedStore,
			mocks: {
				$route: {
					params: { id: 'definitely-wrong-id' }
				}
			}
		});
		expect(wrapper.vm.$data.id).toBe('no data');
		expect(wrapper.vm.$data.text).toBe('no text');
		expect(wrapper.vm.$data.isCompleted).toBe(false);
	});
})
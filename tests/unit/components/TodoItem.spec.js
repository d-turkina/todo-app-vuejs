import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import TodoItem from '../../../src/components/TodoItem';
import routes from '../../../src/router/routes.js';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("TodoItem component", () => {
	it("is VueInstance", () => {
		const router = new VueRouter({ routes, mode: 'history' });

		const wrapper = mount(
			TodoItem,
			{
				localVue,
				router,
				propsData: {
					id: 'todoId',
					text: 'todo text',
					isCompleted: true
				}
			});
		expect(wrapper.isVueInstance()).toBe(true);
	});

	it("can emit remove event", () => {
		const router = new VueRouter({ routes, mode: 'history' });
		const wrapper = mount(
			TodoItem,
			{
				localVue,
				router,
				propsData: {
					id: 'todoId',
					text: 'todo text',
					isCompleted: true
				}
			}
		);
		const removeAction = wrapper.find('.todo-actions__remove');
		removeAction.trigger('click');
		expect(wrapper.emitted().remove).toEqual([['todoId']]);
	});
})

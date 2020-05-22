import mutations from '../../../../../src/store/modules/todosLeft/mutations';
import types from '../../../../../src/store/modules/todosLeft/types';

describe('Mutations', () => {

	it('ADD_TODO', () => {
		const state = { todos: [] };
		const newTodo = { id: '312312', text: 'TESTING TEXT', isCompleted: false };
		mutations[types.ADD_TODO](state, newTodo);
		expect(state.todos.length).toBeGreaterThanOrEqual(1);
		expect(state.todos[0].text).toBe(newTodo.text);
	});
	
	it('REMOVE_TODO', () => {
		const state = { todos: [{ id: '312312', text: 'mock text', isCompleted: false }] };
		mutations[types.REMOVE_TODO](state, '312312');
		expect(state.todos.length).toBe(0);
	});
	
	it('MARK_TODO_AS_COMPLETED', () => {
		const todo = { id: '312312', text: 'mock text', isCompleted: false };
		const state = { todos: [todo] };
		mutations[types.MARK_TODO_AS_COMPLETED](state, todo.id);
		expect(state.todos[0].isCompleted).toBe(true);
	});
	
	it('MARK_TODO_AS_UNCOMPLETED', () => {
		const todo = { id: '312312', text: 'mock text', isCompleted: false };
		const state = { todos: [todo] };
		mutations[types.MARK_TODO_AS_UNCOMPLETED](state, todo.id);
		expect(state.todos[0].isCompleted).toBe(false);
	});
	
});
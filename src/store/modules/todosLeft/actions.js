import types from './types';

export default {
	addTodo({ commit }, text) {
		const todo = { id: new Date().getTime().toString(), text, isCompleted: false };
		commit(types.ADD_TODO, todo);
	},
	removeTodo({ commit }, todoId) {
		commit(types.REMOVE_TODO, todoId);
	},
	markTodoAsCompleted({ commit }, todoId) {
		commit(types.MARK_TODO_AS_COMPLETED, todoId)
	},
	markTodoAsUncompleted({ commit }, todoId) {
		commit(types.MARK_TODO_AS_UNCOMPLETED, todoId)
	},
}
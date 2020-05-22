import types from './types';
import { UndoRedoTypes } from '../../../services/UndoRedoService';

export default {
	[types.ADD_TODO]: (state, todo) => {
		state.todos.push(todo);
	},
	[types.REMOVE_TODO]: (state, id) => {
		state.todos = state.todos.filter(todo => todo.id !== id);
	},
	[types.MARK_TODO_AS_COMPLETED]: (state, id) => {
		state.todos = state.todos.map(todo => todo.id === id ? { ...todo, isCompleted: true } : todo)
	},
	[types.MARK_TODO_AS_UNCOMPLETED]: (state, id) => {
		state.todos = state.todos.map(todo => todo.id === id ? { ...todo, isCompleted: false } : todo)
	},
		
	[UndoRedoTypes.CLEAR_STATE]: (state) => { // Service mutation of UndoRedo
		state.todos = []
	}
}
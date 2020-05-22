import { UndoRedoService, UndoRedoTypes } from '../../../services/UndoRedoService';
import mutations from '../todosLeft/mutations';
import actions from '../todosLeft/actions';

export default {
	namespaced: true,
	modules: {
		UndoRedoService: UndoRedoService()
	},
	state: { 
		todos: []
	},
	mutations: {
		...mutations,
		[UndoRedoTypes.CLEAR_STATE]: (state) => { // Service mutation of UndoRedo
			state.todos = []
		}
	},
	actions
}
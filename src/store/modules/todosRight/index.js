import { UndoRedoService, UndoRedoTypes } from '../../../services/UndoRedoService';
import mutations from '../todosLeft/mutations';
import actions from '../todosLeft/actions';

export default {
	namespaced: true,
	modules: {
		UndoRedoService: UndoRedoService()
	},
	state: { 
		todos: [
			{ id: '423423', text: 'First of right', isCompleted: false },
			{ id: '542312', text: 'Second of right', isCompleted: false }
		]
	},
	mutations: {
		...mutations,
		[UndoRedoTypes.CLEAR_STATE]: (state) => { // Service mutation of UndoRedo
			state.todos = [
				{ id: '312312', text: 'First of right', isCompleted: false },
				{ id: '432423', text: 'Second of right', isCompleted: false }
			]
		}
	},
	actions
}
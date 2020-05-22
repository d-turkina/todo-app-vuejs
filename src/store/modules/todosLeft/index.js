import { UndoRedoService } from '../../../services/UndoRedoService';
import actions from './actions';
import mutations from './mutations';

export default {
	namespaced: true,
	modules: {
		UndoRedoService: UndoRedoService()
	},
	state: { 
		todos: [
			{ id: '312312', text: 'First of left', isCompleted: false },
			{ id: '432423', text: 'Second of left', isCompleted: false }
		]
	},
	mutations,
	actions
}
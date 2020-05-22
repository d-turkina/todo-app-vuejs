import { UndoRedoService } from '../../../services/UndoRedoService';
import actions from './actions';
import mutations from './mutations';

export default {
	namespaced: true,
	modules: {
		UndoRedoService: UndoRedoService()
	},
	state: { 
		todos: []
	},
	mutations,
	actions
}
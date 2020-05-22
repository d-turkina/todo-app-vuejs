import Vue from 'vue';
import Vuex from 'vuex';

import { UndoRedoPlugin } from '../services/UndoRedoService';
import todosLeft from './modules/todosLeft'
import todosRight from './modules/todosRight'

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		todosLeft,
		todosRight
	},
	plugins:
		[
			UndoRedoPlugin('todosLeft'),
			UndoRedoPlugin('todosRight')
		]
})

export default store;


import Todo from '../views/Todo';
import Lists from '../views/Lists';

export default [
	{ path: '/todo/:id', name: 'Todo', component: Todo },
	{ path: '*', name: 'Lists', component: Lists }
]
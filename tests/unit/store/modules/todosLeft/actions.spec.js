import actions from '../../../../../src/store/modules/todosLeft/actions';
import types from '../../../../../src/store/modules/todosLeft/types';

const testAction = (action, payload, state, expectedMutations, done) => {
	let count = 0;
	const commit = (type, payload) => {
		const mutation = expectedMutations[count];
		try {
			expect(type).toBe(mutation.type);
			expect(payload).toEqual(mutation.payload);
		} catch (error) {
			done(error);
		}
		count++;
		if (count >= expectedMutations.length) {
			done();
		}
	};
	action({ commit, state }, payload);
	if (expectedMutations.length === 0) {
		expect(count).toBe(0);
		done();
	}
};

describe("Actions", () => {
	it('addTodo', done => {
		const expectedText = "TESTING TEXT";
		testAction(
			actions.addTodo,
			expectedText,
			{},
			[
				{
					type: types.ADD_TODO,
					payload: { id: new Date().getTime().toString(), text: expectedText, isCompleted: false }
				}
			],
			done
		);
	});
	
	it('removeTodo', done => {
		testAction(
			actions.removeTodo,
			'ID',
			{},
			[
				{
					type: types.REMOVE_TODO,
					payload: 'ID'
				}
			],
			done
		);
	});
	
	it('markTodoAsCompleted', done => {
		testAction(
			actions.markTodoAsCompleted,
			'ID',
			{},
			[
				{
					type: types.MARK_TODO_AS_COMPLETED,
					payload: 'ID'
				}
			],
			done
		);
	});
	
	it('markTodoAsUncompleted', done => {
		testAction(
			actions.markTodoAsUncompleted,
			'ID',
			{},
			[
				{
					type: types.MARK_TODO_AS_UNCOMPLETED,
					payload: 'ID'
				}
			],
			done
		);
	});
});
const sharedTypes = {
	CLEAR_STATE: 'CLEAR_STATE',
}

const types = {
	...sharedTypes,
	TRACK_MUTATION: 'TRACK_MUTATION',
	CLEAR_STASHED_MUTATION: 'CLEAR_STASHED_MUTATION',
	PROTECT_MUTATION: 'PROTECT_MUTATION',
	UNPROTECT_MUTATION: 'UNPROTECT_MUTATION'
}

const undoRedoModule = () => ({
		state: {
			trackedMutations: [],
			stashedMutations: [],
			protectMutation: true
		},
		
		mutations: {
			[types.TRACK_MUTATION]: (state, mutation) => {
				state.trackedMutations.push(mutation);
			},
			[types.CLEAR_STASHED_MUTATION]: (state) => {
				state.stashedMutations = [];
			},
			[types.PROTECT_MUTATION]: (state) => {
				state.protectMutation = true;
			},
			[types.UNPROTECT_MUTATION]: (state) => {
				state.protectMutation = false;
			}
		},
		
		actions: {
			undo({ commit, state }) {
				state.stashedMutations.push(state.trackedMutations.pop());
				commit(types.PROTECT_MUTATION);
				commit(types.CLEAR_STATE);
				state.trackedMutations.forEach(mutation => {
					if (mutation.type) {
						commit(mutation.type, mutation.payload);
						state.trackedMutations.pop();
					}
				});
				commit(types.UNPROTECT_MUTATION);
			},
			redo({ commit, state }) {
				const mutation = state.stashedMutations.pop();
				if (mutation) {
					commit(types.PROTECT_MUTATION);
					commit(mutation.type, mutation.payload);
					commit(types.UNPROTECT_MUTATION);
				}
			}
		}
	}
)

const undoRedoPlugin = namespace => store => {
	store.subscribe((mutation) => {
		const clearMutationType = mutation.type.replace(`${namespace}/`, '');
		if (mutation.type.startsWith(namespace) && !Object.values(types).includes(clearMutationType)) { // Ensure handling only required mutation && Don't track mutation produced by UndoRedoModule
			store.commit(
				namespace ? `${namespace}/${types.TRACK_MUTATION}`: types.TRACK_MUTATION,                   // Track mutation by relevant mutation of UndoRedoModule
				{ ...mutation, type: clearMutationType }                                                    // Trimming namespace from mutation type to run mutation from inside the module
			);
			
			const isMutationProtected = namespace ? store.state[namespace].UndoRedoService.protectMutation : store.state.UndoRedoService.protectMutation;
			if (!isMutationProtected) {
				store.commit(namespace ? `${namespace}/${types.CLEAR_STASHED_MUTATION}`: types.CLEAR_STASHED_MUTATION);
			}
		}

	})
}

export { undoRedoPlugin as UndoRedoPlugin, undoRedoModule as UndoRedoService, sharedTypes as UndoRedoTypes}
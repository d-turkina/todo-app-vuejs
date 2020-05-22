<template>
	<div class="todo">
		<div class="todo-text">
			<router-link
				:class="`todo-text__link ${isCompleted && 'todo-text__link--completed'}`"
				:to="`/todo/${id}`"
			>
				{{text}}
			</router-link>
		</div>
		<div class="todo-actions">
			<input
				v-model="stateOfComplete"
				class="todo-actions__complete"
				type="checkbox"
			/>
			<span
				class="todo-actions__remove"
				@click="onClickRemove"
			>
				remove
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TodoItem',
		props: {
			id: {
				required: true,
				type: String,
				default: ''
			},
			text: {
				required: true,
				type: String,
				default: 'No text'
			},
			isCompleted: {
				required: true,
				type: Boolean,
				default: false
			}
		},
		computed: {
			stateOfComplete: {
				get() {
					return this.isCompleted
				},
				set(checked) {
					if (checked) {
						this.$emit('complete', this.id)
					} else {
						this.$emit('uncomplete', this.id)
					}
				}
			}
		},
		methods: {
			onClickRemove() {
				this.$emit('remove', this.id)
			}
		}
	}
</script>

<style lang="scss">
	.todo {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 10px;
		border-bottom: solid 1px #EEEEEE;
		
		&-text {
			display: flex;
			flex-grow: 1;
			align-self: center;
			
			
			&__link {
				color: #444444;
				text-decoration: none;
				cursor: pointer;
				&--completed {
					text-decoration: line-through;
				}
			}
		}
		
		&-actions {
			display: flex;
			flex-direction: row;
			
			&__complete {
				display: flex;
				align-self: center;
				margin: 0 5px;
			}

			&__remove {
				display: flex;
				align-self: center;
				margin: 0 5px;
				cursor: pointer
			}
		}
	}
</style>
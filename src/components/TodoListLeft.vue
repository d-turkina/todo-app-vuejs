<template>
	<div class="todo-list-box">
		<span class="todo-list-title">todosLeft namespace</span>
		<InputForm @submit="addTodo" />
		<ul class="todo-list">
			<li
				v-for="{ id, text, isCompleted } in todos"
				:key="id"
				class="todo-list-item"
			>
				<todo-item
					:id="id"
					:text="text"
					:is-completed="isCompleted"
					@complete="markTodoAsCompleted(id)"
					@uncomplete="markTodoAsUncompleted(id)"
					@remove="removeTodo(id)"
				/>
			</li>
		</ul>
		<div class="todo-list-actions">
			<a @click.prevent="undo" class="todo-list__action">undo</a>
			<a @click.prevent="redo" class="todo-list__action">redo</a>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
	import InputForm from '../components/InputForm';
	import TodoItem from './TodoItem';
	
	export default {
		name: 'TodoListLeft',
		components: {
			InputForm,
			TodoItem
		},
		computed: {
			...mapState({
				todos: state => state.todosLeft.todos
			})
		},
		methods: {
			...mapActions({
				markTodoAsCompleted: 'todosLeft/markTodoAsCompleted',
				markTodoAsUncompleted: 'todosLeft/markTodoAsUncompleted',
				removeTodo: 'todosLeft/removeTodo',
				undo: 'todosLeft/undo',
				redo: 'todosLeft/redo',
				addTodo: 'todosLeft/addTodo'
			})
		}
	}
</script>

<style scoped lang="scss">
	.todo-list-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: fit-content;
		max-width: 380px;
		background-color: #FFFFFF;
		border-radius: 3px;
		box-shadow: 0 2px 10px 2px rgba(0,0,0,0.15);
		padding: 15px 30px 30px 30px;
		margin: 20px;
	}
	
	.todo-list {
		padding: 0;
		
		&-title {
			font-size: 24px;
			color: #444444;
			text-align: center;
			margin: 15px;
		}
		
		&-actions {
			display: flex;	
			flex-direction: row;
			justify-content: center;
			user-select: none;
		}
		
		&__action {
			margin: 10px;
			border: 1px solid #EEEEEE;
			border-radius: 3px;
			font-size: 24px;
			padding: 10px;
			color: #444444;
			outline: none;
			cursor: pointer;
			
			&:hover {
				background-color: #EDEDED;
			}
			
			&:active {
				transform: scale(.97);
			}
		}
	}
	
	.todo-list-item {
		list-style: none;
		
		&:hover {
			background-color: #F2F2F2;
		}
	}
</style>
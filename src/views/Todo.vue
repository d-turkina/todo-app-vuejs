<template>
	<div class="todo-info">
		<h3>Todo info</h3>
		<p>id - {{id}}</p>
		<p>text - {{text}}</p>
		<p>{{isCompleted ? `is completed`: `isn't completed`}}</p>
		<a
			href="/"
			class="todo-info__back"
		>
			<span>go back</span>
		</a>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	
	export default {
		name: 'Todo',
		data() {
			return {
				id: '',
				text: '',
				isCompleted: ''
			}
		},
		computed: {
			...mapState({
				todosLeft: state => state.todosLeft.todos,
				todosRight: state => state.todosRight.todos,
			})
		},
		mounted() {
			const todos = [...this.todosLeft, ...this.todosRight];
			const { id = 'no data', text = 'no text', isCompleted = false } = (todos.find(todo => todo.id === this.$route.params.id) || {})
			this.id = id;
			this.text = text;
			this.isCompleted = isCompleted
		}
	}

</script>

<style scoped lang="scss">
	.todo-info {
		text-align: center;
		
		&__back {
			position: absolute;
			top: 20px;
			left: 20px;
			color: #444444;
			text-decoration: underline;
			cursor: pointer;
		}
	}
</style>
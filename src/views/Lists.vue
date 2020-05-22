<template>
	<div class="container">
		<Header />
		<div class="lists">
			<TodoListLeft />
			<TodoListRight />
		</div>
	</div>
</template>

<script>
	import Header from '../components/Header';
	import TodoListLeft from '../components/TodoListLeft';
	import TodoListRight from '../components/TodoListRight';
	
	export default {
		name: 'List',
		components: {
			Header,
			TodoListLeft,
			TodoListRight
		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
	}
	.lists {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 40px 0;
	}
</style>
<template>
	<div class="todo-wrapper">
		<div class="todo-info">
			<span class="info__label">Todo info</span>
			<ul class="info-list">
				<li class="info-list-item">
					<div class="info-list-item__label">
						<span>Identificator:</span>
					</div>
					<div class="info-list-item__content">
						<span>{{id}}</span>
					</div>
				</li>
				<li class="info-list-item">
					<div class="info-list-item__label">
						<span>Text:</span>
					</div>
					<div class="info-list-item__content">
						<span>{{text}}</span>
					</div>
				</li>
				<li class="info-list-item">
					<div class="info-list-item__label">
						<span>Status:</span>
					</div>
					<div class="info-list-item__content">
						<span>{{isCompleted ? `completed`: `not completed`}}</span>
					</div>
				</li>
			</ul>
			<router-link
				to="/"
				class="todo-info__back"
			>
				<span>Back</span>
			</router-link>
		</div>
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
	.info {
		&__label {
			font-size: 24px;
			color: #444444;
		}
	}
	
	.todo {
		&-wrapper {
			display: flex;
			justify-content: center;
			height: 100vh;
			width: 100vw;
		}
		
		&-info {
			margin-top: 100px;
			padding: 20px 40px;
			box-shadow: 0 2px 4px 2px rgba(0,0,0,0.15);
			border-radius: 3px;
			background-color: #FFFFFF;
			height: fit-content;
			min-width: 400px;
			
			&__back {
				position: absolute;
				top: 20px;
				left: 20px;
				color: #444444;
				cursor: pointer;
				text-decoration: none;
				background-color: #FAFAFA;
				border-radius: 5px;
				box-shadow: -2px 0px 4px 1px rgba(0, 0, 0, 0.15);
				padding: 10px 15px;
				
				&:hover {
					transition-duration: .05s;
					background-color: #FFFFFF;
				}
			}
		}
	}
	
	.info-list {
		margin: 20px 0;
		padding: 0;
		list-style: none;
		
		&-item {
			display: flex;
			flex-direction: row;
			padding: 5px 10px;
			font-size: 18px;
			
			&:nth-child(odd) {
				background-color: #EFEFEF;
			}
			
			&__label {
				display: flex;
				justify-content: left;
				align-content: center;
				flex-basis: 30%;
				color: #666666;
			}
			
			&__content {
				display: flex;
				justify-content: center;
				align-content: center;
				color: #333333;
			}
		}
	}
</style>
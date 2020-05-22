<template>
	<div class="input-box">
		<input
			v-model="text"
			type="text"
			@keydown="onSubmit($event)"
			class="input"
			placeholder="Put something down..."
		>
	</div>
</template>

<script>
	export default {
		name: 'InputForm',
		data() {
			return {
				text: ''
			}
		},
		methods: {
			onSubmit(event) {
				if (event.code === 'Enter' && this.text.trim()) {
					this.$emit('submit', this.text.trim());
					this.text = '';
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.input {
		box-sizing: border-box;
		width: 100%;
		font-size: 24px;
		padding: 6px 10px;
	}
</style>
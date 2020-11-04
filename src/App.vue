<template>
	<div id="app">
		<the-navigation />
		<router-view />
	</div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'

export default {
	components: {
		TheNavigation,
	}
}
</script>


<style lang="scss">
@import './main.scss';

#app {
    font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $blue;
}
</style>

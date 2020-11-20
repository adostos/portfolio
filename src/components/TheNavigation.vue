<template>
    <nav class="nav">
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
		<router-link to="/skills">Skills</router-link>
		<router-link to="/education">Education</router-link>
		<router-link to="/experience">Experience</router-link>
		<router-link to="/portfolio">Portfolio</router-link>
		<router-link to="/gallery">Gallery</router-link>
		<!-- <router-link to="/contact">Contact</router-link> -->
	</nav>
</template>

<style lang="scss" scoped>
@import '../main.scss';

.nav {
	background-color: $blue;
    margin: 0.8em 2em auto;
	padding: 0 1.25em;
	display: inline-block;
	//border-bottom: 3px solid $green;
	border-radius: 2.5em;

	a {
		color: $blue;
		color: $white;
		font-size: 1.1em;
		font-weight: 800;
		text-decoration: none;
		cursor: pointer;
		padding: 0.575em 0.65em;
		display: inline-block;

		margin: 0 0.5em;
		transition: all 0.2s ease-in-out;

		&:hover, &:focus {
			color: $red;
		}

		&.router-link-exact-active {
			color: $green;
		}
	}
}

@media screen and (max-width: 1037px) {
	.nav {
		margin-top: 10px;
		padding: 7px;

		a {
			margin: 0 10px;
			padding: 0;
		}
	}
}

@media screen and (max-width: 593px) {
	.nav {
		margin: 10px 0;
		padding: 3px;

		a {
			margin: 0 10px;
			padding: 5px 0;
		}
	}
}
</style>
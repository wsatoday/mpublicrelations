<template>
	<div id="app" v-cloak>
		<app-loader></app-loader>
		<app-header></app-header>
		<app-main></app-main>
		<app-footer></app-footer>
	</div>
</template>
<script>
	import Loader from './Loader';
	import Header from './Header';
	import Main from './Main';
	import Footer from './Footer';

	export default {
		name: 'app',
		components: {
			//'app-progress-loader': ProgressLoader,
			'app-loader': Loader,
			'app-header': Header,
      		'app-main': Main,
      		'app-footer': Footer
		}
	}
</script>
<template>
	<div class="loader is--visible" id="js-loader">
		<div class="loader__load-bar" id="js-load-bar">
		  <div class="loader__bar"></div>
		  <div class="loader__bar"></div>
		  <div class="loader__bar"></div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'app-loader',
		mounted() {
			Event.$on('hide-loader', this.hideLoader);
			Event.$on('show-loader', this.showLoader);
		},
		methods: {
			hideLoader() {
  				const loader = document.getElementById('js-loader');
  				const loadBar = document.getElementById('js-load-bar');
  				if (!loadBar.classList.contains('is--visible')) {
  					setTimeout(() => {
  						loadBar.classList.add('is--visible');
  					}, 200);
  				}
  				setTimeout(() => {
  					loader.classList.remove('is--opaque');
  					loader.classList.add('is--transparent');
  					setTimeout(() => {
  						loadBar.classList.remove('is--visible');
  						loader.classList.remove('is--visible');
  						loader.classList.add('is--hidden');
  					}, 600);
  				}, 2000);
			},
			showLoader() {
				const loader = document.getElementById('js-loader');
				const loadBar = document.getElementById('js-load-bar');
  				loader.classList.remove('is--hidden');
  				loader.classList.add('is--visible');
  				loader.classList.remove('is--transparent');
				loader.classList.add('is--opaque');
				setTimeout(() => {
					loadBar.classList.add('is--visible');
				}, 200);
			}
		}
	}
</script>
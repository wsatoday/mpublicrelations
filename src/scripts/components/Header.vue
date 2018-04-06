<template>
	<header class="main-header" id="js-main-header">
		<router-link class="logo-home" exact :to="'/'">
			<svg id="js-logo" class="logo-M logo-m-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">
				<g>
					<path class="st0" d="M199,171.6c0,9.6,0,18.9,0,28.5c-66,0-131.8,0-197.9,0c0-9.4,0-18.8,0-28.5C66.9,171.6,132.8,171.6,199,171.6z
						"/>
					<path class="st0" d="M168.9,0.1c-23,34.1-45.9,68.2-69.1,102.7C76.5,68.2,53.5,34,30.7,0.1c-10.2,0-19.9,0-29.7,0
						c0,51.4,0,102.7,0,153.7c12.6,0,24.8,0,37.5,0c0-24.3,0-48.6,0-72.6c0.2-0.1,0.5-0.1,0.7-0.2c16.1,24.3,32.3,48.5,48.4,72.8
						c8.1,0,16.1,0,24.4,0c16.2-24.2,32.5-48.6,48.8-72.9c0.3,0.1,0.6,0.3,0.9,0.4c0,24,0,48.2,0,72.5c12.6,0,24.8,0,37.3,0
						c0-51.4,0-102.5,0-153.7H168.9z"/>
				</g>
			</svg>
		</router-link>
		<div class="menu-btn-wrap" id="js-menu-btn-wrap" v-on:click="toggleMenu">
			<div class="menu-btn" id="js-menu-btn"></div>
		</div>
		<div class="menu is--hidden" id="js-menu">
			<nav class="nav">
				<ul class="menu-items">
					<li class="display-menu-items">
						<router-link class="main-navigation__link menu-item" exact :to="'/sobre'">Sobre</router-link>
					</li>
					<li class="display-menu-items">
						<router-link class="main-navigation__link menu-item" exact :to="'/servicos'">Serviços</router-link>
					</li>
					<li class="display-menu-items">
						<router-link class="main-navigation__link menu-item" exact :to="'/clientes'">Clientes</router-link>
					</li>
					<li class="display-menu-items">
						<router-link class="main-navigation__link menu-item" exact :to="'/equipa'">Equipa</router-link>
					</li>
					<li class="display-menu-items">
						<router-link class="main-navigation__link menu-item" exact :to="'/contactos'">Contactos</router-link>
					</li>
				</ul>
				<ul class="social-icons"> <!-- Social icons -->
					<li>
						<a class="social-icon" href="https://www.facebook.com/MPublicRelationsPT/" target="_blank">
							<img src="client/images/fb.svg" alt="Facebook">
						</a>
					</li>
					<li>
						<a class="social-icon" href="https://www.linkedin.com/company/11017670/" target="_blank">
							<img src="client/images/linkedin.svg" alt="Linkedin">
						</a>
					</li>
				</ul>
			</nav>
			<ul class="language"> <!-- Language -->
				<li><a class="language-item is--active" href="#">PT</a></li>
				<li><a class="language-item" href="#">EN</a></li>
			</ul>
		</div>
	</header>
</template>
<script>
  export default {
    name: 'app-header',
    mounted() {
    	Event.$on('show-loader', this.closeMenu);
    },
    methods: {
    	toggleMenu() {
    		const menu =  document.getElementById('js-menu');
			const menuBtn = document.getElementById('js-menu-btn');
			const logo = document.getElementById('js-logo');

			menu.classList.toggle('active');
			menuBtn.classList.toggle('active');
			if (menu.classList.contains('is--hidden')) {
				menu.classList.remove('is--hidden');
				menu.classList.add('is--visible');
				logo.classList.add('is--active');
			} else {
				menu.classList.add('is--hidden');
				menu.classList.remove('is--visible');
				logo.classList.remove('is--active');
			}
    	},
    	closeMenu() {
    		const menu =  document.getElementById('js-menu');
			const menuBtn = document.getElementById('js-menu-btn');
			const logo = document.getElementById('js-logo');

			menu.classList.remove('active');
			menuBtn.classList.remove('active');
			menu.classList.add('is--hidden');
			menu.classList.remove('is--visible');
			logo.classList.remove('is--active')
    	}
    }
  }
</script>
<template>
	<div class="page page--services">
		<section class="services-content">
			<header class="services__header">
				<h1 class="services__title" v-apparate:fade-in-up="{delay:1000}">Serviços</h1>
				<h2 class="services__subtitle" v-apparate:fade-in-up="{delay:1000}">Skills 360º</h2>
			</header>
			<div class="selected-option">
				<h4 class="selected-option__title" id="js-selected-option__title"></h4>
				<p class="selected-option__desc" id="js-selected-option__desc"></p>
			</div>
		</section>
		<nav class="services-navigation is--hidden" id="js-services-navigation">
			<ul>
				<li></li>
				<li>
					<a class="services__link" href="#" data-title="Aconselhamento estratégico para comunicação integrada" data-desc="Desenvolvimento, implementação e acompanhamento do plano de comunicação interno e externo e da estratégia integrada de gestão de informação com vista ao desenvolvimento da imagem do cliente enquanto entidade de referência nas áreas onde atua. Essa estratégia não esquece a vertente digital. O nosso dinamismo permite responder com mais eficácia e rapidez aos desafios nessa matéria. Faremos um aconselhamento estratégico em todas as áreas com impacto na reputação de uma empresa ou instituição." @click="showService">
						<span>Aconselhamento estratégico para<br> comunicação integrada</span>
					</a>
				</li>
				<li>
					<a class="services__link" href="#" data-title="Assessoria de imprensa" data-desc="O conhecimento dos jornalistas é uma das bases do nosso sucesso. Conhecemos os mecanismos de funcionamento das redações e dos seus interlocutores, tirando vantagem de já termos sido jornalistas no passado. Ao contrário de outras agências, o nosso conhecimento da imprensa vai além dos órgãos generalistas ou económicos. É feito também com a imprensa de outros setores: lifestyle, turismo, automóvel, retalho, distribuição, social, televisão, entre outros." @click="showService">
						<span>Assessoria de imprensa</span>
					</a>
				</li>
				<li>
					<a class="services__link" href="#" data-title="Consultoria em Comunicação e Imagem" data-desc="Análise e aconselhamento no que respeita às ferramentas de comunicação existentes e a desenvolver. Colocação em prática dos planos de comunicação e gestão diária do relacionamento com os media. Preparação das intervenções dos diferentes speakers da empresa junto da imprensa (Q&amp;A, comunicados, discursos, entre outros)." @click="showService">
						<span>Consultoria em Comunicação e<br> Imagem</span>
					</a>
				</li>
				<li>
					<a class="services__link" href="#" data-title="Media Relations" data-desc="Criamos proximidade, envolvimento e goodwill dos jornalistas prioritários para com os interesses do cliente e identificamos e acompanhamos a agenda mediática e oportunidades de divulgação positiva da empresa ou instituição." @click="showService">
						<span>Media Relations</span>
					</a>
				</li>
				<li>
					<a class="services__link" href="#" data-title="Base de dados de contactos análise de clipping e reports" data-desc="Identificação dos públicos-alvo relevantes para o cliente e para o seu plano estratégico (media, opinion makers, endorsers e outros stakeholders relevantes...), análise de clipping e report." @click="showService">
						<span>Base de dados de contactos, análise<br> de clipping e reports</span>
					</a>
				</li>
				<li>
					<a class="services__link" href="#" data-title="Gestão de crises" data-desc="Atuamos na deteção e prevenção de crise e ajudamos a resolver possíveis crises existentes." @click="showService">
						<span>Gestão de crises</span>
					</a>
				</li>
				<li>
					<a class="services__link" href="#" data-title="Public affairs" data-desc="Identificação de contactos necessários para a administração da instituição e sua prossecução com sucesso." @click="showService">
						<span>Public Affairs</span>
					</a>
				</li>
				<li></li>
			</ul>
		</nav>
		<button class="btn--toggle-services" id="js-btn--toggle-services" @click="toggleServices">
			<span>Sectores</span>
		</button>
	</div>
</template>
<script>
	export default {
		metaInfo () {
	      return {
	        title: 'M Public Relations - Serviços',
	        bodyAttrs: {
	          class: 'services'
	        }
	      }
	    },
		methods: {
			toggleServices(e) {
				const btn = e.currentTarget;
				const servicesNav = document.getElementById('js-services-navigation');
				if (servicesNav.classList.contains('is--hidden')) {
					servicesNav.classList.remove('is--hidden');
					servicesNav.classList.add('is--visible');
					btn.classList.add('is--active');
				} else {
					servicesNav.classList.remove('is--visible');
					servicesNav.classList.add('is--hidden');
					setTimeout(() => {
						btn.classList.remove('is--active');
					}, 600);
				}
			},
			showService(e) {
				e.preventDefault();
				const btn = e.currentTarget;
				const title = btn.getAttribute('data-title');
				const desc = btn.getAttribute('data-desc');
				const selectedOptionTitle = document.getElementById('js-selected-option__title');
				const selectedOptionDesc = document.getElementById('js-selected-option__desc');
				const servicesLink = document.querySelectorAll('.services__link');
				const btnToggleServices = document.getElementById('js-btn--toggle-services');

				selectedOptionTitle.classList.remove('is--visible');
				selectedOptionDesc.classList.remove('is--visible');

				setTimeout(() => {
			    	selectedOptionTitle.innerHTML = '';
			    	selectedOptionDesc.innerHTML = '';
			    	selectedOptionTitle.classList.remove('is--active');
			    	selectedOptionTitle.innerHTML = title;
			    	setTimeout(() => {
			      		selectedOptionTitle.classList.add('is--visible');
			      		setTimeout(() => {
			        		selectedOptionTitle.classList.add('is--active');
			        		setTimeout(() => {
			          			selectedOptionDesc.innerHTML = desc;
			          			setTimeout(() => {
			           				selectedOptionDesc.classList.add('is--visible');
			          			}, 300);
			        		}, 600);
			      		}, 600);
			    	}, 300);
			  	}, 300);


			  	[].forEach.call(servicesLink, (service, index) => {
			  		service.classList.remove('is--active');
			  	});


  				btn.classList.add('is--active');
  				btnToggleServices.click();
			}
		}
	}
</script>
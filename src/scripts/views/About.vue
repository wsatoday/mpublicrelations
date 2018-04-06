<template>
	<div class="page page--about">
		<!-- Image & Title -->

		<section class="section-cover" id="js-section-cover--about"> <!-- Insert image as background -->
			<div class="m-multiply-wrap">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 1920 1492" style="enable-background:new 0 0 1920 1492;" xml:space="preserve" class="m-multiply">
				<g>
					<g>
						<path class="st0" d="M1920,1491.3c-121.2,0-239.7,0-361.6,0c0-235.5,0-468.8,0-702c-3-1.3-6-2.5-9-3.8
							c-157.8,235.8-315.6,471.6-473.1,706.8c-80,0-157.3,0-236.2,0c-156.6-235.4-313.1-470.7-469.6-706c-2.4,0.5-4.8,1.1-7.3,1.6
							c0,233.3,0,466.7,0,702.9c-123.1,0-241.5,0-363.3,0C0,995.5,0,499.8,0,1.3c94.6,0,189.5,0,287.9,0
							c221.6,329.2,444.6,660.6,670.3,996c225.4-334.8,448.3-666,671.2-997.3c97,0,192.2,0,290.5,0C1920,496.9,1920,992.6,1920,1491.3z"
							/>
					</g>
				</g>
			</svg>
			</div>
			
			<div class="section-margin-cover">
				<h1 class="title" v-apparate:fade-in-up="{delay:1000}">Sobre</h1>
				<!-- <h2 class="subtitle">Uma agência de comunicação e relações públicas</h2> -->
			</div>
		</section>

		<!-- M --> 
		<section class="sobre-wrap">
			<section class="m-container sobre-margin-left">
				<p class="text-1"  data-aos="fade"  v-apparate:fade-in-up="{delay:500}">A M PUBLIC RELATIONS presta serviços de consultoria de comunicação estreitamente ligada às estratégias de crescimento dos seus clientes, com os mais elevados padrões de qualidade e rigor.</p>
			</section>

			<section class="section--sobre sobre-margin-right">
				<p class="text-2 text-2-margin-bottom"  v-apparate:fade-in-up="{delay:500}">Todos os projetos partem de uma análise cuidada à instituição em questão, tanto em termos internos como externos, desenhando-se, depois e em conjunto, projetos de comunicação que, de forma coerente, chegarão a todos o seus targets (sejam eles os media, o público em geral ou os colaboradores). Somos um parceiro de confiança, com uma postura discreta, que potencia as sinergias entre os nossos clientes e que melhora a sua relação com a imprensa em sentido lado.</p>
				<p class="text-2 text-2-margin-bottom"  v-apparate:fade-in-up="{delay:500}">A M Public Relations é composta por uma equipa experiente e dinâmica, formada por ex-jornalistas, colaboradores com experiência de agência e colaboradores especializados na área digital, que desenvolvem projetos integrados de comunicação.</p>
				<p class="text-2"  v-apparate:fade-in-up="{delay:500}">A chave do sucesso da comunicação é a proatividade e a relação próxima com os diferentes órgãos de comunicação social e jornalistas. Preferimos comunicar a esperar que alguém o faça por nós. Por isso, termos sempre um consultor disponível para todas as necessidades do cliente, apoiado por um back office multidisciplinar, 24 horas por dia, 7 dias por semana.</p>
			</section>

		</section>

		<section class="section-sobre"  v-apparate:fade-in-up="{delay:500}"> <!-- Insert image as background   section-margin padding-tops-->
			<p class="text-2 text-3 position-absolute-red">Acreditamos que só uma relação próxima com o cliente, baseada em contactos regulares, pode melhorar a comunicação como um todo.</p>
			<div class="red-box"></div>
		</section>
	</div>
</template>
<script>
 	import {offsetTop} from './../utils';

	export default {
		metaInfo () {
	      return {
	        title: 'M Public Relations - Sobre',
	        bodyAttrs: {
	          class: 'about'
	        }
	      }
	    },
		mounted() {
			const section = document.getElementById('js-section-cover--about');
			offsetTop(section);
		}
	}
</script>
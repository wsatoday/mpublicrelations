<template>
	<div class="page page--team">
		<!-- Image & Title -->
		<section class="section-cover" id="js-section-cover--team"> <!-- Insert image as background -->
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
			
			<div class="section-margin-cover margin-right-cover">
				<h1 class="title" v-apparate:fade-in-up="{delay:1000}">Equipa</h1>
				<!-- <h2 class="subtitle">Uma equipa experiente e dinâmica, formada por especialistas em áreas complementares que desenvolvem projetos integrados de comunicação.</h2> -->
			</div>
		</section>

		<!-- Team -->
		<section class="container-section">
			<div class="container-team">

				<!-- *********** Member Daniel Vaz -->
				<div class="member js-member" id="js-member">
				  	<div class="item" @click="showModal"  v-apparate:fade-in-up="{delay:500}">
				  		<div class="circle">
				  			<img src="client/images/equipa/daniel-vaz-1.jpg" class="foto-perfil-1">
							<div class="overlay">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="more">
									<g>
										<polygon class="st0" points="50,21 29,21 29,0 21,0 21,21 0,21 0,29 21,29 21,50 29,50 29,29 50,29 	"/>
									</g>
								</svg>
							</div>
				  		</div>
						<h3>Daniel Vaz</h3> <!-- Nome -->
						<h4>Diretor Geral</h4> <!-- Cargo -->
					</div>

					<!-- PopUp - Detalhes -->
					<div class="description is---hidden" id="js-description-1">

						<div class="">
							
							<!-- Close Description Btn --> 
							<svg id="js-close-1" class="close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" @click="hideModal"> 
							    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
							    <path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</div>

						<!-- Picture detail -->
						<div class="detail-picture-wrap">
							<picture class="detail-picture">
								<source media="(min-width: 1024px)" srcset="client/images/equipa/daniel-vaz-l-1x.jpg, client/images/equipa/daniel-vaz-l-2x.jpg 2x">
								<!--<source media="(min-width: 768px)" srcset="client/images/equipa/daniel-vaz-medium1x.jpg, client/images/example-medium2x.jpg 2x">-->
								<img src="client/images/equipa/daniel-vaz-l-1x.jpg" srcset="client/images/equipa/daniel-vaz-l-2x.jpg 2x" alt="Responsive Image Example">
							</picture>	
						</div> 

						<div class="description-wrap">
							<!-- Info detail -->
							<div class="team-detail-red section-margin">
								<h5 class="name-detail">Daniel Vaz</h5> 
								<h6 class="position-detail">Diretor Geral</h6> 
								<p class="bio-detail">Formou-se em jornalismo pela Universidade do Porto, tendo passado pela RTP, “Diário Económico” e “Jornal de Negócios”. Entrou para a JLM & Associados em maio de 2007, sendo responsável até à presente data pela comunicação institucional e estratégica do Grupo IMPRESA e das suas marcas, tal como SIC, SIC Notícias ou “Expresso”. Fundou e foi diretor geral da agência de talentos Notable, no grupo JLM, entre abril de 2014 e julho de 2016. A partir de novembro de 2014, assumiu também o cargo de diretor-geral da M Public Relations.</p> 
							</div>
							<!-- Contacts detail -->
							<a href="#" class="mail-detail section-margin"><p class="mail-p">dvaz@mpublicrelations.pt</p></a>
							<a href="#" class="phone-detail section-margin"><p class="phone-p">M: +351 969 521 168</p></a>
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="linkedin-logo  section-margin">
								<g>
									<path class="st0" d="M25,49.5c-13.5,0-24.5-11-24.5-24.5c0-13.5,11-24.5,24.5-24.5c13.5,0,24.5,11,24.5,24.5
										C49.5,38.5,38.5,49.5,25,49.5z M25,2.5C12.6,2.5,2.5,12.6,2.5,25c0,12.4,10.1,22.5,22.5,22.5c12.4,0,22.5-10.1,22.5-22.5
										C47.5,12.6,37.4,2.5,25,2.5z"/>
								</g>
								<g>
									<path d="M35.5,27.3V35H31v-7.2c0-1.8-0.6-3.1-2.3-3.1c-1.2,0-2,0.8-2.3,1.6c-0.1,0.3-0.1,0.7-0.1,1.1V35h-4.5c0,0,0.1-12.2,0-13.5
										h4.5v1.9c0,0,0,0,0,0h0v0c0.6-0.9,1.7-2.2,4-2.2C33.3,21.2,35.5,23.1,35.5,27.3L35.5,27.3z M17.1,15c-1.5,0-2.5,1-2.5,2.3
										c0,1.3,1,2.3,2.5,2.3h0c1.6,0,2.5-1,2.5-2.3C19.6,16,18.6,15,17.1,15L17.1,15z M14.8,35h4.5V21.5h-4.5V35z M14.8,35"/>
								</g>
							</svg>
							<a href="equipa.html" class="button section-margin">Contactar</a> 
						</div>
						
					</div> 
				</div>

				<!-- *********** Member Ana Torres Pereira -->
				<div class="member js-member" id="js-member">
				  	<div class="item" @click="showModal"  v-apparate:fade-in-up="{delay:500}">
				  		<div class="circle">
				  			<img src="client/images/equipa/Ana-Torres-Pereira-1.jpg" class="foto-perfil-1">
							<div class="overlay">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="more">
									<g>
										<polygon class="st0" points="50,21 29,21 29,0 21,0 21,21 0,21 0,29 21,29 21,50 29,50 29,29 50,29 	"/>
									</g>
								</svg>
							</div>
				  		</div>
						<h3>Ana Torres Pereira</h3> <!-- Nome -->
						<h4>Diretora Executiva</h4> <!-- Cargo -->
					</div>

					<!-- PopUp - Detalhes -->
					<div class="description is---hidden" id="js-description-1">

						<div class="">
							
							<!-- Close Description Btn --> 
							<svg @click="hideModal" id="js-close-1" class="close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
							    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
							    <path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</div>

						<!-- Picture detail -->

						<div class="detail-picture-wrap">
							<picture class="detail-picture">
								<source media="(min-width: 1024px)" srcset="client/images/equipa/ana-torres-pereira-l-1x.jpg, client/images/equipa/ana-torres-pereira-l-2x.jpg 2x">
								<img src="client/images/equipa/ana-torres-pereira-l-1x.jpg" srcset="client/images/equipa/ana-torres-pereira-l-2x.jpg 2x" alt="Responsive Image Example">
							</picture>	
						</div> 

						<div class="description-wrap">
							<!-- Info detail -->
							<div class="team-detail-red section-margin">
								<h5 class="name-detail">Ana Torres Pereira</h5> 
								<h6 class="position-detail">Diretora Executiva</h6> 
								<p class="bio-detail">Licenciada em Ciências da Comunicação, pela Universidade Autónoma de Lisboa, começou a carreira jornalística no Negócios Online, em 2001, com a especialização em tecnologia. Quando o “Negócios” foi adquirido pela Cofina, dono do “Correio da Manhã”, passou para a publicação diária em papel, onde se especializou em telecomunicações, aviação e turismo. Esteve 13 anos no Jornal de Negócios, até ingressar na M, no início de 2015, como diretora executiva.</p> 
							</div>
							<!-- Contacts detail -->
							<a href="#" class="mail-detail section-margin"><p class="mail-p">atp@mpublicrelations.pt</p></a>
							<a href="#" class="phone-detail section-margin"><p class="phone-p">M: +351 938 268 484</p></a>
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="linkedin-logo  section-margin">
									<g>
										<path class="st0" d="M25,49.5c-13.5,0-24.5-11-24.5-24.5c0-13.5,11-24.5,24.5-24.5c13.5,0,24.5,11,24.5,24.5
											C49.5,38.5,38.5,49.5,25,49.5z M25,2.5C12.6,2.5,2.5,12.6,2.5,25c0,12.4,10.1,22.5,22.5,22.5c12.4,0,22.5-10.1,22.5-22.5
											C47.5,12.6,37.4,2.5,25,2.5z"/>
									</g>
									<g>
										<path d="M35.5,27.3V35H31v-7.2c0-1.8-0.6-3.1-2.3-3.1c-1.2,0-2,0.8-2.3,1.6c-0.1,0.3-0.1,0.7-0.1,1.1V35h-4.5c0,0,0.1-12.2,0-13.5
											h4.5v1.9c0,0,0,0,0,0h0v0c0.6-0.9,1.7-2.2,4-2.2C33.3,21.2,35.5,23.1,35.5,27.3L35.5,27.3z M17.1,15c-1.5,0-2.5,1-2.5,2.3
											c0,1.3,1,2.3,2.5,2.3h0c1.6,0,2.5-1,2.5-2.3C19.6,16,18.6,15,17.1,15L17.1,15z M14.8,35h4.5V21.5h-4.5V35z M14.8,35"/>
									</g>
								</svg>
							
								<a href="equipa.html" class="button section-margin">Contactar</a> 
							
						</div>
						
					</div> 
				</div>

				<!-- *********** Member Filipa Morais -->
				<div class="member js-member" id="js-member">
				  	<div class="item" @click="showModal"  v-apparate:fade-in-up="{delay:500}">
				  		<div class="circle">
				  			<img src="client/images/equipa/Filipa-Morais-1.jpg" class="foto-perfil-1">
							<div class="overlay">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="more">
									<g>
										<polygon class="st0" points="50,21 29,21 29,0 21,0 21,21 0,21 0,29 21,29 21,50 29,50 29,29 50,29 	"/>
									</g>
								</svg>
							</div>
				  		</div>
						<h3>Filipa Morais</h3> <!-- Nome -->
						<h4>Diretora de Comunicação de Consumo</h4> <!-- Cargo -->
					</div>

					<!-- PopUp - Detalhes -->
					<div class="description is---hidden" id="js-description-1">

						<div class="">
							<!-- Close Description Btn --> 
							<svg @click="hideModal" id="js-close-1" class="close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
							    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
							    <path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</div>

						<!-- Picture detail -->
						<div class="detail-picture-wrap">
							<picture class="detail-picture">
								<source media="(min-width: 1024px)" srcset="client/images/equipa/filipa-morais-l-1x.jpg, client/images/equipa/filipa-morais-l-2x.jpg 2x">
								<img src="client/images/equipa/filipa-morais-l-1x.jpg" srcset="client/images/equipa/filipa-morais-l-2x.jpg 2x" alt="Responsive Image Example">
							</picture>
						</div> 

						<div class="description-wrap">
							<!-- Info detail -->
							<div class="team-detail-red section-margin">
								<h5 class="name-detail">Filipa Morais</h5> 
								<h6 class="position-detail">Diretora de Comunicação de Consumo</h6> 
								<p class="bio-detail">Tem uma profunda experiência na área de healthcare. Antes de integrar a equipa da M, assumiu a direção de contas na empresa Best News, consultora em comunicação na área da Saúde. Desempenhou funções de new business director e gestão de clientes na empresa Media Health Portugal e iniciou o seu percurso na comunicação na empresa Inforfi. A sua experiência inclui comunicação de sociedades médica.</p> 
							</div>
							<!-- Contacts detail -->
							<a href="#" class="mail-detail section-margin"><p class="mail-p">fm@mpublicrelations.pt</p></a>
							<a href="#" class="phone-detail section-margin"><p class="phone-p">M: +351 965 225 504</p></a>
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="linkedin-logo  section-margin">
									<g>
										<path class="st0" d="M25,49.5c-13.5,0-24.5-11-24.5-24.5c0-13.5,11-24.5,24.5-24.5c13.5,0,24.5,11,24.5,24.5
											C49.5,38.5,38.5,49.5,25,49.5z M25,2.5C12.6,2.5,2.5,12.6,2.5,25c0,12.4,10.1,22.5,22.5,22.5c12.4,0,22.5-10.1,22.5-22.5
											C47.5,12.6,37.4,2.5,25,2.5z"/>
									</g>
									<g>
										<path d="M35.5,27.3V35H31v-7.2c0-1.8-0.6-3.1-2.3-3.1c-1.2,0-2,0.8-2.3,1.6c-0.1,0.3-0.1,0.7-0.1,1.1V35h-4.5c0,0,0.1-12.2,0-13.5
											h4.5v1.9c0,0,0,0,0,0h0v0c0.6-0.9,1.7-2.2,4-2.2C33.3,21.2,35.5,23.1,35.5,27.3L35.5,27.3z M17.1,15c-1.5,0-2.5,1-2.5,2.3
											c0,1.3,1,2.3,2.5,2.3h0c1.6,0,2.5-1,2.5-2.3C19.6,16,18.6,15,17.1,15L17.1,15z M14.8,35h4.5V21.5h-4.5V35z M14.8,35"/>
									</g>
								</svg>
							
								<a href="equipa.html" class="button section-margin">Contactar</a> 
							
						</div>
						
					</div> 
				</div>
				
				<!-- *********** Member Mariana Perestrelo -->
				<div class="member js-member" id="js-member">
				  	<div class="item" @click="showModal"  v-apparate:fade-in-up="{delay:500}">
				  		<div class="circle">
				  			<img src="client/images/equipa/Mariana-Perestrelo-1.jpg" class="foto-perfil-1">
							<div class="overlay">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="more">
									<g>
										<polygon class="st0" points="50,21 29,21 29,0 21,0 21,21 0,21 0,29 21,29 21,50 29,50 29,29 50,29 	"/>
									</g>
								</svg>
							</div>
				  		</div>
						<h3>Mariana Perestrelo</h3> <!-- Nome -->
						<h4>Diretora de Comunicação de Lifestyle</h4> <!-- Cargo -->
					</div>

					<!-- PopUp - Detalhes -->
					<div class="description is---hidden" id="js-description-1">

						<div class="">
							<!-- Close Description Btn --> 
							<svg @click="hideModal" id="js-close-1" class="close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
							    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
							    <path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</div>

						<!-- Picture detail -->
						<div class="detail-picture-wrap">
							<picture class="detail-picture">
								<source media="(min-width: 1024px)" srcset="client/images/equipa/mariana-perestrelo-l-1x.jpg, client/images/equipa/mariana-perestrelo-l-2x.jpg 2x">
								<img src="client/images/equipa/mariana-perestrelo-l-1x.jpg" srcset="client/images/equipa/mariana-perestrelo-l-2x.jpg 2x" alt="Responsive Image Example">
							</picture>
						</div> 

						<div class="description-wrap">
							<!-- Info detail -->
							<div class="team-detail-red section-margin">
								<h5 class="name-detail">Mariana Perestrelo</h5> 
								<h6 class="position-detail">Diretora de Comunicação de Lifestyle</h6> 
								<p class="bio-detail">Trabalhou em Paris (Christophe Lemaire) e em Nova Iorque (Elite Model Look). Por cá, passou pela Revista “Elle” e foi Diretora de Comunicação da marca Osklen durante 5 anos. Em 2009 criou a sua marca - MARIE – Press &amp; PR Consulting, onde começou a trabalhar marcas de lifestyle e a organizar eventos como Outjazz. Trabalha na M a comunicação de marcas de lifestyle ou com necessidades nessa área há já vários anos.</p> 
							</div>
							<!-- Contacts detail -->
							<a href="#" class="mail-detail section-margin"><p class="mail-p">mp@mpublicrelations.pt</p></a>
							<a href="#" class="phone-detail section-margin"><p class="phone-p">M: +351 935 594 430</p></a>
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="linkedin-logo  section-margin">
									<g>
										<path class="st0" d="M25,49.5c-13.5,0-24.5-11-24.5-24.5c0-13.5,11-24.5,24.5-24.5c13.5,0,24.5,11,24.5,24.5
											C49.5,38.5,38.5,49.5,25,49.5z M25,2.5C12.6,2.5,2.5,12.6,2.5,25c0,12.4,10.1,22.5,22.5,22.5c12.4,0,22.5-10.1,22.5-22.5
											C47.5,12.6,37.4,2.5,25,2.5z"/>
									</g>
									<g>
										<path d="M35.5,27.3V35H31v-7.2c0-1.8-0.6-3.1-2.3-3.1c-1.2,0-2,0.8-2.3,1.6c-0.1,0.3-0.1,0.7-0.1,1.1V35h-4.5c0,0,0.1-12.2,0-13.5
											h4.5v1.9c0,0,0,0,0,0h0v0c0.6-0.9,1.7-2.2,4-2.2C33.3,21.2,35.5,23.1,35.5,27.3L35.5,27.3z M17.1,15c-1.5,0-2.5,1-2.5,2.3
											c0,1.3,1,2.3,2.5,2.3h0c1.6,0,2.5-1,2.5-2.3C19.6,16,18.6,15,17.1,15L17.1,15z M14.8,35h4.5V21.5h-4.5V35z M14.8,35"/>
									</g>
								</svg>
							
								<a href="equipa.html" class="button section-margin">Contactar</a> 
							
						</div>
						
					</div> 
				</div>
				
				<!-- *********** Member Diana Rebelo -->
				<div class="member js-member" id="js-member">
				  	<div class="item" @click="showModal"  v-apparate:fade-in-up="{delay:500}">
				  		<div class="circle">
				  			<img src="client/images/equipa/Diana-Rebelo-1.jpg" class="foto-perfil-1">
							<div class="overlay">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="more">
									<g>
										<polygon class="st0" points="50,21 29,21 29,0 21,0 21,21 0,21 0,29 21,29 21,50 29,50 29,29 50,29 	"/>
									</g>
								</svg>
							</div>
				  		</div>
						<h3>Diana Rebelo</h3> <!-- Nome -->
						<h4>Consultora de Comunicação</h4> <!-- Cargo -->
					</div>

					<!-- PopUp - Detalhes -->
					<div class="description is---hidden" id="js-description-1">

						<div class="">
							<!-- Close Description Btn --> 
							<svg @click="hideModal" id="js-close-1" class="close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
							    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
							    <path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</div>

						<!-- Picture detail -->
						<div class="detail-picture-wrap">
							<picture class="detail-picture">
								<source media="(min-width: 1024px)" srcset="client/images/equipa/diana-rebelo-l-1x.jpg, client/images/equipa/diana-rebelo-l-2x.jpg 2x">
								<img src="client/images/equipa/diana-rebelo-l-1x.jpg" srcset="client/images/equipa/diana-rebelo-l-2x.jpg 2x" alt="Responsive Image Example">
							</picture>
						</div> 

						<div class="description-wrap">
							<!-- Info detail -->
							<div class="team-detail-red section-margin">
								<h5 class="name-detail">Diana Rebelo</h5> 
								<h6 class="position-detail">Consultora de Comunicação</h6> 
								<p class="bio-detail">Licenciada em Ciências da Comunicação, pelo Instituto Superior de Ciências Sociais e Políticas, iniciou o percurso profissional em Jornalismo, com passagem pela Secção Multiplataforma do Diário de Notícias, em 2013, seguindo-se a plataforma online da revista Vogue Portugal, no ano seguinte. Juntou-se à equipa da M Public Relations em Junho de 2015, onde trabalha a comunicação de marcas na área Lifestyle.</p> 
							</div>
							<!-- Contacts detail -->
							<a href="#" class="mail-detail section-margin"><p class="mail-p">dr@mpublicrelations.pt</p></a>
							<a href="#" class="phone-detail section-margin"><p class="phone-p">M: +351 910 001 801</p></a>
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="linkedin-logo  section-margin">
									<g>
										<path class="st0" d="M25,49.5c-13.5,0-24.5-11-24.5-24.5c0-13.5,11-24.5,24.5-24.5c13.5,0,24.5,11,24.5,24.5
											C49.5,38.5,38.5,49.5,25,49.5z M25,2.5C12.6,2.5,2.5,12.6,2.5,25c0,12.4,10.1,22.5,22.5,22.5c12.4,0,22.5-10.1,22.5-22.5
											C47.5,12.6,37.4,2.5,25,2.5z"/>
									</g>
									<g>
										<path d="M35.5,27.3V35H31v-7.2c0-1.8-0.6-3.1-2.3-3.1c-1.2,0-2,0.8-2.3,1.6c-0.1,0.3-0.1,0.7-0.1,1.1V35h-4.5c0,0,0.1-12.2,0-13.5
											h4.5v1.9c0,0,0,0,0,0h0v0c0.6-0.9,1.7-2.2,4-2.2C33.3,21.2,35.5,23.1,35.5,27.3L35.5,27.3z M17.1,15c-1.5,0-2.5,1-2.5,2.3
											c0,1.3,1,2.3,2.5,2.3h0c1.6,0,2.5-1,2.5-2.3C19.6,16,18.6,15,17.1,15L17.1,15z M14.8,35h4.5V21.5h-4.5V35z M14.8,35"/>
									</g>
								</svg>
							
								<a href="equipa.html" class="button section-margin">Contactar</a> 
							
						</div>
						
					</div> 
				</div>
		
				<!-- *********** Member Ingrid Arruda Moreira -->
				<div class="member js-member" id="js-member">
				  	<div class="item" @click="showModal"  v-apparate:fade-in-up="{delay:500}">
				  		<div class="circle">
				  			<img src="client/images/equipa/Ingrid-Arruda-Moreira-1.jpg" class="foto-perfil-1">
							<div class="overlay">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="more">
									<g>
										<polygon class="st0" points="50,21 29,21 29,0 21,0 21,21 0,21 0,29 21,29 21,50 29,50 29,29 50,29 	"/>
									</g>
								</svg>
							</div>
				  		</div>
						<h3>Ingrid Arruda Moreira</h3> <!-- Nome -->
						<h4>Consultora de Comunicação</h4> <!-- Cargo -->
					</div>

					<!-- PopUp - Detalhes -->
					<div class="description is---hidden" id="js-description-1">

						<div class="">
							<!-- Close Description Btn --> 
							<svg @click="hideModal" id="js-close-1" class="close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
							    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
							    <path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</div>

						<!-- Picture detail -->
						<div class="detail-picture-wrap">
							<picture class="detail-picture">
								<source media="(min-width: 1024px)" srcset="client/images/equipa/ingrid-arruda-l-1x.jpg, client/images/equipa/ingrid-arruda-l-2x.jpg 2x">
								<img src="client/images/equipa/ingrid-arruda-l-1x.jpg" srcset="client/images/equipa/ingrid-arruda-l-2x.jpg 2x" alt="Responsive Image Example">
							</picture>
						</div> 

						<div class="description-wrap">
							<!-- Info detail -->
							<div class="team-detail-red section-margin">
								<h5 class="name-detail">Ingrid Arruda Moreira</h5> 
								<h6 class="position-detail">Consultora de Comunicação</h6> 
								<p class="bio-detail">Até integrar a equipa da M, foi gestora de projetos nas áreas de grande consumo, banca, seguros, automóveis ou telecomunicações. Trabalhou como account em publicidade e design nas agências Ogilvy One, Strat, Santa Fé Associates e Cupido. É licenciada em Gestão pela Faculdade de Economia da Universidade Nova de Lisboa e mestra em Marketing Management pela ESIC-Business and Marketing School em Madrid.</p> 
							</div>
							<!-- Contacts detail -->
							<a href="#" class="mail-detail section-margin"><p class="mail-p">iam@mpublicrelations.pt</p></a>
							<a href="#" class="phone-detail section-margin"><p class="phone-p">M: +351 934 719 843</p></a>
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="linkedin-logo  section-margin">
									<g>
										<path class="st0" d="M25,49.5c-13.5,0-24.5-11-24.5-24.5c0-13.5,11-24.5,24.5-24.5c13.5,0,24.5,11,24.5,24.5
											C49.5,38.5,38.5,49.5,25,49.5z M25,2.5C12.6,2.5,2.5,12.6,2.5,25c0,12.4,10.1,22.5,22.5,22.5c12.4,0,22.5-10.1,22.5-22.5
											C47.5,12.6,37.4,2.5,25,2.5z"/>
									</g>
									<g>
										<path d="M35.5,27.3V35H31v-7.2c0-1.8-0.6-3.1-2.3-3.1c-1.2,0-2,0.8-2.3,1.6c-0.1,0.3-0.1,0.7-0.1,1.1V35h-4.5c0,0,0.1-12.2,0-13.5
											h4.5v1.9c0,0,0,0,0,0h0v0c0.6-0.9,1.7-2.2,4-2.2C33.3,21.2,35.5,23.1,35.5,27.3L35.5,27.3z M17.1,15c-1.5,0-2.5,1-2.5,2.3
											c0,1.3,1,2.3,2.5,2.3h0c1.6,0,2.5-1,2.5-2.3C19.6,16,18.6,15,17.1,15L17.1,15z M14.8,35h4.5V21.5h-4.5V35z M14.8,35"/>
									</g>
								</svg>
							
								<a href="equipa.html" class="button section-margin">Contactar</a> 
							
						</div>
						
					</div> 
				</div>
				
				<!-- *********** Member José Almeida Ribeiro -->
				<div class="member js-member" id="js-member">
				  	<div class="item" @click="showModal"  v-apparate:fade-in-up="{delay:500}">
				  		<div class="circle">
				  			<img src="client/images/equipa/Jose-Almeida-Ribeiro-1.jpg" class="foto-perfil-1">
							<div class="overlay">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="more">
									<g>
										<polygon class="st0" points="50,21 29,21 29,0 21,0 21,21 0,21 0,29 21,29 21,50 29,50 29,29 50,29 	"/>
									</g>
								</svg>
							</div>
				  		</div>
						<h3>José Almeida Ribeiro</h3> <!-- Nome -->
						<h4>Consultor de comunicação</h4> <!-- Cargo -->
					</div>

					<!-- PopUp - Detalhes -->
					<div class="description is---hidden" id="js-description-1">

						<div class="">
							<!-- Close Description Btn --> 
							<svg @click="hideModal" id="js-close-1" class="close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
							    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
							    <path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</div>

						<!-- Picture detail -->
						<div class="detail-picture-wrap">
							<picture class="detail-picture">
								<source media="(min-width: 1024px)" srcset="client/images/equipa/jose-almeida-ribeiro-l-1x.jpg, client/images/equipa/jose-almeida-ribeiro-l-2x.jpg 2x">
								<img src="client/images/equipa/jose-almeida-ribeiro-l-1x.jpg" srcset="client/images/equipa/jose-almeida-ribeiro-l-2x.jpg 2x" alt="Responsive Image Example">
							</picture>
						</div> 

						<div class="description-wrap">
							<!-- Info detail -->
							<div class="team-detail-red section-margin">
								<h5 class="name-detail">José Almeida Ribeiro</h5> 
								<h6 class="position-detail">Consultor de comunicação</h6> 
								<p class="bio-detail">Licenciado em Comunicação Social e Cultural pela Universidade Católica Portuguesa e com Pós-graduação em Marketing e Comunicação Empresarial na Universidade Lusíada, deu os primeiros passos profissionais como assessor de imprensa, função que desempenhou até 2010. Depois, enveredou pelo jornalismo, tendo sido redator e subeditor de Desporto no diário “Correio da Manhã”, durante quatro anos. Em 2015, juntou-se à equipa da M Public Relations.</p> 
							</div>
							<!-- Contacts detail -->
							<a href="#" class="mail-detail section-margin"><p class="mail-p">jar@mpublicrelations.pt</p></a>
							<a href="#" class="phone-detail section-margin"><p class="phone-p">M: +351 919 811 216</p></a>
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="linkedin-logo  section-margin">
									<g>
										<path class="st0" d="M25,49.5c-13.5,0-24.5-11-24.5-24.5c0-13.5,11-24.5,24.5-24.5c13.5,0,24.5,11,24.5,24.5
											C49.5,38.5,38.5,49.5,25,49.5z M25,2.5C12.6,2.5,2.5,12.6,2.5,25c0,12.4,10.1,22.5,22.5,22.5c12.4,0,22.5-10.1,22.5-22.5
											C47.5,12.6,37.4,2.5,25,2.5z"/>
									</g>
									<g>
										<path d="M35.5,27.3V35H31v-7.2c0-1.8-0.6-3.1-2.3-3.1c-1.2,0-2,0.8-2.3,1.6c-0.1,0.3-0.1,0.7-0.1,1.1V35h-4.5c0,0,0.1-12.2,0-13.5
											h4.5v1.9c0,0,0,0,0,0h0v0c0.6-0.9,1.7-2.2,4-2.2C33.3,21.2,35.5,23.1,35.5,27.3L35.5,27.3z M17.1,15c-1.5,0-2.5,1-2.5,2.3
											c0,1.3,1,2.3,2.5,2.3h0c1.6,0,2.5-1,2.5-2.3C19.6,16,18.6,15,17.1,15L17.1,15z M14.8,35h4.5V21.5h-4.5V35z M14.8,35"/>
									</g>
								</svg>
							
								<a href="equipa.html" class="button section-margin">Contactar</a> 
							
						</div>
						
					</div> 
				</div>

				<!-- *********** Member Mariana Velez -->
				<div class="member js-member" id="js-member">
				  	<div class="item" @click="showModal"  v-apparate:fade-in-up="{delay:500}">
				  		<div class="circle">
				  			<img src="client/images/equipa/Mariana-Velez-1.jpg" class="foto-perfil-1">
							<div class="overlay">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="more">
									<g>
										<polygon class="st0" points="50,21 29,21 29,0 21,0 21,21 0,21 0,29 21,29 21,50 29,50 29,29 50,29 	"/>
									</g>
								</svg>
							</div>
				  		</div>
						<h3>Mariana Velez</h3> <!-- Nome -->
						<h4>Consultora de Comunicação</h4> <!-- Cargo -->
					</div>

					<!-- PopUp - Detalhes -->
					<div class="description is---hidden" id="js-description-1">

						<div class="">
							<!-- Close Description Btn --> 
							<svg @click="hideModal" id="js-close-1" class="close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
							    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
							    <path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</div>

						<!-- Picture detail -->
						<div class="detail-picture-wrap">
							<picture class="detail-picture">
								<source media="(min-width: 1024px)" srcset="client/images/equipa/mariana-velez-l-1x.jpg, client/images/equipa/mariana-velez-l-2x.jpg 2x">
								<img src="client/images/equipa/mariana-velez-l-1x.jpg" srcset="client/images/equipa/mariana-velez-l-2x.jpg 2x" alt="Responsive Image Example">
							</picture>
						</div> 

						<div class="description-wrap">
							<!-- Info detail -->
							<div class="team-detail-red section-margin">
								<h5 class="name-detail">Mariana Velez</h5> 
								<h6 class="position-detail">Consultora de Comunicação</h6> 
								<p class="bio-detail">Licenciada em Comunicação Empresarial pelo Instituto Superior de Comunicação Empresarial, iniciou o seu percurso profissional como estagiária no Gabinete de Comunicação e Imagem da seguradora Fidelidade. Antes de integrar a equipa da M em 2016, trabalhou na Entidade Reguladora para a Comunicação Social onde desempenhou funções no Departamento de Análise de Media e no Gabinete de Relações Exteriores.</p> 
							</div>
							<!-- Contacts detail -->
							<a href="#" class="mail-detail section-margin"><p class="mail-p">mvelez@mpublicrelations.pt</p></a>
							<a href="#" class="phone-detail section-margin"><p class="phone-p">M: +351 916 068 388</p></a>
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="linkedin-logo  section-margin">
									<g>
										<path class="st0" d="M25,49.5c-13.5,0-24.5-11-24.5-24.5c0-13.5,11-24.5,24.5-24.5c13.5,0,24.5,11,24.5,24.5
											C49.5,38.5,38.5,49.5,25,49.5z M25,2.5C12.6,2.5,2.5,12.6,2.5,25c0,12.4,10.1,22.5,22.5,22.5c12.4,0,22.5-10.1,22.5-22.5
											C47.5,12.6,37.4,2.5,25,2.5z"/>
									</g>
									<g>
										<path d="M35.5,27.3V35H31v-7.2c0-1.8-0.6-3.1-2.3-3.1c-1.2,0-2,0.8-2.3,1.6c-0.1,0.3-0.1,0.7-0.1,1.1V35h-4.5c0,0,0.1-12.2,0-13.5
											h4.5v1.9c0,0,0,0,0,0h0v0c0.6-0.9,1.7-2.2,4-2.2C33.3,21.2,35.5,23.1,35.5,27.3L35.5,27.3z M17.1,15c-1.5,0-2.5,1-2.5,2.3
											c0,1.3,1,2.3,2.5,2.3h0c1.6,0,2.5-1,2.5-2.3C19.6,16,18.6,15,17.1,15L17.1,15z M14.8,35h4.5V21.5h-4.5V35z M14.8,35"/>
									</g>
								</svg>
							
								<a href="equipa.html" class="button section-margin">Contactar</a> 
							
						</div>
						
					</div> 
				</div>

				<!-- *********** Member Ricardo Quintela -->
				<div class="member js-member" id="js-member">
				  	<div class="item" @click="showModal"  v-apparate:fade-in-up="{delay:500}">
				  		<div class="circle">
				  			<img src="client/images/equipa/Ricardo-Quintela-1.jpg" class="foto-perfil-1">
							<div class="overlay">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="more">
									<g>
										<polygon class="st0" points="50,21 29,21 29,0 21,0 21,21 0,21 0,29 21,29 21,50 29,50 29,29 50,29 	"/>
									</g>
								</svg>
							</div>
				  		</div>
						<h3>Ricardo Quintela</h3> <!-- Nome -->
						<h4>Consultor de Comunicação</h4> <!-- Cargo -->
					</div>

					<!-- PopUp - Detalhes -->
					<div class="description is---hidden" id="js-description-1">

						<div class="">
							
							<!-- Close Description Btn --> 
							<svg @click="hideModal" id="js-close-1" class="close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
							    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
							    <path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</div>

						<!-- Picture detail -->
						<div class="detail-picture-wrap">
							<picture class="detail-picture">
								<source media="(min-width: 1024px)" srcset="client/images/equipa/ricardo-quintela-l-1x.jpg, client/images/equipa/ricardo-quintela-l-2x.jpg 2x">
								<img src="client/images/equipa/ricardo-quintela-l-1x.jpg" srcset="client/images/equipa/ricardo-quintela-l-2x.jpg 2x" alt="Responsive Image Example">
							</picture>
						</div> 

						<div class="description-wrap">
							<!-- Info detail -->
							<div class="team-detail-red section-margin">
								<h5 class="name-detail">Ricardo Quintela</h5> 
								<h6 class="position-detail">Consultor de Comunicação</h6> 
								<p class="bio-detail">Licenciado em Comunicação e Cultura pela Faculdade de Letras de Lisboa, começou a carreira como jornalista na SIC em 2008. No final de 2010, ingressou no Curso de Formação de Oficiais da Força Aérea, com a especialidade de Relações Públicas. Ao serviço da Força Aérea participou - na qualidade de Oficial de Relações Públicas - em várias missões internacionais, no âmbito da NATO. Ingressou depois na Hill+Knowlton como Account Manager da equipa Corporate. Entrou na M Public Relations no final de 2017, sendo responsável por comunicação institucional.</p> 
							</div>
							<!-- Contacts detail -->
							<a href="#" class="mail-detail section-margin"><p class="mail-p">rquintela@mpublicrelations.pt</p></a>
							<a href="#" class="phone-detail section-margin"><p class="phone-p">M: +351 917 695 940</p></a>
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="linkedin-logo  section-margin">
									<g>
										<path class="st0" d="M25,49.5c-13.5,0-24.5-11-24.5-24.5c0-13.5,11-24.5,24.5-24.5c13.5,0,24.5,11,24.5,24.5
											C49.5,38.5,38.5,49.5,25,49.5z M25,2.5C12.6,2.5,2.5,12.6,2.5,25c0,12.4,10.1,22.5,22.5,22.5c12.4,0,22.5-10.1,22.5-22.5
											C47.5,12.6,37.4,2.5,25,2.5z"/>
									</g>
									<g>
										<path d="M35.5,27.3V35H31v-7.2c0-1.8-0.6-3.1-2.3-3.1c-1.2,0-2,0.8-2.3,1.6c-0.1,0.3-0.1,0.7-0.1,1.1V35h-4.5c0,0,0.1-12.2,0-13.5
											h4.5v1.9c0,0,0,0,0,0h0v0c0.6-0.9,1.7-2.2,4-2.2C33.3,21.2,35.5,23.1,35.5,27.3L35.5,27.3z M17.1,15c-1.5,0-2.5,1-2.5,2.3
											c0,1.3,1,2.3,2.5,2.3h0c1.6,0,2.5-1,2.5-2.3C19.6,16,18.6,15,17.1,15L17.1,15z M14.8,35h4.5V21.5h-4.5V35z M14.8,35"/>
									</g>
								</svg>
							
								<a href="equipa.html" class="button section-margin">Contactar</a> 
							
						</div>
						
					</div> 
				</div>

				<!-- *********** Member Telma Martins -->
				<div class="member js-member" id="js-member">
				  	<div class="item" @click="showModal"  v-apparate:fade-in-up="{delay:500}">
				  		<div class="circle">
				  			<img src="client/images/equipa/Telma-Martins-1.jpg" class="foto-perfil-1">
							<div class="overlay">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="more">
									<g>
										<polygon class="st0" points="50,21 29,21 29,0 21,0 21,21 0,21 0,29 21,29 21,50 29,50 29,29 50,29 	"/>
									</g>
								</svg>
							</div>
				  		</div>
						<h3>Telma Martins</h3> <!-- Nome -->
						<h4>Consultora de Comunicação</h4> <!-- Cargo -->
					</div>

					<!-- PopUp - Detalhes -->
					<div class="description is---hidden" id="js-description-1">

						<div class="">
							<!-- Close Description Btn --> 
							<svg @click="hideModal" id="js-close-1" class="close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
							    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
							    <path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</div>

						<!-- Picture detail -->
						<div class="detail-picture-wrap">
							<picture class="detail-picture">
								<source media="(min-width: 1024px)" srcset="client/images/equipa/telma-martins-l-1x.jpg, client/images/equipa/telma-martins-l-2x.jpg 2x">
								<img src="client/images/equipa/telma-martins-l-1x.jpg" srcset="client/images/equipa/telma-martins-l-2x.jpg 2x" alt="Responsive Image Example">
							</picture>
						</div> 

						<div class="description-wrap">
							<!-- Info detail -->
							<div class="team-detail-red section-margin">
								<h5 class="name-detail">Telma Martins</h5> 
								<h6 class="position-detail">Consultora de Comunicação</h6> 
								<p class="bio-detail">Formou-se em Comunicação Social e Cultural pela Universidade Católica Portuguesa e tem mestrado em Marketing Management pelo ISEG. Está na M há 5 anos, onde assegurou a supervisão e operacionalização da comunicação da marca Nintendo para o mercado português entre 2010 e 2013, entre outros. Transitou da LPM onde trabalhou, ao longo de três anos, e entre outras, a comunicação de marcas alimentares do grupo Unilever/Jerónimo Martins.</p> 
							</div>
							<!-- Contacts detail -->
							<a href="#" class="mail-detail section-margin"><p class="mail-p">tm@mpublicrelations.pt</p></a>
							<a href="#" class="phone-detail section-margin"><p class="phone-p">M: +351 935 719 448</p></a>
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="linkedin-logo  section-margin">
									<g>
										<path class="st0" d="M25,49.5c-13.5,0-24.5-11-24.5-24.5c0-13.5,11-24.5,24.5-24.5c13.5,0,24.5,11,24.5,24.5
											C49.5,38.5,38.5,49.5,25,49.5z M25,2.5C12.6,2.5,2.5,12.6,2.5,25c0,12.4,10.1,22.5,22.5,22.5c12.4,0,22.5-10.1,22.5-22.5
											C47.5,12.6,37.4,2.5,25,2.5z"/>
									</g>
									<g>
										<path d="M35.5,27.3V35H31v-7.2c0-1.8-0.6-3.1-2.3-3.1c-1.2,0-2,0.8-2.3,1.6c-0.1,0.3-0.1,0.7-0.1,1.1V35h-4.5c0,0,0.1-12.2,0-13.5
											h4.5v1.9c0,0,0,0,0,0h0v0c0.6-0.9,1.7-2.2,4-2.2C33.3,21.2,35.5,23.1,35.5,27.3L35.5,27.3z M17.1,15c-1.5,0-2.5,1-2.5,2.3
											c0,1.3,1,2.3,2.5,2.3h0c1.6,0,2.5-1,2.5-2.3C19.6,16,18.6,15,17.1,15L17.1,15z M14.8,35h4.5V21.5h-4.5V35z M14.8,35"/>
									</g>
								</svg>
							
								<a href="equipa.html" class="button section-margin">Contactar</a> 
							
						</div>
						
					</div> 
				</div>
			</div>
		</section>
		<!-- Join Btn -->
		<section class="align-center paddingbottom-60"  v-apparate:fade-in-up="{delay:500}">
			<a href="mailto:recrutamento@mpublicrelations.pt" class="button">Junte-se à equipa</a>
		</section>
	</div>
</template>
<script>
	import {offsetTop} from './../utils';

	export default {
		data() {
			return {
				elBody: document.body
			}
		},
		metaInfo () {
	      return {
	        title: 'M Public Relations - Equipa',
	        bodyAttrs: {
	          class: 'team'
	        }
	      }
	    },
	    mounted() {
	      	const section = document.getElementById('js-section-cover--team');
	      	offsetTop(section);
	    },
		methods: {
			showModal(e) {
				const member = e.currentTarget.parentElement;
				const desc = member.querySelector('.description');
				const close = desc.querySelector('.close');
				const menu = document.getElementById('js-menu-btn-wrap');
				//const logo = document.getElementById('js-logo');

				menu.style.display = 'none';
				//logo.style.fill = '#E5343E';
				desc.classList.remove('is---hidden');
				desc.classList.add('is--visible');
				setTimeout(() => {
					this.elBody.classList.add('is--hidden');
				}, 200);
			},
			hideModal(e) {
				e.preventDefault();
				const desc = e.currentTarget.closest('.description');
				const menu = document.getElementById('js-menu-btn-wrap');
				//const logo = document.getElementById('js-logo');

				desc.classList.remove('is--visible');
			    desc.classList.add('is---hidden');
				setTimeout(() => {
					this.elBody.classList.remove('is--hidden');
			    	menu.style.display = 'block';
					//logo.style.fill = '#FFF';
			    }, 200);
			}
		}
	}
</script>
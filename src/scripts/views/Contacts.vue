<template>
	<div class="page page--contacts">
		<div class="m-background">
			<!-- Title -->
			<section class="contactos-wrap"> <!-- Insert image as background -->

				<h1 class="section-margin-cover title"  v-apparate:fade-in-up="{delay:500}">Fale connosco</h1>
				
				<div class="address left"  v-apparate:fade-in-up="{delay:500}">
					<h2 class="subtitle">Headquarters</h2>
					<p class="contactos-text">Edifício Alto das Amoreiras<br>Rua Joshua Benoliel, 6, 4 C<br>1250 - 133 Lisboa</p>
					<p class="contactos-text">+351 211 546 120<br>info@mpublicrelations.pt</p>
				</div>

				<div class="form-contact section-margin right">
					<form class="form" action="" method="POST" accept-charset="utf-8" autocomplete="off" @submit.stop.prevent="submitForm">
						<div class="form-group-row"  v-apparate:fade-in-up="{delay:500}">
							<div class="form-column">
								<label for="name">Nome</label>
								<input type="text" class="js-form-input form-item" id="name" name="name" placeholder="Nome" v-model="form.name">
							</div>
							<div class="form-column">
								<label for="email">Email</label>
								<input type="email" class="js-form-input form-item" id="email" name="email" placeholder="Email" v-model="form.email">
							</div>
             			</div>
             		
              			<div class="form-group-row"  v-apparate:fade-in-up="{delay:500}">
              				<div class="form-column">
              					<label for="subject">Assunto</label>
              					<input type="text" class="js-form-input form-item" id="subject" name="subject" placeholder="Assunto" v-model="form.business">
              				</div>
              				<div class="form-column">
              					<label for="website">Website</label>
              					<input type="text" class="js-form-input form-item" id="website" name="website" placeholder="Website" v-model="form.website">
              				</div>
			            </div>

			            <div class="form-group-row"  v-apparate:fade-in-up="{delay:500}">
			            	<div class="form-row">
			            		<label for="message">Mensagem...</label>
			            		<textarea rows="7" cols="50" name="message" class="js-form-input form-message" id="message" placeholder="Mensagem..." v-model="form.message"></textarea>
			            	</div>
			                
			            </div>
			            <p class="form-txt" v-if="successMessage">Obrigado. Entraremos em contacto consigo o mais brevemente possível.</p>
			            <div class="button-align" v-apparate:fade-in-up="{delay:500}">
			                <button id="test" type="submit" class="button button--submit">Enviar</button>
			            </div>                 
					</form>				
				</div>

			</section>
		</div>
	</div>
</template>
<script>
	import Form from './../core/Form';
	export default {
		metaInfo () {
	      return {
	        title: 'M Public Relations - Contactos',
	        bodyAttrs: {
	          class: 'contacts'
	        }
	      }
	    },
	    data() {
	    	return {
	    		form: new Form({
					name: '',
					email: '',
					website: '',
					business: '',
					message: ''
				}),
				successMessage: false
	    	}
	    },
	    mounted() {
	    },
	    methods: {
	    	submitForm() {
	    		console.log(this.form.data());
	    		this.form.reset();
	    		this.successMessage = true;
	    	}
	    }
	}
</script>
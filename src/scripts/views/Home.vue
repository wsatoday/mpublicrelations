<template>
  <div class="page page--home">
    <section class="section-1" id="js-section-1">
      <div class="swiper-container" id="js-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><div class="slide-1"></div></div>
          <div class="swiper-slide"><div class="slide-2"></div></div>
          <div class="swiper-slide"><div class="slide-3"></div></div>
        </div>
      </div>

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
        <h1 class="title home-titles" v-apparate:fade-in-up="{delay:1000}">We are<br>M Public<br>Relations</h1>
        <h2 class="subtitle no-margin" v-apparate:fade-in-up="{delay:1000}">Agência de comunicação e relações públicas</h2>
      </div>
    </section>
    <section class="section-2">
      <div class="hello-wrap">
        <div class="hello">
          <p class="text-1"  v-apparate:fade-in-up="{delay:500}">A M PUBLIC RELATIONS é uma agência de comunicação e relações públicas. Prestamos serviços de consultoria de comunicação estreitamente ligada às estratégias de crescimento dos seus clientes, com os mais elevados padrões de qualidade e rigor.</p>
        </div>
        <router-link class="button more-btn" exact :to="'/sobre'"  v-apparate:fade-in-up="{delay:500}">Mais sobre a M</router-link>
      </div>
    </section>
    <section class="image-block" v-apparate:fade-in-up="{delay:500}"></section>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import {offsetTop} from './../utils';
  
  export default {
    data() {
      return {}
    },

    metaInfo () {
      return {
        title: 'M Public Relations - Agência de comunicação e relações públicas',
        bodyAttrs: {
          class: 'home'
        }
      }
    },

    mounted() {
      const section = document.getElementById('js-section-1');
      this.loadSlider();
      offsetTop(section);
    },

    methods: {
      loadSlider() {
        let _this = this;
        let slider = new Swiper('#js-slider', {
          speed: 800,
          loop: true,
          autoplay: {
            delay: 3000,
          },
        })
      }
    }
  }
</script>
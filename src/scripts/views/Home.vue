<template>
  <div class="page page-home">
    <div class="block no-padding-top no-padding-bottom block--full-page" id="js-slider">
      <div class="swiper-wrapper">
          <div class="swiper-slide slide-1 block block--full-page" v-for="(item, index) in items" :key="item.id" :style="'background-color:' + item.bgColor + ''">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';

  export default {
    data() {
      return {
        items: [
          {
            id: 1,
            title: 'hello World',
            bgColor: 'rgba(0,200,0,1)'
          },
          {
            id: 2,
            title: 'hello World 2',
            bgColor: 'rgba(200,0,0,1)'
          }
        ]
      }
    },

    mounted() {
      this.loadSlider()
    },

    methods: {
      loadSlider() {
        let _this = this
        let slider = new Swiper('#js-slider', {
          slidesPerView: 'auto',
          spaceBetween: 0,
          grabCursor: false,
          loop: true
        })
      }
    }
  }
</script>
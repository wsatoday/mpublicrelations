<template>
  <main class="main-content" role="main">
	   <transition name="fade" appear mode="out-in">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <transition name="fade" appear mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
  </main>
</template>
<script>
  export default {
    name: 'app-main'
  }
</script>
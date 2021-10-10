<template>
  <q-page class="flex flex-center">
<!--     <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
    <p class="text-h4 text-center">
    	Wellcome {{$store.state.travel.user.email}}
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>

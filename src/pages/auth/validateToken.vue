<template>
  <q-page class="bg-light-green window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <div class="col-12">
        <h5 class="text-h5 text-white q-my-md flex flex-center">Token Verification</h5>
        <q-btn class="text-white q-my-md flex flex-center" color="orange" to="/auth/login" label="Send Link Again"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      token_error: null
    }
  },
  async mounted () {
    await this.$store.dispatch('travel/verifiyToken', {token: this.$route.params.token}).then(res => {
      if(res.status === 200) {
       this.$router.push('/');
      }
    });
  }
};
</script>

<style scoped>
.q-card {
  width: 360px;
}
</style>
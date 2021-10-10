<template>
  <q-page class="bg-light-green window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <div class="col-12">
        <h5 class="text-h5 text-white q-my-md flex flex-center">Travel Agent</h5>
        </div>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
              <q-input square filled clearable v-model="data.email" type="email" label="email" />
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="light-green-7" @click="send_login_link" size="lg" class="full-width" label="Send Login Link" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      data: {
        email: ''
      }
    }
  },
  methods: {
    async send_login_link() {
     await this.$store.dispatch('travel/sendLoginLink', this.data);
    }
  }
};
</script>

<style scoped>
.q-card {
  width: 360px;
}
</style>
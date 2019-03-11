<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <form class="login100-form" @submit.prevent="login()">
          <span class="login100-form-title p-b-34 p-t-27">Log in</span>

          <div class="wrap-input100">
            <input
              class="input100"
              type="text"
              placeholder="Username"
              v-validate="'required'"
              name="username"
              v-model="username"
            >
            <span color="red" v-if="errors.has('username')" v-text="errors.first('username')"></span>
          </div>

          <div class="wrap-input100">
            <input
              class="input100"
              type="password"
              name="password"
              placeholder="Password"
              v-validate="'required'"
              v-model="password"
            >
            <span color="red" v-if="errors.has('password')" v-text="errors.first('password')"></span>
          </div>

          <div class="contact100-form-checkbox">
            <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
            <label class="label-checkbox100" for="ckb1">Remember me</label>
          </div>

          <div class="container-login100-form-btn">
            <button class="login100-form-btn">Login</button>
          </div>

          <div class="text-center p-t-90">
            <a class="txt1" href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    async login() {
      await this.$validator.validateAll().then(result => {
        if (result) {
          this.$store.dispatch('authentication/login', this.$data)

          return true
        }

        alert('Please fill the form with correct format')
        return false
      })
    }
  }
}
</script>

<style>
@import url('../assets/css/util.css');
@import url('../assets/css/main.css');
</style>

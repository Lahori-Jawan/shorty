<template>
  <main>
    <section class="absolute w-full h-full py-40 min-h-screen">
      <div
        class="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full login-bg"
        :style="loginBG"
      ></div>
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-6/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
            >
              <div class="rounded-t mb-0 px-6 py-6">
                <div class="text-center mb-3">
                  <h6 class="text-dark-600 text-lg">
                    <span class="shorty">S</span>horty - the url shortener
                  </h6>
                </div>
                <!-- <div class="btn-wrapper text-center">
                  <button
                    type="button"
                    class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  >
                    <img
                      alt="..."
                      src="/vue-notus/img/github.4ffd4fe7.svg"
                      class="w-5 mr-1"
                    />
                    Github</button
                  ><button
                    type="button"
                    class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  >
                    <img
                      alt="..."
                      src="/vue-notus/img/google.87be59a1.svg"
                      class="w-5 mr-1"
                    />
                    Google
                  </button>
                </div> -->
                <hr class="mt-6 border-b-1 border-gray-400" />
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div class="relative w-full mb-3">
                    <label
                      for="name"
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="email"
                      placeholder="Name"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      v-model="credentials.name"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      for="username"
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Username
                    </label>
                    <input
                      id="username"
                      type="email"
                      placeholder="Username"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      v-model="credentials.username"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      for="email"
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      v-model="credentials.email"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      for="password"
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      v-model="credentials.password"
                    />
                  </div>
                  <div>
                    <label class="inline-flex items-center cursor-pointer"
                      ><input
                        id="customCheckLogin"
                        type="checkbox"
                        class="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span class="ml-2 text-sm font-semibold text-gray-700">
                        I agree with the
                        <a href="javascript:void(0)" class="text-green-500">
                          Privacy Policy
                        </a></span
                      ></label
                    >
                  </div>
                  <div class="text-center mt-6">
                    <button
                      type="button"
                      class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      @click="Register(credentials)"
                    >
                      Create Account
                    </button>
                    <p class="mt-4">
                      Have an account already ?
                      <router-link
                        to="/auth/login"
                        tag="button"
                        class="a-btn font-bold"
                      >
                        Log in
                      </router-link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      // server is expecting object with following fields
      credentials: {
        name: '',
        username: '',
        email: '',
        password: '',
      },
      loginBG: {
        backgroundImage: `url(${require('@/assets/login-bg.png')})`,
      },
    };
  },
  methods: {
    ...mapActions(['Register']),
  },
};
</script>

<style scoped>
.login-bg {
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>

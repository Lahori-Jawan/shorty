<template>
  <Transition name="fade">
    <div
      class="fixed w-full h-full px-4 modal"
      :class="{ hidden: !showing }"
      style="z-index: 9"
    >
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-6/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-700 border-0"
            >
              <span
                class="absolute close-btn flex justify-center items-center"
                @click="$store.commit('TOGGLE_MODAL')"
              >
                <i class="fas fa-times"></i>
              </span>
              <div class="rounded-t mb-0 px-6 py-6">
                <div class="text-center mb-3">
                  <h6 class="text-dark-600 text-lg">
                    <span class="shorty text-white">S</span>horty
                  </h6>
                </div>
                <hr class="mt-6 border-b-1 border-gray-400" />
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div class="relative w-full mb-3">
                    <label
                      for="email"
                      class="block uppercase text-gray-100 text-md font-bold mb-2"
                    >
                      {{ customDomain ? 'Domain' : 'URL' }}
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Original URL"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      v-model="originalUrl"
                      v-if="!customDomain"
                    />
                    <input
                      id="email"
                      type="email"
                      placeholder="https://mydomain.com"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      v-model="domain"
                      v-else
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <drop-down
                      @by-domain="customDomain = true"
                      @shorten-domain="customDomain = false"
                      :domain="customDomain"
                    />
                  </div>
                  <!-- <div class="relative w-full mb-3">
                    <label
                      for="password"
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Password </label
                    ><input
                      id="password"
                      type="password"
                      placeholder="Password"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    />
                  </div> -->
                  <div class="text-center mt-6">
                    <button
                      type="button"
                      class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 min-h-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      v-on="{
                        click: customDomain ? buyDomain : createShortUrl,
                      }"
                    >
                      {{ customDomain ? 'Buy Domain' : 'Generate Short URL' }}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    backgroundClose: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    if (this.showClose) {
      document.addEventListener('keydown', (e) => {
        if (e.keyCode == 27) {
          this.close();
        }
      });
    }
  },
  data() {
    return {
      originalUrl: '',
      customDomain: false,
      domain: '',
    };
  },
  methods: {
    close() {
      document.querySelector('body').classList.remove('overflow-hidden');
      this.$emit('close');
    },
    closeIfShown() {
      if (this.showClose && this.backgroundClose) {
        this.close();
      }
    },
    createShortUrl() {
      this.$store.dispatch('GenerateShortUrl', this.originalUrl);
    },
    buyDomain() {
      this.$store.dispatch('PurchaseDomain', [this.domain]);
    },
  },
  watch: {
    showing(value) {
      if (value) {
        return document.querySelector('body').classList.add('overflow-hidden');
      }
      return document.querySelector('body').classList.remove('overflow-hidden');
    },
  },
};
</script>

<style scoped>
.modal {
  background: #1a202c8a;
}
.modal .close-btn {
  right: 0;
  width: 1.5rem;
  height: 1.5rem;
  background: whitesmoke;
  color: #444;
  cursor: pointer;
}
</style>

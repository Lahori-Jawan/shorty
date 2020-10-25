<template>
  <div class="flex flex-wrap">
    <div class="w-full sm:w-6/12 md:w-8/12">
      <div class="relative align-middle w-full flex">
        <!-- <p>Active Domain:</p> -->
        <button
          class="text-white font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-gray-800"
          style="transition:all .15s ease font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 w-full"
          type="button"
          v-on:click="toggleDropdown()"
          ref="btnDropdownRef"
        >
          <span>{{ activeDomain.domain }}</span>
          <i class="fas fa-angle-down ml-8"></i>
        </button>
        <div
          :class="{
            hidden: !dropdownPopoverShow,
            block: dropdownPopoverShow,
          }"
          class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
          style="min-width:12rem"
          ref="popoverDropdownRef"
        >
          <p
            class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800"
            :class="{ 'strike-through': !purchasedUrls.length }"
          >
            Purchased Domains
          </p>
          <div
            class="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25"
          ></div>
          <a
            v-for="(url, i) in purchasedUrls"
            :key="i"
            href="#"
            class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800"
            :class="{
              'bg-pink-500 active-domain': url.domain === activeDomain.domain,
            }"
            @click.prevent="$store.dispatch('SetActiveDomain', url._id)"
          >
            {{ url.domain }}
          </a>
          <div
            class="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25"
          ></div>
          <router-link to="#" class="flex justify-center">
            <button
              class="bg-gray-700 active:bg-gray-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none mb-1"
              @click="$emit('shorten-domain')"
              v-if="domain"
            >
              Shorten URL
            </button>
            <button
              class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none mb-1"
              @click="$emit('by-domain')"
              v-else
            >
              {{ purchasedUrls.length ? 'Buy more' : 'Buy a custom domain' }}
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core';
import { mapGetters } from 'vuex';

export default {
  name: 'dropdown',
  props: {
    domain: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  computed: {
    ...mapGetters(['activeDomain', 'purchasedUrls']),
  },
  methods: {
    toggleDropdown: function() {
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: 'bottom-start',
        });
      }
    },
  },
};
</script>

<style scoped>
.active-domain {
  color: #fff;
}
</style>

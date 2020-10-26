<template>
  <div
    :class="[
      'w-full lg:w-4/12 text-white px-6 py-4 border-0 rounded relative mb-4 right-position text-xl font-bold',
      alertType.color,
    ]"
  >
    <span
      class="text-xl inline-block mr-5 align-middle"
      style="font-size: 2rem;"
      :key="forceRerender || notification.type === 'SUCCESS'"
    >
      <i :class="['far fa-bell', alertType.icon]"></i>
    </span>
    <span class="inline-block align-middle mr-8">
      {{ notification.message }}
    </span>
    <button
      class="absolute bg-transparent text-2xl font-semibold leading-none right-0 outline-none focus:outline-none close-btn"
    >
      <span @click="removeAlert">×</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      default: 'SUCCESS',
    },
    forceRerender: {
      type: [Boolean, Number],
      default: false,
    },
  },
  computed: {
    alertType() {
      return this.notification.type === 'SUCCESS'
        ? { color: 'bg-green-500', icon: 'fa-bell' }
        : { color: 'bg-red-500', icon: 'fa-meh' };
    },
  },
  methods: {
    removeAlert() {
      this.$el.classList.toggle('active');
      this.$store.commit('SET_NOTIFICATION', { message: '' });
    },
  },
};
</script>

<style>
.right-position {
  position: fixed;
  top: 3rem;
  z-index: 9;
  right: -100rem;
  transition: all 0.75s;
  height: 6rem;
  display: flex;
  align-items: center;
}
.right-position.active {
  right: 1rem;
}
.close-btn {
  height: 100%;
  margin: 0;
  width: 3rem;
}
</style>

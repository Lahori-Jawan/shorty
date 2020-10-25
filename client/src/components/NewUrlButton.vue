<template>
  <button
    class="bg-green-500 active:bg-green-900 hover:bg-green-300 uppercase text-white font-bold hover:shadow-lg shadow px-4 py-2 rounded outline-none focus:outline-none mb-1"
    type="button"
    style="transition: all 0.15s ease 0s;"
    @click="$store.commit('TOGGLE_MODAL')"
  >
    <i class="fas fa-plus text-white"></i>
  </button>
</template>

<script>
export default {};
</script>

<style></style>

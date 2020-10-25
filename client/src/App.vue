<template>
  <div id="app">
    <alert
      :class="{ active: notification.message.length }"
      :notification="notification"
      :forceRerender="shouldRerender"
    />
    <modal :showing="isModalActive" v-if="isModalActive" />
    <router-view></router-view>
  </div>
</template>

<script>
import { axios } from '@/config/axios';
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';
import { TokenService } from '@/services/Token';
import Alert from '@/components/Alert';
import Modal from '@/components/FormModal';

export default {
  name: 'App',
  async created() {
    this.isLoggedIn && this.GetUrls();
  },
  computed: {
    ...mapState(['notification', 'isModalActive']),
    ...mapGetters(['isLoggedIn', 'isModalChanged']),
    shouldRerender() {
      return (
        this.$store.state.notification.message.trim().length || this.isLoggedIn
      );
    },
  },
  methods: {
    ...mapActions(['Logout', 'Login', 'GetUser', 'GetUrls']),
    ...mapMutations(['SET_NOTIFICATION']),
  },
  components: {
    Alert,
    Modal,
  },
  watch: {
    isLoggedIn: function(loggedIn, loggedOut) {
      console.log({ loggedIn, loggedOut });
      if (loggedIn) {
        this.GetUrls();
        this.$router
          .replace({ path: '/' })
          .catch((error) => console.log('logged-in error', error));
      }

      if (loggedOut) {
        this.$router
          .replace({ path: '/auth/*' })
          .catch((error) => console.log('logged-out error', error));
      }

      const timeout = setTimeout(() => {
        this.SET_NOTIFICATION({ message: '' });
        clearTimeout(timeout);
      }, 3000);
    },
  },
};
</script>

<style>
.shorty {
  padding: 0px 1rem;
  border: 1px solid #718096;
  border-radius: 50%;
  margin-right: 3px;
  font-weight: 100;
  font-size: 3rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* only show one border element */
.border + .border:not(th) {
  display: none;
}
.strike-through {
  text-decoration: line-through;
}
</style>

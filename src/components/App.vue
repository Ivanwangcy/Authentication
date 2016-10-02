<!-- src/components/App.vue -->

  <template>
    <div id="app">
      <nav class="navbar navbar-default">
        <div class="container">
          <ul class="nav navbar-nav">
            <li><router-link to="/home">Home</router-link></li>
            <!-- <li><router-link to="/login" v-if="!user.authenticated">Login</router-link></li> -->
            <li><a v-if="!user.authenticated" @click="login()">Login</router-link></li>
            <li><router-link to="/signup" v-if="user.authenticated">Sign Up</router-link></li>
            <li><router-link to="/secretquote" v-if="user.authenticated">Secret Quote</router-link></li>
            <li><a v-if="user.authenticated" @click="logout()">Logout</a></li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </template>
  <script>
  import auth from '../auth'
  export default {
    data() {
      return {
        user: auth.user,
        authenticated: false,
        lock: new Auth0Lock('couHv21wQEpjSqiryqK09F32wwTtbDtm', 'imdada.auth0.com')
      }
    },
    ready() {
      var self = this;
      this.authenticated = checkAuth();
      this.lock.on("authenticated", function(authResult) {
        self.lock.getProfile(authResult.idToken, function(error, profile) {
          if (error) {
            // Handle error
            return;
          }

          localStorage.setItem('id_token', authResult.idToken);
          localStorage.setItem('profile', JSON.stringify(profile));
          self.authenticated = true;
          self.lock.hide();
        });
      });
    },
    methods: {
      logout() {
        auth.logout()
      },
      login() {
        this.lock.show();
      }
    }
  }
  </script>
<style media="screen">
  .nav>li{
    display: inline-block;
  }
</style>

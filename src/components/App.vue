<!-- src/components/App.vue -->

  <template>
    <div id="app">
      <nav class="navbar navbar-default">
        <div class="container">
          <ul class="nav navbar-nav">
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
            <!-- <li><router-link to="/signup">Sign Up</router-link></li> -->
            <!-- <li><router-link to="/secretquote">Secret Quote</router-link></li> -->
            <li><router-link to="/login">Logout</router-link></li>
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
        user: auth.user
      }
    },
    methods: {
      logout() {
        auth.logout()
      }
    }
  }
  </script>
  <!-- <template lang="html">
    <div>
       asdf asdf asdf a
    </div>
  </template> -->
<style media="screen">
  .nav>li{
    display: inline-block;
  }
</style>

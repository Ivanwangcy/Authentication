<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Get a Free Chunk Norris Quote!</h1>
    <button type="button" class="btn btn-primary" v-on:click="getQuote()">Get a Quote</button>
    <div class="quote-area" v-if="quote">
      <h2> <blockquote> {{ quote }} </blockquote> </h2>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quote: ''
    }
  },
  methods: {
    getQuote() {
      console.log(this.$http.get);
      console.log(this.$http.then);

      this.$http
        .get('http://localhost:3001/api/random-quote')
        .then((result) => {
          this.quote = result.data;
        },(err) => {
          console.log(err)
        })
    }
  }

}
</script>

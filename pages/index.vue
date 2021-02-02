<template>
  <div class="m-auto content-center text-center bg h-screen">
    <div>
      <h1 class="title">Welcome to the PoC</h1>
    <div class="flex flex-col m-12">
      <div class="bg-gray-200 rounded-3xl w-full h-auto bg-opacity-50 min-heigth">
          <h2 class="subtitle">Token</h2>
          {{this.token}}
        </div> 
      <div class="flex mt-4">
        <div class="bg-gray-200 rounded-3xl w-full mr-2 h-auto bg-opacity-75 min-heigth">
            <h2 class="subtitle">Call API 1</h2>
            <button v-on:click="callapi('api1')" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Make the call !
            </button>
            <div>{{this.out1}}</div>
        </div> 
        <div class="bg-gray-200 rounded-3xl w-full ml-2 h-auto bg-opacity-75 min-heigth">
          <h2 class="subtitle">Call API 2</h2>
          <button v-on:click="callapi('api2')" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Make the call !
          </button>
          <div>{{this.out2}}</div>
        </div> 
      </div>
    </div> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      out1: "",
      out2: ""
    }
  },
  methods:{
    callapi(api){
      console.log(api)
      this.$axios
        .get(window.location.origin+`/api/`+api)
        .then(response => {
          if (api == 'api1'){
            this.out1 = response.data
          }else{
            this.out2 = response.data
          }
          
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  computed: {
      token () {
      return decodeURIComponent(document.cookie);
    },
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.bg{
  background-image: url(https://eskipaper.com/images/blurred-background-1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.min-heigth{
  min-height: 15rem;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

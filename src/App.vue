<template>
  <h1> {{ title }}</h1>
  <!-- <input type="text" ref="name">
  <button @click="handleClick">Submit</button> -->
  <div v-if="showModal">
    <ModalDisplay :header="header" :text="text" :theme="theme" @close="toggleModal">
      <h2>Slot heading</h2>
      <p>Slot paragraph</p>
      <template v-slot:links>
        <a href="">Sign up</a>
        <a href="">More Info</a>
      </template>
      <template v-slot:modalTwo>
        <h3>Modal Two</h3>
      </template>
    </ModalDisplay>
  </div>
  <div v-if="showModalTwo">
    <ModalDisplay @close="toggleModalTwo">
      <template v-slot:modalTwo>
        <h1>Modal Two</h1>
      </template>
    </ModalDisplay>
  </div>
  <button @click="toggleModal">Show Modal</button>
  <button @click="toggleModalTwo">Show Modal 2.0</button>
</template>

<script>
import ModalDisplay from './components/ModalDisplay.vue'

export default {
  name: 'App',
  components: { ModalDisplay },
  data() {
    return {
      title: 'My first app',
      header: 'Sign up for a giveaway',
      text: 'Grab your ninja swag...',
      theme: 'sale',
      prize: 'scooter',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

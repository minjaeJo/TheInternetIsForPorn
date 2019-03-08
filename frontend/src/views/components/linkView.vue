<template>
    <div>
        <marquee-text class="banner" :duration="10" :repeat="100">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
        </marquee-text>
    </div>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component'
import VueP5 from 'vue-p5'

export default {

    components: {
        MarqueeText
    },
}
</script>

<style scoped>
html {
  background-color: #435466;
  margin: 0;
  padding: 0;
  font-family: "Arial Black", Gadget, sans-serif;
}

.container {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

button {
  color: #435466;
  font-size: 15px;
  font-weight: 600;
  background-color: #4DBA87;
  margin: auto;
  width: 100px;
  height: 50px;
  border: #3B3561;
}

p {
  text-align: center;
  font-size: 50px;
  font-smoothing: antialiased;
  overflow: hidden;
  color: #4DBA87;
  margin: 1px;
}

.Two {
  font-size: 18px;
  font-family: Georgia, serif;
}


.fadeOne-enter-active, .fadeOne-leave-active {
  transition: all .5s ease-out;
}
.fadeOne-enter, .fadeOne-leave-to {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transform: translate(0%, 100%);
}

.fadeTwo-enter-active, .fadeTwo-leave-active {
  transition: all .5s ease-out;
}
.fadeTwo-enter, .fadeTwo-leave-to {
  clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
  transform: translate(0%, -100%);
}
:root{
    --Color-dulation : random(5,15)s;
}
.banner {
    padding: 5px;
    font-size: 20px;
    background-color: #e74c3c;
    animation: bg-color var(--Color-dulation) infinite;
    -webkit-animation: bg-color 10s infinite;
    color: #fff;
}
@-webkit-keyframes bg-color {
  0% { background-color: #e74c3c; }
  20% { background-color: #f1c40f; }
  40% { background-color: #1abc9c; }
  60% { background-color: #3498db; }
  80% { background-color: #9b59b6; }
  100% { background-color: #e74c3c; }
}
@keyframes bg-color {
  0% { background-color: #e74c3c; }
  20% { background-color: #f1c40f; }
  40% { background-color: #1abc9c; }
  60% { background-color: #3498db; }
  80% { background-color: #9b59b6; }
  100% { background-color: #e74c3c; }
}

</style>
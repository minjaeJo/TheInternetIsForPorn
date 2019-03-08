<template>
    <div>
        <marquee-text class="banner" :duration="10" :repeat="100">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
        </marquee-text>
    </div>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component'
export default {
    components: {
        MarqueeText
    }
}
</script>

<style scoped>
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
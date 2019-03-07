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
.banner {
    background: #000;
    color: #fff;
}
</style>
<template>
    <div>
        <div class="logo">
                <img src="../assets/images/logo.png">
                {{this.$route.params.id}}
        </div>
        <div class="sideTitleImg"><img src="../assets/images/poohSideTitle.gif"></div>
        <div class="Title"> </div>
        <link-view v-for="a in 10"></link-view>
    </div>
</template>

<script>
import LinkView from './components/linkView'
import MarqueeText from 'vue-marquee-text-component'
export default {
    components: {
        LinkView,
        MarqueeText
    },
}
</script>


<style scoped>
.logo {
    display: flex;
    align-items: center;
    margin-right: 15px;
    margin-block-end: 0%;
    margin-top: 0;
    width: 71%;
    font-size: 20px;
    font-size: 2.1vw;
    background : pink;
    color: black;
    height: 80px;
}
.logo img {
    margin-right: 30px;
    align-self: left;
    height: 100%;
}
.sideTitleImg {
    position: absolute;
    width: 30%;
    top: 8px;
    right: 0px;
}
.sideTitleImg img{
    width : 100%;
}

</style>
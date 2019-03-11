<template>
    <div class="window-container">
        <div class="headImg">
            <img src="../assets/images/detailViewHeadImg.png">
        </div>
        <div class="arrow">
            <img src="../assets/images/detailViewPopUp.png">
        </div>
        <div class="bodyBlock"></div>



    </div>
</template>

<script>
export default {
    mounted() {
        this.before_page_data = this.$route.params
    },

}
</script>

<style scoped>
.window-container {
    position: relative;
    width: 100%;
    height: 100%;
}
.headImg{
    display: flex;
    align-items: center;
    position: absolute;
    margin: 0;
}
.headImg img:nth-child(1){
    margin-top: 50px;   
    width:100%;
}

.arrow {
    animation: arrow 1.2s;
}
.arrow img{
    width: 30%;
    position: fixed;
    top: 0%;
    left: 35%;
}

@keyframes arrow {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
}

</style>
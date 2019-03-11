<template>
    <div class="window-container">
         <div class="arrow">
            <img src="../assets/images/detailViewPopUp.png">
        </div>
        <div class="headImg">
            <img src="../assets/images/detailViewHeadImg.png">
        </div>
       
        <div class="bodyBlock">
            <img src="../assets/images/poofSideBar2.png">
            <img src="../assets/images/poofSideBar2.png">

            <div class="bodyText">
                {{this.before_page_data.id}}
                <div class="subText">
                    {{this.before_page_data.text}}
                    <img class="item-img" :src="before_page_data.img">
                </div>

            </div>

        </div>



    </div>
</template>

<script>
export default {
    mounted() {
        this.before_page_data = this.$route.params
    },
    data() {
      return {
        before_page_data: ''

      }
    }

}
</script>
<style scoped lang="scss">
.window-container {
    position: relative;
    width: 100%;
    height: 100%;
}
.headImg{
    display: flex;
    align-items: center;
    position: relative;
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
.bodyBlock {
    margin: 20px;
    display: inline;
    position: absolute;
    width: 97%;
 }
 .bodyBlock img:nth-child(1){
    float: left;
    width: 12%;
    padding-right: 30px;
 }
.bodyBlock img:nth-child(2){
    float: right;
    right: -20px;
    width: 12%;
}
.item-img{
    float: right;
}
.bodyText{
    font-size: 30px;
    
}
.subText{
    font-size: 18px;
    display: inline;
}

.subText img{
    width: 40%;
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
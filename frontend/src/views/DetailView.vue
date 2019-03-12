<template>
    <div class="window-container">
        <div class="arrow">
            <img src="../assets/images/detailViewPopUp.png">
        </div>
        <div class="headImg">
            <img src="../assets/images/detailViewHeadImg.png">
        </div>

        <div class="bodyBlock">
            <img class="left-img" src="../assets/images/poofSideBar2.png">
            <img class="right-img" src="../assets/images/poofSideBar2.png">
            <img class="center-img" :src="before_page_data.img">

            <div class="bodyText">
                {{this.before_page_data.id}}
                <div class="subText">
                    {{mix_text}}
                </div>
            </div>
            <div class="dummyText">
                ql2kehr wjlekjgewjkblrgjlkdjsavjbldj;nkfsjkhjbaslneflnjsvslb.,msfjkldnmg.f,dakldsj vbkdsnmvldajjwebgk mrqwemjkafnlqrwkdajsd jbalnekm;ffsdbnjlgrqmwl;fadsbfjklnjmermf;ajdkvxlnfgsmwe,ml;bdksnjfgwerkm;lfsbdjklngw
            </div>
        </div>
    </div>
</template>

<script>
import LinkView from './components/LinkView'

export default {
    mounted() {
        this.before_page_data = this.$route.params
        var mix_arr = this.$route.params.snippet.sort(()=>{return 0.5 - Math.random()})
        console.log(mix_arr)
        mix_arr.forEach((element) => {
            this.mix_text += element + ' '
        })
    },
    data() {
      return {
        before_page_data: '',
        mix_text: ''
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
 .bodyBlock .left-img{
    float: left;
    width: 12%;
    padding-right: 30px;
 }
.bodyBlock .right-img{
    float: right;
    right: -20px;
    width: 12%;
}
.bodyBlock .center-img{
    position:static;
    top: 80px;
    left: auto;
    float: left;
    width: 30%;

}
.bodyText{
    font-size: 30px;
    display: grid;
}
.subText{
    font-size: 18px;
    display: inline;
}
.dummyText{
    position: relative;
    right: 0;
    left: auto;
    display: inline;
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
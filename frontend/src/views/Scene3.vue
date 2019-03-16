<template>
    <div>
        <div v-if="yes_or_no" class='window-container'>
            <video class="video" loop autoplay muted playsinline>
                <source src='https://upload.wikimedia.org/wikipedia/en/d/dc/Pac-Man_Atari_2600_footage.ogv' type='video/ogg' />
            브라우저가 video 태그를 지원하지 않음
            </video>
            <YesOrNOModal @startEvent="startEvent"/>
        </div>
        <div v-else :class="[shake ? 'shake-Ani' : 'window-container']">
            <div class="headImg">
                <img src="/static/images/detailViewHeadImg.png">
            </div>
            <div class="bodyBlock">
                <img class="left-img" src="/static/images/poofSideBar2.png">
                <img class="right-img" src="/static/images/poofSideBar2.png">
                <div class="bodyText">
                    {{this.before_page_data.id}}
                    <div class="subText">
                        <img class="center-img" :src="before_page_data.img">
                        {{mix_text}}
                        {{mix_text}}
                        {{mix_text}}
                    </div>
                </div>
            </div>
            <DemoDogProfileModal></DemoDogProfileModal>
        </div>
    </div>
</template>

<script>
import DemoDogProfileModal from './popup/DogProfileModal'
import YesOrNOModal from './popup/YesOrNoModal'
export default {
    components: {
        DemoDogProfileModal,
        YesOrNOModal
    },
  data() {
    return {
        before_page_data: '',
        shake:false,
        mix_text: '',
        yes_or_no: false
    }
  },
  mounted() {
      this.before_page_data = this.$route.params
      var mix_arr = this.$route.params.snippet.sort(()=>{return 0.5 - Math.random()})
      console.log(mix_arr)
      mix_arr.forEach((element) => {
          this.mix_text += element + ' '
      })
      setTimeout( () => {
        this.$modal.show('first-Popup')
      }, 6000);
      setTimeout( () => {
        this.$modal.show('second-Popup')
      }, 8000);
    setTimeout( () => {
        this.$modal.show('third-Popup')
      }, 10000);
    setTimeout( () => {
        this.$modal.show('firth-Popup')
      }, 11500);
    setTimeout( () => {
        this.$modal.show('fifth-Popup')
      }, 13000);      
    setTimeout( () => {
          this.shake =true
    }, 13800);
    setTimeout( () => {
          this.shake =false
    }, 16800);
    setTimeout( () => {
          this.nextScene();
    }, 17000);
  },
  methods: {
        nextScene() {
            // this.$router.push({ name: 'Scene4', params: {query: this.before_page_data} })
            this.yes_or_no = !this.yes_or_no
        }
  }
}
</script>
<style scoped lang="scss">
.shake-Ani{
  animation: swing .3s infinite linear both;
}
@keyframes swing {
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

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
.video {
    width: 100%;
    height: auto;;
}
</style>
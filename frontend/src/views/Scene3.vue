<template>
    <div>

        <div v-if="EndPopup" class='window-container'>
                <img class="endPopupView" src="/static/images/EndPopup.gif">
        </div>
        <div v-if="yes_or_no" class='window-container'>
            <video class="video" loop autoplay muted playsinline >
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
                        <div class="arrow">
                             <img src="/static/images/detailViewPopUp.png">
                        </div>
                        <span v-for="i in 4" :key="i">{{mix_text}}</span>
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
        yes_or_no: false,
        EndPopup: false,
        mix_arr: []
    }
  },
  mounted() {
        this.before_page_data = this.$route.params
        this.mix_arr = this.$route.params.snippet.sort(()=>{return 0.5 - Math.random()})
        this.mix_arr.map((element) => {
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
            this.EndPopup = true
        }, 16800);
        setTimeout( () => {
            this.EndPopup = false
            this.nextScene();
        }, 18800);
  },
  methods: {
        nextScene() {
            this.yes_or_no = !this.yes_or_no
        },
        startEvent() {
            this.$router.push({ name: 'Scene4', params: {snippet: this.mix_arr} })
        }
  }
}
</script>
<style scoped lang="scss">
.endPopupView{
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10000;

}
.shake-Ani{
  background: #000;
  position: fixed;
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
    z-index: 100000;
    animation: arrow 1.2s infinite linear both;
}
.arrow img{

    width: 30%;
    position: absolute;
    top: 29%;
    left: 42%;
}

@keyframes arrow {
  from, to {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}


.bodyBlock {
    margin: 20px;
    display: inline;
    position: absolute;
    width: 97%;
 }
 .bodyBlock .left-img{
    float: left;
    width: 14%;
    padding-right: 30px;
    margin-right: 20px;

 }
.bodyBlock .right-img{
    float: right;
    right: -20px;
    width: 25%;
}
.bodyBlock .center-img{
    height: 600px;
    position:static;
    top: 80px;
    left: auto;
    float: left;
    width: 100%;
    margin-bottom: 20px;

}
.bodyText{
    margin: 20px;
    margin-right: 40px;
    margin-left: inherit;
    font-size: 36px;
    font-weight: bold;
    display: grid;
}
.subText{
    font-weight: normal;
    text-align: justify;
    margin-right: inherit;
    font-size: 18px;
    display: inline;
}
.video {
    width: 100%;
    height: auto;;
}
</style>
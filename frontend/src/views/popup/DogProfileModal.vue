<template>
  <div>   
    <modal 
      name="first-Popup"
      classes="first-Class"
      transition="firstScale"
      :height="260"
      :width="260"
      @close="close"
      @before-close="beforeClose">
    >
      <div 
        slot="top-right"
        class="ct-top-right"
      >
      </div>
      <img src="/static/images/popup1.gif" />
    </modal>
    <modal 
      name="second-Popup"
      classes="second-Class"
      transition="secondScale"
      :height="300"
      :width="300"
      @close="close"
      @before-close="beforeClose">
    >
      <div 
        slot="top-right"
        class="ct-top-right"
      >
      </div>
      <img src="/static/images/popup2.gif" />
    </modal>
        <modal 
      name="third-Popup"
      classes="third-Class"
      transition="thirdScale"
      :height="380"
      :width="380"
      @close="close"
      @before-close="beforeClose">
    >
      <div 
        slot="top-right"
        class="ct-top-right"
      >
      </div>
      <img src="/static/images/popup3.gif" />
    </modal>
        <modal 
      name="firth-Popup"
      classes="firth-Class"
      transition="firthScale"
      :height="430"
      :width="430"
      @close="close"
      @before-close="beforeClose">
    >
      <div 
        slot="top-right"
        class="ct-top-right"
      >
      </div>
      <img src="/static/images/popup4.gif" />
    </modal>
    <modal 
      name="fifth-Popup"
      classes="fifth-Class"
      transition="fifthScale"
      :height="480"
      :width="480"
      @close="close"
      @before-close="beforeClose">
    >
      <div 
        slot="top-right"
        class="ct-top-right"
      >
      </div>
      <img src="/static/images/popup5.gif" />
    </modal>
  </div>
</template>
<script>
export default {
  name: 'InputFocusModal',
  data() {
    return {
      cantClose : true
    }
  },
    methods: {
      beforeClose (event) {
        if (this.cantClose) {
          event.stop()
        }else{

        };
      },
    close(){
        this.$modal.hide("first-Popup")
        this.$modal.hide('second-Popup') 
        this.$modal.hide("third-Popup")
        this.$modal.hide('firth-Popup')   
        this.$modal.hide('fifth-Popup')   
    }
  },
  mounted() {
    setTimeout( () => {
          this.cantClose = false
          this.close();
    }, 16500);
  }
}
</script>
<style lang="scss">
$Random-top : random(1400)*0.01;
$Random-right : random(2000)*0.01+50;
.first-Class{
  top: $Random-top + vw !important;
  left: $Random-right + vw !important;
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.65);
  img {
    position: absolute;
    left : -2px;
    margin: 0;
    width: 102%;
    height: 100%;
  }
}
$Random-top2 : random(1400)*0.01 + 20;
$Random-right2 : random(2000)*0.01;
.second-Class {
  top: $Random-top2 + vw !important;
  left: $Random-right2 + vw !important;
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.65);
  img {
    position: absolute;
    left : -2px;
    margin: 0;
    width: 102%;
    height: 100%;
  }
}
$Random-top3 : random(1400)*0.01 + 20;
$Random-right3 : random(2000)*0.01+60;
.third-Class {
  top: $Random-top3 + vw !important;
  left: $Random-right3 + vw !important;
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.65);
  img {
    position: absolute;
    left : -2px;
    margin: 0;
    width: 102%;
    height: 100%;
  }
}
$Random-top4 : random(500)*0.01;
$Random-right4 : random(500)*0.01;
.firth-Class {
  top: $Random-top4 + vw !important;
  left: $Random-right4 + vw !important;
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.65);
  img {
    position: absolute;
    left : -2px;
    margin: 0;
    width: 102%;
    height: 100%;
  }
}
.fifth-Class {
  top: 40%;
  left: 40%;
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.65);
  img {
    position: absolute;
    left : -2px;
    margin: 0;
    width: 102%;
    height: 100%;
  }
}
.firstScale-enter-active{
  transition: all 1s;
}
.firstScale-leave-active {
  transition: all 2s;
}
.firstScale-enter,
.firstScale-leave-active {
  opacity: 0;
  transform: translate(-5000px, 3000px);

}
.secondScale-enter-active{
  transition: all 1s;
}
.secondScale-leave-active {
  transition: all 2s;
}
.secondScale-enter,
.secondScale-leave-active {
  opacity: 0;
  transform: translate(5000px, -3000px);

}
.thirdScale-enter-active{
  transition: all 1s;
}
.thirdScale-leave-active {
  transition: all 2s;
}
.thirdScale-enter,
.thirdScale-leave-active {
  opacity: 0;
  transform: translate(-5000px, -3000px);

}
.firthScale-enter-active{
  transition: all 1s;
}
.firthScale-leave-active {
  transition: all 2s;
}
.firthScale-enter,
.firthScale-leave-active {
  opacity: 0;
  transform: translate(5000px, 3000px);
}
.fifthScale-leave-active {
  transition: all 2s;
}
.fifthScale-enter,
.fifthScale-leave-active {
  opacity: 0;
  transform: translate(0, 3000px);

}
</style>
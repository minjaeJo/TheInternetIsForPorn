<template>
    <div>
        <div class="logo">
                <img src="../assets/images/logo.png">
                {{this.before_page_data.id}}
        </div>
        <img class="item-img" :src="before_page_data.img">
        <div class="sideTitleImg"><img src="../assets/images/poohSideTitle.gif"></div>
        <div class="Title"> </div>
        <link-view v-for="(a,index) in 10" :key="index"></link-view>
        <vue-p5
        @sketch="sketch"
        @setup="setup"
        @draw="draw"
        @keypressed="keyPressed"
        @mousemoved="mouseMoved"
        @mousedragged="mouseDragged">
    </vue-p5>
    </div>
</template>

<script>
import LinkView from './components/LinkView'
import MarqueeText from 'vue-marquee-text-component'
import VueP5 from 'vue-p5';
export default {
    components: {
        LinkView,
        MarqueeText,
        VueP5
    },
    mounted() {
        this.before_page_data = this.$route.params
    },
    data() {
      return {
        before_page_data: '',
        red: 255,
        green: 0,
        blue: 0,
        lines: []
      }
    },
    methods: {
      // setup(sketch) {
      //   console.log(sketch)
      //   sketch.background('green');
      //   sketch.text('Hello p5!', 20, 20);
      // },
      sketch(sketch) {
        sketch.draw = () => {
          this.blue = (this.blue + 3) % 255;
          const { red, green, blue } = this;
          sketch.background(red, green, blue);
        };
      },
      setup(sketch) {
        sketch.createCanvas(400, 400);
      },
      draw(sketch) {
        const { width, height } = sketch;
        for (let line of this.lines) {
          sketch.stroke(line.color);
          sketch.line(line.pmouseX, line.pmouseY, line.mouseX, line.mouseY);
        }
      },
      keyPressed({ keyCode }) {
        // 'g' key
        if (keyCode === 71) {
          this.toggleGreen();
        }
      },
      mouseMoved({ mouseX, mouseY, pmouseX, pmouseY }) {
        this.pushLine({ mouseX, mouseY, pmouseX, pmouseY, color: 0 });
      },
      mouseDragged({ mouseX, mouseY, pmouseX, pmouseY }) {
        this.pushLine({ mouseX, mouseY, pmouseX, pmouseY, color: 255 });
      },
      toggleRed() {
        this.red = 255 - this.red;
      },
      toggleGreen() {
        this.green = 255 - this.green;
      },
      pushLine(line) {
        let lines = this.lines;
        lines.push(line);
        this.lines = lines.slice(-100);
      }
    }
}
</script>


<style scoped>
.item-img {
    width: 100px;
}
.swing {
  animation: swing 2s infinite linear both;
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
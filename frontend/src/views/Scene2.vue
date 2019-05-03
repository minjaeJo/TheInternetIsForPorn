<template>
    <div class="window-container" @click.ctrl="onClick">
        <div class="search-container">
            <div class="logo">
                <img src="/static/images/logo.png">
            </div>
            <div class="search-block">
                <input class="search" v-model="search_value" @keyup.enter="searchData">
                <img src="/static/images/search.svg" @click="searchData">
            </div>
        </div>
        <div class="dont-find" v-if="status && (search_result == undefined || search_result == null || search_result == '')">
            <img src="/static/images/dont_find.gif">
            <div>검색 결과가 없습니다. 다시 시도해주세요</div>
        </div>
        <div v-else>
            <div :class="[ishover ? 'item-block' : 'item-block-hover']" v-for="(data,index) in search_result" :key="index" @click="sendDataForNextPage(data)">
                <div v-if="index==3" class="ADImage">
                    <img src="/static/images/poofAD.png">
                </div>
                <div class="title">{{data.title}}</div>
                <div class="link">{{data.link}}</div>
                <div class="bodyText">{{data.snippet}}</div>
            </div>
        </div>
         <div class="sideImg">
            <img src="/static/images/poofSideBar1.png">
            <img src="/static/images/poofSideBar2.png">
        </div>
        <popup :visible.sync="visible" style="position: fixed; right: 0px; bottom: 0px;" class="arrow">
            <img src="/static/images/dont_find.gif">
        </popup>
        <DemoDogProfileModal2></DemoDogProfileModal2>

    </div>

</template>

<script>
import Popup from './components/Popup'
import DemoDogProfileModal2 from './popup/DogProfileModal2'
export default {
    components: {
        Popup,
        DemoDogProfileModal2
    },
    data() {
        return {
            ishover : false,
            search_api: '',
            search_result: [],
            search_value: '',
            status: false,
            query_img: '',
            visible: true,
            snippet_arr: [],
            nextPage : false,
        }
    },
    created() {
        this.search_api = this.$route.params.key
        if(this.$route.params.query) {
            this.$http.get(this.$route.params.key + this.$route.params.query).then((response)=>{
                this.search_result = response.data.items
                this.search_value = this.$route.params.query
                this.status = true
                let has_img = false
                this.search_result.forEach(element => {
                    if(element.pagemap.cse_image != undefined && !has_img) {
                        if(element.pagemap.cse_image[0].src[0] == "h") {
                            this.query_img = element.pagemap.cse_image[0].src
                            has_img = true
                        }
                    }
                    element.snippet.split(' ').forEach((snippet)=> {
                        this.snippet_arr.push(snippet)
                    })
                });
            }).catch(function (error) {
                console.log(error);
            })
        }
    },
    mounted() {
        setTimeout( () => {
            if (!this.nextPage){
                this.$router.push({ name: 'Scene1'})
            }
        }, 35000);
    },
    methods: {
        searchData() {
            this.nextPage = true
            this.$router.push({ name: 'Scene2', params: {query: this.search_value, key : this.search_api} })
            location.reload()
            this.status = false

        },
        sendDataForNextPage(data) {
            this.$modal.show('loading-Popup')
            this.nextPage = true
            setTimeout( () => {
                this.$router.push({ name: 'Scene3', params: { id : data.title, img: this.query_img, snippet : this.snippet_arr}})
            }, 5000);
        },
        onClick(event) {
            console.log(event)
            console.log('event')
        },
    }
}
</script>

<style scoped>
.arrow {
  animation: arrow 1.2s;
}

@keyframes arrow {
  from {
    opacity: 0;
    transform: translateY(100px);
  }


  100% {
    opacity: 1;
    transform: translateY(0)
  }


}
.window-container {
    position: relative;
    width: 100%;
    height: 100%;
}
.item-block{
    margin: auto;
    padding-bottom: 30px;
    padding-left: 100px;
    cursor: pointer;
}
.item-block-hover{
    margin: auto;
    padding-bottom: 30px;
    padding-left: 100px;
    cursor: pointer;
}
.title{

    font-size : 16px;
    color : blue;
    height : 1.2em;
    text-decoration : underline;
    text-align: left;
}

.link{
    width: 620px;
    color : green;
    font-size : 13px;
    padding-bottom: 2px;
    display: block;
    text-align: left;
    position: static;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.bodyText{
    margin-top: 1px;
    text-align: left;
    display: block;
    font-size: 13px;
    border-collapse: separate;
    color : black;
    word-wrap: break-word;
    width : 623px;
}
.search-container {
    margin: 50px;
}
.search-view {
    text-align: left;
    margin-top: 20vh;
}
.logo {
    display : inline-block;
    vertical-align: middle;
    margin-right: 15px;
}
.logo img {
    width: 195px;
}
.sideImg {
    position: absolute;
    width: 500px;
    top: 100px;
    right: 0px;
}
.sideImg img:nth-child(1){
    display : inline-block;
    width : 350px;
    vertical-align : top;
}
.sideImg img:nth-child(2){
    display : inline-block;
    width : 120px;
}
.ADImage img{
    width: 600px;
    margin-bottom : 15px;
}
.search-block {
    display : inline-block;
    position: relative;
    margin: auto;
    vertical-align: top;
}
.search {
    width: 450px;
    height: 35px;
    border-radius: 24px;
    border: 2px solid #dfe1e5;
    box-shadow: none;
    z-index: 3;
    padding: 0px 80px 0px 20px;
    font-size: 15px;
    font-weight: 600;
}
.search:focus,
.search:hover {
    outline: none;
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
    border-color: rgba(223,225,229,0);
}
.search-block img {
    position: absolute;
    top: 10px;
    right: 30px;
    width: 20px;
    cursor: pointer;
}

</style>
<template>
    <div>
        <div class="logo">
            <img src="../assets/images/logo.png">
        </div>
        <div class="search-block">
            <input class="search" v-model="search_value" @keyup.enter="searchData">
            <img src="../assets/images/search.svg" @click="searchData">
        </div>    
        <div v-for="(data,index) in search_result" :key="index">
            <div class = "item-block">
                <a :src="data.formattedUrl" class="title">{{data.title}}</a>
                    <div class = "link">{{data.link}}</div>
                    <div class = "bodyText">{{data.snippet}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        if(this.$route.params.query) {
            this.$http.get(this.search_api + this.$route.params.query).then((response)=>{
                this.search_result = response.data.items
            }).catch(function (error) {
                console.log(error);
            })
        }
    },
    data() {
        return {
            search_api: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDBYtwLQ_gFcWRua_4AZMwVidnKynWbS-0&cx=001296915440147254658:cns5tpebhyi&q=',
            search_result: []
        }
    }
,
    methods: {
        searchData() {
            this.$router.push({ name: 'SearchResultView', params: {query: this.search_value} })
            this.search_value = ''
        }
    }   

}
</script>

<style scoped>
.item-block{
    margin: auto;
    padding-bottom: 30px;
    padding-left: 100px;

}
.title{
    font-size : 16px;
    color : blue;
    height : 1.2em;
    text-decoration : underline;
    text-align: left;
}

.link{
    color : green;
    font-size : 13px;
    padding-bottom: 2px;
    display: block;
    text-align: left;
    position: static;

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






.search-view {
    text-align: left;
    margin-top: 20vh;
}
.logo {
    display : inline-block;
    font-size: 80px;
    font-weight: 700;
}
.logo img {
    width: 20vw;
}
.search-block {
    display : inline-block;
    position: relative;
    width: 700px;
    margin: auto;
}
.search {
    width: 450px;
    height: 70px;
    border-radius: 24px;
    border: 2px solid #dfe1e5;
    box-shadow: none;
    z-index: 3;
    margin-top: 50px;
    padding: 0px 80px 5px 30px;
    font-size: 25px;
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
    top: 70px;
    right: 50px;
    width: 30px;
}

</style>
<template>
    <div class="search-view">
        <div class="logo">
            <img style="width: 50vw;" src="../assets/images/logo.png">
        </div>
        <div class="search-block">
            <input class="search" v-model="search_value" @keyup.enter="searchData">
            <img src="../assets/images/search.svg" @click="searchData">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search_value: '',

        }
    },
    methods: {
        searchData() {
            this.$router.push({ name: 'SearchResultView', params: {query: this.search_value} })
            this.search_value = ''
        }
    }
}
</script>

<style scoped>
.search-view {
    text-align: center;
    margin-top: 20vh;
}
.logo {
    font-size: 80px;
    font-weight: 700;
}
.logo img {
    width: 50vw;
}
.search-block {
    position: relative;
    width: 800px;
    margin: auto;
}
.search {
    width: 650px;
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

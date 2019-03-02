<template>
    <div class="search-view">
        <div class="logo">
            <span v-for="(title,key) in title_arr" :key="key" v-html="title"></span>
        </div>
        <div class="search-block">
            <input class="search">
            <img src="../assets/images/149852.svg">
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.makeLogo()
    },
    data() {
        return {
            title_arr: [],
            title_color: ["#4285f4","#ea4336","#fbbc05","#33a853"]
        }
    },
    methods: {
        makeLogo() {
            var test = "This is Internet".split("")
            var count = this.title_color.length
            test.forEach(element => {
                if(count >= 3) count = 0
                else count += 1
                this.title_arr.push(`<span style=color:${this.title_color[count]}>${element}</span>`)
            });
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
.logo span {
    margin-right: 15px;
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

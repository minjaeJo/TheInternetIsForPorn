<template>
    <div>
        <div v-for="(data,index) in search_result" :key="index">
            <a :src="data.formattedUrl" style="color:#859434">{{data.title}}</a>
            <div>{{data.snippet}}</div>
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

}
</script>

<style scoped>

</style>
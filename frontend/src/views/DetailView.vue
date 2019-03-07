<template>
    <div>
        <link-view v-for="a in 10"></link-view>
    </div>
</template>

<script>
import LinkView from './components/linkView'
export default {
    components: {
        LinkView
    },
}
</script>

<style scoped>

</style>
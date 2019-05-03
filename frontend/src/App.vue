<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        localStorage.setItem('queryIndex',0);
    }
}
</script>
<style>
body {
    display: block;
    margin: 0px;
}
</style>


<template>
    <div>
        <YesOrNOModal :visible="yes_or_no">
            <div>씻빨</div>
        </YesOrNOModal>
    </div>
</template>

<script>
import YesOrNOModal from './popup/YesOrNoModal'
export default {
    components: {
        YesOrNOModal
    },
    mounted() {

    },
    data() {
        return {
            yes_or_no: true
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
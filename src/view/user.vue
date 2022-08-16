<template>
    <h1>{{ $route.params.id}}</h1>
</template>

<script>
    export default {
        name: "user",
        components:{},
        mounted(){
            console.info(this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>
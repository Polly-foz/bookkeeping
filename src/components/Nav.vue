<template>
    <div class="nav">
        <hr>
        <router-link to="/homepage">主页</router-link>
        |
        <router-link to="/accounts">账户</router-link>
        |
        <router-link to="/statistics">统计</router-link>
        |
        <router-link to="/advanced">高级</router-link>
        |
        <router-link to="/me">我的</router-link>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>

</style>
<template>
    <div class="layout-with-nav">
        <header>
            <slot name="header"></slot>
        </header>
        <main class="content">
            <slot/>
        </main>
        <Nav/>
    </div>
</template>

<script>
    export default {
        name: "LayoutWithNav"
    }
</script>

<style lang="scss" scoped>
    .layout-with-nav{
        display: flex;
        flex-direction: column;
        height:100vh;
        .content{
            flex-grow:1;
            overflow: auto;
            /*border: 1px solid red;*/
        }
        > Nav{

        }
    }
</style>
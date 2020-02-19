<template>
    <div class="layout-with-nav">
        <header class="header">
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
    @import "@/assets/style/helper.scss";
    .layout-with-nav{
        display: flex;
        flex-direction: column;
        height:100vh;
        .header{
            background-color: $color-green;
            color:white;
            display: flex;
            justify-content: space-between;
            font-size: 1rem;
            padding: 1rem;

            .iconWrapper{
                display: flex;
                justify-content: center;
                align-items: center;
                .icon{
                    margin-left: 1rem;
                }
            }
        }
        .content{
            flex-grow:1;
            overflow: auto;
            /*border: 1px solid red;*/
        }
        > Nav{

        }
    }
</style>
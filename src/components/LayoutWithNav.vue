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
        display:-webkit-box;
        display:-webkit-flex;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-orient:vertical;
        -webkit-flex-direction:column;
        -ms-flex-direction:column;
        flex-direction:column;
        flex-direction: column;
        flex-wrap: nowrap;
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
            -webkit-box-flex:1;
            -webkit-flex:1;
            -ms-flex:1;
            flex:1;
            overflow:auto;/* winphone8和android4+ */
            -webkit-overflow-scrolling: touch; /* ios5+ */
            /*border: 1px solid red;*/
        }
        > Nav{

        }
    }
</style>
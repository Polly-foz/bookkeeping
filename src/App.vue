<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "@/assets/style/reset.scss";
    @import "@/assets/style/helper.scss";

    html {
        font-size: 16px;
    }

    @media(min-width: 541px) {
        html {
            font-size: 24px;

        }
    }

    h1{
        font-size: 1.2rem;
        font-weight: normal;
    }
    h2{
        font-size: 1.1rem;
    }

    #app{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        font-family: $font-family-black;
        /*line-height: 1.5;*/
        line-height: 1.5;
        color: #333;
    }


</style>

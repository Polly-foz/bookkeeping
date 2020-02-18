<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html { font-size:20px; }
    @media(min-width:541px){ html { font-size:32px; } } /*Android常用宽度*/

    a {
        text-decoration: none;
        color: inherit;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

</style>

<template>
    <nav>
        <router-link to="/homepage" class="item" active-class="selected">
            <Icon name="home" class="icon"/>
            主页
        </router-link>

        <router-link to="/accounts" class="item" active-class="selected">
            <Icon name="accounts" class="icon"/>
            账户
        </router-link>

        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistics" class="icon"/>
            统计
        </router-link>

        <router-link to="/advanced" class="item" active-class="selected">
            <Icon name="advanced" class="icon"/>
            高级
        </router-link>

        <router-link to="/me" class="item" active-class="selected">
            <Icon name="me" class="icon"/>
            我的
        </router-link>
    </nav>
</template>

<script lang="ts">
    export default {
        name: "Nav"
    }
</script>

<style lang="scss" scoped>
    nav{
        display: flex;
        box-shadow: 0 0 0 1px rgba(0,0,0,0.2);
        justify-content: space-around;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        > .item{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 0.5rem;
            > .icon{
                font-size: 1rem;
            }
        }
        > .item.selected{
            color:mediumseagreen;
        }
    }


</style>
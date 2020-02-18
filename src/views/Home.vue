<template>
    <LayoutWithNav id="homepage">
        <header>
            <span>我的第一个账本</span>
            <div class="iconWrapper">
                <Icon name="search" class="icon"/>
                <Icon name="change" class="icon"/>
            </div>

        </header>
        <div class="recentTransactions">
            <span class="title">最近交易</span>
        </div>
        <div class="incomeAndExpenditure">
            <span class="title">收入支出</span>
        </div>
        <router-link to="/calculator">
            <button class="addTransaction">+</button>
        </router-link>
    </LayoutWithNav>
</template>

<script>

    export default {
        name: "HomePage",
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/style/helper.scss";
    #homepage{
        color:blue;
        header{
            background-color: $color-green;
            color:white;
            display: flex;
            justify-content: space-between;
            font-size: 1rem;
            padding: 0.5rem;
            .iconWrapper{
                display: flex;
                justify-content: center;
                align-items: center;
                .icon{

                }
            }
        }
    }

    Icon{
        color: white;
        font-size: 2rem;
    }
</style>
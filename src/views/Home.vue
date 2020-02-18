<template>
    <LayoutWithNav id="homepage">
        <header>
            <h1>我的第一个账本</h1>
            <div class="iconWrapper">
                <Icon name="search" class="icon"/>
                <Icon name="change" class="icon"/>
            </div>

        </header>
        <main>
            <RecentTransactions/>
            <IncomeAndExpenditure/>
        </main>
        <router-link to="/calculator">
            <button class="addTransaction">+</button>
        </router-link>
    </LayoutWithNav>
</template>

<script>

    import RecentTransactions from "@/components/RecentTransactions";
    import IncomeAndExpenditure from "@/components/IncomeAndExpenditure";

    export default {
        name: "HomePage",
        components: {RecentTransactions, IncomeAndExpenditure}
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/style/helper.scss";
    #homepage{
        header{
            background-color: $color-green;
            color:white;
            display: flex;
            justify-content: space-between;
            font-size: 1rem;
            padding: 1rem;
            span{

            }
            .iconWrapper{
                display: flex;
                justify-content: center;
                align-items: center;
                .icon{
                    margin-left: 1rem;
                }
            }
        }
        main{

        }
    }
</style>
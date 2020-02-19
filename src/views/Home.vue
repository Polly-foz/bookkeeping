<template>
    <LayoutWithNav id="homepage">
        <template v-slot:header class="header">
                <h1>我的第一个账本</h1>
                <div class="iconWrapper">
                    <Icon name="search" class="icon"/>
                    <Icon name="change" class="icon"/>
                </div>
        </template>
        <div class="main">
            <RecentTransactions/>
            <IncomeAndExpenditure/>
        </div>
        <button v-on:click="isShow = true"><Icon name="addTransaction" class="addTransaction"/></button>
        <NumberPad :is-show.sync="isShow"></NumberPad>

    </LayoutWithNav>
</template>

<script>

    import RecentTransactions from "@/components/home/RecentTransactions";
    import IncomeAndExpenditure from "@/components/home/IncomeAndExpenditure";
    import NumberPad from "@/components/home/NumberPad";

    export default {
        name: "HomePage",
        data(){
            return{isShow:false,}
        },
        components: {RecentTransactions, IncomeAndExpenditure, NumberPad},
        methods:{
            toNumberPad(){
                console.log("number pad")
                alert("Number pad")
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "@/assets/style/helper.scss";

    #homepage{
        background-color: $color-background-grey;
        position: relative;
        .main{
            overflow: auto;
            .home-pad{
                /*color:blue;*/
                margin:1rem;
                padding: 1rem;
                text-align: left;
                box-shadow: 0 0 0 1px rgba(238,238,238,0.2);
                background-color: white;
            }
        }
        .addTransaction{
            color: $color-green;
            font-size: 3rem;
            position: absolute;
            bottom: 12vh;
            right: 8vw;
            background-color: white;
            /*width: 3rem;*/
            /*height: 3rem;*/
            border-radius: 50%;
            box-shadow: 0 2px 2px 2px $color-background-grey;
        }
        ::v-deep hr{
            background-color:$color-background-grey;
            height: 1px;
            border:none;
            margin: 0.5rem {
                left: 0;
                right: 0;
            };
        }
        ::v-deep .title{
            margin-bottom: 0.5rem;
        }
    }
</style>
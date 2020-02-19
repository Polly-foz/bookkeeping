<template>
    <div id="incomeAndExpenditure" class="home-pad">
        <h2 class="title">收入支出</h2>
        <ol>
            <li>
                <hr>
                <div class="content">
                    <div class="left">
                        <div class="scope">今天</div>
                        <div class="dateScope">2月19日</div>
                    </div>
                    <div class="right">
                        <div class="income">¥10</div>
                        <div class="expenditure">-¥100</div>
                    </div>
                </div>
            </li>
            <li>
                <hr>
                <div class="content">
                    <div class="left">
                        <div class="scope">本周</div>
                        <div class="dateScope">2月19日</div>
                    </div>
                    <div class="right">
                        <div class="income">¥10</div>
                        <div class="expenditure">-¥100</div>
                    </div>
                </div>
            </li>
            <li>
                <hr>
                <div class="content">
                    <div class="left">
                        <div class="scope">本月</div>
                        <div class="dateScope">2月19日</div>
                    </div>
                    <div class="right">
                        <div class="income">¥10</div>
                        <div class="expenditure">-¥100</div>
                    </div>
                </div>
            </li>
            <li>
                <hr>
                <div class="content">
                    <div class="left">
                        <div class="scope">本年</div>
                        <div class="dateScope">2月19日</div>
                    </div>
                    <div class="right">
                        <div class="income">¥10</div>
                        <div class="expenditure">-¥100</div>
                    </div>
                </div>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "IncomeAndExpenditure"
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/style/helper.scss";

    #incomeAndExpenditure{
        .content{
            display: flex;
            justify-content: space-between;
            .dateScope{
                font-size: 0.8rem;
                color: $color-nav-grey;
            }
            .right{
                text-align: right;
                font-size: 0.9rem;
                .income{
                    color: $color-green;
                }
            }
        }

    }

</style>
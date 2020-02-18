<template>
    <div id="incomeAndExpenditure" class="home-pad">
        <h2 class="title">收入支出</h2>
        <ol>
            <li>
                <div class="left">
                    <div class="scope">今天</div>
                    <div class="dataScope">2月19日</div>
                </div>
                <div class="right">
                    <div class="income">¥10</div>
                    <div class="expenditure">¥100</div>
                </div>
            </li>
            <li>
                <div class="left">
                    <div class="scope">本周</div>
                    <div class="dataScope">2月19日</div>
                </div>
                <div class="right">
                    <div class="income">¥10</div>
                    <div class="income">¥10</div>
                    <div class="expenditure">¥100</div>
                </div>
            </li>
            <li>
                <div class="left">
                    <div class="scope">本月</div>
                    <div class="dataScope">2月19日</div>
                </div>
                <div class="right">
                    <div class="income">¥10</div>
                    <div class="expenditure">¥100</div>
                </div>
            </li>
            <li>
                <div class="left">
                    <div class="scope">本年</div>
                    <div class="dataScope">2月19日</div>
                </div>
                <div class="right">
                    <div class="income">¥10</div>
                    <div class="expenditure">¥100</div>
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

<style scoped>

</style>
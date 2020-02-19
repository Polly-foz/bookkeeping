<template>
    <div id="recentTransactions" class="home-pad">
        <h2 class="title">最近交易</h2>
        <ol>
            <li>
                <hr>
                <div class="content">
                    <div class="firstLine">
                        <div class="category">公共交通</div>
                        <div class="money">¥3.00</div>
                    </div>
                    <div class="secondLine">
                        <div class="note">坐地铁上班</div>
                        <div class="time">07:15</div>
                    </div>
                </div>
            </li>
            <li>
                <hr>
                <div class="content">
                    <div class="firstLine">
                        <div class="category">公共交通</div>
                        <div class="money">¥3.00</div>
                    </div>
                    <div class="secondLine">
                        <div class="note">坐地铁上班</div>
                        <div class="time">07:15</div>
                    </div>
                </div>
            </li>
            <li>
                <hr>
                <div class="content">
                    <div class="firstLine">
                        <div class="category">公共交通</div>
                        <div class="money">¥3.00</div>
                    </div>
                    <div class="secondLine">
                        <div class="note">坐地铁上班</div>
                        <div class="time">07:15</div>
                    </div>
                </div>
            </li>
        </ol>
        <hr>
        <div class="allTransactions">所有交易</div>
    </div>
</template>

<script>
    export default {
        name: "RecentTransactions"
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/style/helper.scss";

    #recentTransactions {
        .content {
            display: flex;
            flex-direction: column;

            .firstLine {
                display: flex;
                justify-content: space-between;
            }

            .secondLine {
                display: flex;
                justify-content: space-between;
                font-size: 0.8rem;
                color: $color-nav-grey;
            }
        }
        .allTransactions{
            margin-top: 0.5rem;
            color: $color-green;
            font-size: 0.9rem;
        }
    }

</style>
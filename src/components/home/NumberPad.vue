<template>
    <div class="numberPad" v-if="isShow">
        {{isShow}}
        <div class="cover" @click.stop="$emit('update:isShow', false)"></div>
        <div class="content">
            <div class="money">
                <div class="symbol">¥</div>
                <div class="expression">{{expression}}</div>
            </div>
            <div class="buttons">
                <button class="bgColorGrey">C</button>
                <button class="bgColorGrey">÷</button>
                <button class="bgColorGrey">×</button>
                <button class="bgColorGrey"><Icon name="backspace"></Icon></button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button class="bgColorGrey">-</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button class="bgColorGrey">+</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button class="ok">OK</button>
                <button>()</button>
                <button>0</button>
                <button>.</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NumberPad",
        props: {
            isShow: {
                type: Boolean,
                default: false,
                required: true,
            }
        },
        data(){
            return {
                expression:0,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/style/helper.scss";

    .numberPad{
        position: relative;
    }
    .cover{
        background: rgba(0,0,0,0.7);
        position: fixed;
        z-index:200;
        width:100%;
        height:100%;
        top:0;
        left:0;
    }
    .content{
        position: fixed;
        bottom:0;
        width:100%;
        z-index: 300;
        background-color: white;
    }
    .money{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        font-size: 2rem;
        line-height: 2;
        color: $color-green;
        .symbol{
            margin-left: 1.5rem;
        }
        .expression{
            flex-grow:1;
            text-align: left;
            margin-left: 1.5rem;
        }
    }
    .buttons{
        button{
            width:25%;
            float:left;
            font-size: 1.2rem;
            line-height: 3rem;
            border:none;
            background-color: white;
            box-shadow: 0 0 0 1px rgba(0,0,0,0.05);
        }
        .bgColorGrey{
            background-color: $color-background-grey;
        }
        .ok{
            float:right;
            line-height: 6rem;
            background-color: $color-green;
            color: white;
        }
    }
</style>
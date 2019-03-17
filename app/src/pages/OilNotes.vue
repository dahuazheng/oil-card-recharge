<template>
    <div id="oil-notes">
        <ul>
            <li v-for="(note, key) in notes" :key="note.text">
                {{key + 1}}.
                {{note.text}}
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: 'oilNotes',
        data() {
            return {
                notes: [
                    {
                        text: '加油卡充值无法进行冲正，请务必填写正确的加油卡号码，' +
                            '一旦支付无法退款和修改，如填写错误损失自行负责；'
                    }, {
                        text: '由于是代充值服务，故在任何情况下不提供充值发票，' +
                            '加油时也无法获取发票，请知悉；'
                    }, {
                        text: '加油卡充值到账后无有效期，可任意使用；'
                    }, {
                        text: '实时到账，由于订单量巨大，个别号码会出现48小时到账，' +
                            '核实不到账进行退款售后，无需担心；'
                    }, {
                        text: '客服时间为周一至周六8:30-18:00，' +
                            '联系方式请在首页中点击客服支持。'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/mixin";

    #oil-notes {
        box-sizing: border-box;
        min-height: 100vh;

        ul {
            padding: 0 30px 30px;
            background: $white;
        }

        li {
            padding-top: 30px;
            line-height: 1.5;
            font-family: $font-regular;
        }
    }

</style>

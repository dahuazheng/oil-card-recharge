<template>
    <div id="user-withdraw">
        <ul>
            <li>
                <label>可提现金额</label>
                <input
                    type="text"
                    placeholder="请输入可提现金额"
                    readonly
                    v-model="withdraw.allowPrice">
            </li>
            <li>
                <label>提现金额</label>
                <input
                    type="text"
                    placeholder="请输入提现金额"
                    v-model="withdraw.price">
            </li>
            <li>
                <label>持卡人</label>
                <input
                    type="text"
                    placeholder="请选择持卡人"
                    readonly
                    v-model="withdraw.cardholder">
            </li>
            <li>
                <label>银行卡</label>
                <input
                    type="text"
                    placeholder="请输入银行名称"
                    readonly
                    v-model="withdraw.bankName">
            </li>
            <li>
                <label>开户行</label>
                <input
                    type="text"
                    placeholder="请输入开户行"
                    readonly
                    v-model="withdraw.bankOpen">
            </li>
        </ul>
        <p>尊敬的用户，如需修改银行卡号，请联系我们</p>
        <p>
            <button @click="submit">立即提现</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'userWithDraw',
        data() {
            return {
                withdraw: {
                    allowPrice: '100.00元',
                    price: '',
                    cardholder: 'Dlab',
                    bankName: '工商银行',
                    bankOpen: '上海黄浦区外滩支行'
                }
            }
        },
        methods: {
            submit() {

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/mixin';

    #user-withdraw {
        ul {
            padding: 0 $space-width;
        }

        li {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 68px;
            border-bottom: 1px solid $border-color;

            label {
                @include px2rem(width, 70);
                @include fontSize($font-medium);
                display: inline-block;
            }

            input {
                flex: 1;
                padding: 0 $space-width;
                text-align: left;
            }
        }

        p {
            @include clearBack;
            padding: 40px $space-width * 2;
            text-align: center;

            button {
                @include fontSize($font-medium);
                width: 100%;
                height: 40px;
                background: $primary-color;
                border: none;
                border-radius: $border-radius;
                color: $white;
            }
        }
    }

</style>

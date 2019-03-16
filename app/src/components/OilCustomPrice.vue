<template>
    <div id="oil-custom__price">
        <main>
            <ul>
                <li>
                    <label>充值金额</label>
                    <input type="number" placeholder="请输入金额" v-model="price">
                </li>
            </ul>
            <p>尊敬的用户，单次最少充值1000元。</p>
            <button @click="recharge">立即充值</button>
        </main>
    </div>
</template>

<script>

    export default {
        name: 'oilCustomPrice',
        data() {
            return {
                price: null
            }
        },
        methods: {
            recharge() {
                if (!this.price) {
                    return this.$toast('请输入金额')
                }
                if (Number(this.price) > 10000) {
                    return this.$toast('金额不能超过10000元')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/mixin";

    #oil-custom__price {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: $background-color;

        main {
            padding: 0 30px;
            background: $white;
        }

        ul li {
            @include fontSize($font-medium);
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 65px;
            border-bottom: 1px solid $border-color;
            font-family: $font-regular;

            input {
                @include fontSize($font-medium-s);
                flex: 1;
                margin-left: 24px;
                border: none;
                color: $text-third-color;
                font-family: $font-sans-serif;
            }
        }

        p {
            @include fontSize($font-little);
            margin: 15px 0;
            color: $primary-color;
        }

        button {
            @include fontSize($font-medium);
            margin: 50px 0;
            width: 100%;
            height: 45px;
            border: none;
            border-radius: $border-radius;
            background: $primary-color;
            color: $white;
        }
    }
</style>

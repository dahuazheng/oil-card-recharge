<template>
    <div id="oil-custom-price">
        <ul>
            <li>
                <label>充值金额：</label>
                <input type="text" placeholder="请输入金额">
            </li>
        </ul>
        <p>尊敬的用户，单次最多可充值10000元。</p>
        <button>立即充值</button>
    </div>
</template>

<script>
    export default {
        name: 'oilCustomPrice',
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/mixin";

    #oil-custom-price {
        padding: 0 30px;
        background: $white;

        ul li {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            border-bottom: 1px solid $border-color;
            font-family: $font-regular;

            input {
                @include fontSize($font-medium-s);
                flex: 1;
                margin-left: 10px;
                border: none;
                text-align: right;
                color: $text-third-color;
                font-family: $font-sans-serif;
            }
        }

        p {
            margin: 15px 0 30px;
            color: $primary-color;
        }

        button {
            @include fontSize($font-medium);
            margin: 20px 0 30px;
            width: 100%;
            height: 44px;
            border: none;
            border-radius: 5px;
            background: $primary-color;
            color: $white;
        }
    }
</style>
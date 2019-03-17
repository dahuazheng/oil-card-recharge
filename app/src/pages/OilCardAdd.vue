<template>
    <div id="oil-card-add">
        <ul>
            <li>
                <label>油卡标签</label>
                <input type="text" placeholder="请输入标签">
            </li>
            <li>
                <label>油卡号码</label>
                <input type="text" placeholder="请输入卡号">
            </li>
        </ul>
        <p>尊敬的用户，加油卡充值无法进行正确性校验，请务必确保油卡号码正确，一旦支付无法退款和修改， 填写错误造成的损失自行承担。</p>
        <button>立即添加</button>
    </div>
</template>

<script>
    export default {
        name: 'oilCardAdd',
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/mixin";

    #oil-card-add {
        padding: 0 $space-width;
        background: $white;

        ul li {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 65px;
            border-bottom: 1px solid $border-color;
            font-family: $font-regular;

            label {
                display: block;
                @include px2rem(width, 84);
                @include fontSize($font-medium - 1);
            }

            input {
                @include fontSize($font-medium-s - 1);
                flex: 1;
                border: none;
                color: $text-third-color;
                font-family: $font-sans-serif;
            }
        }

        p {
            @include fontSize($font-little);
            margin: 20px 0;
            text-align: justify;
            line-height: 1.8;
            color: $primary-color;
        }

        button {
            @include fontSize($font-medium);
            margin: 50px 0 40px;
            width: 100%;
            height: 45px;
            border: none;
            border-radius: 5px;
            background: $primary-color;
            color: $white;
        }
    }
</style>

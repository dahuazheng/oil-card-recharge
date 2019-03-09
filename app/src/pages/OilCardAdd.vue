<template>
    <div id="oil-card-add">
        <ul>
            <li>
                <label>油卡标签：</label>
                <input type="text" placeholder="请输入标签">
            </li>
            <li>
                <label>油卡号码：</label>
                <input type="text" placeholder="请输入卡号">
            </li>
        </ul>
        <p>尊敬的用户，最多可绑定5张油卡。</p>
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
            margin: 30px 0;
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
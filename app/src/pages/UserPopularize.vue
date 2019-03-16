<template>
    <div id="user-popularize">
        <main>
            <div class="user">
                <icon name="user"></icon>
                Dlab
            </div>
            <div class="scan-code">
                <div class="scan-code__img">
                    <QrcodeVue :value="address" size="154" renderAs='svg'/>
                </div>
                <p>长按屏幕，保存二维码图片</p>
            </div>
            <address>
                <p>{{address}}</p>
                <button
                    v-clipboard:copy="address"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError">
                    复制地址
                </button>
            </address>
        </main>
        <aside>
            公众号接入教程（文字版）
        </aside>
    </div>
</template>

<script>
    import QrcodeVue from 'qrcode.vue'

    export default {
        name: 'userPopularize',
        components: {QrcodeVue},
        data() {
            return {
                address: 'https://www.ico.cn/search/index?q=vip'
            }
        },
        methods: {
            onCopy() {
                return this.$toast('已复制')
            },
            onError() {
                return this.$toast('请重新复制')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/mixin";

    #user-popularize {
        padding: $space-width *2;

        main {
            padding: $space-width $space-width 20px;
            border-radius: 15px;
            background: $white;

            .user {
                @include fontSize($font-medium);
                display: flex;
                flex-direction: row;
                align-items: center;

                .svg-icon {
                    @include px2rem(width, 42);
                    @include px2rem(height, 42);
                    margin-right: $space-width-s;
                    border-radius: 50%;
                    color: $text-third-color;
                }
            }

            .scan-code {
                margin-top: $space-width-s;
                text-align: center;

                .scan-code__img {
                    display: inline-block;
                    box-sizing: border-box;
                    padding: 10px;
                    border: 10px solid $border-color;
                    font-size: 0;
                }

                p {
                    margin: 10px 0 20px;
                    color: $text-third-color;
                }
            }

            address {
                text-align: center;
                font-style: normal;
                color: $text-third-color;

                p {
                    margin: 10px 0;
                }

                button {
                    @include px2rem(width, 100);
                    @include px2rem(height, 37);
                    border: none;
                    border-radius: $border-radius;
                    background: $primary-color;
                    color: $white;
                }
            }
        }

        aside {
            margin-top: 18px;
            height: 44px;
            border-radius: 15px;
            padding: 0 $space-width;
            line-height: 44px;
            background: $white;
        }
    }

</style>

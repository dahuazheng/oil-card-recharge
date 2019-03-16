<template>
    <div id="user-center">
        <div class="banner">
            <div class="banner-user">
                <img src="../assets/images/logo.png">
                <br>
                Dlab
            </div>
            <ul class="banner-price">
                <li>
                    <icon name="balance"></icon>
                    账户余额
                    <small>¥0.00</small>
                </li>
                <li>
                    <icon name="earnings"></icon>
                    累计奖金
                    <small>¥0.00</small>
                </li>
            </ul>
        </div>
        <ul class="main">
            <li v-for="option in options"
                :key="option.title"
                @click="toPage(option.url)">
                <icon :name="option.icon" :style="{color: option.color}"></icon>
                <p>
                    {{option.title}}
                    <van-icon name="arrow"></van-icon>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'userCenter',
        data() {
            return {
                options: [
                    {
                        icon: 'withdraw',
                        color: '#ff404e',
                        title: '提现',
                        url: '/user-withdraw'
                    }, {
                        icon: 'popularize',
                        color: '#0084f5',
                        title: '推广链接',
                        url: '/user-popularize'
                    }, {
                        icon: 'bonus',
                        color: '#0084f8',
                        title: '奖金明细',
                        url: '/user-bonus'
                    }, {
                        icon: 'record',
                        color: '#ff9809',
                        title: '提现记录',
                        url: '/user-record'
                    },
                ]
            }
        },
        methods: {
            toPage(path) {
                this.$router.push(path)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/mixin';

    #user-center {
        .banner {
            @include px2rem(height, 211);
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: $space-width;
            background: $primary-color;
            color: $white;

            .banner-user {
                text-align: center;

                img {
                    @include px2rem(width, 60);
                    @include px2rem(height, 60);
                    margin-bottom: $space-width-s;
                    border-radius: 50%;
                    background: #ccc;
                }
            }

            .banner-price {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;

                li {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    line-height: 1.6;

                    .svg-icon {
                        @include px2rem(width, 33);
                        @include px2rem(height, 33);
                        margin-bottom: 5px;
                    }
                }
            }
        }

        .main {
            background: $white;

            li {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding-left: $space-width;

                .svg-icon {
                    padding: 0 20px 0 10px;
                    width: 16px;
                    height: 16px;
                }

                p {
                    @include clearBack;
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                    height: 55px;
                    padding-right: $space-width;
                    border-bottom: 1px solid $border-color;

                    .van-icon {
                        color: $text-sub-color;
                    }
                }

                &:last-child p {
                    border-bottom: none;
                }
            }
        }
    }
</style>

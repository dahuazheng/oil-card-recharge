<template>
    <div id="oil-recharge">
        <main>
            <div class="account">
                <p>
                    3302251993050303101
                    <icon name="user"></icon>
                </p>
                <small>中石化</small>
            </div>
            <div class="recharge">
                <label>充油卡</label>
                <ul class="clearfix">
                    <li v-for="price in prices" :key="price.sellingPrice">
                        <div class="box">
                            {{price.originalPrice}}元
                            <small>售价{{price.sellingPrice}}元</small>
                        </div>
                    </li>
                    <li>
                        <div class="box">
                            自定义
                            <small>最高单充10000元</small>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
        <aside>
            <router-link to="/oil-notes">注意事项</router-link>
            |
            <router-link to="/">客服支持</router-link>
        </aside>
    </div>
</template>

<script>
    export default {
        name: 'oilRecharge',
        data() {
            return {
                prices: [
                    {
                        originalPrice: 30,
                        sellingPrice: 29.94
                    }, {
                        originalPrice: 50,
                        sellingPrice: 49.90
                    }, {
                        originalPrice: 100,
                        sellingPrice: 99.80
                    }, {
                        originalPrice: 200,
                        sellingPrice: 199.60
                    }, {
                        originalPrice: 300,
                        sellingPrice: 299.40
                    }, {
                        originalPrice: 500,
                        sellingPrice: 499.00
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/mixin';

    #oil-recharge {
        position: relative;
        box-sizing: border-box;
        min-height: 100vh;
        padding-top: $space-width;

        main {
            background: $white;
            padding: 0 15px;

            .account {
                padding: 15px 0;
                border-bottom: 1px solid $border-color;
                color: $text-sub-color;

                p {
                    @include clearBack;
                    @include fontSize($font-large);
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 5px;
                    font-family: PingFangSC-Regular;

                    .svg-icon {
                        width: 24px;
                        height: 24px;
                        color: $primary-color;
                    }
                }

                small {
                    @include fontSize($font-medium-s);
                }

            }

            .recharge {
                padding: $space-width 0 80px;

                label {
                    color: $text-third-color;
                }

                ul {
                    margin: 5px -5px 0;

                    li {
                        float: left;
                        width: 33.333%;
                        box-sizing: border-box;
                        padding: 5px;

                        .box {
                            @include fontSize($font-medium);
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            height: 60px;
                            border: 1px solid $primary-color;
                            border-radius: $border-radius;
                            color: $primary-color;

                            small {
                                @include fontSize($font-little)
                            }
                        }
                    }
                }
            }
        }

        aside {
            position: fixed;
            right: 0;
            bottom: 0;
            left: 0;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: #909fbd;

            a {
                text-decoration: none;
                color: #909fbd;
            }
        }
    }
</style>
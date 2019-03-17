<template>
    <div id="oil-recharge">
        <main>
            <div v-if="status==='unbind'" class="account unbind">
                <p>
                    绑定油卡
                    <icon name="user"></icon>
                </p>
                <small>
                    没有油卡？
                    <router-link to="/oil-apply">立即申请</router-link>
                </small>
            </div>
            <div v-else
                 class="account">
                <p>
                    <input
                        type="text"
                        placeholder="请输入油卡号码"
                        v-model="cardId">
                    <icon name="user" @click="toCardList(currentCard.cardId)"></icon>
                </p>
                <small>{{cardGroup || '&nbsp;'}}</small>
            </div>

            <div class="recharge">
                <label>充油卡</label>
                <ul class="clearfix" :class="{charge: status==='charge'}">
                    <li v-for="price in prices" :key="price.sellingPrice">
                        <div class="box">
                            {{price.originalPrice}}元
                            <small>售价{{price.sellingPrice}}元</small>
                        </div>
                    </li>
                    <li>
                        <div class="box" @click="showCustomPrice=true">
                            自定义
                            <small>最高单充10000元</small>
                            <img v-if="status==='charge'" src="../assets/svg/preference-primary.svg">
                            <img v-else src="../assets/svg/preference-gray.svg">
                        </div>
                    </li>
                </ul>
            </div>
        </main>
        <aside>
            <router-link to="/oil-order-list">我的订单</router-link>
            |
            <router-link to="/oil-notes">注意事项</router-link>
            |
            <router-link to="/oil-contact-us">联系我们</router-link>
        </aside>
        <OilCustomPrice v-show="showCustomPrice"/>
    </div>
</template>

<script>
    import OilCustomPrice from '../components/OilCustomPrice'

    export default {
        name: 'oilRecharge',
        components: {OilCustomPrice},
        data() {
            return {
                showCustomPrice: false,
                status: 'charge',
                currentCard: {
                    label: '妈妈',
                    cardId: '3302251993050303113',
                    group: '中国石化'
                },
                cardId: '',
                cardGroup: '',
                prices: [
                    {
                        originalPrice: 1000,
                        sellingPrice: 880.00
                    }, {
                        originalPrice: 1500,
                        sellingPrice: 1320.00
                    }, {
                        originalPrice: 2000,
                        sellingPrice: 1760.00
                    }, {
                        originalPrice: 3000,
                        sellingPrice: 2640.00
                    }, {
                        originalPrice: 4000,
                        sellingPrice: 3520.00
                    }, {
                        originalPrice: 5000,
                        sellingPrice: 4400.00
                    }
                ]
            }
        },
        methods: {
            toCardList(cardId) {
                this.$router.push({name: 'oilCardList', params: {cardId}})
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
                    @include fontSize($font-large + 2);
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 5px;
                    font-family: $font-regular;
                    color: $black;

                    input {

                        &::-webkit-input-placeholder {
                            color: $primary-color;
                        }

                        &:-ms-input-placeholder {
                            color: $primary-color;
                        }

                        &::-moz-placeholder {
                            color: $primary-color;
                        }

                        &:-moz-placeholder {
                            color: $primary-color;
                        }
                    }

                    .svg-icon {
                        width: 24px;
                        height: 24px;
                        color: $primary-color;
                    }
                }

                small {
                    @include fontSize($font-medium-s);
                    color: $primary-color;
                }

                &.unbind {
                    p {
                        color: $primary-color;
                    }

                    small {
                        color: $text-color;
                    }

                    a {
                        color: $primary-color;
                        text-decoration: underline;
                    }
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
                        color: $text-third-color;

                        .box {
                            @include fontSize($font-medium);
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            height: 60px;
                            border: 1px solid $text-third-color;
                            border-radius: $border-radius;

                            small {
                                @include fontSize($font-little)
                            }

                            img {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 32px;
                                height: 32px;
                                color: #ffa400;
                            }
                        }
                    }

                    &.charge li {
                        color: $primary-color;

                        .box {
                            border: 1px solid $primary-color;
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

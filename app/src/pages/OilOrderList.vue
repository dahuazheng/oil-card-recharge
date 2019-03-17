<template>
    <div id="oil-order__list">
        <ul>
            <li v-for="order in orders" :key="order.number">
                <icon name="order-succeed"></icon>
                <div class="text">
                    <h2>
                        <label>订单</label>
                        {{order.number}}
                    </h2>
                    <div class="detail">
                        <p>
                            <label>订单类型</label>
                            <span>{{order.type}}</span>
                        </p>
                        <p>
                            <label>充值号码</label>
                            <span>{{order.cardId}}</span>
                        </p>
                        <p>
                            <label>订单金额</label>
                            <span>{{order.price}}</span>
                        </p>
                        <p>
                            <label>会员手机号</label>
                            <span>{{order.price}}</span>
                        </p>
                        <p>
                            <label>下单时间</label>
                            <span>{{order.time | displayDateTime}}</span>
                        </p>
                        <p>
                            <label>订单状态</label>
                            <span>{{order.status}}</span>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {formatDate} from '../utils/date'

    export default {
        name: 'oilOrderList',
        data() {
            return {
                orders: [
                    {
                        number: '800420282459898',
                        type: '升级代理',
                        cardId: '3302251993050303101',
                        price: '888.88',
                        phone: '18368095040',
                        time: new Date(),
                        status: '订单成功',

                    }, {
                        number: '800420282459892',
                        type: '升级代理',
                        cardId: '3302251993050303101',
                        price: '888.88',
                        phone: '18368095040',
                        time: new Date('2019-03-08 09:43:20'),
                        status: '订单成功',

                    }, {
                        number: '800420282459893',
                        type: '升级代理',
                        cardId: '3302251993050303101',
                        price: '888.88',
                        phone: '18368095040',
                        time: new Date('2019-03-08 09:43:20'),
                        status: '订单成功',

                    },
                ]
            }
        },
        filters: {
            displayDateTime(time) {
                return formatDate(time)
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/mixin';

    #oil-order__list {
        ul li {
            @include px2rem(padding-left, 110);
            position: relative;
            margin-bottom: $space-width-s;
            background: $white;

            .svg-icon {
                @include px2rem(left, 30);
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto;
                width: 47px;
                height: 46px;
                color: $primary-color;
            }

            h2 {
                @include clearBack;
                @include px2rem(height, 42);
                @include px2rem(line-height, 42);
                @include fontSize($font-medium);
                border-bottom: 1px solid $border-color;
                color: $primary-color;
                font-weight: normal;

                label {
                    margin-right: $space-width-s *2;
                }
            }

            .detail {
                padding: 5px 0;

                p {
                    margin: 5px 0;

                    label {
                        @include px2rem(width, 80);
                        display: inline-block;
                    }

                    span {
                        color: $text-third-color;
                    }
                }
            }
        }
    }
</style>

<template>
    <div id="user-record">
        <ul>
            <li v-for="record in records">
                <h2>
                    <label>提现号</label>
                    {{record.number}}
                </h2>
                <div class="detail">
                    <p>
                        <label>提现状态</label>
                        <span :style="{color: selectColor(record.status)}">{{record.status}}</span>
                    </p>
                    <p>
                        <label>提现时间</label>
                        <span>{{record.time | displayDateTime}}</span>
                    </p>
                    <p>
                        <label>提现金额</label>
                        <span>{{record.price}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {formatDate} from '../utils/date'

    export default {
        name: 'userRecord',
        data() {
            return {
                records: [
                    {
                        number: '800420282459898',
                        status: '提现中',
                        time: new Date('2019-03-08 09:43:20'),
                        price: '888.88'
                    }, {
                        number: '800420282459898',
                        status: '提现成功',
                        time: new Date(),
                        price: '888.88'
                    }, {
                        number: '800420282459898',
                        status: '提现失败',
                        time: new Date('2019-03-08 09:43:20'),
                        price: '888.88'
                    },
                ]
            }
        },
        filters: {
            displayDateTime(time) {
                return formatDate(time)
            }
        },
        methods: {
            selectColor(status) {
                switch (status) {
                    case '提现中':
                        return '#f9bf68'
                    case '提现成功':
                        return '#50b56a'
                    case '提现失败':
                        return '#b55050'
                    default:
                        return '#999999'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/mixin";

    #user-record {
        ul li {
            margin-bottom: $space-width-s;
            padding: 0 $space-width;
            background: $white;

            h2 {
                @include clearBack;
                @include px2rem(height, 42);
                @include px2rem(line-height, 42);
                @include fontSize($font-medium);
                width: 80%;
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
                        margin-right: $space-width *2;

                    }

                    span {
                        color: $text-third-color;
                    }
                }
            }
        }
    }
</style>

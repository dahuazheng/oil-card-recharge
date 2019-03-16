<template>
    <div id="user-bonus">
        <h1>
            15690.70
            <span>奖金明细</span>
        </h1>
        <ul>
            <li v-for="bonus in bonusList" :key="bonus.title">
                <h2>{{bonus.title}}</h2>
                <aside>
                    <span>{{bonus.price}}</span>
                    <small>{{bonus.date}}</small>
                </aside>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'userBonus',
        data() {
            return {
                bonusList: [
                    {
                        title: '今日奖励',
                        price: '40.00',
                        date: '2019-02-14'
                    }, {
                        title: '昨日奖励',
                        price: '40.00',
                        date: '2019-02-13'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/mixin";

    #user-bonus {
        h1 {
            @include clearBack;
            @include px2rem(height, 98);
            @include fontSize($font-large-s);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 $space-width;
            background: $white;
            font-weight: normal;

            span {
                @include fontSize($font-medium);
                margin-top: 5px;
                color: $primary-color;
            }
        }

        ul li {
            @include px2rem(height, 70);
            margin-top: $space-width-s;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 $space-width;
            background: $white;

            h2{
                @include clearBack;
                @include fontSize($font-medium);
                font-weight: normal;
            }

            aside {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;

                span {
                    color: $primary-color;
                }

                small {
                    margin-top: 6px;
                    color: $text-third-color;
                }
            }
        }
    }
</style>

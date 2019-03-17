<template>
    <div id="oil-card__list">
        <ul>
            <li>
                <label class="selected">{{currentCard.label}}</label>
                <p>
                    <!--<span>{{currentCard.group}}</span>-->
                    {{currentCard.cardId}}
                </p>
            </li>
        </ul>
        <h2>其他油卡</h2>
        <ul>
            <li v-for="card in otherCards" :key="card.cardId">
                <label>{{card.label}}</label>
                <p>
                    <!--<span>{{card.group}}</span>-->
                    {{card.cardId}}
                </p>
            </li>
        </ul>
        <aside>
            <button @click="toAddCard">+ 添加油卡</button>
        </aside>
    </div>
</template>

<script>
    export default {
        name: 'oilCardList',
        data() {
            return {
                cards: [
                    {
                        label: '我',
                        cardId: '3302251993050303111',
                        group: '中石化'
                    }, {
                        label: '爸爸',
                        cardId: '3302251993050303112',
                        group: '中石化'
                    }, {
                        label: '妈妈',
                        cardId: '3302251993050303113',
                        group: '中石化'
                    }
                ],
                currentCard: {}
            }
        },
        computed: {
            otherCards() {
                return this.cards.filter(card => card.cardId !== this.currentCard.cardId) || []
            }
        },
        created() {
            this.getCurrentCard()
        },
        methods: {
            getCurrentCard() {
                let {cardId} = this.$route.params
                cardId = String(cardId)
                if (cardId) {
                    this.currentCard = this.cards.find(card => card.cardId === cardId)
                    return
                }
                this.currentCard = this.cards[0] || {}
            },
            toAddCard() {
                this.$router.push({name: 'oilCardAdd'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/mixin";

    #oil-card__list {
        ul li {
            @include fontSize($font-medium);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 70px;
            margin-bottom: 10px;
            padding: 0 30px;
            background: $white;

            label {
                @include fontSize($font-medium - 1);

                &.selected {
                    color: $primary-color;
                }
            }

            span {
                display: inline-block;
                padding-right: 5px;
            }
        }

        h2 {
            @include clearBack;
            @include fontSize($font-medium-s);
            display: block;
            padding: 0 30px;
            line-height: 2.6;
            color: $text-third-color;
            font-weight: normal;
        }

        aside {
            margin-top: 20px;
            padding: 0 20px;

            button {
                @include fontSize($font-medium + 1);
                width: 100%;
                height: 45px;
                border: none;
                border-radius: $border-radius;
                background: $primary-color;
                color: $white;
            }
        }
    }

</style>

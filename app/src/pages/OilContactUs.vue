<template>
    <div id="oil-contact__us">
        <header>
            <img src="../assets/images/chat-head.png">
        </header>
        <main ref="main">
            <ul>
                <li v-for="(message, key) in messages"
                    :key="message.time + key"
                    :class="message.from">
                    <time>{{message.time | displayTime}}</time>
                    <div class="box">
                        <label class="user-icon">
                            <icon :name="message.from==='custom' ? 'user' : 'customer-service'"></icon>
                        </label>
                        <p v-html="message.content"></p>
                    </div>
                </li>
            </ul>
        </main>
        <footer>
            <input
                type="text"
                placeholder=""
                v-model="message.content">
            <button
                :disabled="!message.content"
                :class="{disabled: !message.content}"
                @click="send">
                发送
            </button>
        </footer>
    </div>
</template>

<script>
    import {formatChatTime} from '../utils/date'

    export default {
        data() {
            return {
                message: {
                    from: 'custom',
                    time: new Date(),
                    content: ''
                },
                messages: [
                    {
                        form: 'service',
                        time: '2019-12-14 17:50',
                        content: '我是机器人小九，很高兴为您服务！让我猜猜您想咨询的业务吧：<br>' +
                            '<a href="">1、【电子卷业务】</a><br>' +
                            '<a href="">2、【加油卡业务】</a><br>' +
                            '<a href="">3、【积分业务】</a><br>' +
                            '<a href="">4、【网站、微信、APP等线上业务】</a><br>' +
                            '没有猜中？您可以点击<a href="">人工客服</a>咨询' +
                            '（人工客服服务时间：8:30-20:00）'
                    }, {
                        form: 'service',
                        time: '2019-03-16 12:50',
                        content: '温馨提示：<br>' +
                            '电子卷活动优惠多力度大参与便捷，您可以结合您实际情况' +
                            '向加油站员工了解电子卷活动参与要求。如遇满足条件未能' +
                            '获得电子卷情况，你可以选择直接在站内咨询，或通过在线' +
                            '、热线客服反馈。'
                    },
                ]
            }
        },
        filters:{
            displayTime(time){
                return formatChatTime(time)
            }
        },
        methods: {
            send() {
                const message = Object.assign({}, this.message, {time: new Date()})
                this.messages.push(message)
                this.message.content = ''

                this.$nextTick(() => {
                    const {main} = this.$refs
                    main.scrollTop = main.scrollHeight - main.clientHeight
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/mixin";

    #oil-contact__us {
        height: 100vh;
        background: #eff4f8;
        overflow-y: hidden;

        header {
            height: 64px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        main {
            overflow-y: scroll;
            height: calc(100vh - 64px - 44px);
            box-sizing: border-box;
            padding: 10px 0;

            ul li {
                padding: $space-width-s;
                text-align: center;

                time {
                    display: inline-block;
                    margin-bottom: 7px;
                    color: $text-third-color;
                }

                .box {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;

                    .user-icon {
                        flex-shrink: 0;
                        height: 36px;
                        width: 36px;
                        border-radius: $border-radius;
                        background: $white;

                        .svg-icon {
                            width: 100%;
                            height: 100%;
                            color: #999;
                        }
                    }

                    p {
                        @include clearBack;
                        position: relative;
                        margin: 0 15px;
                        padding: 7px $space-width-s;
                        border-radius: $border-radius;
                        background: $white;
                        text-align: justify;
                        line-height: 1.5;

                        &::before {
                            content: '';
                            position: absolute;
                            top: 9px;
                            left: -10px;
                            margin: auto;
                            display: block;
                            width: 0;
                            height: 0;
                            border-top: 8px solid transparent;
                            border-right: 10px solid $white;
                            border-bottom: 8px solid transparent;
                        }
                    }
                }

                &.custom .box {
                    flex-direction: row-reverse;

                    p::before {
                        left: auto;
                        right: -10px;
                        border-left: 10px solid $white;
                        border-right: none;
                    }
                }
            }
        }

        footer {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            height: 44px;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 $space-width-s;
            background: $white;

            input {
                flex: 1;
                padding: 5px 10px;
                background: #eff4f8;
                border-radius: $border-radius;
            }

            button {
                margin-left: $space-width-s;
                color: $primary-color;

                &.disabled {
                    color: $text-third-color;
                }
            }
        }
    }

</style>

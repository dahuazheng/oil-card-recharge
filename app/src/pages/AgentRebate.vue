<template>
    <div id="agent-rebate">
        <div class="banner">
            <div class="user">
                <span></span>
                <br>
                <small>luyao</small>
            </div>
            <p>
                您目前是普通会员
                <br>
                <small>
                    支付188元升级代理，获取推广权限乐享佣金
                </small>
            </p>
        </div>
        <main>
            <div class="info">
                支付188
                <br>
                升级代理
            </div>
            <button>¥ 188 立即支付</button>
        </main>
        <aside>
            <label>代理商特权</label>
            <ul>
                <li>
                    <h2>投入小</h2>
                    <p>只需支付188元，获取推广权限乐享佣金，系统将自动产生你的推广二维码</p>
                </li>
                <li>
                    <h2>收益高</h2>
                    <p>平台采用双重分校、两级分润模式，您接下来要做的就是利用业余时间，分享您的二维码</p>
                </li>
                <li>
                    <h2>收益率</h2>
                    <p>
                        直推奖励营业额的 4%
                        <br>
                        间推奖励营业额的 1%
                    </p>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
    export default {
        name: 'agentRebate'
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/mixin";

    #agent-rebate {
        .banner {
            @include px2rem('height', 190);
            display: flex;
            flex-direction: column;
            justify-content: center;

            box-sizing: border-box;
            padding: $space-width-s 0;
            background: $primary-color;
            text-align: center;
            color: $white;
            line-height: 1.5;

            .user {
                margin-bottom: 5px;

                span {
                    @include px2rem('width', 64);
                    @include px2rem('height', 64);
                    display: inline-block;
                    box-sizing: border-box;
                    border: 1px solid $white;
                    border-radius: 50%;
                    background: #ccc;
                }

                small {
                    @include fontSize($font-medium);
                }
            }

            p {
                @include clearBack;
                @include fontSize($font-large-s);

                small {
                    @include fontSize($font-little);
                }
            }
        }

        main {
            padding: 0 $space-width 30px;
            text-align: center;

            .info {
                @include px2rem(width, 110);
                @include fontSize($font-medium);
                display: inline-block;
                margin: 20px;
                padding: 5px 0;
                border: 2px solid $primary-color;
                border-radius: 8px;
            }

            button {
                width: 100%;
                height: 40px;
                border-radius: 8px;
                border: none;
                background: $primary-color;
                color: $white;
            }
        }

        aside {
            padding: 0 $space-width 30px;

            ul li {
                padding-top: $space-width-s;

                h2 {
                    @include clearBack;
                    @include fontSize($font-medium);
                    line-height: 1.7;
                }

                p {
                    @include clearBack;
                    text-align: justify;
                    line-height: 1.6;
                    color: $text-sub-color;
                }
            }
        }
    }
</style>
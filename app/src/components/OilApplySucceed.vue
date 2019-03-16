<template>
    <div id="oil-apply__succeed">
        <main>
            <icon name="check-s"></icon>
            <p>
                油卡申请成功
                <br>
                将在3-5个工作日内寄出
            </p>
        </main>
        <aside>
            <router-link to="/oil-recharge">完成</router-link>
        </aside>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    @import '../assets/styles/mixin';

    #oil-apply__succeed {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 999;
        height: 100vh;
        background: $white;

        main {
            position: absolute;
            top: 40%;
            box-sizing: border-box;
            width: 100%;
            transform: translateY(-50%);
            padding: 0 $space-width * 2;
            text-align: center;

            .svg-icon {
                margin-bottom: $space-width-s  ;
                width: 45px;
                height: 45px;
                color: $primary-color;
            }

            p {
                @include fontSize($font-medium);
                line-height: 1.8;
            }
        }

        aside {
            position: absolute;
            top: 80%;
            width: 100%;
            padding: 0 $space-width * 2;
            box-sizing: border-box;

            a {
                @include fontSize($font-medium);
                display: block;
                width: 100%;
                height: 43px;
                border: 1px solid $primary-color;
                border-radius: $border-radius;
                text-align: center;
                line-height: 43px;
                color: $primary-color;
            }
        }
    }
</style>

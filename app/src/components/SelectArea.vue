<template>
    <div id="select-area" v-show="show">
        <van-popup v-model="show" position="bottom" :overlay="false">
            <van-area
                :area-list="areaList"
                :columns-num="columnsNum"
                @change="areaChange"
                @cancel="cancel"
                @confirm="confirm">
            </van-area>
        </van-popup>
    </div>
</template>

<script>
    import AreaList from '../libs/area'

    export default {
        props: {
            show: Boolean,
            columnsNum: Number,
            change: {
                type: Function,
                default() {}
            },
            cancel: Function,
            confirm: Function
        },
        data() {
            return {
                areaList: AreaList
            }
        },
        methods: {
            areaChange() {
                this.change()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/mixin';

    #select-area {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        background: rgba(0, 0, 0, 0.4);
        transition: all .25s;
    }

</style>

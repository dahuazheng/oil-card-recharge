<template>
    <div id="oil-apply">
        <ul>
            <li>
                <label>姓名</label>
                <input
                    type="text"
                    placeholder="请输入姓名"
                    v-model="apply.name">
            </li>
            <li>
                <label>身份证</label>
                <input
                    type="text"
                    placeholder="请输入身份证"
                    v-model="apply.IDCard">
            </li>
            <li>
                <label>手机号</label>
                <input
                    type="text"
                    placeholder="请输入手机号"
                    v-model="apply.phone">
            </li>
            <li>
                <label>收卡地址</label>
                <input
                    type="text"
                    placeholder="点击选择省市"
                    readonly
                    v-model="provinceCity"
                    @click="areaShow=true">
            </li>
            <li>
                <label>&nbsp;</label>
                <input
                    type="text"
                    placeholder="请输入详细地址"
                    v-model="apply.address">
            </li>
            <li>
                <label>验证码</label>
                <input
                    type="text"
                    placeholder="请输入手机验证码"
                    v-model="apply.code">
                <button :disabled="countdown>=0 && countdown<15" @click="getSmsCode">{{countdownLabel}}</button>
            </li>
        </ul>
        <p>
            <button @click="submit">提交申请</button>
        </p>
        <SelectArea
            :show="areaShow"
            :columnsNum="2"
            :cancel="areaCancel"
            :confirm="areaConfirm"
        />
    </div>
</template>

<script>
    import SelectArea from '../components/SelectArea'
    import {isMobile, isValidIDCard, isSmsCode} from '../utils/reg'

    const COUNTDOWN = 15

    export default {
        name: 'oilApply',
        components: {SelectArea},
        data() {
            return {
                areaShow: false,
                countdown: COUNTDOWN,
                countdownLabel: '获取验证码',
                apply: {
                    name: '',
                    IDCard: '',
                    phone: '',
                    province: '',
                    city: '',
                    address: '',
                    code: ''
                },
            }
        },
        computed: {
            provinceCity() {
                const {province, city} = this.apply
                if (!province || !city) return ''
                return `${province}/${city}`
            }
        },
        methods: {
            areaCancel() {
                this.areaShow = false
            },
            areaConfirm(values) {
                if (!values || !values.length) return
                this.apply.province = values[0].name
                this.apply.city = values[1].name
                this.areaShow = false
            },
            getSmsCode() {
                this.timeCountdown()
            },
            timeCountdown() {
                this.countdown--

                setTimeout(() => {
                    if (this.countdown < 0) {
                        this.countdownLabel = '重新获取'
                        this.countdown = COUNTDOWN
                        return
                    }
                    this.countdownLabel = `${this.countdown}'S`
                    this.timeCountdown()
                }, 1000)
            },
            submit() {
                const errs = [
                    {
                        key: 'name',
                        value: '请输入姓名'
                    }, {
                        key: 'IDCard',
                        value: '请输入身份证'
                    }, {
                        key: 'phone',
                        value: '请输入手机号'
                    }, {
                        key: 'province',
                        value: '请选择省市'
                    }, {
                        key: 'city',
                        value: '请选择省市'
                    }, {
                        key: 'address',
                        value: '请输入详细地址'
                    }, {
                        key: 'code',
                        value: '请输入手机验证码'
                    }
                ]

                const isErr = errs.some(err => {
                    const {key, value} = err
                    if (!this.apply[key]) {
                        this.$toast(value)
                        return true
                    }
                })

                if (isErr) return

                if (!isValidIDCard(this.apply.IDCard)) {
                    return this.$toast('请输入正确的身份证号码')
                }
                if (!isMobile(this.apply.phone)) {
                    return this.$toast('请输入正确的手机号码')
                }
                if (!isSmsCode(this.apply.code)) {
                    return this.$toast('请输入正确的手机验证码')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/mixin';

    #oil-apply {
        background: $white;

        ul {
            padding: 0 $space-width;
        }

        li {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 68px;
            border-bottom: 1px solid $border-color;

            label {
                @include px2rem(width, 70);
                @include fontSize($font-medium);
                display: inline-block;
            }

            input {
                flex: 1;
                padding: 0 $space-width;
                text-align: left;
            }

            button {
                @include fontSize($font-medium-s);
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                margin: auto;

                display: flex;
                align-items: center;
                color: $primary-color;
                background: transparent;
                border: none;
            }
        }

        p {
            @include clearBack;
            padding: 40px $space-width * 2;
            text-align: center;

            button {
                width: 100%;
                height: 40px;
                background: $primary-color;
                border: none;
                border-radius: $border-radius;
                color: $white;
            }
        }
    }
</style>

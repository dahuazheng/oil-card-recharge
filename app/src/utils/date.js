import dayjs from 'dayjs'
import {isValidNumber} from './reg'

export function timeAgo(dateTime) {
    if (isValidNumber(dateTime)) {
        dateTime = Number(dateTime)
    }

    dateTime = new Date(dateTime)

    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24
    const week = day * 7
    const month = day * 30
    const now = new Date().getTime() // 获取当前时间毫秒
    const diffValue = now - dateTime // 时间差

    if (diffValue < 0) {
        return;
    }
    if (diffValue <= minute) {
        return '刚刚'
    }
    if (diffValue < hour) {
        return parseInt(diffValue / minute) + '分钟前'
    }
    if (diffValue < day) {
        return parseInt(diffValue / hour) + '小时前'
    }
    if (diffValue < week) {
        return parseInt(diffValue / day) + '天前'
    }
    if (diffValue < month) {
        return parseInt(diffValue / week) + '周前'
    }
    return dayjs(dateTime).format('YYYY-MM-DD HH:mm')
}

/**
 * 返回时间格式字符串.
 * @param date
 * @param type 其值为"date"、"minute"或者"time"，
 * "date"指日期格式，"minute"指时间格式精确到分，"time"指时间格式精确到秒。
 */

export function formatDate(date, type) {
    if (!date) return ''
    if (isValidNumber(date)) {
        date = Number(date)
    }

    date = new Date(date)

    if (type === 'date') {
        return dayjs(date).format('YYYY-MM-DD')
    }
    if (type === 'minute') {
        return dayjs(date).format('YYYY-MM-DD HH:mm')
    }
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 返回时间格式字符串
 * @param time
 * "time"指时间格式的字符串或者时间戳
 */

export function formatChatTime(time) {
    if (!time) return ''
    if (isValidNumber(time)) {
        time = Number(time)
    }
    time = dayjs(time)
    const startDate = dayjs().startOf('date')
    if (time.valueOf() > startDate.valueOf()) {
        return dayjs(time).format('HH:mm')
    }
    if (time.valueOf() > dayjs(startDate).subtract(1, 'day').valueOf()) {
        return '昨天 ' + dayjs(time).format('HH:mm')
    }
    return dayjs(time).format('YYYY-MM-DD HH:mm')
}

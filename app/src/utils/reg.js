import {REG} from '../libs/constants'

/**
 * @description 验证手机号
 * @param {string} str 待验证的字符串
 * @returns {boolean} true 为真，false 为假
 */
export const isMobile = (str = '') => REG.MOBILE.test(str)

/**
 * @description 验证邮箱
 * @param {string} str 待验证的字符串
 * @return {boolean} true 为真，false 为假
 */
export const isEmail = (str = '') => REG.EMAIL.test(str)

/**
 * @description 验证密码
 * @param {string} str 待验证的字符串
 * @return {boolean} true 为真，false 为假
 */
export const isValidPassword = (str = '') => REG.PASSWORD.test(str)

/**
 * @description 验证数字 (排除科学计数法 3e4)
 * @param {string} str 待验证的字符串
 * @return {boolean} true 为真，false 为假
 */
export const isValidNumber = (str = '') => REG.NUMBER.test(str)

/**
 * @description 验证身份证号
 * @param {string} str 待验证的字符串
 * @return {boolean} true 为真，false 为假
 */
export const isValidIDCard = (str = '') => REG.ID_CARD.test(str)

/**
 * @description 验证 URL
 * @param {string} str 待验证的字符串
 * @return {boolean} true 为真，false 为假
 */
export const isURL = (str = '') => REG.URL.test(str)

/**
 * @description 验证 IP 地址
 * @param {string} str 待验证的字符串
 * @returns {boolean} true 为真，false 为假
 */
export const isIP = (str = '') => REG.IP.test(str)

/**
 * @description 验证 SMS_CODE 手机验证妈
 * @param {string} str 待验证的字符串
 * @returns {boolean} true 为真，false 为假
 */
export const isSmsCode = (str = '') => REG.SMS_CODE.test(str)

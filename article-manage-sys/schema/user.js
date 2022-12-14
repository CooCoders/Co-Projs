import joi from 'joi'

/**
 * string() 值必须是字符串
 * alphanum() a-zA-Z0-9的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 必填项 不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 *  **/


// 用户名的验证规则
const username = joi.string().alphanum().min(1).max(10).required()

// 密码验证
const password = joi.string().pattern(/^[\S]{6,12}$/).required()


// 定义 id、nickname、email 的验证规则
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const email = joi.string().email().required()

// 注册、登录的验证数据项
// body:{ uername: name}
export let reg_login_schema = {
  body: {
    username,
    password,
  },
}

// 更新用户信息的验证数据项
export let update_userinfo_schema = {
  body: {
    id,
    nickname,
    email,
  }
}

// 更新密码的验证规则
export let update_password_schema = {
  body: {
    // 变量：已定义规则
    oldPwd: password,
    // ref newPwd=oldPwd
    // not newPwd!=oldPwd
    // concat 规则合并
    newPwd: joi.not(joi.ref('oldPwd')).concat(password),
  }
}

// 更新头像（图片）的验证规则
// dataUri() 规则指定图片为base64格式的字符串，例如：data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=
const avater = joi.string().dataUri().required()
export let update_avater_schema = {
  body: {
    avater,
  }
}
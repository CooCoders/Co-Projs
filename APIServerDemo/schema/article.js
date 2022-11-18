/* 文章相关验证规则 */
import joi from 'joi'

/* 添加文章验证规则 */
const title = joi.string().required()
const cate_id = joi.number().min(1).required()
const content = joi.string().required().allow()
const state = joi.string().valid('已发布', '草稿').required()

export let add_article_schema = {
  body: {
    title,
    cate_id,
    content,
    state,
  },
}
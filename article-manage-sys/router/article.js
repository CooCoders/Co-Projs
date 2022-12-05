/* 文章路由 */
import express from 'express'
import expressJoi from '@escook/express-joi'

const router = express.Router()

// 最新 node 核心包的导入写法
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
// 获取 __filename 的 ESM 写法
const __filename = fileURLToPath(import.meta.url)
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url))


/* 配置multer */
import multer from 'multer'
import path from 'path'
const upload = multer({ dest: path.join(__dirname, '../uploads') })

/* 发布新文章的路由 */
import { addArticle } from '../router_handler/article.js'
import { add_article_schema } from '../schema/article.js'
/* upload.single()用于解析FormData格式的表单数据
文件类型的数据 -- 解析并挂载到req.file属性
文本类型的数据 -- 解析并挂载到req.body属性 */
router.post('/add', upload.single('cover_img'), expressJoi(add_article_schema), addArticle)

export default router
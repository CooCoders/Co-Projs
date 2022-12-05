/* 文章管理路由处理函数 */
import path from 'path'
import db from '../db/index.js'

export function addArticle(req, res) {
  if (!req.file || req.file.filedname != 'cover_img') {
    return res.cc('请上传文章封面')
  }
  const articleInfo = {
    ...req.body,
    cover_img: path.join('/uploads', req.file.filename),
    pub_data: new Date(),
    author_id: req.user.id,
  }

  const sql = 'insert into ev_articles set ?'
  db.query(sql, articleInfo, (err, results) => {
    if (err) {
      res.cc(err)
    }
    if (results.affectedRows !== 1) {
      res.cc('发布文章失败！')
    }
    res.cc('发布文章成功！', 0)
  })
}
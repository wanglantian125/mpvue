const router = require('koa-router')({
  prefix: '/lm'
  // 路由前缀
})
const controllers = require('../controllers/index')

// 首页相关的接口
router.get('/index/index',controllers.home.index)

// 搜索相关的接口
router.get('/search/indexaction', controllers.search.index.indexaction)
router.post('/search/addhistoryaction', controllers.search.index.addHistoryAction)
router.post('/search/clearhistoryAction', controllers.search.index.clearhistoryAction)//清除搜索历史记录
router.get('/search/helperaction', controllers.search.index.helperAction)

module.exports = router
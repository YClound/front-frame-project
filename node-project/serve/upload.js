const Multer = require('@koa/multer');
const Router = require('@koa/router');
const fs = require('fs')
const router = new Router();

const storage = Multer.diskStorage({
  destination: 'static/',
  filename: function (req, file, cb) {
    let type = file.originalname.split('.')[1]
    cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`)
  }
})

const upload = Multer({ storage })

router.post('/api/upload', upload.single('file'), async (ctx, next) => {
  console.log(ctx.request.file, ctx.request.body);
  ctx.body = {
    code: 0,
    data: '成功',
    success: true,
  }
});

module.exports = router;
const PORT = 9999;

const Koa = require('koa');
const app = new Koa();
const Cors = require('koa-cors');
const koaBodyParser = require('koa-bodyparser');
const Router = require('@koa/router');
const router = new Router();

app.use(koaBodyParser())
app.use(Cors({
  origin: '*'
}));

const uploadRouter = require('./serve/upload');
app.use(uploadRouter.routes());

// app.use(async (ctx, next) => {
//   ctx.set('Access-Control-Allow-Origin', '*');
//   ctx.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   // next();
//   console.log(ctx.query)

//   ctx.body='success'
// });

router.get('/', async (ctx, next) => {
  console.log(ctx.query.a)
  ctx.body = ctx.request
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT);
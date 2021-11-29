const koa=require("./server/node_modules/koa")
const index=require("./server/routers/index")
const stati=require("./server/node_modules/koa-static")
const router=require("./server/node_modules/koa-router")()
//const views=require("./server/node_modules/koa-views")
const app=new koa()

app.use(stati(__dirname))

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
index.listenHtml(router)
app.use(router.routes())
app.use(router.allowedMethods());
app.listen(8080)
console.log("服务器成功运行！")









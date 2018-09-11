/**
 * Nokia-firmware
 */
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const CSRF = require('koa-csrf');

const app = new Koa();
const router = new Router();

// add body parsing
app.use(bodyParser());

// add the CSRF middleware
app.use(new CSRF({
    invalidSessionSecretMessage: 'Invalid session secret',
    invalidSessionSecretStatusCode: 403,
    invalidTokenMessage: 'Invalid CSRF token',
    invalidTokenStatusCode: 403,
    excludedMethods: ['GET', 'HEAD', 'OPTIONS'],
    disableQuery: false
}));

// route region
router.get('/', async (ctx) => {
    ctx.body = 'hello nokia-firmware';
});
// @end

app.use(router.routes());
app.listen(3000, () => {
    console.info('App is running on :3000');
});
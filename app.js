// entrypoint
const express = require('express');
const router = require('./routes/routers')

const app = express();

// level 1
// app.get("/", (req, res) => {
//     return res.json({ data: 'Hello, World'})
// })

// Đăng ký url == mapping giữa route và method controller
// level 2: 1 route gắn với 1 method controller
// app.get("/asd", controller.routes.a)
// app.post("/asd", controller.routes.b)


// level 3: 1 route gắn với n method controller
app.use('/', router)

app.listen(3000, () => console.log('listening on port 3000'))
const express = require("express");
const api = require("./routes/api.js");

const app = express();
const port = 3000;

//express 미들웨어 설정
app.use(express.static("public"));

app.use("/api", api);

//루트("/") 패스 지정
app.get("/", (req, res, next) => {
  res.send("hello world");
});

//서버 시작
app.listen(port, () => {
  console.log(`sever is running on http://localhost: ${port}`);
});

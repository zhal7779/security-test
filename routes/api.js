//express 라우팅 객체 생성
const express = require("express");
const router = express.Router();

// get으로 message 전송
router.get("/", (req, res) => {
  res.send({ message: "hello" });
});

// 다른 파일에서 갖오 올 수 있도로 export 선언
module.exports = router;

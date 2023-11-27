// server.ts

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

// 여기에 라우트 및 추가적인 미들웨어 설정을 추가합니다.

export default app;

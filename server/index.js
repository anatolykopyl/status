import Express from "express";
import Cors from "cors";
import path from "path";
const __dirname = path.resolve();

import dotenv from 'dotenv';
import { httpsReq } from "./httpsReq.js";
dotenv.config();

const app = Express();

const port = process.env.PORT || 5000;

app.use(Cors());

app.get('/update', (req, res) => {
    let id = Math.floor(Math.random() * 34);
    let url = `https://api.vk.com/method/users.setCovidStatus?access_token=1f3a7a0c80ba9d1e4af5b3e9ac583c98aa6d036be89c2508f4486913b1cbdb125a9a8c4440b6dbb57f348&status_id=${id}&v=5.103`;
    httpsReq(url).then(() => {
        res.send();
    });
});

app.use(Express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Dev server started on ' + port));


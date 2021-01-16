import Express from "express";
import Cors from "cors";
import path from "path";
const __dirname = path.resolve();

import dotenv from 'dotenv';
import { httpsReq } from "./httpsReq.js";
dotenv.config();

const app = Express();
const port = process.env.PORT || 5001;

//const statusIds = [1, 2, 3, 4, 5, 9, 10, 17, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 38, 39];
const statusIds = [114, 115, 116, 117, 118, 119, 120, 121];

app.use(Cors());

app.get('/update', (req, res) => {
    var id = statusIds[Math.floor(Math.random() * statusIds.length)];
    let url = `https://api.vk.com/method/status.setImage?access_token=${process.env.TOKEN}&status_id=${id}&v=5.103`;
    httpsReq(url).then((response) => {
        console.log(response);
        //res.redirect("https://status.anatolykopyl.ru");
        res.send();
    });
});

app.use(Express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Dev server started on ' + port));


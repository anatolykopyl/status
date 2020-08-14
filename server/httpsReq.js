import https from "https";

export function httpsReq(url) {
    return new Promise(resolve => {
        https.get(url, (res) => {
            res.setEncoding('utf8');
            let data = '';
        
            res.on('data', chunk => {
                data += chunk;
            });
        
            res.on('end', () => {
                try {
                    let jsonObj = JSON.parse(data);
                    resolve(jsonObj);
                } catch (e) {
                    res.status(400).send('Invalid JSON string');
                }
            });
        }).on('error', err => {
            console.log('Error: ' + err.message);
        });
    });
}

import express from "express";
import os from "os";

const app = express();

const PORT = 3000;

app.get("/", (_, res) => {
	res.send(`Hostname: ${os.hostname}`);
});

app.listen(PORT, () => {
	console.log(`Server v3 started at host: ${os.hostname}`);
});

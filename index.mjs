import express from "express";
import os from "os";
import fetch from "node-fetch";

const app = express();

const PORT = 3000;

app.get("/", (_, res) => {
	res.send(`Hostname: ${os.hostname}`);
});

app.get("/nginx", async (_, res) => {
	const url = "http://nginx";
	const response = await fetch(url);
	const body = await response.text();
	res.send(body);
});

app.listen(PORT, () => {
	console.log(`Server v5 started at host: ${os.hostname}`);
});

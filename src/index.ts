import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	const url = new URL(c.req.url);
	const number = Math.ceil(Math.random() * 16);
	const host = url.origin;
	const res = fetch(host + "/images/" + number + ".jpg");
	return res;
});

export default app;

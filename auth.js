#!/usr/bin/env node
import { google } from "googleapis";
import express from "express";
import open from "open";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOKEN_PATH = path.join(__dirname, "tokens.json");
const CREDENTIALS_PATH = path.join(__dirname, "credentials.json");

const SCOPES = [
  "https://www.googleapis.com/auth/youtube.readonly",
  "https://www.googleapis.com/auth/yt-analytics.readonly",
  "https://www.googleapis.com/auth/yt-analytics-monetary.readonly",
];

const creds = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
const { client_id, client_secret } = creds.installed || creds.web;
const REDIRECT = "http://localhost:3000/oauth2callback";
const auth = new google.auth.OAuth2(client_id, client_secret, REDIRECT);

const authUrl = auth.generateAuthUrl({
  access_type: "offline",
  scope: SCOPES,
  prompt: "consent",
});

const app = express();

app.get("/oauth2callback", async (req, res) => {
  try {
    const { tokens } = await auth.getToken(req.query.code);
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
    res.send("<h1 style='font-family:sans-serif;padding:40px'>✅ YouTube Connected! Close this tab and go back to Terminal.</h1>");
    console.log("\n✅ tokens.json saved! You can close the browser.\n");
    setTimeout(() => process.exit(0), 1500);
  } catch (e) {
    res.send("Error: " + e.message);
    process.exit(1);
  }
});

const server = app.listen(3000, () => {
  console.log("\n🔐 Opening browser... Log in with aditya@posimyth.com\n");
  open(authUrl);
});

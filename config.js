//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "princenjiprospper@gmail.com";
global.location = "Buea,Cameroon.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaEW2eE3WHTU7fTQht19";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaEW2eE3WHTU7fTQht19";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/xk46jg.jpg";
global.devs = "237673805208";
global.sudo = process.env.SUDO || "237673805208";
global.owner = process.env.OWNER_NUMBER || "237673805208";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "null";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUtybG5jVnZjVkI3Zzlnc2R3bXBnUWZUUWY3dzRlZzdtaVdvdUFhUFdVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibi9EZVN3SXFqK3pYd2plakhqRUxVRXNCTnpaUjFjSWkyNVVUR3IxT2lsZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSVF3NWNPeXdWbktTNU9abEl1VUsvVzcxaEZWWEsydng1Kzc3dzNTUkcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRU3FiUktYLzRBOVY1M2lBcnVmTXp4VXFDTGhOTEY2WDdOTHZsTFlhYTFBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVJZlA2bXZWR014SnpHVG1RS3RWOTJ1Yy9PeUNSd0ZpN0xKd2pZNk9NbkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImU2dE5sNzcrMFo1Vnp3VjY1NCtYSlliSWRBT1pKNWlBdmtxSUM4MXdRZzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09FSzhqVis2R2hMZk5URFUvQlF5WlF1V2lNbldibVR1MVJTQ0tiOFczbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlhudHM1QmZZVnNoNlQxNWdOc0N4aWJQMDl4eldueDBqTTBFOExQNlh5QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ6ckRVQWN0UkRPYlY4dzZTT0xrbEtpM0ZKQkVPWlM3QkR3cVZFTVVXeFg1TTk1MmxqZ3dqVnhyaXRuWGhPZUdUUStKN0FxcDJhekk4ZmpVRWlEL2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6IlRzVGJWYWR3RGpMcjBZSWJQMzJvSkF6OXdEcldHVE53MFZxakx1WHB6Qjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InV3N2ZVZmYzU2N1dGN5LWgwaG9rVEEiLCJwaG9uZUlkIjoiYmI1N2YyMjEtZDg5MC00YmFiLWI3YTAtYWM0MTRiMTc2OGU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRNVJtNkpucXVxTThReGpYc1plYnFqRkhMdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuNEo1L3JWWFFnNkJtZUZUaGk0M1VNWUpVbXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSlhXOENYTEMiLCJtZSI6eyJpZCI6IjIzNzY3MDgxNzE2OTo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IsOcw7Frw7HDtXduIE3Dr8OxZMOrciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkNlK1AwRkVQZnV1Ym9HR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWm5IbzRKbHljWTljK2s5b0N5dGpadTA0bDhCMzZlSDJ5aXVhSktWVFNEND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVVhVT2Z6Vk5tMmxxZFR0ai84a1UwdDJYb3VwMmd3OHVkQVgrbUdBUjk3SnlmdFRaUnorNUtaVG1YajY1RTVjSUFFRWp6aGNUVi9KNjNTbDcvVUlERHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImFBZFVEUkNDL1kwd1JZcUUxUjJEdVY2Z3h5ZGczZzdGNzJPd1ZNclNZaXE3ZzlUSCtzVW43VmZsRzRwM042dWNFaGxFUmMrcnBSWWIyRHJQR3VTZGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjcwODE3MTY5OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1p4Nk9DWmNuR1BYUHBQYUFzclkyYnRPSmZBZCtuaDlzb3JtaVNsVTBnKyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzE5NTY1MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHMU4ifQ======"
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".,$,&,+,-,*,?,~,|,•,→,©,®,™,cyber,✓,!,#,/,@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3G",
  caption: process.env.CAPTION || "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲 𝐏𝐫𝐨𝐓𝐞𝐜𝐡 𝐟𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧",
  author: process.env.PACK_AUTHER || "CYBERDEX",
  packname: process.env.PACK_NAME || "🧑‍🎄",
  botname: process.env.BOT_NAME || "cyвerdeх",
  ownername: process.env.OWNER_NAME || "PROTECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "Us2pP4zzoiWjzaWQnoEkUq3Q",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "AIzaSyATKXs57vk-JrXZ2pz1cnvC2FxLcugHEmw",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "20",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0385228b961473710eff4e7daed873e8",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "cyвerdeх").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

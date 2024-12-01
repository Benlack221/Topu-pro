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

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0I3NVcrYTlaZDZPMTE1b05PTmJwTDdTZmphQ2tsYnJlYXlLMk5FWERsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0dVOEZ2OC9GWSttQXVGRnFWV1pRYnFEb3cvTkQ1enVqN2Y1RnE0NjkzVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSG9sbExGVUJxZUVSVkU4L0tIUXcwb0NQL21xQVV5V3hQR2JtSXhubjNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqK0xaN1RKd2M5ZTZKRGNoSTV1azZJSEZON2l6ZGR6WEhqNG9oVHZxcURZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9HYnNzTGJnbWFEYStub1hSQ0w5VE5VNkc3L2VpeW56enZsK1NHeGczR3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR1RGNTRnQxYXowaWU5UDlxOXlQVVJ3U3hiL3d2OHlEOGJFT0E5eS90RGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUlnaFh6end5NHFQZGlIRzBzbWVjc2x3eWtyTGlMVW1UVERZQnpBNkpVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVdTTG5EdG5XQW1zU3hJTURCYUlqd2pCL2hrNVRGM3ZsbjlENUpBRGxubz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks0OHV5VFFwY0p0ZGNwb3l5YnViRnNjOFV3VklLVnNrTDQ1MVZqMW9xdzB3aWpBNE83Z2lNclBrSlBzY0hQVnRmSW5aT3dWUlNPSlRPUGE1bFIrSmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJ3WHdIbzQxbFR6dkllSWliMFhQMzVBWlcwZFdGOGpwRFJTMlJ0MlJ2V2lvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuZEJwZ0oyRFFOLXZPaDZidWNwZFZ3IiwicGhvbmVJZCI6IjNlMDJkZTBlLTQ2OTEtNGY5YS04MjgzLTAzNjdiNGNlNWVjMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1TjJ2Um5OaEZoYlBuL0lkQmp2R3Mwb3JpcFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkJjRnZuaEljd0tBdzMyeDdzRVlDUjJOVmNZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNEMlRUWUo1IiwibWUiOnsiaWQiOiIyMzc2NzA4MTcxNjk6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLDnMOxa8Oxw7V3biBNw6/DsWTDq3IifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pDZStQMEZFSTdqcnJvR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpuSG80Smx5Y1k5YytrOW9DeXRqWnUwNGw4QjM2ZUgyeWl1YUpLVlRTRDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9naVVpQlpMODQwYmlTRzRacTlyRzQvNFBaa3dJcC84SzNFaFYyYXFvUXNWZm5vTXpCQVF4Um5SNDE5ZUtodWI0SEkvUGI4ZWoxSlNOT25iV1JYS0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnUGlNRlg5cTdxQ2s0Zjl6UEgyM1FWSjBhYW9UQjdvcDZMVDU1WEw5eEZ5cjJJblBPajRKVjEwOVZXME55ZkF3ZG81UnoxZFJaVlIrTVRHdmg3VWpoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY3MDgxNzE2OTo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldaeDZPQ1pjbkdQWFBwUGFBc3JZMmJ0T0pmQWQrbmg5c29ybWlTbFUwZysifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzMwMTM5MTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRzFOIn0====="
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

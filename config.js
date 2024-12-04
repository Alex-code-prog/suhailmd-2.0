const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "SUHAIL_00_41_12_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDgzLFxuICAgICAgICA0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTM4LFxuICAgICAgICA1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc2LFxuICAgICAgICA1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDkyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxLFxuICAgICAgICA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjcsXG4gICAgICAgIDM5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaEZ5d2dxejcyeWdSdFBpTzRhN0EwZm1hM2pGcjBPM0NDUUJ2akwrNFk2VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQWYzZ1lnTVNUTlNGbEZrdjZLUHhuZ1wiLFxuICBcInBob25lSWRcIjogXCIwMDkyZTdiYS0yMzFlLTRmNDYtYTFmNi04YjNkMDg0NDE3MjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgNjEsXG4gICAgICA3NCxcbiAgICAgIDI4LFxuICAgICAgMTE2LFxuICAgICAgNTcsXG4gICAgICA2OSxcbiAgICAgIDE4MCxcbiAgICAgIDIzMyxcbiAgICAgIDE0NCxcbiAgICAgIDE5OSxcbiAgICAgIDE4NSxcbiAgICAgIDE5NixcbiAgICAgIDExNixcbiAgICAgIDIzMSxcbiAgICAgIDIwNyxcbiAgICAgIDE4NixcbiAgICAgIDE5MCxcbiAgICAgIDE4MSxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAyOSxcbiAgICAgIDE0NCxcbiAgICAgIDI0MSxcbiAgICAgIDE4LFxuICAgICAgMjQ2LFxuICAgICAgODAsXG4gICAgICAyMzQsXG4gICAgICAyNDYsXG4gICAgICA4LFxuICAgICAgMTY0LFxuICAgICAgMTQxLFxuICAgICAgMjUwLFxuICAgICAgMTg1LFxuICAgICAgMjAzLFxuICAgICAgMTYwLFxuICAgICAgOTYsXG4gICAgICAyNDcsXG4gICAgICAxNDAsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4OUdUQ0JKRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzMjE4MDc0NDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQEFZRFwiLFxuICAgIFwibGlkXCI6IFwiMjQ1NDI3NzAyMDgzNjQwOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTExGOGQ4QkVNSEt2cm9HR0NnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOYTlKTk9xTmNwemdOQ1hVV0I2Tm9YSEcyVStUeDlrQnlFNzNVSkVkTldFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkp5WEpGcWIzdGdHR0huN2x3UFZOK3haMHFsSG5wMWM1LzI5WE9zV2dTMDdBOUkwMGJMZE1ubGw1UnFqTWVvd0F3czhzQ2xuWXhqMXlVYnhoeHIxZUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhwQzYzQXVueEQvTU1TMU5zUVFNZ3FKVzNYN2N3dXgrYW5RcW1QRnU5MnI5OG16OWc1ejJQMGdwMmhURWh0VUh0VXdHL1Y0ODFKKytLaUtPaU83RmpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzIxODA3NDQ6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzI3MjkwMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "@AYD,


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

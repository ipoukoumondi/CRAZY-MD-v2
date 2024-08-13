const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
process.env.OWNER_NUMBER = process.env.OWNER_NUMBER || '242066328691'
global.owner = process.env.OWNER_NUMBER.split("242066328691")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Krishna:pss968048@cluster0.4rfuzro.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'crazycvv@gmail.com'
global.github = 'https://github.com/CrazyPrince/CRAZY-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || "242068469175"
global.devs = "237620114013";
global.website = 'https://github.com/CrazyPrince/CRAZY-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/984e15c49561a5dd9d112.jpg'






module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Crazy Bot' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'CRAZY MD' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? true 'CRAZY-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0Qrc3o5TGRFRFVqOVE0ODJOb2NqenBwODYyWHJ4aFdRZjJsRUVTb1puTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXF1MDV6UGlveGg5eVloK0RMczVCWVJjcTVQeDFUOVBPK3ZXNHkvajlUMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRVVKM2M2V245bGpZRDRCQjFBZjZucURtbHc0MHlKZzRRQjAwbXJ1cDMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUFZRYS9CNmpiRzFZSUJ0NUpqSnJXc2RsWEpFY1ZQZ3FXRmoyMmVJaVZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjROeWJkMVREWjVtU1MycDZlWi9hNUoyc3BKTzViV3NickpIbnpnTDduV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJVVlEwbWx5bElQOGJ2blZlRE1sL0F3N1RYV2QyL1VKSHN2SzRTWTlER3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUk5NzZkN1JiNlRHSU5KV0R6TXVoU1BxY2hycHVVcUljWmwxYUtVbGVuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGZTUVFrcGJ1aHpKdlFRWUl0Nk1SNmNxQTlUUG1jOG53NFNHTnZTRVJ3VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitqeXVzYUpkME93TmNOdXFzdlp0aUs1YXNMa3ZjYnhLZm5HeWd0bHkzS29kOG5zT3lWanJ0dVgrbUlsZk1McXdXOCtWQ1l1VkhDZC8wQlh0VE1kOEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJBTUoyYzlqdnVqb2lrS2VqYThTZVFIQ3doazNMYmJNUnIrWnk2aHkwUVBnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCNmdib193eVE5MjN4NWx6bGIwZk1BIiwicGhvbmVJZCI6Ijg5ZTQ2MzFmLWE3M2UtNGU4Ni05NWQzLTA3ZWM3MzBmY2QwNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVN0pOZlUvWStGM1pqZkNra2tsY3lrMG01bkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0xwZGdWWkFFWkx2bjRMdVBsL2tlWWpweE93PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZSVDY3MjFIIiwibWUiOnsiaWQiOiIyNDIwNjYzMjg2OTE6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4bSF4bSAyoDhtIsg4bSK4bSP4bSL4bSHyoAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tTZ3dhWUNFTXpLNzdVR0dBOGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFkcWFYNHQ0L0RiU2NPaHJRenp1WUVETVM2Vm1zbWkxTjJURitWS2Z2bHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9WZ0x2YTBqQWx1UTcydC9jcTJRaVhPV0w2ZDh6UlprZ2tiQmVnNk1MUXhUUEJaeThUazB0SGsreHcrT3l6bFE5UW9TWVhwbnpEVnZnbjZiMDgwc0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0bGtwbHZLQkgwZXpkODJjZG5PZUFaUzRMSEZiY1crRlZlY0dtcHlya1owcmhReEI2MXlVNEdSVkVTTGI0VzBWWThEdEl1OTBvRzNiL2tYUXJqNXdEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MjA2NjMyODY5MToxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXbmFtbCtMZVB3MjBuRG9hME04N21CQXpFdWxackpvdFRka3hmbFNuNzViIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNTg5OTc4fQ==:' process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'CRAZY_MD' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'Crazy-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  GENIUS_API_KEY:  process.env.GENIUS_API_KEY === undefined ? '6vdum57Wo2tsKxaEGKJcvNHeSo1sd9oNTcPpDZD8E9v3mUh0jArn5TSvuvgmZLIs' : process.env.GENIUS_API_KEY,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'delete' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hey bruh, I,m Crazy  Md...Alive Now...' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'CRAZY',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE,
  LG: process.env.LG === undefined ? 'false' : process.env.LG,
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})

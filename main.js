/* DiscordCustomRP v1.0
A user-friendly way to use Rich Presence in Discord!

built with node.js and discord-rpc

author -  Devsaider#5593
repo -  https://github.com/scripthubteam/DiscordCustomRP
 */

const DiscordRPC = require('discord-rpc');
const fs = require('fs');
const parse = require('parse-duration')
const moment = require('moment')
const colors = require("colors")
const inquirer = require("inquirer")

console.log("Connecting RPC...".grey)
console.log("Verifying configuration...".grey)

if(fs.existsSync("./config.example.json") === true){
  console.warn(`Configutarion Reminder!`.bgGreen)
  console.log(`You can configure the values of your DiscordCustomRP from the "config.json" file.`)
  fs.renameSync("config.example.json", "config.json")
}


if(fs.existsSync("./config.json") === false){
  let data = `{\n"textCfg": {\n"details": "Oh, hi",\n"state": "This is DiscordCustomRP"\n},\n"imageCfg": {\n"smallKey": "a_small_mari",\n"smallText": "Mari (small text)",\n"largeKey": "a_large_mari",\n"largeText": "Mari (large text)"\n},\n"timeCfg": {\n"timeType": "none",\n"whatTime": "0m"\n},\n\n"clientID": "463437134137655298"\n}`.toString()
  console.error("Configutarion Error!".bgRed)
  console.error("It is not possible to obtain information with the file \"config.json\". This is because the file does not exist.")
  console.warn(`We have recreated the "config.example.json" file with the default data, restart DiscordCustomRP to confirm that you will use these fields. You can modify them later!`.bgGreen)
  fs.writeFileSync("config.example.json", data)
  process.exit()
}

let config = require("./config.json")
const ClientId = config.clientID;
var openTimestamp

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({
  transport: 'ipc'
});

async function setActivity() {
  if (!rpc)
    return;

  
  var activity = {
    details: config.textCfg.details,
    state: config.textCfg.state,
    smallImageKey: config.imageCfg.smallKey,
    smallImageText: config.imageCfg.smallText,
    largeImageKey: config.imageCfg.largeKey,
    largeImageText: config.imageCfg.largeText,
    instance: false
  }

  if (!openTimestamp) {
    openTimestamp = new Date();
  }

  if (config.timeCfg.timeType == 'start') {
    activity.startTimestamp = moment(openTimestamp).add(parse('-' + config.timeCfg.whatTime), 'ms').toDate();
  } else if (config.timeCfg.timeType == 'end') {
    activity.endTimestamp = moment(openTimestamp).add(parse(config.timeCfg.whatTime), 'ms').toDate();
  } else if (config.timeCfg.timeType == 'both') {
    activity.startTimestamp = moment(openTimestamp).add(parse('0s'), 'ms').toDate();
    activity.endTimestamp = moment(openTimestamp).add(parse(config.timeCfg.whatTime), 'ms').toDate();
  }
  rpc.setActivity(activity);
}

rpc.on('ready', () => {
  setActivity();
  console.log("DiscordCustomRP is connected.".underline.green)
  console.log("Running!".rainbow)
  setInterval(() => {
    delete require.cache
    setActivity();
  }, 15000);
});

rpc.login(ClientId).catch(console.error);
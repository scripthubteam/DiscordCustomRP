# DiscordCustomRP
![](https://i.imgur.com/x60ukNg.png)

A user-friendly way to use Rich Presence in Discord!

DiscordCutomRP is a lightweight way to get your own Rich Presence built in Node.js using the discord-rpc library.

## How to use it

### Requirements

* [NodeJS](https://nodejs.org)
* [git](https://git-scm.com/)

### Installation

* Open CMD.
* Go to the destination of the folder where you want to install using `cd`. Example: `cd MyDocuments/DiscordStuff`.
* Use the following command on the console: `git clone https://github.com/scripthubteam/DiscordCustomRP.git`
* To check and get software updates use: `git pull` on the console.
* Now use `cd DiscordCustomRP` to access the software folder.
* To install the software libraries use: `npm install`
* From this point all you have to do is change the name of the file `config.example.json` to ` config.json`, if you want to customize other fields such as adding images and a name of the application you should read what follows next.

**Creating an application in Discord**

* Go to the website: https://discordapp.com/developers/applications/me/
* Then click on the "New application" button

![](https://i.imgur.com/8Fe8Xxq.png)

* Give your application a name and then click on the "Create Application" button.
* Copy the Client ID.
* Go down and click on the button called "Enable Rich Presence".

![](https://i.imgur.com/Hq8FC0F.png)

* Upload the images that you will use in your Rich Presence, remember that all the images must have a recognizable name and then identify it in the configuration files of DiscordCustomRP, look carefully at which section you upload the images, if they are "Large" or "Small". In the screenshot we will upload a small image called `a_small_mari` and another large image called `a_large_mari`

![](https://i.imgur.com/A3Dfto3.png)
![](https://i.imgur.com/DD5K3Wb.png)

* Then click on "Save changes" and go to the file `config.example.json` to start configuring your Rich Presence in a personalized way.

**Starting to customize my Rich Presence**

This is the final result of configuring my `config.json`. To get the `clientId` you must go to your application on the Discord developer page and look for the field "Client ID".

[config.example.json](https://github.com/scripthubteam/DiscordCustomRP/blob/master/config.example.json) content:
```
{
  "tCfg": {
    "details": "Oh, hi",
    "state": "This is DiscordCustomRP"
  },
  "iCfg": {
    "smallOptions": "active",
    "smallKey": "a_small_mari",
    "smallText": "Mari (small text)",
    "largeOptions": "active",
    "largeKey": "a_large_mari",
    "largeText": "Mari (large text)"
  },
  "timeCfg": {
    "timeType": "none",
    "whatTime": "0m"
  },

  "clientID": "463437134137655298"
}
```

**Notes:**
* The names of the resources according to the put should be placed in the `smallKey` or` largeKey` fields, depending on the selected size given to the image.
* To edit the main text of your Rich Presence you must modify the `details` or` state` field, you can always modify the fields that are in quotes.

* To use time stamps you must change the value `none` of the `timeType` field:
  * `start` if you want to establish the account from the beginning
  * `end` if you want the account to start in reverse mode
  * `both` if you want both options.

**Running**

* To turn on the Rich Presence use the following command on your console: `node main.js` or` npm start`

## Credits

* **MrDevsaider** - [twitter](https://twitter.com/mrdevsaider), [github profile](https://github.com/MrDevsaider)
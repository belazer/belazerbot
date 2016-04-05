var tmi = require('tmi.js');
var fs, settingsFile;

settingsFile = 'settings.json';
fs = require('fs');

var settings = JSON.parse(
    fs.readFileSync(settingsFile)
);

var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: settings.username,
    password: settings.token
  },
  channels: ["pr0pagandapandah"]
};

var client = new tmi.client(options);
client.connect();

client.on("chat", function (channel, user, message, self) {
    if(message === "!help") {
      client.say("pr0pagandapandah", "Here is a list of commands: !twitter, !facebook, !sponsors");
    }
    if(message === "!twitter") {
      client.say("pr0pagandapandah", "https://twitter.com/fbnblz");
    }
    if(message === "!facebook") {
      client.say("pr0pagandapandah", "https://facebook.com");
    }
    if(message === "!sponsors") {
      client.say("pr0pagandapandah", "There are no sponsors BibleThump");
    }
});

client.on("connected", function(address, port){
  client.say("pr0pagandapandah", "Hello, I am connected!");
});

const {Room} = require('./class/room')
const {Item} = require('./class/item')
const {Player} = require('./class/player')


let item = new Item("rock", "just a simple rock");
let room = new Room("Test Room", "A test room");
let player = new Player("player", room);

player.items.push(item);

debugger
console.log(player.getItemByName("rock"))
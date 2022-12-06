const { expect } = require('chai');

const {Player} = require("../class/player.js");
const {Room} = require("../class/room.js");
const {Item} = require("../class/item.js");
const {Food} = require("../class/food.js");
const { World } = require("../class/world")

const worldData = require('../data/world-data')

let food = new Food("sandwich", "a delicious sandwich");
let room = new Room("Test Room", "A test room");
let player = new Player("player", room);

player.items.push(food);

player.items.length

player.eatItem("sandwich");


// let item = new Item("rock", "just a simple rock");
// let room = new Room("Test Room", "A test room");
// let player = new Player("player", room);

// player.items.push(item);

// expect(player.items.length).to.equal(1);

// player.eatItem("rock");

// expect(player.items.length).to.equal(1);
Adventure Project (Challenge)

Welcome to App Academy Adventure! For this project, you will add different item types to a text adventure using OOP principles. Use the test specs to guide you as you work through each task described below.

Clone the project from the starter.
Running the code

    Type node game.js to run the project
    Type npm install to install the tests
    Type npm test to run the tests

Tasks

Your task is to add different items to this simple adventure world.

    Fill out the Item class in item.js
    Implement instance methods to pick up and drop items

    room.getItemByName - Retrieves an item from a room by name
    player.getItemByName - Retrieves an item from a player's inventory by name
    player.takeItem - Picks up an item from a room into the player's inventory
    player.dropItem - Drops an item the player is holding into their current room

    Create an edible Food class that inherits from Item
    Modify the loadWorld function in world.js to create food from world-data.js
    Implement player.eatItem to allow the player to eat food items, but not non-food items
    Bonus: Add new types of enemies, items and rooms


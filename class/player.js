class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        let room = this.currentRoom;
        let item = room.getItemByName(itemName); //finds item name
        this.items.push(item);  //adds item name to player inventory
        room.items.splice(room.items.indexOf(item), 1); //removes item from the room
    }

    dropItem(itemName) {
        //your code
    }

    eatItem(itemName) {
        // Fill this in

    }

    getItemByName(name) {
        let items = this.items;

        //finds index for the item by name
        let index = null;
        items.forEach((item, i) => {
            if(item.name === name) {
                index = i;
            }
        })

        //returns the item using the index
        let item = items[index];
        return item;
    }
}

module.exports = {
  Player,
};

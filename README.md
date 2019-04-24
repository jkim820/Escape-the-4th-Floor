# Escape-the-4th-Floor

[Live Site](https://jkim820.github.io/Escape-the-4th-Floor/)

![Display](/images/display.png)

## Table of contents
* [Description](#description)
* [Technologies](#technologies)
* [Room Navigation](#room-navigation)
* [Modal Implementation](#modal-implementation)
* [Future Features](#future-features)

### Description

Escape the 4th Floor is a single player first-person game with a visualization of App Academy NYC's 4th floor computer lab. Users will be able to search around to find clues and solve challenges under a certain time in order to beat the game.

### Technologies

* `Vanilla Javascript` for game logic
* `HTML5/CSS3` for items/modals placement
* `Adobe Photoshop` for visualization of App Academy's blueprint

### Room Navigation

Using event key codes and event listeners, users are able to navigate through the different rooms and utilize the lightswitch to display different clues based on what items become visible or hidden.
```javascript
  function changeRoom(e) {
    let room = document.getElementById("roomChange");

    if (e.key === "ArrowLeft") {
        if (roomType === "light"){
            return room.src = rooms[(first += 2) % 3];
        } else if (roomType === "dark") {
            return room.src = darkRooms[(first += 2) % 3];
        }
    } else if (e.key === "ArrowRight") {
        if (roomType === "light") {
            return room.src = rooms[(first += 1) % 3];
        } else if (roomType === "dark") {
            return room.src = darkRooms[(first += 1) % 3];
        }
    } 
  }
  
  function lightSwitch() {
    let image = document.getElementById('light');
    let room = document.getElementById('roomChange');

    if (image.src.match("on")) {
        image.src = "images/lightswitch-off.png";
        roomType = "dark";
        room.src = darkRooms[first % 3];
    } else {
        image.src = "images/lightswitch-on.png";
        roomType = "light";
        room.src = rooms[first % 3];
    }
  }
```

### Modal Implementation

The items containing clues will pop up modals when correctly clicked on that will display challenges for users to solve and use towards answering the final clue.

![Modal](/images/modal.png)

### Future Features

* Confetti Canvas/CSS Animation upon winning the game.

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f0f0;
}

.container {
  display: flex;
  justify-content: space-around;
  width: 80%;
}

.house {
  width: 150px;
  height: 400px;
  border: 2px solid #000;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
}

.house-name, .house-score {
  text-align: center;
  margin-top: 10px;
  font-size: 1.2em;
}

.house-score {
  font-size: 1.5em;
}

.sand {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

.sand .icon {
  width: 20px;
  height: 20px;
  background-color: red;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  margin: 2px 0;
}

#gryffindor .sand .icon { background-color: red; }
#hufflepuff .sand .icon { background-color: yellow; }
#slytherin .sand .icon { background-color: green; }
#ravenclaw .sand .icon { background-color: blue; }

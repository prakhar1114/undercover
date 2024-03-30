function displayGreeting() {
  var userName = document.getElementById("userName").value;
  var greetingArea = document.getElementById("greeting");

  if (userName.trim() !== "") {
    greetingArea.innerHTML = `Hello, ${userName}! Welcome to our website.`;
  } else {
    greetingArea.innerHTML = `Hello, stranger! Please enter your name.`;
  }
}

function renderNameBoxes() {
  // input number of players from the box numPlayers
  var numPlayers = document.getElementById("numPlayers").value;

  var containerDiv = document.getElementById("inputNames");
  containerDiv.innerHTML = "";

  for (var i = 0; i < numPlayers; i++) {
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Player " + (i + 1) + " name";
    input.className = "player-names";
    containerDiv.appendChild(input);
  }

  var breakLine = document.createElement("br");
  containerDiv.appendChild(breakLine);

  // Ready to play
  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Ready to Play";
  submitButton.onclick = function() {
    verify();
  }
  containerDiv.appendChild(submitButton);
}

function verify() {
    var containerDiv = document.getElementById("inputNames");
  
    // Get player names
    var playerInputs = document.querySelectorAll('.player-names');
    playerNames = Array.from(playerInputs).map(input => input.value);
  
    // Count Mr. Whites and Undercover Agents
    mrWhites = document.getElementById("numWhite").value;
    undercoverAgents = document.getElementById("numUndercover").value;;
  
    // // Clear container
    // containerDiv.innerHTML = '';

    // output container div
    var containerDiv = document.getElementById("ready");
  
    // Print player names in a single line separated by commas
    var para = document.createElement("P");
    var comma_separated_players = playerNames.join(', ');
    para.innerText = `Ready to play? ${comma_separated_players}`;
    containerDiv.appendChild(para);
  
    var countPara = document.createElement("P");
    countPara.innerText = `Number of Mr. Whites: ${mrWhites}, Number of Undercover Agents: ${undercoverAgents}`;
    containerDiv.appendChild(countPara);
  
    // Go button
    var goButton = document.createElement("button");
    goButton.innerHTML = "Go";
    goButton.onclick = function() {
        startGame();
      }
    containerDiv.appendChild(goButton);
  }

  function startGame() {
    let scores = {};
    playerNames.forEach(name => {
        scores[name] = 0;
    });

    let round = 1;
    const scoresParam = encodeURIComponent(JSON.stringify(scores));
    const playerNamesParam = encodeURIComponent(JSON.stringify(playerNames));

    // Pass mrWhites, undercoverAgents, playerNames, and scores as URL parameters
    const url = `game.html?round=${round}&mrWhites=${mrWhites}&undercoverAgents=${undercoverAgents}&playerNames=${playerNamesParam}&scores=${scoresParam}`;
    window.location.href = url;
  }
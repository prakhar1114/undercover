function getURLParams() {
  const params = new URLSearchParams(window.location.search);
  mrWhites = params.get("mrWhites");
  undercoverAgents = params.get("undercoverAgents");
  // Assuming playerNames is passed as a JSON string
  playerNames = JSON.parse(
    decodeURIComponent(params.get("playerNames") || "[]")
  );
  scores = JSON.parse(decodeURIComponent(params.get("scores") || "{}"));
  round = params.get("round");
  //   return { mrWhites, undercoverAgents, playerNames };
}

function displayScoreboard() {
  const scoresDiv = document.getElementById("scores");
  scoresDiv.innerHTML = ""; // Clear previous scoreboard content

  Object.keys(scores).forEach((playerName) => {
    let playerScore = document.createElement("p");
    playerScore.innerText = `${playerName}: ${scores[playerName]}`; // Display score from scores object
    scoresDiv.appendChild(playerScore);
  });
}

function populateRoundNumber() {
  const roundNumberDiv = document.getElementById("gameInfo");
  roundNumberDiv.innerText = `Round Number ${round}`;
}

document.addEventListener("DOMContentLoaded", function () {
  getURLParams();
  populateRoundNumber();
  displayScoreboard(); // Ensure this is called to display the scores
});

function beginRound() {
  let shuffledPlayerNames = shuffleArray([...playerNames]); // Use spread operator to avoid modifying the original array
  let selected = select_agents(shuffledPlayerNames, mrWhites, undercoverAgents);
  mrWhitelist = selected.mrWhites;
  undercoverAgentlist = selected.undercoverAgents;
  civilianList = array.filter(
    (item) => !mrWhitelist.includes(item) && !undercoverAgentlist.includes(item)
  );

  // // Print player names in a single line separated by commas
  // var para = document.createElement("P");
  // para.innerText = `Ready to play? shuffled order ${shuffledPlayerNames.join(', ')} mrwhites ${selected.mrWhites.join(', ')} undercover ${selected.undercoverAgents.join(', ')}`;
  // playzone.appendChild(para);

  civilian_word = "chair";
  undercover_word = "sit";

  current_players = [...playerNames];
  var idx = 0;

  prompt_reveal(idx);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    let j = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function select_agents(
  shuffledPlayerNames,
  num_of_mrWhites,
  num_of_undercoverAgents
) {
  let availableForMrWhites = shuffledPlayerNames.slice(1); // Exclude the first player for Mr. Whites selection
  let selectedMrWhites = [];
  let selectedUndercoverAgents = [];

  // Randomly select Mr. Whites
  while (
    selectedMrWhites.length < num_of_mrWhites &&
    availableForMrWhites.length > 0
  ) {
    let randomIndex = Math.floor(Math.random() * availableForMrWhites.length);
    selectedMrWhites.push(availableForMrWhites[randomIndex]);
    availableForMrWhites.splice(randomIndex, 1); // Remove the selected player to avoid duplicate selection
  }

  // Combine the first player and the remaining players for Undercover Agents selection
  let availableForUndercoverAgents = [shuffledPlayerNames[0]].concat(
    availableForMrWhites
  );

  // Randomly select Undercover Agents
  while (
    selectedUndercoverAgents.length < num_of_undercoverAgents &&
    availableForUndercoverAgents.length > 0
  ) {
    let randomIndex = Math.floor(
      Math.random() * availableForUndercoverAgents.length
    );
    selectedUndercoverAgents.push(availableForUndercoverAgents[randomIndex]);
    availableForUndercoverAgents.splice(randomIndex, 1); // Remove the selected player to avoid duplicate selection
  }

  return {
    mrWhites: selectedMrWhites,
    undercoverAgents: selectedUndercoverAgents,
  };
}

function prompt_reveal(idx) {
  playzone = document.getElementById("playzone");
  playzone.innerHTML = "";

  var secret_word = "";
  var current_player_name = current_players[idx];
  if (mrWhitelist.includes(current_player_name)) {
    // mr white no word
    secret_word = "You are Mr White";
  } else if (undercoverAgentlist.includes(current_player_name)) {
    // undercover word
    secret_word = `Your word is ${undercover_word}`;
  } else {
    // civilian word
    secret_word = `Your word is ${civilian_word}`;
  }

  // player name
  var para = document.createElement("P");
  para.innerText = `Player ${current_player_name}`;
  playzone.appendChild(para);

  // instruction
  var para = document.createElement("P");
  para.innerText = `Press button once you are the only one seeing the screen`;
  para.id = "info";
  playzone.appendChild(para);

  // button for next step
  var goButton = document.createElement("button");
  goButton.id = "go";
  goButton.innerHTML = "Reveal Your word";
  goButton.onclick = function () {
    reveal_word(secret_word, idx);
  };
  playzone.appendChild(goButton);
}

function reveal_word(secret_word, idx) {
  // instruction
  var para = document.getElementById("info");
  para.innerText = secret_word;

  // update idx
  idx = idx + 1;

  // button for next step
  var goButton = document.getElementById("go");
  goButton.innerHTML = "OK. Pass to next player";
  if (idx < current_players.length) {
    goButton.onclick = function () {
      prompt_reveal(idx);
    };
  } else {
    goButton.onclick = function () {
      begin_voting();
    };
  }
}

function begin_voting() {
  playzone.innerHTML = "";

  // instruction
  var para = document.createElement("P");
  para.innerText = `Discuss and select who to eliminate`;
  playzone.appendChild(para);

  // Create a new div element
  let button_container = document.createElement("div");

  //   // Optionally set some attributes
  //   button_container.id = "buttonsContainer"; // Setting an ID for easy access later
  //   button_container.style.padding = "20px"; // Adding some padding for visual spacing
  //   button_container.style.border = "1px solid #000"; // Adding a border to visualize the container

  // Append the container to the document body or another specific element
  playzone.appendChild(button_container); // Appending to the body

  current_players.forEach(function (name) {
    let button = document.createElement("button"); // Create a new button element
    button.innerHTML = name; // Set the button's text to the current string
    button.addEventListener("click", function () {
      alert("Clicked " + name); // Example action: Alert button name when clicked

      remove_element_from_list(current_players, name);

      var player_type = "";
      if (remove_element_from_list(mrWhitelist, name)) {
        player_type = PlayerType.MRWHITE;
      } else if (remove_element_from_list(undercoverAgentlist, name)) {
        player_type = PlayerType.UNDERCOVER;
      } else {
        player_type = PlayerType.CIVILIAN;
      }

      var game_over, who_won, victory_msg;
      game_over, who_won, (victory_msg = check_game_over_and_who_won());

      if (game_over) {
        if (who_won == PlayerType.CIVILIAN) {
          civilianList.forEach((key) => {
            scores[key] += 2;
          });
        } else {
          undercoverAgentlist.forEach((key) => {
            scores[key] += 10;
          });

          mrWhitelist.forEach((key) => {
            scores[key] += 6;
          });
        }

        // MR White should try to guess the word: update the scores if he guesses it write
        // End the game is Mr white guesses the word right
        // pass game_over to the function so that if the word is not correct and game not over, new round should begin
        if (player_type == PlayerType.MRWHITE) {
          mr_white_guess(game_over);
        }
      } else {
        if (player_type == PlayerType.MRWHITE) {
          // MR White should try to guess the word: update the scores if he guesses it write
          // End the game is Mr white guesses the word right
          // pass game_over to the function so that if the word is not correct and game not over, new round should begin
          mr_white_guess(game_over);
        } else {
          start_next_round_of_voting();
        }
      }
    });
    button.style.margin = "10px";
    button_container.appendChild(button); // Append the button to the container
  });
}

function check_game_over_and_who_won() {
  var game_over, who_won, victory_msg;
  if (mrWhitelist.length() == 0 && undercoverAgentlist.length() == 0) {
    game_over = true;
    who_won = PlayerType.CIVILIAN;
    victory_msg = VictoryMsg.CIVILIANWIN;
  } else if (civilianList.length() == 0) {
    who_won = PlayerType.UNDERCOVER;
    victory_msg = VictoryMsg.UNDERCOVERWIN;
    game_over = true;
  } else {
    game_over = false;
  }
  return game_over, who_won, victory_msg;
}

function remove_element_from_list(list, element) {
  var idx = list.indexOf(element);
  if (idx > -1) {
    list.splice(idx, 1);
    return true;
  } else {
    return false;
  }
}

const PlayerType = {
  MRWHITE: "MRWHITE",
  CIVILIAN: "CIVILIAN",
  UNDERCOVER: "UNDERCOVER",
};

const VictoryMsg = {
  UNDERCOVERWIN: "Game over. Civilians win",
  CIVILIANWIN: "Game over. Undercover Agent and Mr White wins",
};

function start_next_round_of_voting() {
  // Pass mrWhites, undercoverAgents, playerNames, and scores as URL parameters
  round += 1;
  populateRoundNumber();
  displayScoreboard(); // Ensure this is called to display the scores
  begin_voting();
}

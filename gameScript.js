function getURLParams() {
  const params = new URLSearchParams(window.location.search);
  mrWhites = params.get("mrWhites");
  undercoverAgents = params.get("undercoverAgents");
  // Assuming playerNames is passed as a JSON string
  playerNames = JSON.parse(
    decodeURIComponent(params.get("playerNames") || "[]")
  );
  scores = JSON.parse(decodeURIComponent(params.get('scores') || '{}'));
  round = params.get("round");
//   return { mrWhites, undercoverAgents, playerNames };
}

function displayScoreboard() {
    const scoresDiv = document.getElementById('scores');
    scoresDiv.innerHTML = ''; // Clear previous scoreboard content
    
    Object.keys(scores).forEach(playerName => {
        let playerScore = document.createElement('p');
        playerScore.innerText = `${playerName}: ${scores[playerName]}`; // Display score from scores object
        scoresDiv.appendChild(playerScore);
    });
}


function populateRoundNumber() {
    const roundNumberDiv = document.getElementById('gameInfo');
    roundNumberDiv.innerText = `Round Number ${round}`;
}

document.addEventListener('DOMContentLoaded', function() {
    getURLParams();
    populateRoundNumber();
    displayScoreboard(); // Ensure this is called to display the scores
});

function beginRound() {
    var playzone = document.getElementById('playzone');
    playzone.innerHTML = '';

    let shuffledPlayerNames = shuffleArray([...playerNames]); // Use spread operator to avoid modifying the original array
    let selected = select_agents(shuffledPlayerNames, mrWhites, undercoverAgents);


    // // Print player names in a single line separated by commas
    // var para = document.createElement("P");
    // para.innerText = `Ready to play? shuffled order ${shuffledPlayerNames.join(', ')} mrwhites ${selected.mrWhites.join(', ')} undercover ${selected.undercoverAgents.join(', ')}`;
    // playzone.appendChild(para);

    var current_ind = 0
    var civilian_word = 'chair'
    var undercover_word = 'sit'

    giveWords(current_ind, civilian_word, undercover_word, selected.mrWhites, selected.undercoverAgents)

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


function select_agents(shuffledPlayerNames, num_of_mrWhites, num_of_undercoverAgents) {
    let availableForMrWhites = shuffledPlayerNames.slice(1); // Exclude the first player for Mr. Whites selection
    let selectedMrWhites = [];
    let selectedUndercoverAgents = [];

    // Randomly select Mr. Whites
    while (selectedMrWhites.length < num_of_mrWhites && availableForMrWhites.length > 0) {
        let randomIndex = Math.floor(Math.random() * availableForMrWhites.length);
        selectedMrWhites.push(availableForMrWhites[randomIndex]);
        availableForMrWhites.splice(randomIndex, 1); // Remove the selected player to avoid duplicate selection
    }

    // Combine the first player and the remaining players for Undercover Agents selection
    let availableForUndercoverAgents = [shuffledPlayerNames[0]].concat(availableForMrWhites);

    // Randomly select Undercover Agents
    while (selectedUndercoverAgents.length < num_of_undercoverAgents && availableForUndercoverAgents.length > 0) {
        let randomIndex = Math.floor(Math.random() * availableForUndercoverAgents.length);
        selectedUndercoverAgents.push(availableForUndercoverAgents[randomIndex]);
        availableForUndercoverAgents.splice(randomIndex, 1); // Remove the selected player to avoid duplicate selection
    }

    return {
        mrWhites: selectedMrWhites,
        undercoverAgents: selectedUndercoverAgents
    };
}

function giveWords(current_ind, civilian_word, undercover_word, mrwhites, undercovers) {
    var playzone = document.getElementById('playzone');
    playzone.innerHTML = '';


    var current_player_name = playerNames[current_ind]

    if (mrwhites.includes(current_player_name)) {
        // mr white no word

    } else if (undercovers.includes(current_player_name)) {
        // undercover word

    } else {
        // civilian word

    }

    var para = document.createElement("P");
    para.innerText = `Player `;
    playzone.appendChild(para);

    var para = document.createElement("P");
    para.innerText = `Your word is {} `;
    playzone.appendChild(para);

}
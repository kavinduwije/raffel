document.getElementById('raffleForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    try {
        const response = await fetch('participants.json');
        const data = await response.json();

        const participants = data.participants;
        const winnerIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[winnerIndex];

        document.getElementById('winnerName').textContent = winner;
        document.getElementById('winner').classList.remove('hidden');
    } catch (error) {
        console.error('Error fetching or parsing JSON file:', error);
    }
});


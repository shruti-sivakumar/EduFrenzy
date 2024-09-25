// Add functionality for searching channels
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const channels = document.querySelectorAll('.channel-card');
    
    channels.forEach(channel => {
        const channelName = channel.querySelector('h2').innerText.toLowerCase();
        if (channelName.includes(query)) {
            channel.style.display = 'block';
        } else {
            channel.style.display = 'none';
        }
    });
});

// Event listener for the View buttons
document.querySelectorAll('.view-button').forEach(button => {
    button.addEventListener('click', () => {
        const channelId = button.dataset.channelId;
        window.location.href = `channel.html?id=${channelId}`;
    });
});

// Event listener for Create New Channel button
document.getElementById('create-channel').addEventListener('click', () => {
    window.location.href = 'create_channel.html'; // Redirect to create channel page
});

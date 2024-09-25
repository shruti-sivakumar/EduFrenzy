document.addEventListener("DOMContentLoaded", function () {
    const channelName = document.getElementById("channel-name");
    const membersList = document.getElementById("members-list");
    const sessionsList = document.getElementById("sessions-list");
    const recordedSessionsList = document.getElementById("recorded-sessions-list");
    const materialsList = document.getElementById("materials-list");
    const chatMessages = document.getElementById("chat-messages");
    const chatInput = document.getElementById("chat-input");
    const sendChatBtn = document.getElementById("send-chat-btn");
    const joinButton = document.getElementById("join-button");

    // Example channel data
    const channelData = {
        name: "Learning Python",
        members: ["Alice", "Bob", "Charlie"],
        sessions: [
            { title: "Introduction to Python", date: "2024-09-30", time: "10:00 AM" },
            { title: "Advanced Python Concepts", date: "2024-10-05", time: "2:00 PM" },
        ],
        recordedSessions: [
            { title: "Python Basics", link: "#" },
            { title: "Data Structures in Python", link: "#" },
        ],
        materials: [
            { title: "Python Course Syllabus", link: "#" },
            { title: "Introduction to Python Programming", link: "#" },
        ],
        chatMessages: [
            { sender: "Alice", message: "Hello everyone!" },
            { sender: "Bob", message: "Looking forward to the next session!" },
        ],
    };

    // Populate channel name
    channelName.textContent = channelData.name;

    // Populate members list
    channelData.members.forEach(member => {
        const li = document.createElement("li");
        li.textContent = member;
        membersList.appendChild(li);
    });

    // Populate online sessions list
    channelData.sessions.forEach(session => {
        const sessionCard = document.createElement("div");
        sessionCard.className = "session-card";
        sessionCard.innerHTML = `<strong>${session.title}</strong> - ${session.date} at ${session.time} <button class="button">Join Session</button>`;
        sessionsList.appendChild(sessionCard);
    });

    // Populate recorded sessions list
    channelData.recordedSessions.forEach(recorded => {
        const recordedCard = document.createElement("div");
        recordedCard.className = "recorded-session-card";
        recordedCard.innerHTML = `<strong>${recorded.title}</strong> <button class="button">Download</button>`;
        recordedSessionsList.appendChild(recordedCard);
    });

    // Populate course materials list
    channelData.materials.forEach(material => {
        const materialCard = document.createElement("div");
        materialCard.className = "material-card";
        materialCard.innerHTML = `<strong>${material.title}</strong> <button class="button">Download</button>`;
        materialsList.appendChild(materialCard);
    });

    // Populate chat messages
    channelData.chatMessages.forEach(chat => {
        const chatMessage = document.createElement("div");
        chatMessage.innerHTML = `<strong>${chat.sender}:</strong> ${chat.message}`;
        chatMessages.appendChild(chatMessage);
    });

    // Handle send chat button click
    sendChatBtn.addEventListener("click", function () {
        const messageText = chatInput.value.trim();
        if (messageText) {
            const newChatMessage = document.createElement("div");
            newChatMessage.innerHTML = `<strong>You:</strong> ${messageText}`;
            chatMessages.appendChild(newChatMessage);
            chatInput.value = ''; // Clear input field
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
        }
    });

    // Handle join button click
    joinButton.addEventListener("click", function () {
        if (joinButton.textContent === "Join") {
            joinButton.textContent = "Leave";
            // Logic to add the user to the channel
            alert("You have joined the channel.");
        } else {
            joinButton.textContent = "Join";
            // Logic to remove the user from the channel
            alert("You have left the channel.");
        }
    });
});

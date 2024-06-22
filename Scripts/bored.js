document.getElementById('get-activity-btn').addEventListener('click', fetchActivity);

async function fetchActivity() {
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const apiUrl = 'https://bored-api.appbrewery.com/random';

    try {
        const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
        const data = await response.json();
        const activityData = JSON.parse(data.contents); // parsing the stringified JSON

        displayActivity(activityData);
    } catch (error) {
        console.error('Error fetching activity:', error);
    }
}

function displayActivity(activity) {
    const activityContainer = document.getElementById('activity-container');
    activityContainer.innerHTML = `
        <h2>Activity: ${activity.activity}</h2>
        <p>Type: ${activity.type}</p>
        <p>Participants: ${activity.participants}</p>
        <p>Price: ${activity.price}</p>
        <p>Accessibility: ${activity.accessibility}</p>
        <p>Duration: ${activity.duration}</p>
        <p>Kid Friendly: ${activity.kidFriendly ? 'Yes' : 'No'}</p>
        ${activity.link ? `<a href="${activity.link}" target="_blank">More Info</a>` : ''}
        <div class="activity-actions">
            <button id="done-btn">Mark as Done</button>
            <button id="save-btn">Save for Later</button>
            <button id="new-activity-btn">Get New Activity</button>
        </div>
    `;

    // Add event listeners for the new buttons
    document.getElementById('done-btn').addEventListener('click', markAsDone);
    document.getElementById('save-btn').addEventListener('click', saveForLater);
    document.getElementById('new-activity-btn').addEventListener('click', fetchActivity);
}

function markAsDone() {
    alert('Great job! You marked the activity as done.');
}

function saveForLater() {
    alert('The activity has been saved for later.');
}

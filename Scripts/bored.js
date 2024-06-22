document.getElementById('get-activity-btn').addEventListener('click', fetchActivity);

async function fetchActivity() {
    const response = await fetch('https://bored-api.appbrewery.com/random');
    const data = await response.json();
    displayActivity(data);
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
    `;
}
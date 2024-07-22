document.addEventListener('DOMContentLoaded', () => {
    const discussionForm = document.getElementById('discussionForm');
    const discussionsContainer = document.getElementById('discussions');

    // Function to render discussions from local storage
    const renderDiscussions = () => {
        discussionsContainer.innerHTML = '';
        const discussions = JSON.parse(localStorage.getItem('discussions')) || [];
        discussions.forEach(discussion => {
            const discussionElement = document.createElement('article');
            discussionElement.innerHTML = `
                <h2>${discussion.title}</h2>
                <p>${discussion.content}</p>
            `;
            discussionsContainer.appendChild(discussionElement);
        });
    };

    // Handle form submission
    discussionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const newDiscussion = { title, content };

        // Get discussions from local storage
        const discussions = JSON.parse(localStorage.getItem('discussions')) || [];
        // Add new discussion
        discussions.push(newDiscussion);
        // Save updated discussions to local storage
        localStorage.setItem('discussions', JSON.stringify(discussions));

        // Clear the form
        discussionForm.reset();
        // Render updated discussions
        renderDiscussions();
    });

    // Initial render of discussions
    renderDiscussions();
});

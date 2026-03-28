// Login Management
document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');

    // Update navigation based on login status
    const loginLink = document.querySelector('a[href="login.html"]');

    if (loggedInUser && loginLink) {
        // User is logged in, show user profile instead of login link
        const navContainer = loginLink.parentElement;

        // Remove login link
        loginLink.remove();

        // Create user profile section
        const userProfile = document.createElement('div');
        userProfile.id = 'user-profile';
        userProfile.innerHTML = `
            <div class="user-profile-container">
                <button class="user-btn" id="userBtn">
                    <span class="user-avatar">👤</span>
                    <span class="user-name">${loggedInUser}</span>
                </button>
                <div class="user-dropdown" id="userDropdown" style="display: none;">
                    <p class="dropdown-user">Logged in as: <strong>${loggedInUser}</strong></p>
                    <button class="logout-btn" id="logoutBtn">Logout</button>
                </div>
            </div>
        `;

        navContainer.appendChild(userProfile);

        // Toggle dropdown
        document.getElementById('userBtn').addEventListener('click', function() {
            const dropdown = document.getElementById('userDropdown');
            dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
        });

        // Logout functionality
        document.getElementById('logoutBtn').addEventListener('click', function() {
            localStorage.removeItem('loggedInUser');
            alert('Logged out successfully!');
            window.location.href = 'index.html';
        });

        // Close dropdown when clicking elsewhere
        document.addEventListener('click', function(e) {
            const userProfile = document.getElementById('user-profile');
            if (userProfile && !userProfile.contains(e.target)) {
                document.getElementById('userDropdown').style.display = 'none';
            }
        });
    } else if (!loggedInUser && loginLink) {
        // Not logged in, show login link (already there)
    }
});

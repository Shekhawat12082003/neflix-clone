
 function openProfileModal() {
    document.getElementById("profileModal").style.display = "block";
}


function closeProfileModal() {
    document.getElementById("profileModal").style.display = "none";
}


function changeUsername() {
    alert("Change Username clicked");
}

function changePassword() {
    alert("Change Password clicked");
}

window.onclick = function(event) {
    if (event.target === document.getElementById("profileModal")) {
        closeProfileModal();
    }
}


    const profileImageInput = document.querySelector('#profileImageInput');
    const profileImage = document.querySelector('.profile-img img');
    const usernameInput = document.querySelector('#usernameInput');
    const usernameDisplay = document.querySelector('#username');

    profileImageInput.addEventListener('change', function () {
        const file = profileImageInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });

    
    usernameInput.addEventListener('input', function () {
        usernameDisplay.textContent = usernameInput.value;
    });


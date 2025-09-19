document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to the exploration page!");

    const voteButtons = document.querySelectorAll('.vote-button');
    voteButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your vote!');
        });
    });
});

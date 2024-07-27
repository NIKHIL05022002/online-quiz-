// script.js
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('quiz-creation-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Quiz Created Successfully!');
    showSection('homepage');
});

document.getElementById('quiz-taking-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Starting Quiz...');
    showSection('quiz-questions');
});

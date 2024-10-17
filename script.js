document.getElementById('chalkboardForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const sentence = document.getElementById('sentence').value;
    const count = parseInt(document.getElementById('count').value);
    const outputDiv = document.getElementById('output');

    outputDiv.innerHTML = '';

    for (let i = 1; i <= count; i++) {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${i}. ${sentence}`;
        outputDiv.appendChild(paragraph);
    }
});

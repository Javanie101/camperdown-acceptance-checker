document.getElementById('acceptanceForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim().toLowerCase();
    const lastName = document.getElementById('lastName').value.trim().toLowerCase();
    const messageElement = document.getElementById('message');

    const acceptedNames = [
        'noel archibald', 'orville baker', 'demario barrows', 'jesse bent', 'desani brown', 
        'dajuan campbell', 'darnel carruthers', 'shemar chin', 'antwuan clarke', 'shakeil clarke', 
        'chad-michael collins', 'mario croll', 'kedar edwards', 'd-andre edwards', 'kejaun fearon', 
        'kijani francis', 'o\'brien fullerton', 'keneil gayle', 'kadeem gibbison', 'knatel gordon', 
        'jamoi grant', 'kevin green', 'jahzane harris', 'ranique hepburn', 'malique jackson', 
        'marc littlejohn', 'jesualdo mitchell', 'jordan morgan', 'dayshaun najair', 'ramone osbourne', 
        'malachi smith', 'richard spence', 'hughdean sutherland', 'tean thomas', 'raheem whyte', 
        'devon clarke', 'sheaquan dunkley', 'raheem edwards', 'alexander farquharson', 'tajorick grant', 
        'jaehquan johnson', 'dazzel matthews', 'davino mclean', 'roberto menzie', 'steve miller', 
        'demarco morgan', 'dejuan richards', 'onray richards', 'daniel sheriff', 'nathanel smith'
    ];

    const fullName = `${firstName} ${lastName}`;

    if (acceptedNames.includes(fullName)) {
        messageElement.textContent = 'Congratulations! You have been accepted into the 6th Form Program. We look forward to your contributions and success.';
        messageElement.style.color = '#00ff00'; // Green
    } else {
        messageElement.textContent = 'Unfortunately, you were not accepted this time. Keep striving and you will achieve your goals!';
        messageElement.style.color = '#ff0000'; // Red
    }
});

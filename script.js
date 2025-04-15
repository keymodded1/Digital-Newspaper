
document.getElementById('page1').addEventListener('click', function() {
    document.getElementById('page-content').innerHTML = "<h2>Page 1: KidNews Daily</h2><p>Direwolves, Sports, New Games, Tech</p>";
});

document.getElementById('page2').addEventListener('click', function() {
    document.getElementById('page-content').innerHTML = "<h2>Page 2: KidNews Weekly</h2><p>Space, Minecraft, Kid Inventors, Animals</p>";
});

document.getElementById('page3').addEventListener('click', function() {
    document.getElementById('page-content').innerHTML = "<h2>Puzzle Page</h2><p>Fun educational puzzles will appear here!</p>";
});

document.getElementById('page4').addEventListener('click', function() {
    document.getElementById('page-content').innerHTML = "<h2>Answers & Hints</h2><p>Answer key for all puzzles!</p>";
});

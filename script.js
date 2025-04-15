
const pages = {
    1: `
        <div class='page show'>
            <article>
                <h2>Direwolves: Real or Fantasy?</h2>
                <p>Direwolves once roamed the Earth. These legendary creatures are now famous thanks to fantasy series but they were real!</p>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Dire_wolf_skull.jpg/320px-Dire_wolf_skull.jpg' alt='Direwolf'>
            </article>
            <article>
                <h2>Kids' Soccer Revolution</h2>
                <p>Hybrid sports are on the rise! Meet the new sport that mixes soccer with tag.</p>
                <img src='https://cdn.pixabay.com/photo/2016/03/27/21/16/basketball-1288014_960_720.jpg' alt='Sports'>
            </article>
        </div>
    `,
    2: `
        <div class='page show'>
            <article>
                <h2>Journey to Mars</h2>
                <p>NASA's kid-friendly missions teach young minds about space travel. Ready to join?</p>
                <img src='https://cdn.pixabay.com/photo/2012/11/28/11/01/rocket-launch-67731_960_720.jpg' alt='Rocket'>
            </article>
            <article>
                <h2>Kid Inventors</h2>
                <p>Emily (12) built a voice-activated homework robot. What's your next invention?</p>
                <img src='https://cdn.pixabay.com/photo/2016/06/15/15/28/robot-1453491_960_720.jpg' alt='Robot'>
            </article>
        </div>
    `,
    3: `
        <div class='page show'>
            <article>
                <h2>English Quiz</h2>
                <p>1. Which is a verb?</p>
                <ul><li>A) Lion</li><li>B) Run</li><li>C) Elephant</li><li>D) Cat</li></ul>
                <p>2. What is the opposite of "cold"?</p>
                <ul><li>A) Ice</li><li>B) Hot</li><li>C) Snow</li><li>D) Freeze</li></ul>
                <p>3. Choose the animal:</p>
                <ul><li>A) Eat</li><li>B) Walk</li><li>C) Tiger</li><li>D) Jump</li></ul>
            </article>
            <article>
                <h2>Riddle</h2>
                <p>I have four legs in the morning, two legs at noon, and three legs in the evening. What am I?</p>
            </article>
        </div>
    `,
    4: `
        <div class='page show'>
            <article>
                <h2>Answer Key</h2>
                <p>1. B</p>
                <p>2. B</p>
                <p>3. C</p>
                <p>Riddle: A human (baby, adult, elder with a cane)</p>
            </article>
        </div>
    `
};

function showPage(num) {
    const content = document.getElementById('content');
    content.style.opacity = 0;
    setTimeout(() => {
        content.innerHTML = pages[num];
        content.style.opacity = 1;
    }, 300);
}

window.onload = () => showPage(1);

// Array.from(document.querySelectorAll('button[data-click]')).forEach(e => {
//     e.addEventListener('click', () => {
//         location.href = e.getAttribute('data-click');
//     });
//     document.head.insertAdjacentHTML('beforeEnd', `<link rel="prefetch" href="${e.getAttribute('data-click')}" as="document">`);
// });

const story = {
    "name": "The Adventures of Kevin Koala",
    "scenes": [
        {
            "name": "Start",
            "content": "Welcome to the adventures of Kevin Koala. This is a role-playing game. You will be given a part of the story then a decision to make. Enjoy!",
            "image": "Kevin Koala.png",
            "choices": [
                {
                    "text": "Start",
                    "scene": "Forest",
                    "startButton": true
                }
            ]
        },
        {
            "name": "Forest",
            "content": `Kevin Koala has arrived at Eucalyptus Forest. He is ready for the adventure ahead of him. He has landed with his
            parachute at the top of a grassy hill. He sees a lake straight ahead of him. "A water source!" he says. He
            noticed a large cave down to the left "That would be a good place for shelter however." he says. "Hmmm, where
            should I go?"`,
            "image": "Forest Koala.png",
            "choices": [
                {
                    "text": "Go to the lake",
                    "scene": "Lake"
                },
                {
                    "text": "Go to the cave",
                    "scene": "Cave"
                }
            ]
        },
        {
            "name": "Lake",
            "content": `I shall travel to the lake!" says Kevin. Kevin begins to make his way in the direction of the lake. The thick
            vegetation was no match for kevin's mighty excalibur. He thrashed his sword through the vegetation. He arrived at the lake. "Gosh, I am jolly hungry. What is thy going to eat? Thou that eat that fish, or maybe that crocodile! What should I eat?"`,
            "image": "forest move Koala.png",
            "choices": [
                {
                    "text": "Eat the crocodile",
                    "scene": "Dead"
                },
                {
                    "text": "Eat the fish",
                    "scene": "Dead"
                }
            ]

        },
        {
            "name": "Cave",
            "content": `Kevin made his way down to the cave entrance. "Woah, that looks spooky. I better start collecting firewood. Or, should I find food?" His tummy rumbled. "My goodness, what am I to do?"`,
            "image": "cave koala.jfif",
            "choices": [
                {
                    "text": "Find firewood",
                    "scene": "Dead"
                },
                {
                    "text": "Find food",
                    "scene": "Dead"
                }
            ]

        },
        {
            "name": "Dead",
            "content": `You died.`,
            "image": "cave koala.jfif",
            "choices": [
                
            ]

        },

    ],
    "startScene": "Start"
}

let currentScene = story.scenes[story.scenes.map(e => e.name).indexOf(story.startScene)];
// Mr Johnstone is cool hehehehfdah
function loadScene(scene) {
    window.history.pushState(scene.name, '', '/' + scene.name + '.html');
    document.querySelector('h1#header').innerText = story.name;
    document.querySelector('p#content').innerText = scene.content;
    document.querySelector('img#kevin').src = scene.image;
    Array.from(document.querySelectorAll('button')).forEach(e => e.remove());
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.addEventListener('click', () => {
            currentScene = story.scenes[story.scenes.map(e => e.name).indexOf(choice.scene)];
            loadScene(currentScene);
        });
        if (choice.startButton) {
            button.id = 'start';
        } else {
            button.className = 'decision';
        }
        document.body.appendChild(button);

    });
}
onpopstate = () => {
    currentScene = story.scenes[story.scenes.map(e => e.name).indexOf(location.pathname.substring(1).replace('.html', ''))];
    loadScene(currentScene);
}
if (location.hash) {
    currentScene = story.scenes[story.scenes.map(e => e.name).indexOf(location.hash.substring(1).replace('.html', ''))];
    loadScene(currentScene);
}
loadScene(currentScene);



async function downloadBing() {
    return await (await fetch('https://bing.com')).text();
}
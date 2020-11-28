var projects = [
    {
        title : 'JS key code',
        thumbnail : 'https://github.com/ravikumar0403/jskeycode/raw/master/res/keycodeinfo.png',
        description : 'A simple webapp which gives you the details of key events in javascript',
        liveUrl : 'https://ravikumar0403.github.io/jskeycode/',
        githubUrl : 'https://github.com/ravikumar0403/jskeycode',
    },
    {
        title: 'ToDo App',
        thumbnail: 'https://github.com/ravikumar0403/ToDoJS/raw/master/res/JSToDoApp.png',
        description: 'A simple To Do app made in vanilla JavaScript.It demonstrates the CRUD functionalities using browser storage',
        liveUrl: 'https://ravikumar0403.github.io/ToDoJS/',
        githubUrl: 'https://github.com/ravikumar0403/ToDoJS',

    },
    {
        title: 'Random Meme',
        thumbnail: 'https://github.com/ravikumar0403/RandomMeme/raw/master/res/randommeme.png',
        description: 'This is a simple project made using JavaScript to demonsrate a method to handle API calls in javascript. It makes a call to a Meme provider API and displays it on the web page.',
        liveUrl: 'https://ravikumar0403.github.io/RandomMeme/',
        githubUrl: 'https://github.com/ravikumar0403/RandomMeme',
    }
]

var projectsSet = document.getElementById('projects-set')

for(var i=0;i<projects.length;i++){
    var projectCard = createProjectsCard(projects[i]);
    projectsSet.appendChild(projectCard);
}

function createProjectsCard(projectData){
    var projectWrapper = document.createElement('div');
    projectWrapper.className = 'project-wrapper';

    var thumbnail = document.createElement('img');
    thumbnail.className = 'thumbnail';
    thumbnail.src = projectData.thumbnail;
    thumbnail.alt = projectData.title;

    var projectDetailsWrapper  = document.createElement('div');
    projectDetailsWrapper.className = 'project-details-wrapper';

    var title = document.createElement('h2');
    title.innerHTML = projectData.title;

    var description = document.createElement('p');
    description.innerHTML = projectData.description;

    var primaryLink = document.createElement('a')
    primaryLink.href = projectData.liveUrl;
    primaryLink.innerHTML = 'Live Project'
    primaryLink.className = 'primary-link'

    var secondaryLink = document.createElement('a')
    secondaryLink.href = projectData.githubUrl;
    secondaryLink.innerHTML = 'View Source'
    secondaryLink.className = 'secondary-link'

    projectDetailsWrapper.appendChild(title);
    projectDetailsWrapper.appendChild(description);
    projectDetailsWrapper.appendChild(primaryLink);
    projectDetailsWrapper.appendChild(secondaryLink);

    projectWrapper.appendChild(thumbnail)
    projectWrapper.appendChild(projectDetailsWrapper)

    return(projectWrapper)
}

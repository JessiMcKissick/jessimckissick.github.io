var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    // loop: true,
    delay: 0,
    cursor: '█'
});

typewriter
    // .typeString('A simple yet powerful native javascript')
    // .pauseFor(300)
    // .deleteChars(10)
    // .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
    // .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
    // .pauseFor(1000)
    // .start();
    .typeString('<strong>Jessi_McKissick@github:~$</strong> info<br>')
    .typeString('<em>Software Developer, (Future)Security Analyst</em><br>')
    .typeString('<br>')
    .typeString("I'm currently a college student Majoring in cybersecurity and working odjobs as needed.<br>")
    .typeString("===============================<br>")
    .typeString("<strong>Jessi_McKissick@github:~$</strong> ")
    .pauseFor('600')
    .typeString('projects')
    .pauseFor('200')
    .typeString('<br>')
    .typeString('<br>')
    .typeString('<strong>SolomonJS:</strong> Experimental Javascript DOM framework allowing dynamic generation and manipulation of dom nodes on static hosts.<br>')
    .typeString('<strong>Sucasa:</strong> Simple keylogger script in python that logs keystrokes to a text file or server.<br>')
    .typeString('<strong>winScalp:</strong> Currently experimental (and private repository) ducky-injectable script to clone a target devices data then erase all of the cloned content from said device.<br>')
    .typeString('<strong>G20 Webapp:</strong> A web application developed for a gaming group that automates calculation of various data.<br>')
    .typeString('<strong>This page!:</strong> A very simple web application using <a href="https://github.com/tameemsafi/typewriterjs?tab=readme-ov-file" target="blank">typewriterJS v2</a><br>')
    .typeString("===============================<br>")
    .typeString("<strong>Jessi_McKissick@github:~$</strong> ")
    .pauseFor('600')
    .typeString('contact')
    .pauseFor('200')
    .typeString('<br>')
    .typeString('<br>')
    .typeString('<strong>Email:</strong> JessiMcKissick@proton.me<br>')
    .typeString('<strong>Github:</strong> <a href="https://github.com/JessiMcKissick" target="blank">https://github.com/JessiMcKissick</a><br>')
    .typeString("===============================<br>")
    .typeString("<strong>Jessi_McKissick@github:~$</strong> ")
    .pauseFor('600')
    .typeString('certs')
    .pauseFor('200')
    .typeString('<br>')
    .typeString('<br>')
    .typeString('<strong>Nanodegree in front-end web development:</strong> Google Scholarship program, Udacity.')


    .start()
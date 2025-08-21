let themeSwitchers = document.querySelectorAll(".website-header .theme .icon");
let mainContent = document.querySelector(".main-content");
let navLinks = document.querySelectorAll(".navigation li");


if (localStorage.getItem("theme")) {
    document.body.classList = localStorage.getItem("theme");
    themeSwitchers.forEach((switcher) => {
        switcher.classList.remove("active");
        if (switcher.dataset.theme == localStorage.getItem("theme")) {
            switcher.classList.add("active");
        }
    });
}

themeSwitchers.forEach((switcher) => {
    switcher.addEventListener("click", function () {
        themeSwitchers.forEach((s) => s.classList.remove("active"));
        this.classList.add("active");
        let theme = this.dataset.theme;
        document.body.classList = theme;
        localStorage.setItem("theme", theme);
    });
});

let aboutContent = `
<header class="main-header">
        <h1 class="title">About</h1>
    </header>
<p class="bio">I am a web developer and software engineering student with a passion for creating dynamic and responsive web applications. I enjoy learning new technologies and continuously improving my skills to build better and more efficient solutions.</p>
<div class="techs">
    <h2 class="title">Technologies</h2>
    <div class="list">
        <img src="assets/techs/html.png" alt="tech icon">
        <img src="assets/techs/css.png" alt="tech icon">
        <img src="assets/techs/js.png" alt="tech icon">
        <img src="assets/techs/php.png" alt="tech icon">
        <img src="assets/techs/mysql.png" alt="tech icon">
        <img src="assets/techs/c.png" alt="tech icon">
        <img src="assets/techs/golang.png" alt="tech icon">
        <img src="assets/techs/git.png" alt="tech icon">
        <img src="assets/techs/github.png" alt="tech icon">
        <img src="assets/techs/figma.png" alt="tech icon">
        <img src="assets/techs/vscode.png" alt="tech icon">
        <img src="assets/techs/bash.png" alt="tech icon">
        <img src="assets/techs/nodejs.png" alt="tech icon">
    </div>
</div>
`;

let projectsContent = `
<header class="main-header">
        <h1 class="title">Projects</h1>
    </header>
<p class="info">Here are some of the projects I've worked on. Click on the links to view more details about each project.</p>
<div class="body">
    <div class="no-projects">
                    <i class="icon fas fa-folder-open"></i>
                    <p>Currently, there are no projects available to display. Please check back later for updates on my latest work.</p>
                </div>
</div>
`;

let projectBox = `
<div class="box">
        <div class="image">
            <img src="assets/projects/github_inspector.png" alt="project image">
        </div>
        <div class="info">
            <h1 class="name">Github Inspector</h1>
            <a href="#" class="link">View project</a>
        </div>
    </div>
`;


let contactContent = `
    <header class="main-header">
        <h1 class="title">Contact</h1>
    </header>
                    <p class="info">Feel free to reach out to me through any of the platforms listed on the left. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                    <div styele="border=1px solid red" class="contact">
                        <a href="https://x.com/zohir_e" class="link">
                        <i class="x icon fab fa-x-twitter"></i>
                        </a>
                        <a href="https://github.com/zel-baz" class="link">
                        <i class="github icon fab fa-github"></i>
                        </a>
                        <p class="link">
                        <i class="discord icon fab fa-discord"></i>
                        <span>xmfcp</span>
                        </p>
                        <a href="mailto:zouhairlbaz55@gmail.com" class="link">
                        <i class="email icon fas fa-envelope"></i>
                        </a>
                    </div>
                    <div class="contact-form">
                    <h1 class="title">Direct Message</h1>
                        <p class="info">You can send me a direct message using the form below. I'll get back to you as soon as possible.</p>
                        <p class="warning">
                        <i class="icon fas fa-warning"></i>
                            <span>This form is not working currently. Please use the contact links to reach out to me.</span>
                        </p>
                        <form>
                        <div class="form-group">
                            <input type="text" name="name" id="name" placeholder=" ">
                            <lable class="lable">Your Name</lable>
                        </div>
                        <div class="form-group">
                            <input type="email" name="emial" id="email" placeholder=" ">
                            <lable class="lable">Your Email</lable>
                        </div>
                        <div class="form-group">
                            <textarea name="message" id="message" placeholder=" "></textarea>
                            <lable class="lable">Your Message</lable>
                        </div>
                        <div class="action">
                            <button disabled type="submit">Send</button>
                        </div>
                        </form>
                    </div>
`;




const contentMap = {
    0: aboutContent,
    1: projectsContent,
    2: contactContent
};

navLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        mainContent.innerHTML = contentMap[index];
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
    });
});


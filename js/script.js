let text = document.querySelector("#container")
let languageChangerButton = document.querySelector(".language-changer")
let PortugueseText = `
        <aside id="bio-container">
            <span class="language-changer highlight">Change to english</span>
            <h2>Filipe Zatta</h2>
            <img id="bio img" src="img/file.jpg" alt="Filipe Zatta">
            <p>Olá, meu nome é Filipe Zatta e sou <span> um programador/engenheiro de dados iniciante atualmente localizado em Porto Alegre.</span></p>
            <p id="Welcome-text">Seja bem-vindo!</p>
            <ul id="social-container">
                <li><a href="https://www.instagram.com/filipezatta" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a href="https://www.linkedin.com/in/filipezatta" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            </ul>
            <div id="email-container">
                <ion-icon name="mail-outline"></ion-icon><a href="mailto:filipe.fbz@gmail.com">filipe.fbz@gmail.com</a>
            </div>
            <img id="cloud-badge" src="img/practitioner.png">


            
        </aside>
        <section id="about-container"> 
            <h1 id="name">Filipe Zatta</h1>
            <p id="title"><span class="highlight">Desenvolvedor Web/Engenheiro de Dados</span></p>
            <p class="description">Olá, meu nome é Filipe Zatta e <span class="highlight">sou desenvolvedor web e engenheiro de banco de dados iniciante</span>. Desde sempre tive contato com a computação e games, sempre tive curiosidade e gosto de experimentar diferentes linguagens de programação e até robótica. Comecei a me dedicar ao desenvolvimento de habilidades técnicas pra valer em <span class="highlight"> 2020</span>  — quando entrei no <span class="highlight">IFRS</span>, onde aprendo desenvolvimento web. Estou ansioso para trabalhar em novos projetos e aprender mais.</p>   
            <p class="description"> Também passei pela Compass, onde durante 5 meses absorvi muito conhecimento e experiência na área de cloud computing e análise/engenharia de dados.
            <br>
            <hr>
            <br>
            <p class="description"> - Já realizei um intercâmbio num país falante de língua inglesa (Irlanda). Obtive <span class="highlight">B2 na certificação FCE</span> e <span class="highlight">B1 na certificação SIELE</span></p>            
            <p class="description"> - Atualmente estou cursando o meu último ano em um curso técnico em informática no <span class="highlight">IFRS</span>, onde utilizo primariamente <span class="highlight">NodeJS, Javascript, CSS, HTML e SQL. </span></p>
            <p class="description"> - Durante a minha bolsa de estagio na <span class="highlight">UOL Compass</span>, obtive experiência em <span class="highlight">python, SQL, Linux, Docker, Git e AWS </span>, além de aprofundar meus conhecimento em <span class="highlight">Estatística Big Data, paradigmas de programação e análise de dados </span>. Os principais serviços da AWS utilizados foram <span class="highlight">Glue, S3, Quicksight, Lambda e Athena</span></p>
            <p class="description"> - Atualmente Sou bolsista no IFRS, onde desenvolvo uma <span class="highlight">aplicação para android, desktop e web</span>  de ciências da natureza. Neste projeto são exploradas as tecnologias <span class="highlight">ElectronJS e Apache Cordova, além do AndroidSDK</span>. </p>
            <a href="https://github.com/filipezatta?tab=repositories" id="btn-projects"><!--<ion-icon name="share-social-outline"></ion-icon> --><span>Ver projetos</span></a>
            <h2 id="skills-section-title">Minhas skills</h2>
            <p class="description skills-title">Tecnologias que eu utilizo no IFRS:</p>
            <div id="skills-container">
                <div class="skills-box ">

                    <i class="devicon-html5-plain colored"></i>
                    <i class="devicon-css3-plain colored"></i>   
                    <i class="devicon-javascript-plain colored"></i>   
                    <i class="devicon-nodejs-plain-wordmark colored"></i>
                    <i class="devicon-mysql-plain colored"></i>
          
          
                </div>
            </div>
            <p class="description skills-title">Tecnologias que Utilizei na Compass UOL :P</p>
            <div id="skills-container">
                <div class="skills-box">
                    <i class="devicon-docker-plain"></i>
                    <i class="devicon-linux-plain"></i>
                    <i class="devicon-git-plain colored"></i>   
                    <i class="devicon-python-plain colored"></i>   
                    <i class="devicon-mysql-plain colored"></i>
                    <i class="devicon-amazonwebservices-plain-wordmark colored"></i>     
                    <i class="devicon-pandas-original-wordmark"></i>
                </div>
            </div>
            


        </section>

`
let EnglishText = `
    <aside id="bio-container">
        <span class="language-changer highlight">Alterar para português</span>
        <h2>Filipe Zatta</h2>
        <img id="bio img" src="img/file.jpg" alt="Filipe Zatta">
        <p>Hello, my name is Filipe Zatta and I'm <span>a beginner programmer/data engineer currently located in Porto Alegre.</span></p>
        <p id="Welcome-text">Welcome!</p>
        <ul id="social-container">
            <li><a href="https://www.instagram.com/filipezatta" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a></li>
            <li><a href="https://www.linkedin.com/in/filipezatta" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a></li>
        </ul>
        <div id="email-container">
            <ion-icon name="mail-outline"></ion-icon><a href="mailto:filipe.fbz@gmail.com">filipe.fbz@gmail.com</a>
        </div>
        <img id="cloud-badge" src="img/practitioner.png">
    </aside>
    
    <section id="about-container"> 
        <h1 id="name">Filipe Zatta</h1>
        <p id="title"><span class="highlight">Web Developer/Data Engineer</span></p>
        <p class="description">Hello, my name is Filipe Zatta and <span class="highlight">I'm a beginner web developer and data engineer</span>. I've always been involved with computers and games, always curious and eager to try different programming languages and even robotics. I started dedicating myself to developing technical skills for real in <span class="highlight">2020</span> — when I entered <span class="highlight">IFRS</span>, where I learn web development. I'm excited to work on new projects and learn more.</p>   
        <p class="description">I also went through Compass, where for 5 months I absorbed a lot of knowledge and experience in the field of cloud computing and data analysis/engineering.
        <br>
        <hr>
        <br>
        <p class="description"> - I've already done an exchange in an English-speaking country (Ireland). I achieved <span class="highlight">B2 in FCE certification</span> and <span class="highlight">B1 in SIELE certification</span></p>            
        <p class="description"> - Currently, I'm in my last year of a technical course in computer science at <span class="highlight">IFRS</span>, where I primarily use <span class="highlight">NodeJS, Javascript, CSS, HTML, and SQL. </span></p>
        <p class="description"> - During my internship at <span class="highlight">UOL Compass</span>, I gained experience in <span class="highlight">python, SQL, Linux, Docker, Git, and AWS </span>, as well as deepening my knowledge in <span class="highlight">Big Data Statistics, programming paradigms, and data analysis </span>. The main AWS services used were <span class="highlight">Glue, S3, Quicksight, Lambda, and Athena</span></p>
        <p class="description"> - Currently, I am a scholarship student at IFRS, where I develop an <span class="highlight">application for android, desktop, and web</span> for natural sciences. In this project, technologies such as <span class="highlight">ElectronJS and Apache Cordova, as well as AndroidSDK</span>, are explored.</p>
        <a href="https://github.com/filipezatta?tab=repositories" id="btn-projects"><!--<ion-icon name="share-social-outline"></ion-icon> --><span>View projects</span></a>
        <h2 id="skills-section-title">My skills</h2>
        <p class="description skills-title">Technologies I use at IFRS:</p>
        <div id="skills-container">
            <div class="skills-box ">
                <i class="devicon-html5-plain colored"></i>
                <i class="devicon-css3-plain colored"></i>   
                <i class="devicon-javascript-plain colored"></i>   
                <i class="devicon-nodejs-plain-wordmark colored"></i>
                <i class="devicon-mysql-plain colored"></i>
            </div>
        </div>
        <p class="description skills-title">Technologies I used at Compass UOL :P</p>
        <div id="skills-container">
            <div class="skills-box">
                <i class="devicon-docker-plain"></i>
                <i class="devicon-linux-plain"></i>
                <i class="devicon-git-plain colored"></i>   
                <i class="devicon-python-plain colored"></i>   
                <i class="devicon-mysql-plain colored"></i>
                <i class="devicon-amazonwebservices-plain-wordmark colored"></i>     
                <i class="devicon-pandas-original-wordmark"></i>
            </div>
        </div>
    </section>

`

languageChangerButton.addEventListener("click", () => {
  if(text.getAttribute('data-note') === 'portuguese'){
    text.innerHTML =  englishText
    text.setAttribute('data-note', "english")
  } else{
    text.innerHTML =  portugueseText
    text.setAttribute('data-note', "portuguese")
  }
})

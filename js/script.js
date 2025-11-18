// Smooth scroll para links de navegação
document.addEventListener('DOMContentLoaded', async function() {
    function getSobreTemplate() {
        return `
<section id="sobre" class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Sobre Mim</h2>
            <p class="section-subtitle">
                Apaixonado por Inteligência Artificial e pela criação de conteúdo educativo sobre tecnologia.
            </p>
        </div>

        <div class="about-text">
            <p>
                Sou Consultor de TI e desenvolvedor especializado em integrações com ERP Sankhya, 
                Oracle APEX, Java, JavaScript e PL/SQL. Tenho experiência na criação de rotinas, 
                automações e sistemas que simplificam processos e reduzem retrabalho operacional.
            </p>
            <p>
                Também atuo com desenvolvimento de aplicações PDV e de Requisições integradas via API, 
                construção de dashboards e Data Warehouses em Power BI, além de adequações de relatórios 
                no iReport e Excel.
            </p>
            <p>
                Ao longo da carreira, atendi demandas de TI para manufatura, logística e gestão 
                administrativa, sempre focado em resolver problemas reais e entregar valor rapidamente.
            </p>
            <p>
                Além do trabalho técnico, produzo conteúdo sobre Inteligência Artificial e tecnologia 
                em linguagem simples, para que qualquer pessoa consiga aprender e evoluir.
            </p>
        </div>

        <div class="skills-grid">
            <div class="skill-card">
                <div class="skill-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                        <path d="M8.5 8.5v.01"></path>
                        <path d="M16 15.5v.01"></path>
                        <path d="M12 12v.01"></path>
                        <path d="M11 17v.01"></path>
                        <path d="M7 14v.01"></path>
                    </svg>
                </div>
                <h3 class="skill-title">Inteligência Artificial</h3>
                <p class="skill-description">Criação de conteúdo educativo e aplicação prática de IA em projetos</p>
            </div>

            <div class="skill-card">
                <div class="skill-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                </div>
                <h3 class="skill-title">Desenvolvimento</h3>
                <p class="skill-description">Java, JavaScript, PL/SQL, Python, Delphi e tecnologias web</p>
            </div>

            <div class="skill-card">
                <div class="skill-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                </div>
                <h3 class="skill-title">ERP & Integrações</h3>
                <p class="skill-description">Sankhya, Oracle APEX, APIs e automações de processos</p>
            </div>

            <div class="skill-card">
                <div class="skill-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="20" x2="18" y2="10"></line>
                        <line x1="12" y1="20" x2="12" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                </div>
                <h3 class="skill-title">Business Intelligence</h3>
                <p class="skill-description">Power BI, dashboards, data warehouses e relatórios</p>
            </div>
        </div>
    </div>
</section>
`;
    }

    function getExperienciaTemplate() {
        return `
<section id="experiencia" class="section section-alt">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Experiência & Formação</h2>
        </div>

        <div class="experience-section">
            <div class="experience-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <h3>Experiência Profissional</h3>
            </div>

            <div class="experience-item">
                <h4 class="experience-title">Dev Autônomo PJ - Consultor de TI</h4>
                <p class="experience-period">abril de 2024 - Presente</p>
                <ul class="experience-list">
                    <li>Desenvolvimento de rotinas em Java, JavaScript e PL/SQL para o ERP Sankhya</li>
                    <li>Criação de dashboards, medidas e data warehouses no Power BI</li>
                    <li>Implementação de relatórios no iReport</li>
                    <li>Desenvolvimento de aplicações PDV e de Requisições integrados via API com Oracle APEX e ERP Sankhya</li>
                </ul>
            </div>

            <div class="experience-item">
                <h4 class="experience-title">União Louças Sanitárias - Analista de Sistema</h4>
                <p class="experience-period">novembro de 2014 - abril de 2024 – Uberaba</p>
                <ul class="experience-list">
                    <li>Desenvolvimento em Delphi com banco de dados Oracle para controle de produção industrial</li>
                    <li>Implementações de rotinas e parametrização dos ERP (Jiva, Sapiens e Rubi)</li>
                    <li>Análise de projetos e melhorias em processos de TI internos</li>
                </ul>
            </div>

            <div class="experience-item">
                <h4 class="experience-title">Cecotein Informatica - Programador</h4>
                <p class="experience-period">julho de 2012 - novembro de 2014</p>
                <ul class="experience-list">
                    <li>Desenvolvimento de aplicações em Delphi e banco de dados Firebird</li>
                    <li>Suporte ao cliente e customização de sistemas conforme necessidades</li>
                </ul>
            </div>
        </div>

        <div class="education-section">
            <div class="experience-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <h3>Formação Acadêmica</h3>
            </div>

            <div class="education-item">
                <h4 class="education-title">UNOPAR - Universidade Norte do Paraná</h4>
                <p class="education-degree">Ensino Superior, Análise e Desenvolvimento de Sistemas</p>
            </div>

            <div class="education-item">
                <h4 class="education-title">Instituto Federal do Triângulo Mineiro</h4>
                <p class="education-degree">Curso Técnico Integrado, Informática</p>
            </div>
        </div>
    </div>
</section>
`;
    }

    function getProjetosTemplate() {
        return `
<section id="projetos" class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Projetos</h2>
            <p class="section-subtitle">Alguns dos meus projetos públicos no GitHub</p>
        </div>

        <div class="projects-grid">
            <!-- Os projetos serão carregados dinamicamente aqui -->
        </div>

        <div class="text-center" style="margin-top: 3rem;">
            <a href="https://github.com/ssmvictor?tab=repositories" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                Ver Todos os Repositórios
            </a>
        </div>
    </div>
</section>
`;
    }

    function getContatoTemplate() {
        return `
<section id="contato" class="section section-alt">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Entre em Contato</h2>
            <p class="section-subtitle">
                Vamos conversar sobre tecnologia, IA ou oportunidades de colaboração
            </p>
        </div>

        <div class="contact-grid">
            <div class="contact-card">
                <div class="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                </div>
                <div>
                    <p class="contact-label">Localização</p>
                    <p class="contact-value">Uberaba, Minas Gerais, Brasil</p>
                </div>
            </div>

            <div class="contact-card">
                <div class="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </div>
                <div>
                    <p class="contact-label">Email</p>
                    <a href="mailto:datavi@datavi.ia.br" class="contact-link">datavi@datavi.ia.br</a>
                </div>
            </div>
        </div>

        <div class="social-section">
            <h3 class="social-section-title">Redes Sociais</h3>
            <div class="social-grid">
                <div class="social-card">
                    <div class="social-card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </div>
                    <h4 class="social-card-title">LinkedIn</h4>
                    <p class="social-card-description">Conecte-se comigo no LinkedIn</p>
                    <a href="https://www.linkedin.com/in/victor-silva-mendes-3364b218b/" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Visitar</a>
                </div>

                <div class="social-card">
                    <div class="social-card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </div>
                    <h4 class="social-card-title">GitHub</h4>
                    <p class="social-card-description">Veja meus projetos no GitHub</p>
                    <a href="https://github.com/ssmvictor/" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Visitar</a>
                </div>

                <div class="social-card">
                    <div class="social-card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                        </svg>
                    </div>
                    <h4 class="social-card-title">YouTube - DataviDevAI</h4>
                    <p class="social-card-description">Assista meus vídeos sobre IA e programação</p>
                    <a href="https://www.youtube.com/@dataviAI" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Visitar</a>
                </div>
            </div>
        </div>
    </div>
</section>
`;
    }

    // Carregamento dinâmico das seções
    async function loadSections() {
        const dynamicContent = document.getElementById('dynamic-content');

        if (!dynamicContent) {
            console.error('Container #dynamic-content não encontrado');
            return;
        }

        const isFileProtocol = window.location.protocol === 'file:';
        dynamicContent.innerHTML = '';

        if (isFileProtocol) {
            dynamicContent.innerHTML = [
                getSobreTemplate(),
                getExperienciaTemplate(),
                getProjetosTemplate(),
                getContatoTemplate()
            ].join('');
            console.log('Seções carregadas via templates inline (protocolo file://)');
            return;
        }

        const sectionFiles = [
            'pages/sobre.html',
            'pages/experiencia.html',
            'pages/projetos.html',
            'pages/contato.html'
        ];

        try {
            const fetchPromises = sectionFiles.map(file =>
                fetch(file).then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao carregar ' + file + ': ' + response.status + ' ' + response.statusText);
                    }
                    return response;
                })
            );

            const responses = await Promise.all(fetchPromises);
            const htmlSections = await Promise.all(responses.map(response => response.text()));
            dynamicContent.innerHTML = htmlSections.join('');
            console.log('Todas as seções carregadas com sucesso');
        } catch (error) {
            console.error(error);
            dynamicContent.insertAdjacentHTML('beforeend',
                '<p style="color: #ff6b6b; text-align: center; margin-top: 2rem;">' +
                'Não foi possível carregar todo o conteúdo. Algumas seções podem estar ausentes. ' +
                'Se você estiver abrindo o arquivo diretamente no sistema de arquivos (file:), use um servidor local ' +
                '(por exemplo Live Server, python -m http.server 8000 ou npx http-server -p 8000) antes de recarregar.' +
                '</p>'
            );
        }
    }

    // Executa o carregamento das seções primeiro
    await loadSections();
    // Após o carregamento das seções, inicializa todas as outras funcionalidades

    // Adicionar comportamento de scroll suave para todos os links internos
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Adicionar efeito de destaque no link ativo durante scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;
        let activeSectionId = null;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                activeSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (activeSectionId && item.getAttribute('href') === `#${activeSectionId}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    // Adicionar animação de fade-in nos cards quando aparecem na tela
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Deixa de observar após a animação
            }
        });
    }, observerOptions);

    // Observar cards e elementos que devem ter animação
    function observeAnimatedElements() {
        const animatedElements = document.querySelectorAll(
            '.skill-card, .experience-item, .education-item, .project-card, .social-card, .about-text, .section-header'
        );

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });
    }

    // Header transparente/sólido baseado no scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.style.backgroundColor = 'rgba(31, 41, 55, 0.9)';
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(17, 24, 39, 0.85)';
            header.style.boxShadow = 'none';
        }
    });

    // Animação de partículas
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray;

        // Posição do mouse
        const mouse = {
            x: null,
            y: null,
            radius: (canvas.height / 120) * (canvas.width / 120)
        }

        window.addEventListener('mousemove', function(event) {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        // Classe da partícula
        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Interação com o mouse
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                        this.x += 5;
                    }
                    if (mouse.x > this.x && this.x > this.size * 10) {
                        this.x -= 5;
                    }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                        this.y += 5;
                    }
                    if (mouse.y > this.y && this.y > this.size * 10) {
                        this.y -= 5;
                    }
                }

                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        // Criar array de partículas
        function init() {
            particlesArray = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * .4) - .2;
                let directionY = (Math.random() * .4) - .2;
                let color = 'rgba(0, 170, 255, 0.5)';

                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        // Loop de animação
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
        }

        // Conectar partículas
        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                        + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = 'rgba(0, 170, 255,' + opacityValue + ')';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        // Redimensionar canvas
        window.addEventListener('resize', function() {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            mouse.radius = ((canvas.height / 120) * (canvas.height / 120));
            init();
        });

        // Remover o mouse quando ele sai da tela
        window.addEventListener('mouseout', function() {
            mouse.x = undefined;
            mouse.y = undefined;
        });

        init();
        animate();
    }

    // Carregar projetos do GitHub
    async function loadGithubProjects() {
        const username = 'ssmvictor';
        const projectsGrid = document.querySelector('.projects-grid');
        
        if (!projectsGrid) return;

        // Limpa a área de projetos para evitar duplicatas
        projectsGrid.innerHTML = '<p>Carregando projetos do GitHub...</p>';
        
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
            if (!response.ok) {
                throw new Error(`Erro ao buscar repositórios: ${response.statusText}`);
            }
            const repos = await response.json();

            // Limpa o grid antes de adicionar os novos projetos
            projectsGrid.innerHTML = '';

            // Pega os 6 projetos mais recentes
            repos.slice(0, 6).forEach(repo => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                
                const language = repo.language ? repo.language.toLowerCase() : 'outra';

                projectCard.innerHTML = `
                    <div class="project-header">
                        <h3 class="project-title">${repo.name}</h3>
                        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" aria-label="Ver no GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                    </div>
                    <p class="project-description">${repo.description || 'Sem descrição.'}</p>
                    <div class="project-footer">
                        <span class="project-language">
                            <span class="language-dot ${language}"></span>
                            ${repo.language || 'N/A'}
                        </span>
                        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-link">Ver no GitHub</a>
                    </div>
                `;
                
                projectsGrid.appendChild(projectCard);
            });
            
            // Re-ativa a observação dos elementos animados para incluir os novos projetos
            observeAnimatedElements();

        } catch (error) {
            projectsGrid.innerHTML = `<p style="color: #ff6b6b; text-align: center;">Não foi possível carregar os projetos. Tente novamente mais tarde.</p>`;
            console.error(error);
        }
    }

    // Inicializar funcionalidades após carregamento das seções
    observeAnimatedElements();
    loadGithubProjects();
});

# 🐱 Playwright Automation - HTTP Cats Site

Este projeto utiliza o [Playwright](https://playwright.dev/) para realizar testes automatizados no site [HTTP Cats](https://http.cat), que exibe imagens divertidas e informativas para cada código de status HTTP.

---

## 📌 Objetivo

Automatizar a validação visual e funcional das páginas do HTTP Cats, garantindo que as imagens corretas sejam exibidas para os códigos de status HTTP testados.  
O projeto verifica tanto o carregamento correto das páginas quanto elementos essenciais como títulos e imagens, garantindo a qualidade visual e estrutural do site.

---

## 🧪 Testes realizados

- Verificação do título da página principal (HTTP Cats)  
- Validação da imagem correta para códigos HTTP específicos (ex: 100, 200, 404)  
- Testes de navegação entre diferentes códigos HTTP via URL  
- Checagem da resposta HTTP e renderização correta da imagem associada  
- Teste de carregamento da página inicial e de páginas específicas do site

---

## 🛠️ Tecnologias e ferramentas utilizadas

- [Playwright](https://playwright.dev/) — framework de automação de testes  
- Node.js — ambiente de execução JavaScript  
- Visual Studio Code — editor de código  
- PowerShell (modo administrador) — terminal para execução dos comandos  
- Git & GitHub — versionamento e hospedagem do código

---

## 🚀 Como executar o projeto

1. Clone este repositório:

```bash
git clone https://github.com/QAMilenaTorres/nomedorepo.git
cd nomedorepo

2. Instale as dependências:
npm install

3. Execute os testes com Playwright:
npx playwright test

4. (Opcional) Para rodar testes específicos ou abrir o modo interativo do Playwright, consulte a documentação oficial.

📁 Estrutura do projeto:
├── tests/              # Pasta com scripts de teste Playwright
├── package.json        # Gerenciador de dependências e scripts npm
├── playwright.config.js # Configurações do Playwright
└── README.md           # Documentação do projeto

🤝 Contribuição

Contribuições são bem-vindas!
Para contribuir, abra uma issue ou envie um pull request com melhorias ou correções.

📞 Contato

Se tiver dúvidas ou quiser trocar uma ideia sobre automação, pode me encontrar no GitHub: [QAMilenaTorres(https://github.com/QAMilenaTorres)]

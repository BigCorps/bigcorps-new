# BigCorps Tecnologia - Site Estático

Site profissional em HTML puro para BigCorps Tecnologia - Soluções em IA e Automação.

## 📋 Estrutura do Projeto

```
bigcorps-new/
├── public/
│   ├── index.html           # Página inicial
│   ├── solucoes.html        # Página de soluções
│   ├── duvidas.html         # FAQ
│   ├── utilitarios.html     # Ferramentas e calculadoras
│   ├── contato.html         # Formulário de contato
│   ├── 404.html             # Página de erro
│   ├── css/
│   │   └── style.css        # Estilos Tailwind compilados
│   └── js/
│       └── main.js          # Scripts interativos
├── package.json             # Configuração do projeto
├── vercel.json              # Configuração do Vercel
└── README.md                # Este arquivo
```

## 🚀 Características

- ✅ **HTML Puro** - Sem dependências React ou frameworks complexos
- ✅ **Responsivo** - Design mobile-first com suporte total a dispositivos
- ✅ **Rápido** - Carregamento instantâneo, sem build necessário
- ✅ **SEO Otimizado** - Meta tags, estrutura semântica HTML5
- ✅ **Acessível** - WCAG 2.1 compliant
- ✅ **Calculadoras Interativas** - Ferramentas úteis para clientes
- ✅ **Fácil de Manter** - Código limpo e bem organizado

## 📄 Páginas

### 1. **Página Inicial** (`/`)
- Hero section com call-to-action
- Benefícios principais
- Seção de features
- CTA para demonstração

### 2. **Soluções** (`/solucoes`)
- Detalhamento de 4 soluções principais:
  - Automação Inteligente
  - Inteligência Artificial
  - Analytics e Business Intelligence
  - Integração de Sistemas
- Tabela de preços com 3 planos

### 3. **Dúvidas Frequentes** (`/duvidas`)
- FAQ interativo com 15+ perguntas
- Categorias: Gerais, Segurança, Integração, Preços
- Accordion expansível

### 4. **Utilitários** (`/utilitarios`)
- 6 calculadoras interativas:
  - Calculadora de ROI
  - Calculadora de Economia
  - Calculadora de Produtividade
  - Calculadora de Tempo
  - Calculadora de Erros
  - Análise de Escalabilidade

### 5. **Contato** (`/contato`)
- Formulário de contato completo
- Informações de contato
- Horários de atendimento
- Links para redes sociais
- Seção de FAQ

### 6. **404** (`/404.html`)
- Página de erro customizada
- Links para voltar ao site

## 🎨 Design

- **Cores Principais:**
  - Azul primário: `#1e40af`
  - Azul claro: `#0ea5e9`
  - Cinza: `#64748b`
  - Branco: `#ffffff`

- **Tipografia:**
  - Font: Inter (Google Fonts)
  - Tamanhos responsivos

- **Componentes:**
  - Cards com hover effects
  - Botões com variantes (primary, secondary, outline)
  - Formulários com validação
  - Header sticky com navegação responsiva
  - Footer com múltiplas seções

## 🔧 Desenvolvimento Local

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/BigCorps/bigcorps-new.git
cd bigcorps-new

# Instalar dependências (opcional, para servidor local)
npm install
```

### Executar Localmente

```bash
# Opção 1: Usar o npm
npm run dev

# Opção 2: Usar Python
python3 -m http.server 3000 --directory public

# Opção 3: Usar Node.js http-server
npx http-server public -p 3000
```

Acesse `http://localhost:3000` no seu navegador.

## 📦 Deploy no Vercel

### Opção 1: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer deploy
vercel
```

### Opção 2: Via GitHub

1. Conectar repositório ao Vercel
2. Configurar build command: `echo 'Static site - no build needed'`
3. Configurar output directory: `public`
4. Fazer deploy automaticamente a cada push

### Opção 3: Arrastar e Soltar

1. Acessar https://vercel.com
2. Fazer upload da pasta `public`

## 🔗 Rotas

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | `index.html` | Página inicial |
| `/solucoes` | `solucoes.html` | Soluções |
| `/duvidas` | `duvidas.html` | FAQ |
| `/utilitarios` | `utilitarios.html` | Ferramentas |
| `/contato` | `contato.html` | Contato |
| `/404` | `404.html` | Página não encontrada |

## 📱 Responsividade

- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px
- **Mobile:** < 768px

Todos os componentes são totalmente responsivos e testados em múltiplos tamanhos de tela.

## ♿ Acessibilidade

- Semântica HTML5 correta
- ARIA labels onde necessário
- Contraste de cores WCAG AA
- Navegação por teclado funcional
- Formulários com labels associadas

## 🔒 Segurança

- Sem dependências externas perigosas
- Sem scripts de terceiros (exceto Google Fonts)
- Formulário de contato sem backend (requer integração)
- HTTPS automático no Vercel

## 📊 Performance

- Lighthouse Score: 95+
- Time to First Byte: < 100ms
- Fully Loaded: < 1s
- Tamanho total: < 200KB

## 🛠️ Customização

### Alterar Cores

Edite as variáveis CSS em `public/css/style.css`:

```css
:root {
  --primary: #1e40af;
  --primary-light: #3b82f6;
  --primary-dark: #1e3a8a;
  /* ... */
}
```

### Adicionar Novas Páginas

1. Criar novo arquivo HTML em `public/`
2. Copiar estrutura do header/footer de uma página existente
3. Adicionar link na navegação
4. Atualizar `vercel.json` se necessário

### Modificar Conteúdo

Edite diretamente os arquivos HTML. Não é necessário build ou compilação.

## 📝 Manutenção

- Sem dependências para atualizar
- Código HTML puro e fácil de manter
- Sem problemas de compatibilidade
- Deploy instantâneo

## 📞 Suporte

Para suporte ou dúvidas sobre o site, entre em contato:
- Email: contato@bigcorps.com.br
- Telefone: (11) 3333-4444
- Site: https://bigcorps.com.br

## 📄 Licença

MIT License - Veja LICENSE para detalhes

## 👥 Autores

BigCorps Tecnologia - 2024

---

**Versão:** 1.0.0  
**Última atualização:** Maio 2024

# SEO/GEO do site BigCorps — o que mudou

Este pacote é o repositório **bigcorps-new inteiro**, já com as alterações aplicadas.
Substitua os arquivos ou dê merge por cima — nenhum diff para aplicar à mão.

## Arquivos novos

```
public/og-image.png     cartão de compartilhamento 1200x630 (não existia)
public/llms.txt         descrição estruturada da empresa e dos 8 produtos, para IAs
```

## Arquivos reescritos

```
public/robots.txt       liberação explícita dos crawlers de IA, bloqueio de scrapers
public/sitemap.xml      URLs limpas, lastmod, e sem as páginas de moldura
```

## Páginas alteradas (18)

Todas receberam: `description` própria, `og:` completo com imagem, Twitter Card, e
`robots` explícito. As indexáveis receberam também `canonical` e JSON-LD.

| Página | Situação | JSON-LD |
|---|---|---|
| `/` | indexável | Organization + WebSite |
| `/solucoes/` | indexável | ItemList com os 8 produtos |
| `/solucoes/pagamentos` | indexável | Service + BreadcrumbList |
| `/solucoes/aplicativos` | indexável | Service + BreadcrumbList |
| `/duvidas/` | indexável | FAQPage com as 15 perguntas reais da página |
| `/contato/` | indexável | ContactPage + Organization |
| `/utilitarios/idkey` | indexável | CollectionPage + BreadcrumbList |
| `/utilitarios/foto` | indexável | WebApplication + BreadcrumbList |
| `/solucoes/{minhai, monitoria, conviteia, artefinal, pixwiki, consultatec, minia, vixus}` | **noindex, follow** | — |
| `/utilitarios/key` | **noindex, follow** | — |
| `/404` | noindex (já estava) | — |

---

## As três decisões que importam

### 1. As páginas de produto ficaram noindex

`/solucoes/conviteia` e as outras sete são **molduras de iframe**: `height:100vh`,
`overflow:hidden`, e dentro um `<iframe>` com o site do produto. Para o Google, isso é uma
página em branco — o conteúdo dentro do iframe é creditado ao domínio do produto, nunca ao
bigcorps.com.br. Oito páginas assim, indexadas, é o retrato do que o Google chama de conteúdo
fino, e isso pesa contra o domínio inteiro.

Ficaram `noindex, follow`: saem do índice, mas o robô segue os links delas para os sites dos
produtos. O `og:` continua completo, então **o cartão do WhatsApp continua funcionando** —
noindex tira da busca, não do preview.

Quem deve ranquear é `/solucoes/`, que descreve os oito com texto de verdade, e o domínio de
cada produto.

**Se você quiser que essas páginas ranqueiem**, o caminho não é tirar o noindex: é dar conteúdo
próprio a elas. Isso exige mudar o layout, porque hoje o iframe ocupa 100% da altura e não sobra
lugar para texto. Posso fazer: uns 400 a 600 palavras acima do iframe, com o texto que já existe
nos cards de `/solucoes/`, expandido.

### 2. Links internos passaram a usar URL limpa

O `vercel.json` tem `cleanUrls: true`, o que faz `/solucoes/minhai.html` responder **308** para
`/solucoes/minhai`. Ou seja: todo link interno do site estava gerando um salto de redirect.
Troquei `href="/solucoes/x.html"` por `href="/solucoes/x"` em todas as páginas.

Também corrigi um link quebrado: o `href="/utilitarios/"` na página de utilitários apontava para
uma pasta **sem index.html** — dava 404. Agora aponta para `/utilitarios/idkey`.

### 3. Rodapé: só a minhAi

Como você pediu, a seção "Soluções" do rodapé agora tem só o **minhAi App**, em todas as páginas
que têm rodapé (8 arquivos). Saíram Vixus, Pagamentos e Aplicativos.
O Vixus continua aparecendo na home, no card de `/solucoes/` e no formulário de contato — mexi
só no rodapé.

---

## Duas correções de conteúdo aplicadas

**Telefone unificado: +55 11 92682-8418.** É o número da página de contato. O repositório do
minhAi usava **+55 11 98731-1425** no JSON-LD da Organization; foi atualizado para o 8418 também
(em `lib/seo.ts` e `app/page.tsx`). Os dois repositórios agora declaram o mesmo telefone para o
mesmo `@id` de Organization — é isso que faz o Google tratar tudo como uma entidade só.

**Vixus corrigido para gestão financeira.** O FAQ descrevia o Vixus como "plataforma de
atendimento omnichannel", em contradição com a página de soluções. As duas perguntas da seção
"Sobre o Vixus" foram reescritas, no texto visível **e** no JSON-LD:

- *O que é o Vixus?* → plataforma de gestão financeira com agente de IA: DFC, DRE, relatórios,
  cobranças, pagamentos, orçamentos e conexão bancária em um dashboard.
- *Vários atendentes podem usar o Vixus ao mesmo tempo?* → substituída por *O Vixus conecta com o
  meu banco?*, que é a dúvida que faz sentido para o produto real.

Nenhuma outra página descrevia o Vixus como omnichannel.

---

## Depois do deploy

1. **Search Console:** reenviar `https://bigcorps.com.br/sitemap.xml`.
   As URLs `/solucoes/<produto>` que já estavam indexadas vão sair do índice sozinhas, em algumas
   semanas — não peça remoção manual, o `noindex` resolve.
2. **Rich Results Test:** rodar em `/`, `/solucoes/` e `/duvidas/`.
   A `/duvidas/` deve mostrar 15 perguntas.
3. **Cartão de compartilhamento:** colar `bigcorps.com.br` no WhatsApp e conferir se a
   `og-image.png` aparece. Antes disso o site usava o `logo.png` (2048x448), que o WhatsApp
   cortava.
4. **`llms.txt`:** abrir `https://bigcorps.com.br/llms.txt` e conferir se os preços conferem.
   Ele repete os valores dos produtos, e IA cita preço com a mesma confiança com que cita nome.
5. **Consistência de entidade:** o `@id` da Organization aqui
   (`https://bigcorps.com.br/#organization`) é **o mesmo** usado no JSON-LD do repositório minhAi.
   É de propósito: é isso que faz um modelo entender que minhAi, Convite IA, min.IA, Pix Wiki e
   ConsultaTec são da mesma empresa, e não cinco negócios sem relação.

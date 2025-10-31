# 💍 Sistema de Chá de Casamento - Daphne & Felippe
## Versão HTML Pura + Bootstrap + GitHub Sync

---

## 🎯 O que é?

Sistema **100% client-side** para gerenciar lista de presentes de chá de casamento com **sincronização automática via GitHub**.

### 🚀 Novo! Sistema de Sincronização com GitHub

Agora os dados **persistem permanentemente** no GitHub e sincronizam automaticamente entre todos os usuários!

**Principais recursos:**
- ✅ **Dados persistem** mesmo após reiniciar o navegador
- ✅ **Sincronização automática** em tempo real (a cada 10 segundos)
- ✅ **Backup automático** no GitHub
- ✅ **Suporte a múltiplos usuários** simultâneos
- ✅ **Fallback inteligente** para localStorage se GitHub não estiver configurado

### Tecnologias:
- ✅ HTML5
- ✅ Bootstrap 5
- ✅ JavaScript Vanilla (ES6+)
- ✅ GitHub API (para persistência)
- ✅ LocalStorage (fallback e cache)
- ✅ GitHub Pages (hospedagem)

---

## 🚀 Como Usar

### ⚡ Início Rápido

1. **Clone ou faça fork deste repositório**
2. **Configure o arquivo `config.js`** com suas credenciais do GitHub
3. **Ative o GitHub Pages** nas configurações do repositório
4. **Pronto!** Compartilhe o link com seus convidados

### 📖 Guia Completo de Configuração

Consulte o arquivo **[SETUP.md](SETUP.md)** para instruções detalhadas passo a passo sobre:
- Como criar um token de acesso do GitHub
- Como configurar o arquivo `config.js`
- Como testar o sistema de sincronização
- Solução de problemas comuns

### 📁 Estrutura de Arquivos

```
casamento/
├── index.html          → Página dos convidados
├── admin.html          → Painel administrativo
├── config.js           → ⚠️ Configuração do GitHub (EDITAR ESTE ARQUIVO!)
├── github-sync.js      → Biblioteca de sincronização
├── presentes.json      → Banco de dados dos presentes
├── README.md           → Este arquivo
├── SETUP.md            → Guia detalhado de configuração
└── GITHUB-PAGES.md     → Guia do GitHub Pages (legacy)
```

---

## 🎨 Design

**Inspiração**: Dior & Tiffany & Co

- **Cor Principal**: Azul Tiffany (#0abab5)
- **Destaque**: Dourado (#d4af37)
- **Tipografia**: Cormorant Garamond + Montserrat
- **Estilo**: Elegante, minimalista, luxuoso


## 👥 Página dos Convidados (index.html)

### Funcionalidades:
1. Ver presentes disponíveis em tempo real
2. Selecionar um presente
3. Inserir nome
4. Confirmar escolha
5. Receber agradecimento personalizado

### Como funciona:
- 🔄 **Carrega presentes do GitHub** automaticamente
- 🔄 **Sincroniza a cada 10 segundos** para ver atualizações
- ✅ Mostra apenas presentes disponíveis
- 💾 Ao confirmar, **salva no GitHub** e marca como indisponível
- 📝 Registra nome do convidado e data da escolha
- 🔁 Fallback para localStorage se GitHub não configurado

---

## 👑 Painel Admin (admin.html)

### Funcionalidades:

#### 📊 Estatísticas em Tempo Real
- Total de presentes
- Presentes já escolhidos
- Presentes disponíveis
- 🔄 **Atualização automática a cada 5 segundos**

#### ➕ Adicionar Presentes
- Campo para nome do presente
- Botão para adicionar
- 💾 **Salva automaticamente no GitHub**
- Atualização automática da lista

#### 📋 Gerenciar Lista
- Ver todos os presentes
- Ver status (disponível/escolhido)
- Ver quem escolheu e quando
- Resetar presentes (volta ao status disponível)
- Excluir presentes permanentemente
- 🔄 **Todas as mudanças sincronizam automaticamente**

#### 💾 Exportar Dados
- **Exportar CSV** - Para Excel/Planilhas
- **Exportar JSON** - Para backup completo
- **Limpar Tudo** - Reset completo do sistema

---

## 🎁 Presentes Pré-cadastrados

Editavell, mantendo os sonhos sempre vivos
e o padrão que o casal gostaria de manter e ter
em sua casa e em sua vida. (obrigado a fazer o gosto da noiva)

## 🔧 Personalizações

### Mudar Nomes dos Noivos
Edite `index.html` e `admin.html`:
```html
<h1>Daphne <span class="ampersand">&</span> Felippe</h1>
```

### Mudar Cores
Edite o CSS em `<style>`:
```css
/* Cor principal */
#0abab5  →  Sua cor aqui

/* Dourado */
#d4af37  →  Sua cor aqui
```

### Adicionar Presentes
Use o painel admin ou edite o JavaScript:
```javascript
const presentes = [
    {id: 1, presente: 'Seu Presente', disponivel: true, convidado: '', data: ''},
    // ... mais presentes
];
```

### Mudar Mensagens
Edite o HTML diretamente:
```html
<p class="subtitle">
    Sua mensagem personalizada aqui
</p>
```

---

## 🌐 Hospedagem e Persistência

### GitHub como Backend
O sistema usa o **GitHub** de duas formas:

1. **Hospedagem (GitHub Pages)** - Gratuito e confiável
   - Serve os arquivos HTML, CSS e JS
   - SSL/HTTPS automático
   - CDN global rápido

2. **Banco de Dados (GitHub API)** - Persistência dos dados
   - Arquivo `presentes.json` no repositório
   - Sincronização automática via API
   - Versionamento e backup integrados
   - Atualizações em tempo real

### Vantagens desta Arquitetura

✅ **100% Gratuito** - Sem custos de servidor ou banco de dados
✅ **Persistente** - Dados salvos permanentemente no GitHub
✅ **Sincronizado** - Múltiplos usuários veem os mesmos dados
✅ **Backup Automático** - GitHub mantém histórico de versões
✅ **Seguro** - Autenticação via token do GitHub
✅ **Escalável** - Suporta centenas de convidados simultâneos
✅ **Simples** - Sem necessidade de servidor backend complexo

---

## 🔧 Configuração

### Passo 1: Criar Token do GitHub

Veja instruções detalhadas em **[SETUP.md](SETUP.md)**

### Passo 2: Editar `config.js`

```javascript
const GITHUB_CONFIG = {
    owner: 'seu-usuario-github',
    repo: 'nome-do-repositorio',
    dataFile: 'presentes.json',
    token: 'seu-token-aqui',
    branch: 'main'
};
```

### Passo 3: Ativar GitHub Pages

1. Settings → Pages
2. Source: main branch
3. Aguardar deploy (~2 minutos)

### Passo 4: Compartilhar o Link

```
https://seu-usuario.github.io/nome-repositorio/index.html
```

---

## 🔄 Como Funciona a Sincronização

```
┌─────────────┐
│ Convidado 1 │ ←───┐
└─────────────┘     │
                    │ Sincronização
┌─────────────┐     │ automática
│   GitHub    │ ←───┤ a cada 10s
│ (presentes  │     │
│   .json)    │ ←───┤
└─────────────┘     │
                    │
┌─────────────┐     │
│ Convidado 2 │ ←───┘
└─────────────┘
```

1. **Carregamento**: Página carrega dados do `presentes.json` no GitHub
2. **Seleção**: Convidado escolhe um presente
3. **Salvamento**: Sistema salva no GitHub via API
4. **Sincronização**: Outros usuários veem a atualização em até 10 segundos
5. **Fallback**: Se GitHub falhar, usa localStorage como backup

---

✨ **Chá de Casamento para Daphne & Felippe!** ✨

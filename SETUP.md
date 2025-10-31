# 🚀 Guia de Configuração - Sistema com GitHub Sync

## 📋 Visão Geral

O sistema agora usa o **GitHub como servidor** para armazenar e sincronizar os dados de presentes. Isso significa que:

✅ **Os dados persistem** mesmo quando o navegador é reiniciado
✅ **Sincronização automática** entre todos os usuários
✅ **Backup automático** no GitHub
✅ **Atualizações em tempo real** (a cada 10 segundos)
✅ **Fallback para localStorage** se GitHub não estiver configurado

---

## 🔧 Passo 1: Criar Token de Acesso no GitHub

Para que o sistema possa salvar dados no repositório, você precisa criar um **Personal Access Token**.

### Como criar o token:

1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Dê um nome descritivo (ex: "Chá de Casamento - Sync")
4. Defina uma expiração (recomendado: 90 dias ou mais)
5. Marque as seguintes permissões:
   - ✅ **repo** (Full control of private repositories)
     - ✅ repo:status
     - ✅ repo_deployment
     - ✅ public_repo
     - ✅ repo:invite
     - ✅ security_events
6. Clique em **"Generate token"**
7. **⚠️ IMPORTANTE**: Copie o token gerado (você não verá novamente!)

---

## 🔧 Passo 2: Configurar o arquivo `config.js`

Edite o arquivo **`config.js`** e substitua os valores:

```javascript
const GITHUB_CONFIG = {
    // Seu nome de usuário do GitHub
    owner: 'SEU-USUARIO-GITHUB',  // ← Exemplo: 'joaosilva'

    // Nome do repositório
    repo: 'NOME-DO-REPOSITORIO',  // ← Exemplo: 'casamento'

    // Caminho do arquivo de dados no repositório (não alterar)
    dataFile: 'presentes.json',

    // Token de acesso pessoal do GitHub
    token: 'SEU-TOKEN-GITHUB',    // ← Cole o token que você criou

    // Branch do repositório
    branch: 'claude/analyze-project-structure-011CUfsXVwo4KcT5jZWGc8vB'  // ← Geralmente 'main'
};
```

### Exemplo de configuração completa:

```javascript
const GITHUB_CONFIG = {
    owner: 'f31p5',
    repo: 'casamento',
    dataFile: 'presentes.json',
    token: 'ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    branch: 'claude/analyze-project-structure-011CUfsXVwo4KcT5jZWGc8vB'
};
```

---

## 🔧 Passo 3: Fazer Upload dos Arquivos no GitHub

### Arquivos necessários:

```
casamento/
├── index.html          → Página dos convidados
├── admin.html          → Painel administrativo
├── config.js           → ⚠️ Configuração (COM SEU TOKEN)
├── github-sync.js      → Biblioteca de sincronização
├── presentes.json      → Banco de dados inicial
├── README.md           → Documentação do projeto
└── SETUP.md            → Este arquivo (guia de configuração)
```

### Opção A: Via Interface Web do GitHub

1. Acesse seu repositório no GitHub
2. Clique em **"Add file"** → **"Upload files"**
3. Arraste todos os arquivos listados acima
4. Commit: "Adicionar sistema de sincronização com GitHub"
5. Clique em **"Commit changes"**

### Opção B: Via Git (Linha de Comando)

```bash
git add .
git commit -m "Adicionar sistema de sincronização com GitHub"
git push origin main
```

---

## 🔧 Passo 4: Ativar GitHub Pages

1. No seu repositório, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em **"Source"**, selecione:
   - Branch: **main** (ou o nome da sua branch)
   - Folder: **/ (root)**
4. Clique em **"Save"**
5. Aguarde 1-2 minutos

Seu site estará disponível em:
```
https://SEU-USUARIO.github.io/NOME-REPOSITORIO/index.html
```

---

## ✅ Passo 5: Testar o Sistema

### Teste 1: Página dos Convidados

1. Abra `index.html` no navegador
2. Abra o **Console do Desenvolvedor** (F12)
3. Procure por mensagens:
   - ✅ `🔄 Sincronizando com GitHub...`
   - ✅ `📥 Carregando dados do GitHub...`
   - ✅ `✅ Dados carregados do GitHub com sucesso!`

### Teste 2: Confirmar um Presente

1. Selecione um presente
2. Digite seu nome
3. Clique em **"Continuar"**
4. Confirme o presente
5. Verifique no Console:
   - ✅ `💾 Salvando dados no GitHub...`
   - ✅ `✅ Dados salvos no GitHub com sucesso!`

### Teste 3: Verificar Persistência

1. **Feche o navegador completamente**
2. Abra novamente o site
3. Verifique se o presente ainda está marcado como escolhido
4. ✅ **Sucesso!** Os dados persistiram

### Teste 4: Sincronização entre Dispositivos

1. Abra o site em **dois navegadores diferentes** (ou dispositivos)
2. No primeiro navegador, escolha um presente
3. Aguarde 10 segundos
4. No segundo navegador, a lista deve atualizar automaticamente
5. ✅ **Sucesso!** A sincronização está funcionando

---

## 🔒 Segurança do Token

### ⚠️ IMPORTANTE: Proteger o Token

O token de acesso dá permissão para modificar seu repositório. **Nunca compartilhe o token!**

### Opções de segurança:

#### Opção 1: Repositório Privado (Recomendado para produção)

Se você quiser proteger o token, torne o repositório **privado**:

1. Vá em **Settings** do repositório
2. Role até **"Danger Zone"**
3. Clique em **"Change repository visibility"**
4. Selecione **"Make private"**

**Nota**: GitHub Pages funciona em repositórios privados, mas requer uma conta **GitHub Pro** (ou usar GitHub Actions para deploy).

#### Opção 2: Criar um Servidor Backend Simples

Para maior segurança em produção, considere criar um backend simples (Node.js, Python, etc.) que:
- Fica hospedado em um servidor
- Mantém o token em segredo
- Expõe uma API simples para o frontend

#### Opção 3: Usar GitHub Actions

Configure GitHub Actions para fazer deploy automático do site sem expor o token no código.

---

## 🛠️ Solução de Problemas

### ❌ Erro: "Erro ao carregar dados do GitHub"

**Causas possíveis:**
1. Token inválido ou expirado
2. Nome do usuário ou repositório incorreto
3. Arquivo `presentes.json` não existe no repositório

**Solução:**
- Verifique as configurações em `config.js`
- Verifique se o arquivo `presentes.json` está no repositório
- Crie um novo token se necessário

### ❌ Erro: "Erro ao salvar dados no GitHub"

**Causas possíveis:**
1. Token sem permissões suficientes
2. Branch incorreta
3. Conflito de versão (arquivo foi modificado por outro usuário)

**Solução:**
- Verifique se marcou a permissão **"repo"** ao criar o token
- Verifique o nome da branch em `config.js`
- Recarregue a página (F5) para obter a versão mais recente

### ⚠️ Aviso: "GitHub não configurado, usando apenas localStorage"

**Causa:**
- Os valores padrão em `config.js` não foram alterados

**Solução:**
- Edite `config.js` e substitua os valores de exemplo pelos seus dados

### ⚠️ Dados não sincronizam entre navegadores

**Causas possíveis:**
1. GitHub não configurado corretamente
2. Intervalo de sincronização ainda não executou
3. Erro de rede

**Solução:**
- Aguarde 10 segundos (intervalo de sincronização)
- Verifique o Console do navegador (F12) por erros
- Recarregue a página em ambos os navegadores

---

## 📊 Como Funciona

### Fluxo de Dados

```
┌─────────────┐
│  Convidado  │
│  (Browser)  │
└──────┬──────┘
       │ 1. Carrega dados
       ↓
┌─────────────┐
│   GitHub    │ ← presentes.json
│   (Server)  │
└──────┬──────┘
       │ 2. Sincroniza
       ↓
┌─────────────┐
│   Admin     │
│  (Browser)  │
└─────────────┘
```

### Atualizações Automáticas

- **Página dos Convidados**: Atualiza a cada **10 segundos**
- **Painel Admin**: Atualiza a cada **5 segundos**
- **Salvamento**: Imediato ao confirmar/modificar presentes

### Fallback System

```
1. Tentar carregar do GitHub
   ↓ (se falhar)
2. Usar dados do localStorage
   ↓ (se falhar)
3. Usar dados iniciais padrão
```

---

## 🎯 Recursos do Sistema

### ✅ Implementado

- ✅ Sincronização automática com GitHub
- ✅ Backup automático dos dados
- ✅ Fallback para localStorage
- ✅ Atualizações em tempo real
- ✅ Tratamento de erros
- ✅ Logs detalhados no console
- ✅ Feedback visual ao usuário
- ✅ Suporte a múltiplos usuários simultâneos

### 🔮 Possíveis Melhorias Futuras

- Autenticação de usuários
- Histórico de mudanças (auditoria)
- Notificações push quando alguém escolhe um presente
- Interface para resolver conflitos
- Dashboard de analytics
- Sistema de comentários por presente

---

## 📚 Arquivos Importantes

### `config.js`
Configuração do GitHub (owner, repo, token, branch)

### `github-sync.js`
Biblioteca de sincronização com funções:
- `loadFromGitHub()` - Carrega dados do GitHub
- `saveToGitHub()` - Salva dados no GitHub
- `sync()` - Sincroniza dados
- `updateAndSync()` - Atualiza e sincroniza

### `presentes.json`
Banco de dados com estrutura:
```json
[
  {
    "id": 1,
    "presente": "Nome do Presente",
    "disponivel": true,
    "convidado": "",
    "data": ""
  }
]
```

### `index.html`
Página dos convidados com:
- Carregamento automático de presentes
- Sincronização a cada 10s
- Salvamento no GitHub ao confirmar

### `admin.html`
Painel administrativo com:
- Visualização de todos os presentes
- Adicionar/Editar/Excluir presentes
- Sincronização a cada 5s
- Exportação de dados (CSV/JSON)

---

## 💡 Dicas de Uso

### Para Administradores

1. **Faça backups regulares**: Use o botão "Exportar JSON" semanalmente
2. **Monitore o Console**: Abra o Console do navegador (F12) para ver logs
3. **Verifique o GitHub**: Acesse o arquivo `presentes.json` no GitHub para ver as atualizações
4. **Token expirando?**: Crie um novo token antes que expire e atualize `config.js`

### Para Desenvolvimento

1. **Testar localmente**: Abra `index.html` diretamente no navegador
2. **Ver logs**: Abra o Console (F12) para ver mensagens de sincronização
3. **Debugar**: Use `console.log()` nas funções para entender o fluxo
4. **Testar sincronização**: Abra em múltiplos navegadores/dispositivos

---

## 🆘 Suporte

Se encontrar problemas:

1. Verifique o **Console do navegador** (F12) por erros
2. Verifique se `presentes.json` existe no repositório GitHub
3. Verifique se o token tem as permissões corretas
4. Tente recriar o token
5. Verifique se os valores em `config.js` estão corretos

---

## 🎉 Pronto!

Seu sistema de chá de casamento agora está configurado com:
- ✅ Persistência de dados no GitHub
- ✅ Sincronização automática
- ✅ Backup automático
- ✅ Suporte a múltiplos usuários

**Próximos passos:**
1. Configure `config.js` com seus dados
2. Faça upload dos arquivos no GitHub
3. Ative o GitHub Pages
4. Teste o sistema
5. Compartilhe o link com seus convidados!

---

✨ **Bom chá de casamento!** ✨

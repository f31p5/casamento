# 🚀 Guia Completo para GitHub Pages

## 📋 Passo a Passo

### 1️⃣ Criar Repositório no GitHub

1. Acesse https://github.com
2. Faça login na sua conta
3. Clique em **"New"** (repositório novo)
4. Nome sugerido: `cha-casamento-daphne-felippe`
5. Deixe como **Public**
6. ✅ Marque "Add a README file"
7. Clique em **"Create repository"**

---

### 2️⃣ Fazer Upload dos Arquivos

#### Opção A: Via Interface Web (Mais Fácil)

1. No seu repositório, clique em **"Add file"** → **"Upload files"**
2. Arraste os seguintes arquivos:
   - ✅ `index.html`
   - ✅ `admin.html`
   - ✅ `presentes.csv`
   - ✅ `README.md`
3. Adicione mensagem de commit: "Sistema de chá de casamento"
4. Clique em **"Commit changes"**

#### Opção B: Via Git (Linha de Comando)

```bash
# No terminal, na pasta do projeto:
git init
git add index.html admin.html presentes.csv README.md
git commit -m "Sistema de chá de casamento"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/cha-casamento-daphne-felippe.git
git push -u origin main
```

---

### 3️⃣ Ativar GitHub Pages

1. No seu repositório, vá em **Settings** (Configurações)
2. No menu lateral esquerdo, clique em **Pages**
3. Em **"Source"**, selecione:
   - Branch: **main**
   - Folder: **/ (root)**
4. Clique em **"Save"**
5. Aguarde 1-2 minutos

---

### 4️⃣ Acessar seu Site

Após alguns minutos, seu site estará disponível em:

```
https://SEU-USUARIO.github.io/cha-casamento-daphne-felippe/index.html
```

**URLs finais:**
- **Convidados**: `https://SEU-USUARIO.github.io/cha-casamento-daphne-felippe/index.html`
- **Admin**: `https://SEU-USUARIO.github.io/cha-casamento-daphne-felippe/admin.html`

---

## 🎯 Estrutura de Arquivos no GitHub

```
cha-casamento-daphne-felippe/
├── index.html          → Página dos convidados
├── admin.html          → Painel administrativo
├── presentes.csv       → Lista de presentes (referência)
└── README.md           → Documentação
```

**IMPORTANTE:** Só estes 4 arquivos são necessários! O resto é documentação.

---

## 🔧 Configurações Importantes

### Arquivo index.html como Página Principal

Para que `index.html` seja a página principal automática:

1. Renomeie para que seja acessado apenas por: `https://seu-usuario.github.io/cha-casamento/`
2. Ou sempre compartilhe o link completo com `/index.html`

### URL Curta (Opcional)

Use um encurtador de URL para facilitar:
- **bit.ly** → Crie um link curto como: `bit.ly/cha-daphne-felippe`
- **tinyurl.com** → Alternativa
- **rebrandly.com** → Permite personalizar

---

## 💡 Dicas para Compartilhar

### Mensagem Sugerida para WhatsApp/Email:

```
Olá! 💍

Criamos uma página especial para o nosso chá de casamento!

🎁 Escolha seu presente aqui:
https://seu-usuario.github.io/cha-casamento/

É muito fácil:
1. Clique no link
2. Escolha um presente
3. Digite seu nome
4. Confirme!

Obrigado por fazer parte deste momento tão especial!

Daphne & Felippe ✨
```

### QR Code (Opcional)

1. Acesse: https://www.qr-code-generator.com/
2. Cole seu URL do GitHub Pages
3. Baixe o QR Code
4. Use no convite impresso!

---

## ⚙️ Atualizações Futuras

### Como Atualizar o Site

Sempre que fizer mudanças:

1. Edite os arquivos localmente
2. Vá no GitHub → Seu repositório
3. Clique no arquivo que quer atualizar
4. Clique no ícone de lápis (editar)
5. Faça as mudanças
6. Clique em **"Commit changes"**
7. Aguarde 1-2 minutos para atualizar

---

## 🔒 Gerenciar Acesso Admin

### Adicionar Senha ao Admin (Opcional)

Edite `admin.html` e adicione no início do `<script>`:

```javascript
// Adicione logo após <script>
const SENHA_ADMIN = "suasenha123";
const senha = prompt("Senha do Admin:");
if (senha !== SENHA_ADMIN) {
    alert("Senha incorreta!");
    window.location.href = "index.html";
}
```

Depois faça upload da versão atualizada.

---

## 📊 Monitoramento (Opcional)

### Google Analytics

Para ver quantas pessoas acessaram:

1. Crie conta no Google Analytics
2. Copie o código de rastreamento
3. Cole antes do `</head>` em `index.html` e `admin.html`
4. Faça upload da versão atualizada

---

## 🐛 Troubleshooting

### Problema: Site não aparece
**Solução:**
- Aguarde 2-5 minutos após ativar Pages
- Verifique se a branch está correta (main)
- Limpe cache do navegador (Ctrl+F5)

### Problema: Mudanças não aparecem
**Solução:**
- Aguarde 1-2 minutos após commit
- Limpe cache do navegador (Ctrl+F5)
- Abra em modo anônimo para testar

### Problema: CSS/JS não carrega
**Solução:**
- Verifique se todos os arquivos foram enviados
- Certifique-se que está usando URLs corretas

### Problema: LocalStorage não funciona
**Solução:**
- LocalStorage funciona normalmente no GitHub Pages
- Se limpar dados do navegador, perde os dados
- Lembre de exportar backup regularmente!

---

## 🔐 Segurança

### Dados dos Convidados

**Importante entender:**
- ✅ Dados ficam no navegador de cada pessoa
- ✅ GitHub Pages não vê os dados
- ✅ Totalmente privado e seguro
- ⚠️ Cada navegador tem seus próprios dados

**Para gerenciar de forma centralizada:**
- Use sempre o mesmo navegador e computador para admin
- Exporte CSV regularmente
- Salve backups em local seguro

---

## 📱 Testar Antes de Publicar

### Checklist Antes de Compartilhar

- [ ] Testei página dos convidados
- [ ] Testei painel admin
- [ ] Personalizei nomes (se quiser)
- [ ] Ajustei lista de presentes
- [ ] Testei em mobile
- [ ] Testei em diferentes navegadores
- [ ] Criei mensagem para compartilhar
- [ ] Fiz primeiro backup
- [ ] URL está funcionando
- [ ] Pronto para compartilhar! 🎉

---

## 📧 Links Úteis

- **GitHub Pages Docs**: https://pages.github.com/
- **Markdown Guide**: https://guides.github.com/features/mastering-markdown/
- **Git Tutorial**: https://git-scm.com/docs/gittutorial

---

## 🎨 Personalização Avançada

### Domínio Próprio (Opcional)

Se quiser usar seu próprio domínio (ex: `casamento.com.br`):

1. Compre um domínio
2. No GitHub Pages Settings, adicione em "Custom domain"
3. Configure DNS do domínio para apontar para GitHub
4. Aguarde propagação (pode levar 24h)

**Custo:** ~R$ 40/ano

---

## 💾 Backup Automático

### Estratégia Recomendada

1. **Toda semana**: Exportar CSV do admin
2. **Salvar em**: Google Drive ou Dropbox
3. **Nome do arquivo**: `backup-cha-casamento-YYYY-MM-DD.csv`

### Script de Lembrete

Configure lembrete no celular:
- **Frequência**: Semanal
- **Mensagem**: "Exportar backup do chá de casamento"
- **Ação**: Abrir admin.html → Exportar CSV

---

## 🎯 Resumo: Do Zero ao Ar

### Timeline Completa

1. **5 min** - Criar repositório GitHub
2. **3 min** - Upload dos arquivos
3. **2 min** - Ativar GitHub Pages
4. **2 min** - Aguardar ativação
5. **3 min** - Testar tudo
6. **5 min** - Criar mensagem para convidados

**TOTAL: ~20 minutos** para estar no ar! 🚀

---

## ✅ Vantagens do GitHub Pages

- ✅ **Grátis para sempre**
- ✅ **HTTPS automático** (seguro)
- ✅ **Rápido e confiável**
- ✅ **99.9% uptime**
- ✅ **Fácil de atualizar**
- ✅ **Sem limites de tráfego** (para uso normal)
- ✅ **Funciona perfeitamente** para este tipo de site

---

## 🎉 Pronto!

Seu site estará no ar, seguro, rápido e gratuito!

**Próximos passos:**
1. ✅ Siga os passos acima
2. ✅ Teste tudo
3. ✅ Compartilhe com convidados
4. ✅ Aproveite o chá de casamento!

---

✨ **Boa sorte com o GitHub Pages!** ✨

*Qualquer dúvida, consulte a documentação oficial do GitHub Pages*

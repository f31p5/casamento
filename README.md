# 💍 Sistema de Chá de Casamento - Daphne & Felippe
## Versão HTML Pura + Bootstrap + LocalStorage

---

## 🎯 O que é?

Sistema **100% client-side** (sem servidor necessário!) para gerenciar lista de presentes de chá de casamento.

Usa apenas:
- ✅ HTML
- ✅ Bootstrap 5
- ✅ JavaScript Vanilla
- ✅ LocalStorage (como "banco de dados")

---

## 🚀 Como Usar

### Método 1: Abrir Diretamente
1. Baixe os arquivos
2. **Dê um duplo clique em `index.html`** para a página dos convidados
3. **Dê um duplo clique em `admin.html`** para o painel administrativo
4. Pronto! Não precisa instalar nada!

### Método 2: Servidor Local Simples (Opcional)
Se quiser usar um servidor local:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (se tiver http-server instalado)
npx http-server

# PHP
php -S localhost:8000
```

Depois acesse:
- Convidados: http://localhost:8000/index.html
- Admin: http://localhost:8000/admin.html

---

## 📁 Arquivos

```
cha-casamento/
├── index.html        → Página para convidados
├── admin.html        → Painel administrativo
├── presentes.csv     → Lista inicial (referência)
└── README.md         → Este arquivo
```

---

## 🎨 Design

**Inspiração**: Dior & Tiffany & Co

- **Cor Principal**: Azul Tiffany (#0abab5)
- **Destaque**: Dourado (#d4af37)
- **Tipografia**: Cormorant Garamond + Montserrat
- **Estilo**: Elegante, minimalista, luxuoso

---

## 💾 Como Funciona o "Banco de Dados"

O sistema usa **LocalStorage** do navegador como banco de dados:

- ✅ Dados salvos automaticamente
- ✅ Persiste mesmo fechando o navegador
- ✅ Funciona offline
- ⚠️ Dados ficam no navegador do usuário

---

## 👥 Página dos Convidados (index.html)

### Funcionalidades:
1. Ver presentes disponíveis
2. Selecionar um presente
3. Inserir nome
4. Confirmar escolha
5. Receber agradecimento personalizado

### Como funciona:
- Carrega presentes do LocalStorage
- Mostra apenas presentes disponíveis
- Ao confirmar, marca presente como indisponível
- Salva nome do convidado e data

---

## 👑 Painel Admin (admin.html)

### Funcionalidades:

#### 📊 Estatísticas
- Total de presentes
- Presentes já escolhidos
- Presentes disponíveis

#### ➕ Adicionar Presentes
- Campo para nome do presente
- Botão para adicionar
- Atualização automática da lista

#### 📋 Gerenciar Lista
- Ver todos os presentes
- Ver status (disponível/escolhido)
- Ver quem escolheu
- Ver data de escolha
- Resetar presentes
- Excluir presentes

#### 💾 Exportar Dados
- **Exportar CSV** - Para Excel/Planilhas
- **Exportar JSON** - Para backup
- **Limpar Tudo** - Reset completo

---

## 🎁 Presentes Pré-cadastrados

1. Jogo de Panelas
2. Jogo de Taças de Cristal
3. Edredom de Seda
4. Jogo de Toalhas Bordadas
5. Cafeteira Nespresso
6. Liquidificador Philips Walita
7. Aparelho de Jantar Porcelana
8. Aspirador de Pó Robô
9. Jogo de Facas Profissional
10. Mixer KitchenAid
11. Conjunto de Travessas
12. Difusor de Aromas

---

## 📱 Responsividade

✅ **Desktop**: Layout completo
✅ **Tablet**: Adaptado
✅ **Mobile**: Otimizado

Testado em:
- Chrome
- Firefox
- Safari
- Edge

---

## 💡 Vantagens desta Versão

✅ **Sem instalação**: Basta abrir o arquivo
✅ **Sem servidor**: Não precisa Node.js, npm, etc
✅ **Sem dependências**: Tudo em um arquivo
✅ **Offline**: Funciona sem internet (exceto fontes)
✅ **Simples**: Fácil de entender e modificar
✅ **Rápido**: Carrega instantaneamente

---

## ⚠️ Limitações

⚠️ **Dados locais**: Cada navegador tem seus próprios dados
⚠️ **Sem sincronização**: Dados não são compartilhados entre dispositivos
⚠️ **Sem backup automático**: Limpar cache do navegador apaga dados

---

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

## 🌐 Colocar Online

### Opção 1: GitHub Pages (Gratuito)
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações
4. Pronto! URL: `https://seu-usuario.github.io/repositorio`

### Opção 2: Netlify (Gratuito)
1. Arraste a pasta para netlify.com/drop
2. Receba URL instantânea
3. Pronto!

### Opção 3: Vercel (Gratuito)
1. Crie conta no Vercel
2. Faça deploy da pasta
3. Pronto!

### Opção 4: Hospedagem tradicional
1. Faça upload via FTP
2. Coloque em qualquer servidor web
3. Pronto!

---

## 📥 Backup e Exportação

### Exportar Dados
No painel admin:
1. Clique em "Exportar CSV" para planilha
2. Ou "Exportar JSON" para backup completo

### Fazer Backup Manual
1. Abra o Console do navegador (F12)
2. Digite: `localStorage.getItem('presentesChaCasamento')`
3. Copie e salve o resultado

### Restaurar Backup
1. Abra o Console do navegador (F12)
2. Digite: `localStorage.setItem('presentesChaCasamento', 'COLE_AQUI_O_BACKUP')`
3. Recarregue a página

---

## 🔒 Segurança

### Dados Locais
- ✅ Dados ficam no navegador
- ✅ Não são enviados para nenhum servidor
- ✅ Privacidade total

### Acesso Admin
Para adicionar senha no admin, edite `admin.html`:

```javascript
// Adicione no início do <script>
const SENHA_ADMIN = "suasenha123";
const senha = prompt("Digite a senha do admin:");
if (senha !== SENHA_ADMIN) {
    alert("Senha incorreta!");
    window.location.href = "index.html";
}
```

---

## ❓ Troubleshooting

### Problema: Presentes não aparecem
**Solução**: 
1. Abra o Console (F12)
2. Digite: `localStorage.clear()`
3. Recarregue a página

### Problema: Dados sumiram
**Solução**:
- Cache do navegador foi limpo
- Use exportação regular para backup

### Problema: Não funciona online
**Solução**:
- Verifique se todos os arquivos foram enviados
- Teste localmente primeiro

### Problema: Estilos não aparecem
**Solução**:
- Conexão com internet necessária para Bootstrap
- Ou baixe Bootstrap localmente

---

## 🎯 Fluxo de Uso

### Para Convidados:
1. Acessar index.html
2. Ver presentes disponíveis
3. Selecionar presente
4. Digitar nome
5. Confirmar
6. Ver agradecimento

### Para Administrador:
1. Acessar admin.html
2. Ver estatísticas
3. Gerenciar presentes
4. Exportar dados
5. Fazer backup regular

---

## 📊 Comparação: Esta Versão vs Versão com Servidor

| Aspecto | HTML Puro | Com Servidor Node.js |
|---------|-----------|---------------------|
| Instalação | ❌ Não precisa | ✅ Precisa npm install |
| Configuração | ❌ Nenhuma | ✅ Precisa configurar |
| Servidor | ❌ Não precisa | ✅ Precisa rodar |
| Banco de Dados | LocalStorage | JSON/SQL |
| Sincronização | ❌ Não | ✅ Sim |
| Multi-usuário | ❌ Não | ✅ Sim |
| Backup | Manual | Automático |
| Complexidade | ⭐ Simples | ⭐⭐⭐ Complexo |

---

## 💝 Recomendação de Uso

### Use esta versão se:
- ✅ Quer algo simples e rápido
- ✅ Tem poucos convidados
- ✅ Vai usar em um único computador
- ✅ Não quer instalar nada
- ✅ Quer controle total dos dados

### Use versão com servidor se:
- ⚠️ Muitos convidados simultâneos
- ⚠️ Precisa sincronização em tempo real
- ⚠️ Quer backup automático
- ⚠️ Precisa analytics avançado

---

## 🎉 Pronto para Usar!

O sistema está **100% funcional** e pronto para o chá de casamento!

### Próximos Passos:
1. ✅ Abra `index.html` para testar
2. ✅ Abra `admin.html` para gerenciar
3. ✅ Personalize se necessário
4. ✅ Coloque online
5. ✅ Compartilhe com convidados

---

## 📞 Suporte

Tudo que você precisa está nos arquivos:
- Código bem comentado
- Design responsivo
- Funcionalidades completas

Para modificar:
- Edite HTML para textos
- Edite CSS para cores/estilos
- Edite JavaScript para funcionalidades

---

✨ **Feliz Chá de Casamento para Daphne & Felippe!** ✨

*Sistema simples, elegante e funcional - sem complicações!*

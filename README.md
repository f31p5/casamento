# 💍 Sistema de Chá de Casamento - Daphne & Felippe
## Versão HTML Pura + Bootstrap + LocalStorage/GitPages

---

## 🎯 O que é?

Sistema **100% client-side** para gerenciar lista de presentes de chá de casamento.

Usa apenas:
- ✅ HTML
- ✅ Bootstrap 5
- ✅ JavaScript Vanilla
- ✅ LocalStorage (como "banco de dados")
- ✅ Gerenciado e compartilhado via GitPages

---

## 🚀 Como Usar

upe os arquivos em um repositório e crie o pages
>> Lembrando que o link será o nome do repositório então capriche.

## 🎨 Design

**Inspiração**: Dior & Tiffany & Co

- **Cor Principal**: Azul Tiffany (#0abab5)
- **Destaque**: Dourado (#d4af37)
- **Tipografia**: Cormorant Garamond + Montserrat
- **Estilo**: Elegante, minimalista, luxuoso


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

## 🌐 Hospedagem

### GitHub Pages (Gratuito)
Utilizado para economizar mas não perder a forma especial do momento.
Todos os valores arrecadados estão sendo utilizados para a festa.

---

✨ **Chá de Casamento para Daphne & Felippe!** ✨

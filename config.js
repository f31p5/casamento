// Configuração do GitHub API
// IMPORTANTE: Após fazer o deploy, atualize estas informações com seus dados do GitHub

const GITHUB_CONFIG = {
    // Seu nome de usuário do GitHub
    owner: 'SEU-USUARIO-GITHUB',

    // Nome do repositório (exemplo: cha-casamento-daphne-felippe)
    repo: 'NOME-DO-REPOSITORIO',

    // Caminho do arquivo de dados no repositório
    dataFile: 'presentes.json',

    // Token de acesso pessoal do GitHub (necessário para escrita)
    // Como criar: https://github.com/settings/tokens
    // Permissões necessárias: repo (acesso total ao repositório)
    token: 'SEU-TOKEN-GITHUB',

    // Branch do repositório (geralmente 'main' ou 'master')
    branch: 'main'
};

// URL base da API do GitHub
const GITHUB_API_BASE = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.dataFile}`;

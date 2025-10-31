/**
 * Biblioteca de Sincronização com GitHub
 * Gerencia a persistência dos dados de presentes usando GitHub como backend
 */

class GitHubSync {
    constructor(config) {
        this.config = config;
        this.apiUrl = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${config.dataFile}`;
        this.fileSha = null; // SHA do arquivo atual (necessário para atualizações)
        this.isSyncing = false; // Flag para evitar sincronizações simultâneas
    }

    /**
     * Carrega os dados do GitHub
     * @returns {Promise<Array>} Array de presentes
     */
    async loadFromGitHub() {
        try {
            console.log('📥 Carregando dados do GitHub...');

            const response = await fetch(this.apiUrl, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'Authorization': `token ${this.config.token}`
                }
            });

            if (!response.ok) {
                throw new Error(`Erro ao carregar dados: ${response.status}`);
            }

            const data = await response.json();

            // Salvar SHA para futuras atualizações
            this.fileSha = data.sha;

            // Decodificar conteúdo (vem em base64)
            const content = atob(data.content);
            const presentes = JSON.parse(content);

            console.log('✅ Dados carregados do GitHub com sucesso!');
            return presentes;

        } catch (error) {
            console.error('❌ Erro ao carregar dados do GitHub:', error);

            // Se falhar, tentar carregar do localStorage como fallback
            const localData = localStorage.getItem('presentesChaCasamento');
            if (localData) {
                console.log('⚠️ Usando dados do cache local (localStorage)');
                return JSON.parse(localData);
            }

            // Se não tiver nada, retornar array vazio
            return [];
        }
    }

    /**
     * Salva os dados no GitHub
     * @param {Array} presentes - Array de presentes para salvar
     * @returns {Promise<boolean>} true se salvou com sucesso
     */
    async saveToGitHub(presentes) {
        if (this.isSyncing) {
            console.log('⏳ Sincronização já em andamento, aguardando...');
            return false;
        }

        try {
            this.isSyncing = true;
            console.log('💾 Salvando dados no GitHub...');

            // Se não temos o SHA, precisamos buscar primeiro
            if (!this.fileSha) {
                await this.loadFromGitHub();
            }

            // Converter presentes para JSON e depois para base64
            const content = JSON.stringify(presentes, null, 2);
            const contentBase64 = btoa(unescape(encodeURIComponent(content)));

            const response = await fetch(this.apiUrl, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'Authorization': `token ${this.config.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: `Atualização automática - ${new Date().toLocaleString('pt-BR')}`,
                    content: contentBase64,
                    sha: this.fileSha,
                    branch: this.config.branch
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Erro ao salvar: ${errorData.message}`);
            }

            const data = await response.json();

            // Atualizar SHA com o novo valor
            this.fileSha = data.content.sha;

            console.log('✅ Dados salvos no GitHub com sucesso!');
            return true;

        } catch (error) {
            console.error('❌ Erro ao salvar dados no GitHub:', error);
            return false;
        } finally {
            this.isSyncing = false;
        }
    }

    /**
     * Sincroniza dados: carrega do GitHub e salva no localStorage
     * @returns {Promise<Array>} Array de presentes
     */
    async sync() {
        try {
            const presentes = await this.loadFromGitHub();

            // Salvar no localStorage como cache
            localStorage.setItem('presentesChaCasamento', JSON.stringify(presentes));

            return presentes;
        } catch (error) {
            console.error('❌ Erro na sincronização:', error);

            // Em caso de erro, retornar dados do localStorage
            const localData = localStorage.getItem('presentesChaCasamento');
            return localData ? JSON.parse(localData) : [];
        }
    }

    /**
     * Atualiza um presente e sincroniza com GitHub
     * @param {Array} presentes - Array atualizado de presentes
     * @returns {Promise<boolean>}
     */
    async updateAndSync(presentes) {
        // Salvar no localStorage imediatamente (para resposta rápida)
        localStorage.setItem('presentesChaCasamento', JSON.stringify(presentes));

        // Sincronizar com GitHub (assíncrono)
        return await this.saveToGitHub(presentes);
    }
}

// Inicializar instância global
let githubSync = null;

/**
 * Inicializa o sistema de sincronização
 */
function initGitHubSync() {
    if (typeof GITHUB_CONFIG === 'undefined') {
        console.error('❌ GITHUB_CONFIG não encontrado! Certifique-se de incluir config.js');
        return null;
    }

    githubSync = new GitHubSync(GITHUB_CONFIG);
    console.log('✅ Sistema de sincronização inicializado');
    return githubSync;
}

/**
 * Verifica se o GitHub está configurado corretamente
 */
function isGitHubConfigured() {
    return GITHUB_CONFIG.owner !== 'SEU-USUARIO-GITHUB' &&
           GITHUB_CONFIG.repo !== 'NOME-DO-REPOSITORIO' &&
           GITHUB_CONFIG.token !== 'SEU-TOKEN-GITHUB';
}

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consentimento - CyberStudy</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <div class="container">
        <!-- Progress -->
        <div class="progress-bar">
            <div class="progress-fill" style="width: 25%;"></div>
        </div>
        
        <div class="progress-steps">
            <div class="progress-step completed">
                <div class="progress-circle">✓</div>
                <div class="progress-label">Consentimento</div>
            </div>
            <div class="progress-step active">
                <div class="progress-circle">2</div>
                <div class="progress-label">Dados Demográficos</div>
            </div>
            <div class="progress-step">
                <div class="progress-circle">3</div>
                <div class="progress-label">Escalas Psicológicas</div>
            </div>
            <div class="progress-step">
                <div class="progress-circle">4</div>
                <div class="progress-label">Teste de Decisão</div>
            </div>
        </div>

        <!-- Content -->
        <div class="card card-full">
            <h1>Termo de Consentimento Livre e Esclarecido (TCLE)</h1>
            
            <h2>Objetivo da Pesquisa</h2>
            <p>
                Este estudo investiga a relação entre cybercondria (preocupação excessiva com saúde baseada em buscas online) 
                e a tomada de decisão. Você será convidado a responder questionários sobre ansiedade, autoeficácia e cybercondria, 
                além de participar de um teste de tomada de decisão.
            </p>

            <h2>Procedimentos</h2>
            <p>
                Sua participação envolve:
            </p>
            <ul style="margin-left: 2rem; margin-bottom: 1rem;">
                <li>Responder a um questionário sociodemográfico (dados básicos)</li>
                <li>Completar três escalas psicológicas validadas (BAI, CSS-12, GSE)</li>
                <li>Participar do Iowa Gambling Task (teste de tomada de decisão)</li>
            </ul>
            <p>
                Tempo estimado: 20-30 minutos
            </p>

            <h2>Riscos e Benefícios</h2>
            <p>
                <strong>Riscos:</strong> Risco mínimo. Você pode sentir algum desconforto ao responder perguntas sobre ansiedade 
                ou saúde mental, mas pode interromper a pesquisa a qualquer momento.
            </p>
            <p>
                <strong>Benefícios:</strong> Você contribuirá para o avanço do conhecimento científico sobre cybercondria 
                e tomada de decisão. Não há benefício direto para você.
            </p>

            <h2>Confidencialidade</h2>
            <p>
                Seus dados serão mantidos confidenciais e identificados apenas por um código de participante. 
                Nenhuma informação pessoal (nome, CPF, etc.) será coletada ou armazenada.
            </p>

            <h2>Voluntariedade</h2>
            <p>
                Sua participação é completamente voluntária. Você pode desistir a qualquer momento, sem qualquer penalidade ou perda de benefício.
            </p>

            <h2>Contato</h2>
            <p>
                Para dúvidas sobre esta pesquisa, entre em contato com os pesquisadores responsáveis.
            </p>

            <!-- Checkboxes -->
            <form id="consentForm">
                <div class="form-group">
                    <div class="checkbox-item">
                        <input type="checkbox" id="consent1" name="consent1" required>
                        <label for="consent1">
                            Li e compreendi o termo de consentimento
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <div class="checkbox-item">
                        <input type="checkbox" id="consent2" name="consent2" required>
                        <label for="consent2">
                            Autorizo a coleta e armazenamento dos meus dados de forma anônima
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <div class="checkbox-item">
                        <input type="checkbox" id="consent3" name="consent3" required>
                        <label for="consent3">
                            Concordo em participar desta pesquisa voluntariamente
                        </label>
                    </div>
                </div>

                <!-- Buttons -->
                <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                    <button type="button" class="btn btn-secondary btn-lg" onclick="goBack()">
                        Voltar
                    </button>
                    <button type="submit" class="btn btn-primary btn-lg btn-block">
                        Concordo e Continuar
                    </button>
                </div>
            </form>

            <div id="saveStatus" style="margin-top: 1rem; text-align: center; color: var(--secondary-color); font-size: 0.9rem;">
                Salvo
            </div>
        </div>
    </div>

    <script src="../js/app.js"></script>
    <script>
        // Setup auto-save
        setupAutoSave('consentForm', 'consent_responses');
        setupBeforeUnloadSave('consent_responses');

        // Handle form submission
        document.getElementById('consentForm').addEventListener('submit', async (e) => {
            e.preventDefault();

            try {
                const participantId = getParticipantId();
                
                if (!participantId) {
                    showNotification('Erro: Sessão não inicializada', 'error');
                    return;
                }

                // Salvar consentimento
                await apiCall(`/study/save-consent/${participantId}`, 'POST', {
                    consent: true,
                });

                showNotification('Consentimento registrado com sucesso', 'success');
                
                // Navegar para próxima página
                setTimeout(() => {
                    navigateToPage('demographics');
                }, 1000);

            } catch (error) {
                showNotification('Erro ao registrar consentimento', 'error');
                console.error(error);
            }
        });

        // Update progress
        updateProgress(1, 4);
    </script>
</body>
</html>

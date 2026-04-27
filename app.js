<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CyberStudy - Estudo sobre Cybercondria e Tomada de Decisão</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>Estudo sobre Cybercondria e Tomada de Decisão</h1>
            <p class="subtitle">Compreendendo o impacto da busca de informações de saúde online na ansiedade e na tomada de decisão</p>
        </div>

        <!-- Main Content -->
        <div class="grid">
            <!-- Card 1: Sobre o Estudo -->
            <div class="card">
                <h2>Sobre o Estudo</h2>
                <div class="card-content">
                    <p>
                        Este estudo investiga a relação entre cybercondria (preocupação excessiva com saúde baseada em buscas online) e a tomada de decisão.
                    </p>
                    <p>
                        Você será convidado a responder questionários sobre ansiedade, autoeficácia e cybercondria, além de participar de um teste de tomada de decisão.
                    </p>
                    <p class="highlight">
                        Tempo estimado: 20-30 minutos
                    </p>
                </div>
            </div>

            <!-- Card 2: Sua Participação -->
            <div class="card">
                <h2>Sua Participação</h2>
                <div class="card-content">
                    <ul class="checklist">
                        <li>✓ Sua participação é completamente voluntária</li>
                        <li>✓ Você pode desistir a qualquer momento</li>
                        <li>✓ Seus dados serão mantidos confidenciais</li>
                        <li>✓ Nenhuma informação pessoal será coletada</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Study Stages -->
        <div class="card card-full">
            <h2>Etapas do Estudo</h2>
            <div class="stages">
                <div class="stage">
                    <div class="stage-number">1</div>
                    <h3>Consentimento</h3>
                    <p>Leia e aceite o termo de consentimento</p>
                </div>
                <div class="stage">
                    <div class="stage-number">2</div>
                    <h3>Dados Demográficos</h3>
                    <p>Informações básicas sobre você</p>
                </div>
                <div class="stage">
                    <div class="stage-number">3</div>
                    <h3>CSS-33</h3>
                    <p>Escala de Severidade da Cybercondria</p>
                </div>
                <div class="stage">
                    <div class="stage-number">4</div>
                    <h3>Escalas Psicológicas</h3>
                    <p>BAI, CSS-12 e GSE</p>
                </div>
                <div class="stage">
                    <div class="stage-number">5</div>
                    <h3>Teste de Decisão</h3>
                    <p>Iowa Gambling Task</p>
                </div>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="cta">
            <button id="startBtn" class="btn btn-primary btn-lg">Iniciar o Estudo</button>
            <p class="disclaimer">
                Ao clicar em "Iniciar o Estudo", você concorda em participar desta pesquisa.
            </p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa.</p>
            <p>Para dúvidas, entre em contato com os pesquisadores responsáveis.</p>
        </div>
    </div>

    <script src="js/app.js"></script>
    <script>
        document.getElementById('startBtn').addEventListener('click', async () => {
            try {
                const response = await fetch('/api/study/initialize-session', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                });
                const data = await response.json();
                
                if (data.success) {
                    localStorage.setItem('participantId', data.participantId);
                    window.location.href = '/pages/consent.html';
                } else {
                    alert('Erro ao iniciar o estudo. Tente novamente.');
                }
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao iniciar o estudo. Tente novamente.');
            }
        });
    </script>
</body>
</html>

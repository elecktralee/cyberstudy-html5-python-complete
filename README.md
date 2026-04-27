# CyberStudy - Sistema de Pesquisa sobre Cybercondria

Sistema completo para coleta de dados em pesquisa sobre Cybercondria e Tomada de Decisão.

## Tecnologias

- **Frontend**: HTML5 + CSS3 + JavaScript puro
- **Backend**: Python com Flask
- **Banco de Dados**: SQLite (pode ser adaptado para PostgreSQL)

## Instalação

### 1. Clonar/Descompactar o Projeto

```bash
cd cyberstudy-html5-python
```

### 2. Instalar Dependências Python

```bash
cd backend
pip install -r requirements.txt
cd ..
```

### 3. Executar o Servidor

```bash
cd backend
python app.py
```

O servidor estará disponível em: `http://localhost:5000`

## Estrutura do Projeto

```
cyberstudy-html5-python/
├── backend/
│   ├── app.py              # Aplicação Flask
│   ├── requirements.txt     # Dependências Python
│   └── cyberstudy.db       # Banco de dados (criado automaticamente)
├── frontend/
│   ├── index.html          # Página inicial
│   ├── css/
│   │   └── style.css       # Estilos
│   ├── js/
│   │   └── app.js          # Funções JavaScript
│   ├── pages/
│   │   ├── consent.html    # Consentimento
│   │   ├── demographics.html # Dados demográficos
│   │   ├── scales.html     # Escalas psicológicas
│   │   ├── igt.html        # Iowa Gambling Task
│   │   └── completion.html # Conclusão
│   └── admin/
│       └── dashboard.html  # Painel administrativo
└── README.md
```

## Fluxo do Estudo

1. **Página Inicial** - Informações sobre o estudo
2. **Consentimento** - Termo de consentimento livre e esclarecido
3. **Dados Demográficos** - Informações básicas do participante
4. **Escalas Psicológicas** - BAI, CSS-12, GSE
5. **Iowa Gambling Task** - Teste de tomada de decisão (100 tentativas)
6. **Conclusão** - Agradecimento e resumo

## APIs Disponíveis

### Inicializar Sessão
```
POST /api/study/initialize-session
```

### Salvar Dados
```
POST /api/study/save-sociodemographic/<participant_id>
POST /api/study/save-bai/<participant_id>
POST /api/study/save-css12/<participant_id>
POST /api/study/save-gse/<participant_id>
POST /api/study/save-igt/<participant_id>
POST /api/study/complete/<participant_id>
```

### Painel Administrativo
```
GET /api/admin/metrics
GET /api/admin/participants
GET /api/admin/export/<table_name>?format=json
```

## Banco de Dados

As seguintes tabelas são criadas automaticamente:

- `participants` - Dados dos participantes
- `sociodemographic_data` - Dados sociodemográficos
- `bai_responses` - Respostas do BAI
- `css12_responses` - Respostas da CSS-12
- `gse_responses` - Respostas da GSE
- `igt_summary` - Resumo do IGT
- `igt_trials` - Tentativas individuais do IGT

## Recursos

- ✅ Salvamento automático com localStorage
- ✅ Geolocalização por IP
- ✅ Detecção de dispositivo e navegador
- ✅ Painel administrativo com analytics
- ✅ Exportação de dados em JSON
- ✅ Design responsivo e profissional
- ✅ Escalas psicológicas validadas
- ✅ Iowa Gambling Task com 100 tentativas

## Customização

### Alterar Porta do Servidor

Edite `backend/app.py`:
```python
app.run(debug=True, host='0.0.0.0', port=5000)
```

### Usar PostgreSQL

Edite `backend/app.py`:
```python
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:password@localhost/cyberstudy'
```

### Adicionar Novas Escalas

1. Crie um novo modelo em `backend/app.py`
2. Crie uma nova página HTML em `frontend/pages/`
3. Adicione uma rota API em `backend/app.py`

## Suporte

Para dúvidas ou problemas, consulte a documentação do protocolo de pesquisa.

## Licença

Este projeto é fornecido como é, para fins de pesquisa acadêmica.

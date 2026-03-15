# n8n-nodes-crm360

Nó comunitário n8n para **CRM 360** — gerencie contatos, conversas do WhatsApp, mensagens e webhooks diretamente nos seus workflows n8n.

## Nós incluídos

### CRM 360

Nó principal com 4 recursos:

| Recurso | Operações |
|---------|-----------|
| **Contact** | Create, Get, Get Many, Update, Delete, Get Deals, Get Conversations |
| **Conversation** | Get, Get Many, Update (status/atribuição) |
| **Message** | Get Many, Send (na conversa), Send by Phone (cria conversa se necessário) |
| **Webhook** | Create, Get Many, Update, Delete, Test |

### CRM 360 Trigger

Nó trigger que recebe eventos em tempo real do CRM 360:

- `contact.created` / `contact.updated` / `contact.deleted`
- `conversation.created` / `conversation.updated`
- `message.received` / `message.sent`
- `*` (todos os eventos)

O trigger gerencia automaticamente os webhooks no CRM — ao ativar o workflow, cria o webhook; ao desativar, remove.

## Credenciais

- **Base URL**: URL da sua instalação CRM 360 (ex: `https://seudominio.com`)
- **API Token**: Token gerado em **Configurações → API Tokens** no CRM 360

> A API deve estar ativada como addon para o tenant. O administrador deve habilitar `api_enabled` na licença do revendedor.

## Instalação

### Via n8n Community Nodes

1. Vá em **Settings → Community Nodes**
2. Selecione **Install**
3. Digite `n8n-nodes-crm360`
4. Confirme a instalação

### Manual

```bash
cd ~/.n8n
pnpm install n8n-nodes-crm360
```

### Desenvolvimento local

```bash
git clone https://github.com/contratesolutions/n8n-nodes-crm360.git
cd n8n-nodes-crm360
pnpm install
pnpm build
pnpm link --global
# Na instalação do n8n:
pnpm link --global n8n-nodes-crm360
```

## Exemplos de uso

### Enviar mensagem quando lead é criado

1. **CRM 360 Trigger** (evento: `contact.created`)
2. **IF** node (verificar `data.type === 'lead'`)
3. **CRM 360** → Message → Send by Phone (enviar boas-vindas)

### Sincronizar contatos com planilha

1. **Schedule Trigger** (a cada hora)
2. **CRM 360** → Contact → Get Many
3. **Google Sheets** → Append Row

### Notificar equipe no Slack

1. **CRM 360 Trigger** (evento: `message.received`)
2. **Slack** → Send Message (com conteúdo da mensagem)

## Verificação de assinatura (Trigger)

O trigger verifica automaticamente a assinatura HMAC SHA-256 dos webhooks recebidos usando o `secret` gerado na criação do webhook.

## Rate Limiting

A API do CRM 360 tem limite de **60 requisições por minuto** por token. Use delays entre chamadas em batch.

## Scripts disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia n8n com o nó carregado e watch mode |
| `npm run build` | Compila TypeScript para produção |
| `npm run lint` | Verifica erros no código |
| `npm run lint:fix` | Corrige erros automaticamente |

## Licença

[MIT](LICENSE.md)

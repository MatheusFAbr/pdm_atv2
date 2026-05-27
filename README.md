# DDDConsulta

Aplicativo mobile para consulta de códigos DDD brasileiros. Informe um código de área e descubra o estado e todos os municípios atendidos por aquele DDD.

## Funcionalidades

- Consulta de qualquer código DDD brasileiro (2 dígitos)
- Exibe o estado correspondente ao DDD pesquisado
- Lista todos os municípios atendidos em ordem alfabética
- Validação do campo de entrada (somente 2 dígitos numéricos)
- Feedback visual de carregamento, erro e estado vazio
- Opção de retentar em caso de falha na requisição

## Tecnologias

| Tecnologia | Versão |
|---|---|
| React Native | 0.85.3 |
| Expo | ~56.0.5 |
| TypeScript | ~6.0.3 |
| React | 19.2.3 |
| @expo/vector-icons | ^15.0.2 |
| BrasilAPI | — |

## Estrutura do Projeto

```
pdm_atv2/
├── App.tsx                       # Componente raiz da aplicação
├── index.ts                      # Ponto de entrada Expo
├── src/
│   ├── components/
│   │   ├── SearchInput.tsx       # Campo de busca com botão
│   │   ├── ResultCard.tsx        # Card com DDD, estado e cidades
│   │   ├── ErrorCard.tsx         # Card de erro com botão de retry
│   │   └── EmptyState.tsx        # Estado inicial vazio
│   ├── hooks/
│   │   └── useDDD.ts             # Hook de busca e gerenciamento de estado
│   ├── services/
│   │   └── dddServices.ts        # Integração com a BrasilAPI
│   └── types/
│       └── ddd.ts                # Tipagens TypeScript
├── package.json
└── tsconfig.json
```

## Como Executar

### Pré-requisitos

- Node.js instalado
- Expo CLI instalado (`npm install -g expo-cli`)
- Expo Go no celular **ou** emulador Android/iOS configurado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/MatheusFAbr/pdm_atv2.git
cd pdm_atv2

# Instale as dependências
npm install
```

### Executar

```bash
# Inicia o servidor de desenvolvimento
npm start
```

Escaneie o QR Code com o app **Expo Go** no celular, ou pressione:
- `a` para abrir no emulador Android
- `i` para abrir no simulador iOS
- `w` para abrir no navegador web

## API Utilizada

O app consome a [BrasilAPI](https://brasilapi.com.br) para obter os dados de cada DDD.

**Endpoint:**
```
GET https://brasilapi.com.br/api/ddd/v1/{ddd}
```

**Exemplo de resposta:**
```json
{
  "state": "SP",
  "cities": ["São Paulo", "Guarulhos", "Campinas", ...]
}
```

## Como Usar o App

1. Digite um código DDD com 2 dígitos no campo de busca (ex: `11`, `21`, `31`)
2. Toque em **Buscar** ou pressione Enter
3. O app exibe o estado e a lista de cidades do DDD informado
4. Para nova busca, limpe o campo e digite outro DDD

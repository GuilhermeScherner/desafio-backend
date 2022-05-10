# Mooney - Desafio Backend

## Requisitos

Crie um endpoint que retorne sugestões para autocompletar cidades do Brasil.

- o endpoint deve ser exposto em /suggestions
- o termo de pesquisa parcial (ou completo) é passado como um query param `q`
- a localização de quem chama o endpoint pode ser fornecida opcionalmente por meio de query params `lat` e `lon` para ajudar a melhorar as pontuações relativas
- o endpoint retorna uma resposta JSON com uma lista de correspondências sugeridas pontuadas
  - as sugestões devem ser ordenadas por pontuação decrescente
  - cada sugestão deve ter uma pontuação entre 0 e 1 (inclusive), indicando confiança na sugestão (1 é o mais confiante)
  - cada sugestão tem um nome que pode ser usado para eliminar a ambigüidade entre locais com nomes semelhantes
  - cada sugestão tem uma latitude e longitude
- todos os testes funcionais devem passar (testes adicionais podem ser implementados conforme necessário)
- recomendamos que o deploy do aplicativo final seja feito no [Heroku](https://devcenter.heroku.com/articles/getting-started-with-python) pela facilidade da ferramenta
- sinta-se à vontade para adicionar mais recursos, se desejar!

## Exemplo de Resposta

Essas respostas têm o objetivo de fornecer orientação. Os valores exatos podem variar com base na fonte de dados e no algoritmo de pontuação.

### Quase match

GET /suggestions?q=Campinas
```json
{
  "suggestions": [
    {
      "name": "Campinas do Sul - RS",
      "latitude": -27.7174,
      "longitude": -52.6248,
      "score": 1
    },
    {
      "name": "Campinas do Piauí - PI",
      "latitude": -7.6593,
      "longitude": -41.8775,
      "score": 1
    },
    {
      "name": "Campinas - SP",
      "latitude": -22.9053,
      "longitude": -47.0659,
      "score": 1
    },
    {
      "name": "Nova Campina - SP",
      "latitude": -24.1224,
      "longitude": -48.9022,
      "score": 0.93
    },
    {
      "name": "Campina das Missões - RS",
      "latitude": -27.9888,
      "longitude": -54.8416,
      "score": 0.88
    },
    {
      "name": "Campina Grande - PB",
      "latitude": -7.22196,
      "longitude": -35.8731,
      "score": 0.88
    },
    {
      "name": "Campina do Monte Alegre - SP",
      "latitude": -23.5895,
      "longitude": -48.4758,
      "score": 0.88
    },
    {
      "name": "Campina Verde - MG",
      "latitude": -19.5382,
      "longitude": -49.4862,
      "score": 0.88
    },
    {
      "name": "Campina Grande do Sul - PR",
      "latitude": -25.3044,
      "longitude": -49.0551,
      "score": 0.88
    },
    {
      "name": "Campina da Lagoa - PR",
      "latitude": -24.5893,
      "longitude": -52.7976,
      "score": 0.88
    },
    {
      "name": "Campinaçu - GO",
      "latitude": -13.787,
      "longitude": -48.5704,
      "score": 0.88
    },
    {
      "name": "Campina do Simão - PR",
      "latitude": -25.0802,
      "longitude": -51.8237,
      "score": 0.88
    },
    {
      "name": "Carpina - PE",
      "latitude": -7.84566,
      "longitude": -35.2514,
      "score": 0.86
    },
    {
      "name": "Apiúna - SC",
      "latitude": -27.0375,
      "longitude": -49.3885,
      "score": 0.53
    },
    {
      "name": "Pinhais - PR",
      "latitude": -25.4429,
      "longitude": -49.1927,
      "score": 0.23
    }
  ]
}
```

### Sem correspondência

GET /suggestions?q=UmaCidadeAleatoriaNoMeioDoNada
```
{
  "suggestions": []
}
```

## Requisitos não funcionais

- Todo o código deve ser escrito em NodeJS.
- Devem ser implementadas mitigações para lidar com altos níveis de tráfego.
- O desafio deve ser enviado como solicitação pull contra este repo (faça um fork e criar um pull request).
- Documentação e facilidade de manutenção são uma vantagem.

## Dados

Você pode encontrar os dados necessários junto com sua descrição e documentação no diretório de [`data`](data/).

## Avaliação

Usaremos os seguintes critérios para avaliar sua solução:

- Capacidade de seguir instruções
- Experiência do desenvolvedor (quão fácil é executar sua solução localmente, quão clara é sua documentação, etc...)
- Quão correta é a solução
- Desempenho
- Monitoramento (métricas de engenharia e de negócio)
- Testes (qualidade e cobertura)
- Estilo e limpeza do código
- Atenção aos detalhes
- Capacidade de fazer suposições sensatas

Não há problema em nos fazer perguntas!

Sabemos que o tempo para este projeto é limitado e é difícil criar uma solução "perfeita", por isso vamos considerar isso junto com sua experiência ao avaliar o envio.

Sinta-se livre para alterar as bibliotecas utilizadas para o servidor e para os testes.

## Começando

### Pré-requisitos

Você vai precisar de:

- Git
- node

### Configurando seu ambiente

1. Comece criando um fork deste repositório e clonando seu fork. O GitHub possui aplicativos para Mac e Windows que facilitam isso.

2. Instale NodeJS da maneira que preferir (recomendamos utilizar o [nvm](https://github.com/nvm-sh/nvm#install--update-script)).


### Configurando o projeto

No diretório do projeto rode:

```console
npm start
```

### Executando os testes

O conjunto de testes pode ser executado com:

```console
npm test
```

### Iniciando o aplicativo

Para iniciar um servidor local, execute:

```console
npm start
```

isso deve produzir um output similar a:

```console
Server running at http://127.0.0.1:3000/suggestions
```
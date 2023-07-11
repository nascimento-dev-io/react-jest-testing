## Teste de Software + React

Vamos começar pelo início e discutir o que é testagem. Testagem é um processo de três passos que se parece assim:

![Em português: organização -> ação -> declaração](https://www.freecodecamp.org/portuguese/news/content/images/size/w1000/2022/11/image-12.png)

**Organização** é o estado original em que se encontra sua aplicação. **Ação** é alguma coisa acontece (como um evento de clique, entrada de usuário e assim por diante). Então, ocorre a **declaração**, ou é criada uma hipótese, sobre o novo estado da aplicação. Os testes passarão se a hipótese estiver correta e falharão se estiver errada.

Ao contrário dos componentes do React, os testes não são executados no navegador. Jest é o executor de testes e, também, o framework utilizado pelo React. O Jest é o ambiente onde todos os seus testes serão executados. É por isso que você não precisa importar `expect` e `describe` dentro desse arquivo. Essas funções já estão disponíveis globalmente no ambiente do [**Jest**](https://jestjs.io/pt-BR).

A sintaxe dos testes terá a seguinte aparência:

```js
describe('Teste de soma', () => {
  function sum(a, b) {
    return a + b;
  }

  it('deve ser igual a 4', () => {
    expect(sum(2, 2)).toBe(4);
  });

  test('também deve ser igual a 4', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
```

A função `describe` envolve nossos blocos `it` ou `test`. É uma maneira de agrupá-los. Tanto `it` quanto `test` são palavras-chaves que podem ser usadas intercambiadas. O texto entre aspas descreverá algo que deveria acontecer com os testes e que será impressa no console.

A `toBe()` é um combinador que funciona com `expect()` que permitem fazer declarações. Existem mais combinadores e variáveis globais oferecidas pelo Jest.

> [Usando Matchers](https://jestjs.io/pt-BR/docs/using-matchers)

> [Documentação Jest](https://jestjs.io/pt-BR/docs/API)

### Por que testar?

A testagem é feita para garantir que sua aplicação está funcionando como foi planejada para seus usuários finais. Ter uma testagem fará com que sua aplicação fique mais robusta e menos propensa a erros. É uma maneira de verificar que seu código está fazendo o que os desenvolvedores projetaram.

Potenciais desvantagens:

- Escrever testes consome muito tempo e é difícil.
- Em certos cenários, executar testes em Integração Contínua (em inglês, _Continuous Integration_, ou CI) pode ter um custo em dinheiro.
- Se feito incorretamente, pode gerar falsos positivos. Os testes passarão, mas a aplicação não funcionará como se espera.
- Pode gerar falsos negativos. Os testes falharão, mas a aplicação funcionará como pretendida.

### O que testar?

Os testes devem testar a funcionalidade da aplicação, simulando como ele será utilizado pelos usuários finais. Isso dará a você a confiança de que a aplicação funcionará como projetado em ambiente de produção.

### O que não testar?

[Kent C. Dodds](https://kentcdodds.com/) diz que, você não deve testar detalhes da implementação. Detalhes da implementação representam testar coisas que não são funcionalidades do usuário final.

Parece que você está testando funcionalidades, mas, na verdade, não está. Você está testando o nome da função. Você pode alterar o nome da função e seus testes falharão, mas sua aplicação continuará funcionando, dando a você um falso negativo.

**Variáveis const**: essas variáveis são imutáveis. Você não tem a necessidade de testá-las.

**Bibliotecas externas**: não é seu trabalho testá-las. Quem precisa fazer isso são os criadores delas. Se você não tem certeza se a biblioteca foi testada, você não deve usá-la ou deve ler o código-fonte para ver se o autor incluiu testes.

### Testes com shallow x testes com mount

Testes com **mount()**, de fato, executam o código html, css e js como um navegador faria, mas de maneira simulada. Eles não renderizam ou imprimem nada na interface, mas agem como um navegador da web simulado e executam o código em segundo plano.

Não perder tempo imprimindo nada na interface torna os testes muito mais rápidos. No entanto, testes com **mount()** ainda são bem mais lentos que testes com **shallow()**.

É por isso que você desmonta ou faz a limpeza do componente depois de cada teste. É quase como uma aplicação em funcionamento. Um teste acabará afetando o outro.

Testes com **mount()/render()** são tipicamente usados para testes de integração, enquanto testes com **shallow()** são usados para testes unitários.

Os testes com **shallow()** apenas imprimem um único componente, aquele que estamos testando. Por não renderizar componentes filhos, conseguimos testar nossos componentes em isolamento.

### Tipos de Testes

**Teste unitário**: teste de uma parte isolada da aplicação, normalmente feita em combinação com o teste com shallow().

- **Exemplo**: um componente renderizado com props (propriedades) padrão.

**Teste de integração**: testa se as partes distintas funcionam ou se integram corretamente entre si. Normalmente, é feito na criação ou na renderização do componente.

- **Exemplo**: teste se um componente filho pode atualizar o state no componente pai.

**Teste de ponta a ponta**: normalmente, é uma combinação de várias etapas, combinando testes unitários e testes de integração dentro de uma etapa maior, geralmente com pouco mock (simulação). Os testes são feitos em um navegador simulado e podem ocorrer ou não enquanto o teste de interface está rodando.

- **Exemplo**: testagem de um fluxo inteiro de autenticação.

### Outros conceitos

**Snapshot**
O teste de snapshot permite você ver como seu componente se alterou desde o último teste, linha por linha. As linhas de código que sofreram mudanças são conhecidas como diff, abreviação em inglês para diferenças.

**Integração contínua**
Rastrear e rodar todos esses testes manualmente pode se tornar uma tarefa um pouco tediosa. Para resolver isso, temos a integração contínua (em inglês, _Continuous Integration_, ou CI), que é uma maneira de automatizar nossos testes continuamente.

**Testes de cobertura**
Os testes de cobertura nos dão um relatório que, basicamente, nos diz o quanto de nosso código está sendo testado.

---

Em React as principais ferramentas utilizadas para teste unitários e integração sao o [Jest](https://jestjs.io/) como framework e a [Testing Library](https://testing-library.com/) como biblioteca que auxilia nos testes de componentes no React, ja os teste de ponta a ponta utilizamos o [Cypress](https://www.cypress.io/).

> Baseado no artigo [Como testar componentes do React: o guia completo](https://www.freecodecamp.org/portuguese/news/como-testar-componentes-do-react-o-guia-completo/) que possuem maiores detalhes e exemplos.

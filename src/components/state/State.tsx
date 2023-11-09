import StateDemo from "../../demo-hooks/stateDemo"
import stateCode from '../../assets/stateCode.png'
import stateInput from '../../assets/stateInput.png'
import '../sections.scss'

interface StateProps {
  id: string
}

const State = (props: StateProps) => {

  return (
    <section id={props.id}>
      <h1 className="section-title">useState</h1>
      <p>
        Para entendermos o useState, primeiro temos que compreender o conceito de estado.
        No React, o estado é uma espécie de objeto que armazena informações sobre um respectivo
        componente, e seu estado atual. Com o uso do <code>useState</code>, podemos
        criar e atualizar estados de um componente funcional.</p>
      <p>
        Para utilizarmos o <code>useState</code> devemos, primeiramente, importa-lo da biblioteca
        React e utilizá-lo assim, como uma função dentro do componente.
      </p>
      <p>
        O useState recebe um valor inicial como argumento, após declararmos uma constante que armazena
        um estado e também uma função para atualizá-lo. E então ele retorna um array com o valor atual
        do estado e uma função que o atualiza. Como no exemplo:
      </p>

      <img src={stateCode} alt="useState" />

      <p>
        O código acima, executa a simples ação de atualizar um elemnto elemento na
        tela. Declaramos a variável <code>count</code> e a função <code>setCount</code>,
        com o intuito de atualizar a <code>count</code>.
        Ao clicar no botão, nossa variável <code>count</code> é atualizadam através da função
        <code>setCount</code> que setamos e em seguida é exibida dentro do próprio botão.
      </p>
      <p>
        Código em execução:
      </p>

      <StateDemo />

      <h3>Casos de uso</h3>
      <p>
        Agora que entendemos sua sintaxe, vamos ver alguns casos de uso do <code>useState</code>.
        Um caso bastante comum é a atualização de um input de texto, seja para validação de formulário
        armazenamnto dovalor digitado, ou mecanismos de busca. Um exemplo:
      </p>

      <img src={stateInput} alt="" />

      <p>Nesse exemplo, declaramos o estado de valor e atualizavamos o mesmo cada vez que o input era
        alterado, através da função <code>handleChange</code>.
      </p>
    </section>
  )
}

export default State
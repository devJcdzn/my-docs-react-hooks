import '../sections.scss'

import Step1 from '../../assets/step-stepuseContext1.png';
import Step2 from '../../assets/step2.png';
import Step3 from '../../assets/step3.png';

interface ContextProps {
  id: string
}

const SectionContext = (props: ContextProps) => {
  return (
    <section id={props.id}>
      <h1 className="section-title">useContext</h1>
      <p>
        O hook <code>useContext</code>, é um padrão essencial a ser empregado nos nossos
        queridinhos projetos em React e NextJs. Especialmente se você tem aquelas props
        comuns que deseja reutilizar em seus componentes e acaba escrevendo muitas props
        duplicadas.
      </p>
      <p>
        Em um exemplo básico se quisermos utilizar dados de um usuário entre diversos
        componentes, ao invés de ficar repetindo as props, podemos apenas usar o recurso de
        contexto que já vem inserido no React.
      </p>

      <p>Primeiramente, temos que criar nosso contexto com React.createContext()</p>
      <img src={Step1} alt="" className='steps' />

      <p>Depois envolvemos o App ou Componete inteiro dentro de um provider</p>
      <img src={Step2} alt="" className='steps' />

      <p>Assim, no código acima, o recurso é compartilhado para todos os filhos
        do componente, basta ser atrubuído para o atributo <code>value</code>.
        Em seguida podemos consumir esse contexto em nossos componentes individuais
        com o hook <code>useContext</code>.
      </p>
      <img src={Step3} alt="" className='steps' />

      <p>Como conclusão, essa é uma forma de tornar seu código mais limpo evitando a necessidade
        de utilizar várias e várias props.
      </p>
    </section>
  )
}

export default SectionContext;
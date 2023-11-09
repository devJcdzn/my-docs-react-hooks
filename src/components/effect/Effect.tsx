import '../sections.scss';
import useEffectDemo from '../../assets/useEffectDemo.png';

interface EffectProps {
  id: string
}

const Effect = (props: EffectProps) => {
  return (
    <section id={props.id}>
      <h1 className="section-title">useEffect</h1>
      <p>Partindo para o segundo Hook mais utilizado em aplicações react
        temos agora o <code>useEffect</code>. Ele recebe uma função como parâmetro
        e também pode receber um array de variáveis para controlá-lo.
      </p>
      <p>O seu primeiro ponto é que ele veio pra substituir os diversos ciclos de
        vida como <code>componentDidMount</code> e ect. Então esse hook functiona
        como um lifeCycle.
      </p>
      <p>
        Imagine que exista uma API que nos retorna uma lista de produtos baseado no
        nome que passamos, em palavras mais simples um buscador de produtos.
        O <code>useEffect</code> recebe como primeiro parâmetro uma função que será
        executada ao renderizar do componente. Então é o lugar quase perfeito para
        trabalharmos com requisições.
      </p>
      <p>
        Dessa maneira, basta escrevermos a função passada a ele, assim toda vez que
        a página for atualizada o <code>useEffect</code> será executado novamente.
      </p>
      <p>
        Sua principal beleza é que podemos definir quando queremos que a função seja
        executada de novo. É só passarmos como segundo parâmetro um array com variáveis
        que serão responsáveis por controlar o hook.
      </p>
      <p>
        Seguindo o exemplo do buscador de produtos, podemos simplesmente passar um array
        com uma variável qua atualiza o input fornecido pelo usuário e toda vez que o
        input for atualizado podemos requisitar a API e trazer os resultados.
      </p>
      <p>Dessa forma, podemos obervar sua seguinte sintaxe:</p>

      <img src={useEffectDemo} alt="" />

      <p>Existe também a opção de executarmos o código uma única vez que renderizado em 
        tela, teriamos apenas de passar um array vazio como segundo parâmetro.  
      </p>
    </section>
  )
}

export default Effect
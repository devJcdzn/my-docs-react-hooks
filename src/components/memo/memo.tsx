
interface MemoProps {
  id: string
}

const Memo = (props: MemoProps) => {
  return (
    <section id={props.id}>
      <h1 className="section-title">useMemo()</h1>
      <p>Depos de observarmos todos os hooks mais famoso, caímos em outro muito
        interessante, o <code>useMemo</code>, que utiliza uma técnica já conhecida
        chamada <code>memoization</code>, que consiste em guardar o valor de retorno
        de uma função a partir dos seus parâmetros.
      </p>
      <p>
        Simplificando esse pensamento, se tivessemos uma função <code>divisão(6, 3)</code>
        que nos retorna 2, caso chamássemos essa função novamente com esses mesmos parâmetros
        ela não necessitaría de recalcular, pois o resultado já estaria armazenado.
      </p>
      <p>Sua sintáxe é bem simples, como primeiro parâmetro, recebe uma função
        na qual o retorno será armazenado na variável. Já o segundo, é um array de
        dependências, como exemplo uma variável que define quando algo será renderizado.
      </p>
    </section>
  )
}

export default Memo
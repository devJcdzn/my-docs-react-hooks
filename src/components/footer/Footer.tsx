import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="left-content">
        <div className="logo">
          <a href="https://react.dev/reference/react/hooks" target='_blank' >React Hooks Docs</a>
        </div>
      </div>
      <div className="right-content">
        <p>Todos os direitos reservados por <span>Jean Carlos</span></p>
        <p>All rights reserved, 2023 &copy;</p>
      </div>
    </footer>
  )
}

export default Footer
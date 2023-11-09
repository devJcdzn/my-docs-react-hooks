import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="#">
          React Hooks
        </a>
      </div>
      <div className="nav">
        <li><a href="#state">useState</a></li>
        <li><a href="#effect">useEffect</a></li>
        <li><a href="#context">useContext</a></li>
        <li><a href="#memo">useMemo</a></li>
      </div>
      <a href="https://react.dev/reference/react/hooks" target='_blank' className="docs-button">Oficial Docs</a>
    </header>
  )
}

export default Header
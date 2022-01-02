import * as React from "react"
import { Link } from 'gatsby';
import { Title } from './Layout.sc';

const Layout = ({ pageTitle, size, children }) => {
  return (
    <div>
      <Title size={size}>{pageTitle}</Title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout;

import PropTypes from 'prop-types';
import * as L from './Layout.js'
import Header from './components/header/Header.jsx'
import SideBar from './components/header/sidebar/SideBar.jsx'

const Layout = ({children}) => {
  return (
    <L.LayountContainer>
        <Header/>
        <L.Main>
          <SideBar/>
          {children}
        </L.Main>
    </L.LayountContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout

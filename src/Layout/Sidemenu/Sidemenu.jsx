import React from 'react'
import logo from '../../assests/images/logo.png'
import { NavLink } from 'react-router-dom'
import { PiHouse, PiUserSquare, PiBookOpenLight, PiChartBarLight, PiFlagPennantLight } from "react-icons/pi";
function Sidemenu(props) {

  const sideMenuList = [
    {
      id: 1,
      path: '/',
      name: 'Home',
      icon: <PiHouse />,
    },
    {
      id: 2,
      path: '/About',
      name: 'About Me',
      icon: <PiBookOpenLight />,
    },
    {
      id: 3,
      path: '/Service',
      name: 'Service',
      icon: <PiChartBarLight />,
    },
    {
      id: 4,
      path: '/Skills',
      name: 'Skills',
      icon: <PiFlagPennantLight />,
    },
    {
      id: 5,
      path: '/Portfolio',
      name: 'Portfolio',
      icon: <PiFlagPennantLight />,
    },
    {
      id: 6,
      path: '/Contact',
      name: 'Contact',
      icon: <PiUserSquare />,
    }
  ]


  return (
    <div>
      <div className='side-hearder'>
        <img src={logo} alt='' className='side-header-logo' /> <span>Srikanth</span>
      </div>
      <div className='side-menu-list'>
        {sideMenuList.map(item => (
          <NavLink to={item.path} className={props.sidemenuActive === item.id ? `side-menu-item activemenu` : 'side-menu-item'} onClick={() => props.setsidemenuActive(item.id)}>
            <span>{item.icon}</span>
            <div className='side-menu-name'>
              {item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidemenu
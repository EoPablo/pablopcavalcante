import styles from './header.module.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/cvcnt-rbg.png';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';



const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <header className={styles.header}>

        <Link to='/'>
            <img src={Logo} alt="" className={styles.img} />
        </Link>

        <nav 
            className={`${styles.nav} ${menuOpen ? styles.showMenu : ''}`}
            onClick={toggleMenu}
        >
            <Link to='/' className={styles.menu_nav}>
                Home
            </Link>

            <Link to='/sobre' className={styles.menu_nav}>
                Sobre
            </Link>

            <Link to='/cursos' className={styles.menu_nav}>
                Cursos
            </Link>

            <Link to='/projetos' className={styles.menu_nav}>
                Projetos
            </Link>
        </nav>

         <div 
         className={styles.menuButton} 
         onClick={toggleMenu}
         >
            <IoMenu className={styles.icon_menu}/>
         </div>



    </header>
  )
}

export default Header
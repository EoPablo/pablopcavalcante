import styles from './home.module.css';
import Me from '../../assets/test.jpg';
import HeaderSocials from '../../components/socials/HeaderSocials';
import { FaCloudDownloadAlt } from "react-icons/fa";


const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.into}>
        <img src={Me} alt="Foto de perfil" className={styles.home_img}/>
        <h1 className={styles.home_name}>Pablo Cavalcante</h1>
        <span className={styles.home_education}>Futuro Web Developer</span>

        <HeaderSocials/>

        <a href="/cv_pablocavalcante.pdf" download="curriculo-pablo_cavalcante.pdf" className={styles.btn}>
          Download CV
          <FaCloudDownloadAlt className={styles.icon_cv}/>
        </a>
        
      </div>
    </section>
  )
}

export default Home
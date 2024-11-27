import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from './HeaderSocials.module.css';

const HeaderSocials = () => {
  return (
    <div className={styles.home_socials}>
        <a href="https://github.com/EoPablo" className={styles.home_social_link} target="_blank">
            <FaGithub size={25} />
        </a>

        <a href="https://www.linkedin.com/in/pablopcavalcante/" className={styles.home_social_link} target="_blank">
            <FaLinkedin size={25} />
        </a>

        <a href="https://api.whatsapp.com/send/?phone=5511956291507&text&type=phone_number&app_absent=0" className={styles.home_social_link} target="_blank">
            <FaWhatsapp size={25} />
        </a>
    </div>
  )
}

export default HeaderSocials
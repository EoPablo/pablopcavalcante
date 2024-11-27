import styles from './sobre.module.css';
import Image from '../../assets/undraw_programming_re_kg9v.svg';
import ScrollDown from '../../components/scrolldown/ScrollDown';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";



const Sobre = () => {
  return ( 

    <section className={styles.about}>
      <div className={styles.img}>
        <img src={Image} alt="Garoto programando" />
      </div>

      <div className={styles.about_container}>
        <h1 className={styles.heading}>Sobre Mim</h1>
        <p>
          Olá! Me chamo Pablo Cavalcante, sou estudante de Ciências da Computação pela Anhembi Morumbi. Pretendo seguir carreira como Web Development, tenho experiências com ferramentas como: HTML / CSS / Javascript / ReactJS / Typescript entre outras. Atualmente estou 
          ampliando meus conhecimentos no universo Fullstack, onde aprendo a criar soluções completas, do front ao backend, buscando unir lógica e criatividade na criação de soluções inovadoras.
        </p>
      </div> 
      
      <ScrollDown/>

      <div className={styles.card_section}>
        <div className={styles.card_title_content}>
          <h2 className={styles.card_title}>Techs</h2>
        </div>
        
        <div className={styles.icons}>
          <FaHtml5 className={styles.icons_size}/>
          <FaCss3Alt className={styles.icons_size}/>
          <FaJs  className={styles.icons_size}/>
          <GrReactjs  className={styles.icons_size}/>
          <SiTypescript   className={styles.icons_size}/>
          <FaPhp    className={styles.icons_size}/>
        </div>
      </div>
    </section>

    
    
)
}

export default Sobre
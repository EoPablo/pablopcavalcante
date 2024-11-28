import styles from './projetos.module.css';

import Image from '../../assets/Monsters - Error 404.png';
import LoginPage from '../../assets/login_page.png';
import Years from '../../assets/years.png';
import frase from '../../assets/Desktop - 3.png';
import Jogo from '../../assets/jogo.png';
import Todo from '../../assets/todo.png';

import { FaHtml5, FaCss3Alt, FaReact  } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { ReactNode } from 'react';

interface Projetos {
  id?: number;
  image: string;
  title: string;
  description?: ReactNode[];
  review?: string;
}

const projetos: Projetos[] = [
  {
    id: 1,
    image: Todo,
    title: 'Tecnologias Utilizadas',
    description: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript/>],
    review: 'https://eopablo.github.io/pablocavalcante/projetos/Lampada_CSS/index.html',
  },
  {
    id: 2,
    image: LoginPage,
    title: 'Page Login',
    description: [<FaHtml5 />, <FaCss3Alt />],
    review: 'https://eopablo.github.io/page-login/?',
  },
  {
    id: 3,
    image: frase,
    title: 'Gerador de Frases',
    description: [<FaHtml5 />, <FaCss3Alt />, <FaReact />, <BiLogoTypescript />],
    review: 'https://eopablo.github.io/gerador_frases/',
  },
  {
    id: 4,
    image: Jogo,
    title: 'Jogo da Velha',
    description: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript/>],
    review: 'https://eopablo.github.io/pablocavalcante/projetos/Jogo%20da%20Velha/index.html',
  },
  {
    id: 5,
    image: Years,
    title: 'Calculadora Idade',
    description: [<FaHtml5 />, <FaCss3Alt />],
    review: 'https://calculadora-idade.netlify.app/',
  },
  {
    id: 6,
    image: Image,
    title: 'Links | Redes Sociais',
    description: [<FaHtml5 />, <FaCss3Alt />],
    review: 'https://fm-social-links-slt.netlify.app/',
  },
];

const Projetos = () => {
  return (
    <section className={styles.projects}>
      <h1 className={styles.title}>Meus Projetos</h1>
      <div className={styles.teste}>
        {projetos.map(projeto => (
          <div key={projeto.id} className={styles.card}>
            <a href={projeto.review} target='_blank'>
              <img src={projeto.image} alt='Capa' className={styles.card_image} />
            </a>

            <div className={styles.card_content}>
              <h3 className={styles.card_title}>{projeto.title}</h3>
              <p className={styles.card_description}>
                {projeto.description?.map((desc, index) => (
                  <span key={index}>{desc}</span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;

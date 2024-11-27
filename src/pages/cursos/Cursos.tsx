import styles from './cursos.module.css';

interface Curso {
  id: number;
  title: string;
  institution: string;
  description: string;
  certificateLink?: string;  // link opcional para o certificado
}

const cursos: Curso[] = [
  {
    id: 1,
    title: 'Fullstack Pro',
    institution: 'Sujeito Programador',
    description: 'O curso é dividido em módulos, cada um focado em uma tecnologia ou aspecto do desenvolvimento FullStack.',
    certificateLink: 'em_breve',
  },
  {
    id: 2,
    title: 'Web Frontend',
    institution: 'Udemy',
    description: 'O curso é dividido em módulos, cada um focado em uma tecnologia ou aspecto do desenvolvimento FullStack.',
    certificateLink: '/webfrontend.pdf',
  },
  {
    id: 3,
    title: 'JavaScript - Básico ao Avançado',
    institution: 'Udemy',
    description: 'O curso é dividido em módulos, cada um focado em uma tecnologia ou aspecto do desenvolvimento FullStack.',
    certificateLink: '/javascript.pdf',
  },
  {
    id: 4,
    title: 'React do Zero a Maestria',
    institution: 'Udemy',
    description: 'O curso é dividido em módulos, cada um focado em uma tecnologia ou aspecto do desenvolvimento FullStack.',
    certificateLink: '/react-zero-maestria.pdf',
  },
  {
    id: 5,
    title: 'Alguma Formação',
    institution: 'Colocar alguma',
    description: 'O curso é dividido em módulos, cada um focado em uma tecnologia ou aspecto do desenvolvimento FullStack.',
    certificateLink: 'em_breve',
  },
  {
    id: 6,
    title: 'Alguma Formação',
    institution: 'Colocar alguma',
    description: 'O curso é dividido em módulos, cada um focado em uma tecnologia ou aspecto do desenvolvimento FullStack.',
    certificateLink: 'em_breve',
  },
];

const Cursos = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Cursos</h1>

      <div className={styles.card_container}>
        {cursos.map(curso => (
          <div key={curso.id} className={styles.card}>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Curso: {curso.title}</h2>
              <h2 className={styles.card_subtitle}>Instituição: {curso.institution}</h2>
              <h2 className={styles.card_subtitle}>Descrição:</h2>
              <p className={styles.card_description}>{curso.description}</p>
              {curso.certificateLink && (
                <div className={styles.card_btn}>
                  <a 
                  href={curso.certificateLink} 
                  // download 
                  className={styles.btn} 
                  target='_blank'
                  >
                    Certificado
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cursos;

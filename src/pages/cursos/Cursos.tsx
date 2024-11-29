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
    title: 'Ciências da Computação',
    institution: 'Anhembi Morumbi',
    description: 'Atualmente estou no 6º Semestre e a faculdade me proporcionou a atuar no desenvolvimento de programas de informática, criar ferramentas de informática, manter redes de computadores e muito mais.',
    // certificateLink: 'em_breve',
  },
  {
    id: 2,
    title: 'Web Frontend',
    institution: 'Udemy',
    description: 'Este curso abrange as principais tecnologias para se tornar um programador web front-end: HTML, CSS e Javascript.',
    certificateLink: '/webfrontend.pdf',
  },
  {
    id: 3,
    title: 'JavaScript - Básico ao Avançado',
    institution: 'Udemy',
    description: 'O curso tem uma didática que mescla teoria com prática, para entender tudo que acontece por debaixo dos panos no JavaScript.',
    certificateLink: '/javascript.pdf',
  },
  {
    id: 4,
    title: 'React do Zero a Maestria',
    institution: 'Udemy',
    description: 'Criei projetos completos, o que significa que além do front-end, também aprendi a integração da biblioteca com o back-end',
    certificateLink: '/react-zero-maestria.pdf',
  },
  {
    id: 5,
    title: 'Administração',
    institution: 'ETEC',
    description: 'Desenvolvi habilidades e conhecimentos na área de gestão de empresas. Pois o curso prepara os alunos para atuar em diversas funções administrativas, como organização, planejamento, liderança e controle de processos',
    // certificateLink: 'em_breve',
  },
  {
    id: 6,
    title: 'Recursos Humanos',
    institution: 'ETEC',
    description: 'Aprendemos sobre recrutamento e seleção, treinamento e desenvolvimento, gestão de desempenho, legislação trabalhista, motivação e relações interpessoais no ambiente de trabalho.',
    // certificateLink: 'em_breve',
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

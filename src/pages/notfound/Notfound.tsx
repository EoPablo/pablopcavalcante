import styles from './notfound.module.css';
import Erro from '../../assets/Monsters - Error 404.png'
import { Link } from 'react-router-dom';


const Notfound = () => {
  return (
    <div className={styles.container}>
      <figure>
        <img src={Erro} alt="Imagem de Erro 404" />
      </figure>

      <p>
        Opss.... Página não encontrada :(
      </p>

      <Link to='/'>
        <button className={styles.btn}>
          <span>Go Home</span>
        </button>
      </Link>


    </div>
    
    
  )
}

export default Notfound
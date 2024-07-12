import styles from './Header.module.css'
import Logo from '../../assets/logo.png'


const Header = () => {


    return ( 
        <div className={styles.container}>
            <img src={Logo} alt="" />
        </div>
     );
}
 
export default Header;
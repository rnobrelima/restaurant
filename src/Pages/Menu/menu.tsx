import  StyleMenu  from './menu.module.scss';
import {ReactComponent as Logo} from 'assets/restaurant-svg-com.svg'

export default function Menu() {
    return (
        <main>
            <nav className={StyleMenu.menu}>
                <Logo className={StyleMenu.logo}></Logo>
            </nav>
            <header className={StyleMenu.header}>
                <div className={StyleMenu.header__text}>
                    The house of code and hamburger
                </div>
            </header>
        </main>
    )
}

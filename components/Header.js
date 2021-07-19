import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x = 2;
    return (
        <div >
            <h1 className={headerStyles.title}><span>WebDev</span> News</h1>
            <p className={headerStyles.description}>Keep updated with latest web dev news</p>
        </div>
    )
}

export default Header

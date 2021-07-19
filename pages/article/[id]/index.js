import {useRouter} from 'next/router'
import Link from 'next/Link'
import {server} from '../../../config/index'

import articleStyles from '../../../styles/Article.module.css'
import Meta from '../../../components/Meta'
const article = ({article}) => {
    // const router = useRouter()
    // const{id} = router.query
    console.log(article)
    return (
        <div>
            <Meta/>
            <div className={articleStyles.cardContainer}>
           <h1>{article.title}</h1>
           <p>{article.body}</p>
           <br/>
           <Link  href='/'><a className={articleStyles.btnHome}> Go Back</a></Link>
           </div>
        </div>
    )
}
export default article


/** We are using data fetching methods provided by next js to pages */
// we will be using getServerSideProps fetch data at time of request
// gatStaticProps which fetch data at build time

export const getStaticProps = async(context)=>{
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()
    
    return{
        props:{
            article
        }
    }
}
export const getStaticPaths = async ()=>{
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map( article => article.id)

    const paths = ids.map(id=>({params: {id: id.toString()}}))

    return{
        paths,
        fallback : false
}
}
/**
export const getServerSideProps = async(context)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return{
        props:{
            article
        }
    }
}
*/
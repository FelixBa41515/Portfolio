import {CSSProperties, FunctionComponent} from 'react'


interface PageNotFoundProps {

}

const heroStyles: CSSProperties = {
    background: `
        linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)), 
        url('/assets/images/notFound.jpg')`,
    backgroundSize: '100% auto',
    backgroundPosition: 'top',
    width: '100vw',
    height: '100vh',
    marginTop: '-2rem',

}
const PageNotFound: FunctionComponent<PageNotFoundProps> = () => {
    return (
        <>
            <div style={heroStyles}></div>
        </>
    )
}

export default PageNotFound

import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import boots from '../../assets/bootstrap.png'
import exps from '../../assets/express.png'
import react from '../../assets/react.png'
import dock from '../../assets/docker.png'
import sql from '../../assets/mysql.png'
import github from '../../assets/github.png'

function FullStack2(){
    return(
        <div className="screenCard3">
            <div>
                <div className="full">SPOTIFY WEBSITE</div>
                <h2>spotify mock website </h2>
                <h5>*text may be greatly exaggerated  </h5>
                <br />
                <h1>software and tools</h1>
                <br />
                <div>
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={js} alt="" />
                    <img src={boots} alt="" />
                    <img src={exps} alt="" />
                    <img src={react} alt="" />
                    <img src={dock} alt="" />
                    <img src={sql} alt="" />
                    <img src={github} alt="" />
                    <h2>some of these are also used to make this site!</h2>
                </div>
            </div>
        </div>
    )
}
export default FullStack2
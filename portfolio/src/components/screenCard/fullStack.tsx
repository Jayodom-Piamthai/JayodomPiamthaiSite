import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import boots from '../../assets/bootstrap.png'
import exps from '../../assets/express.png'
import react from '../../assets/react.png'
import dock from '../../assets/docker.png'
import sql from '../../assets/mysql.png'
import github from '../../assets/github.png'

function FullStack(){
    return(
        <div className="screenCard3">
            <div>
                <div className="full">フルスタック開発</div>
                <div className="wow"></div>
                <h2>“from front end to back end,from designing to development<br></br>
                full stack-full baked. its just a piece of cake for me!* ”</h2>
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
export default FullStack
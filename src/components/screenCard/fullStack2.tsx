import spotReview from '../../assets/spotReview.mp4'
import schema from '../../assets/schema.png'


function FullStack2(){
    return(
        <div className="screenCard3">
            <div>
                <br /><br /><br />
                <div className='titleHead'>
                    <h1 className='title'>-- SPOTIFY WEBSITE --</h1> <br />
                    <h2>spotify mock website made with php whih mysql database that is able to search for music <br />
                        login to user account and save history for music listening
                    </h2>
                </div>
                <br />
                <br />
                <div>
                <video className='fullThumb' controls>
                    <source src={spotReview}></source>
                </video>
                <img src={schema} alt=""  className='fullThumb'/>
                </div>
            </div>
        </div>
    )
}
export default FullStack2
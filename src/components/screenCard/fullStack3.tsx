import ceSite from '../../assets/ceSite.png'
import ceFig from '../../assets/ceFig.png'


function FullStack2(){
    return(
        <div className="screenCard3">
            <div>
                <br /><br /><br />
                <div className='titleHead'>
                    <h1 className='title'>-- KMITL PCC WEBSITE --</h1> <br />
                    <h2>a web page advertising KMITL PCC computer engineering campus made by a small team of developer <br />
                        with my contribution in front end-design and development
                    </h2>
                </div>
                <br />
                <br />
                <div>
                <img src={ceSite} alt="" className='fullThumb' />
                <img src={ceFig} alt="" className='fullThumb' />
                </div>
            </div>
        </div>
    )
}
export default FullStack2
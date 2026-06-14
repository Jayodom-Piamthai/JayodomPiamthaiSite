import tumorReview from '../../assets/tumorScanTest.mp4'


function FullStack2(){
    return(
        <div className="screenCard3">
            <div>
                <br /><br /><br />
                <div className='titleHead'>
                    <h1 className='title'>-- Brain Tumor Scanner web app --</h1> <br />
                    <h3>tools used: React.js,FastAPI,PyTorch,</h3>
                    <h2>Simple web application for detecting tumor inside brain x-ray scan images with high accuracy
                        from self-trained pytorch Deep learning Convolution AI model
                    </h2>
                </div>
                <br />
                <br />
                <div>
                <video className='fullThumb' controls>
                    <source src={tumorReview}></source>
                </video>
                </div>
            </div>
        </div>
    )
}
export default FullStack2
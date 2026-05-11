import './screenCards.css'
import Pytorch from '../../assets/Pytorch_logo.png'
import Keras from '../../assets/keras-logo.png'
import Tumor1 from '../../assets/ai-model/tumor01.png'
import Tumor2 from '../../assets/ai-model/tumor02.png'
import Tumor3 from '../../assets/ai-model/tumor03.png'
import personality1 from '../../assets/ai-model/personality01.png'
// import personality2 from '../../assets/ai-model/personality02.png'
import personality3 from '../../assets/ai-model/personality03.png'

function Security(){
    return(
    <div className='backgrid'>
    <div className="screenCard4">
        <h3 className='titleBlock'> <span className='fancy'>Artificial intelligence </span></h3>
        <div className='textBox'>
            <h2>researching deep learning model for classification tasks with CSV data and image data with framework such as:</h2>
            <img src={Pytorch} alt="" />
            <img src={Keras} alt="" />
            <h1 className='middleText'> past model</h1>
            <div className='displayBox'>
                <div>
                    <div>
                        <img src={Tumor1} alt="" />
                        <img src={Tumor2} alt="" />
                        <img src={Tumor3} alt="" />
                    </div>
                    <h3>brain tumor classification</h3>
                </div>
                <div>
                    <img src={personality1} alt="" />
                    {/* <img src={personality2} alt="" /> */}
                    <img src={personality3} alt="" />
                    <h3>personality classification</h3>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default Security
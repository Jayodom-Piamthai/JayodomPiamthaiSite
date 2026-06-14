import red1 from '../../assets/REDACTEDimg/Screenshot 2026-06-14 114836.png'
import red2 from '../../assets/REDACTEDimg/Screenshot 2026-06-14 114907.png'
import red3 from '../../assets/REDACTEDimg/Screenshot 2026-06-14 114930.png'
import red4 from '../../assets/REDACTEDimg/Screenshot 2026-06-14 115526.png'
import red5 from '../../assets/REDACTEDimg/Screenshot 2026-06-14 115556.png'
import red6 from '../../assets/REDACTEDimg/Screenshot 2026-06-14 115622.png'
import red7 from '../../assets/REDACTEDimg/Screenshot 2026-06-14 115633.png'


function FullStack2(){
    return(
        <div className="screenCard3">
            <div>
                <br /><br /><br />
                <div className='titleHead'>
                    <h1 className='title'>-- Web app for testing internal application --</h1> <br />
                    <h3>tools used: Angular , .NET 8 , PostgreSQL , Azure DevOps , Azure AD , Selenium , AWS cloud
                    </h3>
                    <h2>Web application for testing ETL functionalities of internal application deployed inside AWS cloud
                         via DevOps's CI/CD system with user auth system for internal user <br/> 
                         made for ESSILORLUXOTTICA Internship

                    </h2>
                </div>
                <br />
                <h3>*company data redacted*</h3>
                <div>
                     <img src={red1} alt="" className='halfThumb' />
                     <img src={red2} alt="" className='halfThumb' />
                     <img src={red3} alt="" className='halfThumb' />
                     <img src={red4} alt="" className='halfThumb' />
                     <img src={red5} alt="" className='halfThumb' />
                     <img src={red6} alt="" className='halfThumb' />
                     <img src={red7} alt="" className='halfThumb' />
                </div>
            </div>
        </div>
    )
}
export default FullStack2
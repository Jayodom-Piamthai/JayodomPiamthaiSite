import './screenCards.css'
function AboutMe(){
    return(
    <div className='backgrid'>
    <div className="screenCard2">
        <div className='nameBanner'>
            <h2>JAYODOM</h2>
            <h3>"ACE"</h3>
            <h2>PIAMTHAI</h2>
        </div>
        <div className='doubleContainer'>
            <div id='block1'>
                <div className='blackBox'>
                    <h2>so who am i?</h2>
                    <h2>jayodom piamthai is a humble little software developer 
                        from Thailand with experience in full-stack web development ,
                         cyber security , digital designing , game development and more!
                           this website is made in React.js as a testament to my skills 
                           and as a way to advertise myself to the whole wide world of web!</h2>
                </div>
            </div>
            <div id='block2'>
                <div className='blackBox'>
                    <h2>and what can i offer you?</h2>
                    <h2>i can offer you my skills in designing fonts front end pages, 
                        database schema and such. my skills in developing websites 
                        ,application and software. my  skills in cybersecurity and 
                        digital forensics. and also a nice little hug if you’d like</h2>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default AboutMe
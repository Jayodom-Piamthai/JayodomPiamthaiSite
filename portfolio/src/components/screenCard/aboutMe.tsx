import './screenCards.css'
function scrollToBottom() {
  window.scrollTo({top:document.body.scrollHeight, left: 0,behavior: 'smooth'});
}
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
                    <h1>INTRODUCTION</h1>
                    <h2><span id='name'>jayodom piamthai</span> is a computer engineer grad software developer 
                        from Thailand with experience in full-stack web development,
                        Software development, digital designing, AI development, game development and more! <br />
                           this website is made in React.js to showcase my skills and past works 
                           and as a way to advertise myself to the whole wide world of web!</h2>
                    <div className='blackButton'> 
                        <h2>scroll down to learn more!</h2>
                    </div>

                </div>
            </div>
            <div id='block2'>
                <div className='blackBox'>
                    <h1>and what can i offer?</h1>
                    <h2>- Fullstack dev & design <br />
                    - AI model dev <br />
                    - Dev Ops <br />
                    - Software dev <br />
                    - Game dev</h2> <br />
                    <div className='blackButton2'> 
                        <h2 onClick={scrollToBottom}>interested? <br />- check out my contact -</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default AboutMe
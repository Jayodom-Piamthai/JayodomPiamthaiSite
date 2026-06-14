import './screenCards.css'
function scrollToTop() {
  window.scrollTo({top:0, left: 0,behavior: 'smooth'});
}
function End(){
    return(
    <div className='backgrid'>
    <div className="screenCard5">
        <h2>feel free to CONTACT me</h2>
        <span className='mail' id='link'><h1>acejayodom@hotmail.com</h1></span>
        <a href="https://www.linkedin.com/in/jayodom-piamthai-001637318/" target="_blank" id='link'>&lt; Linkedin &gt;</a>

        <div className='hexagon'></div>
        <div className='hexagon2'></div>
        <div className='return' onClick={scrollToTop}>
            <h1>&lt;&lt;RETURN TO THE TOP&gt;&gt;</h1>
        </div>

        <h3>Generously hosted by: GITHUB</h3>
        <h3>made with boredom and inspiration from <span>THAILAND</span></h3>
        <div> --- </div>
        <h3>JAYODOM "ACE" PIAMTHAI © 2026</h3>

        {/* <div className='uptop'><a href="#top">&lt; click to return the top &gt; </a></div> */}
    </div>
    </div>
    )
}
export default End
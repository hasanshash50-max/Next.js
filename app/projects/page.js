export default function()
{
    return(
        <div style={{marginTop:"24px" , width:"100%"}}>  
            <h1 style={{
                position:"absolute",
                top:"160px",
                left:"17px",
                fontWeight:"620",
                fontSize:"20px"
            }}>Projects</h1>
            <div style={{Width:"100%"}}>
                <span style={{
                    position:"absolute",
                    top:"200px",
                    left:"13px",
                    padding:"10px",
                    textAlign:"center",
                    background:"gray",
                    width:"270px"}}>
                    Project 1 <br></br> <u style={{textDecoration:"none",fontSize:"13px"}}>learn html language</u></span>
                <span id="two">Project 2<br></br> <u style={{textDecoration:"none",fontSize:"13px"}}>learn css language</u></span>
                <span id="three">Project 3<br></br> <u style={{textDecoration:"none",fontSize:"13px"}}>learn javascript language</u></span>
                <span id="four">Project 4<br></br> <u style={{textDecoration:"none",fontSize:"13px"}}>learn nextjs language</u></span>
            </div>
        </div>
    )
}
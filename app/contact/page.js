import Link from 'next/link'
export default function()
{
    return(
        <div style={{marginTop:"24px"}}>  
           <h1 style={{
                position:"absolute",
                top:"160px",
                left:"17px",
                fontWeight:"620"
            }}>Contact</h1>
            <p style={{
                position:"absolute",
                top:"200px",
                left:"17px",
                fontSize:"13px"
            }}>Feel free to reach out to me at <Link href="MAILTO:hasanshash50@gmail.com"
            style={{
                color:"blue",
                textDecoration:"underline"
            }}>hasanshash50@gmail.com</Link></p>
        </div>
    )
}
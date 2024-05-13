import {Link} from 'react-router-dom';

export default function Footer(){
    return (
        <footer>

            <div className='first-div-footer'>
            <p style={{margin: 0, fontSize: 20, fontFamily: 'gabriola', color:'orange'}}><b>RUBJ-TANOs</b></p>
            </div>

            <div className="div-footer second-div-footer">
                <Link className="p-footer p-highlight" to="/">Home</Link>
                <Link className="p-footer p-highlight" to="/Privacy">Privacy policy</Link>
                <Link className="p-footer p-highlight" to="/Termini">Termini e condizioni</Link>
            </div>

            <div>
                <hr/>
                <div className="div-footer third-div-footer">
                <p className="p-footer">© 2023-2024 DBLC s.r.l. All rights reserved.</p>
                <p className="p-footer" style={{textAlign:"center"}}>Designed in Piedmont</p>
                <p className="p-footer" style={{textAlign:"right"}}>Crafted by Vatano and Rubjeka</p>
                </div>
            </div>
        </footer>
    )
}
export default function ChiSiamo() {
    const styles = {
        div: {
            margin: '30px',
        },
    };

    return(
        <div style={styles.div}>
            <h1>Chi Siamo?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <center><h3>Ed ecco a voi la nostra Mascotte... GINO PANINO!!</h3><img src="/gino.jpg" style={{height:"600px", width:"1056px"}}/></center>
        </div>
    );
}
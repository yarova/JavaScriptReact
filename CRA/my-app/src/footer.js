
function Footer() {
    var now = new Date().toString();
    return(
        <div className="footer">
            <p>My First App was launched {now}</p>
        </div>
    );
}

export default Footer;
{/*import css */}
import "./mailList.css";

const MailList = () => {
    return (
        <div className="mailList">
            <h1 className="mailTitile">Save time, save money!</h1>
            <span className="mailDesc">Sign up and we'll send the best  deals to you</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" className="inputText" />
                <button>Subscribe</button>
            </div>
        </div>
    )
};

export default MailList;
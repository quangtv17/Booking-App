{/*import css và dữ liệu data json */}
import "./footer.css";
import footerData from "../../data/footer.json";

const Footer = () => {
	return (
        <div className="footer">
            <div className='footerLists'>
                {/*Truy cập data json và render ra value có sẵn */}
                {footerData.map((x) => (
                    <div key={x.col_number}>
                        <ul className="footerList">
                            {/*Truy cập data json theo id và render value của mỗi id */}
                            {x.col_values.map((val,id)=>(
                                <li key={id} className="footerListItem">{val}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
	)
};

export default Footer
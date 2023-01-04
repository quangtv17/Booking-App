					{/*Truy cập data json và render dữ liệu */}
{/*import css và dữ liệu data json */}
import hotelData from "../../data/type.json";
import "./propertyList.css";

const PropertyList = () => {
	return (
		<div className="hotelType">
            {/*Truy cập data json và render dữ liệu */}
			{hotelData.map((a, index) => (
                <div className="hotelTypeItem" key={index}>
                    <img src={a.image} className="hotelTypeImg"></img>
                    <div className="hotelTypeTitle">
                        <h1>{a.name}</h1>
                        <h2>{a.count}</h2>
                    </div>
                </div>
            ))}
		</div>
	);
};

export default PropertyList;
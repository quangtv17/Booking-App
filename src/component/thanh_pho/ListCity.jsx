{/*import css và dữ liệu data json */}
import "./listCity.css";
import CityData from "../../data/city.json";

const ListCity = () => {
	return (
		<div className="listCity">
            {/* Truy cập dữ liệu json và render ra value */}
			{CityData.map((x, index) => (
                <div className="listCityItem" key={index}>
                    <img src={x.image} className="listCityImg"></img>
                    <div className="listCityTitle">
                        <h1>{x.name}</h1>
                        <h2>{x.subText}</h2>
                    </div>
                </div>
            ))}
		</div>
	);
};

export default ListCity;

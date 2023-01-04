{/*import các component, css và thư viện icon*/}
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../component/navbar/Navbar";
import NavbarItem from "../../component/navbar/NavbarItem";
import Footer from "../../component/footer/Footer";
import detailData from "../../data/detail.json";
import "./detail.css";

const Detail = () => {
  return (
    <div>
      {/* Lấy lại component siderbar và footer */}
      <Navbar />
      <NavbarItem />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="btnBookNow">Reserve or Book Now!</button>
          {/*Truy cập data json để render value đã cho trước */}
          <h1 className="hotelTitle">{detailData.name}</h1>

          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>{detailData.address}</span>
          </div>

          <span className="hotelDistance">{detailData.distance}</span>
          <span className="hotelPrice">{detailData.price}</span>

          {/*Truy cập array photos để render img */}
          <div className="hotelImages" key={detailData.photos}>
            {detailData.photos.map((val, id) => (
              <div className="hotelImgWrapper">
                <img key={id} src={val} alt="" className="hotelImg"/>
              </div>
            ))}
          </div>
                
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              <h1 className="hotelTitle">{detailData.title}</h1>
              <p className="hotelDesc">{detailData.description}</p>
            </div>

            <div className="hotelDetailPrice">
              <h1>Perfect for a 9-night stay!</h1>

              <span>
                Located in the real heart of Krakow,
                this property has an excellent location score of 9.8!
              </span>

              <h2>
                <b>${detailData.nine_night_price}</b> (9 night)
              </h2>

              <button>Reserve or Book Now!</button>
            </div>
          </div>
            
        </div>
      </div>
      <Footer className="footer"/>
    </div>
  )
};

export default Detail;

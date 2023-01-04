{/*import component và css */}
import Header from "../../component/header/Header";
import PropertyList from "../../component/khach_san/PropertyList";
import ListCity from "../../component/thanh_pho/ListCity";
import Navbar from "../../component/navbar/Navbar";
import NavbarItem from "../../component/navbar/NavbarItem";
import HotelProperties from "../../component/hotel_properties/HotelProperties";
import MailList from "../../component/mailList/MailList";
import Footer from "../../component/footer/Footer";
import "./home.css";

const Home = () => {
	return (
		<div>
			{/*Phần đầu trang */}
			<Navbar />
			<NavbarItem />
			<Header />

			{/*Phần thân trang */}
			<div className="homeContainer">
				<ListCity />
				<h1 className="homeTitle">Browse by property type</h1>
				<PropertyList />
				<h1 className="homeTitle">Homes guests love</h1>
				<HotelProperties />
				<MailList />
			</div>
			
			{/*Phần cuối trang */}
			<Footer />
		</div>
	);
};

export default Home;

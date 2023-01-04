{/*import component và css*/}
import Navbar from "../../component/navbar/Navbar";
import NavbarItem from "../../component/navbar/NavbarItem";
import SearchList from "../../component/searchIList/SearchList";
import SearchPopup from "../../component/searchPopup/SearchPoup";
import Footer from "../../component/footer/Footer";
import "./search.css";

const Search = () => {
  return (
    <div>
      {/* Lấy lại component siderbar và footer */}
      <Navbar />
      <NavbarItem />

      <div className="listContainer">
        <div className="listWrapper">
          <SearchPopup /> {/*Tạo component render phần tìm kiếm*/}
          <div className="listResult">
            <SearchList /> {/*Tạo component render phần hiển thị danh sách hotel*/}
          </div>
        </div>
      </div>
      <Footer className="footer"/>
    </div>
  );
};

export default Search;

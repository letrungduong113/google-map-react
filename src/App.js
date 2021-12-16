import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Accordion } from "react-bootstrap";
const containerStyle = {
  width: "500px",
  height: "800px",
};

const center = {
  lat: 10.038051,
  lng: 105.7628,
};
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <LoadScript googleMapsApiKey="AIzaSyAXErPxPPKkAxqVPDiDh2T5HLV6M6Dt8II">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
        <div className="col-6">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="background-title">
                Giới thiệu
              </Accordion.Header>
              <Accordion.Body>
                Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi
                và nền văn hóa phong phú với sự ảnh hưởng của khu vực Đông Nam
                Á, Trung Quốc và Pháp. Trung tâm thành phố là Khu phố cổ nhộn
                nhịp, nơi các con phố hẹp được mang tên "hàng". Có rất nhiều
                ngôi đền nhỏ, bao gồm Bạch Mã, tôn vinh một con ngựa huyền
                thoại, cùng với chợ Đồng Xuân, bán hàng gia dụng và thức ăn
                đường phố. ― Google
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="background-title">
                Kinh tế
              </Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col-6">
                    <div>- GDP</div>
                    <div>- Cơ cấu kinh tế</div>
                  </div>
                  <div className="col-6">
                    <img
                      width="100"
                      height="100"
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg?w=700&h=-1&s=1"
                    />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="background-title">
                Cơ sở kinh tế
              </Accordion.Header>
              <Accordion.Body className="scroll">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default App;

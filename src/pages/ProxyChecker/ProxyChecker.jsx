import { useState } from "react";
import LeftArrow from "../../assets/svg/LeftArrow";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const ProxyChecker = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = () => {
    const newData = text.split("\n");
    setData(newData);
  };
  return (
    <div>
      <Navbar />

      <div className="lg:w-[40%] m-auto my-20 ">
        <p className="text-center text-sm text-pot-grey7">
          PROXY LOCATION CHECKER
        </p>
        <p className="text-center text-3xl font-semibold lg:text-5xl">
          Check Locations of all your Proxies{" "}
          <span className="text-pot-sky2">Free</span> of Cost
        </p>
        <p className="text-lg text-center w-[60%] m-auto my-2">
          To check location, enter the address or proxies you want to check (1
          IP Per line)
        </p>
        <textarea
          className="w-full bg-pot-grey4 border-2 border-pot-grey6 rounded-lg h-[120px] p-3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-between my-2 mb-7">
          <div
            className="bg-pot-sky2 text-pot-white p-2 px-10 rounded-lg"
            onClick={handleSubmit}
          >
            Check Location
          </div>
          <div className="w-[35%] text-xs text-pot-grey7">
            <p>
              By using our tool, you agree our <span>Terms of Service</span> and{" "}
              <span>Privacy Policy</span>
            </p>
          </div>
        </div>
        <p className="text-pot-sky2">Your Results</p>
        <div className="w-full bg-pot-grey5 border-2 border-pot-grey6 rounded-lg min-h-[120px] p-1">
          {data.length=== 0 ? (
            <div className="flex justify-center items-center h-full">
              Please provide IP addess to check
            </div>
          ) : (
            <div>
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="w-1/4">IP</th>
                    <th className="w-1/4">PROXY</th>
                    <th className="w-1/4">CITY</th>
                    <th className="w-1/4">COUNTRY</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((el) => (
                    
                    <tr className="border-t-2 border-pot-grey6" >
                      <td >{el}</td>
                      <td>192.168.0.0</td>
                      <td>New York</td>
                      <td>US</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
          )}
        </div>
        <div className="flex justify-center items-center gap-2 my-2"> <p>Check out our IPv6 Compatibility Checker</p>
        <p className="text-pot-sky2">View Tool</p>
        <LeftArrow color="#077BFF"/>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default ProxyChecker;

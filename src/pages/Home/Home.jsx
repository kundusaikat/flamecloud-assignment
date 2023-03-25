import GreenStar from "../../assets/svg/GreenStar";
import LeftArrow from "../../assets/svg/LeftArrow";
import List1 from "../../assets/svg/List1";
import List2 from "../../assets/svg/List2";
import List3 from "../../assets/svg/List3";
import List4 from "../../assets/svg/List4";
import UserImage from "../../assets/svg/UserImage";
import WhiteStar from "../../assets/svg/WhiteStar";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./index.css";
import { blogData, featureData, feedbackData, planData, v4Data, v6Data } from "./Data";
import { v4 as uuidv4 } from "uuid";
import BlueTick from "../../assets/svg/BlueTick";
import GreenTick from "../../assets/svg/GreenTick";

const Home = () => {
  console.log(v6Data);
  return (
    <div>
      <Navbar />

      <div className=" w-[824px] m-auto my-10  text-center text-pot-grey7  flex-row gap-5">
        <div>
          <p>WELCOME TO CREATIVE PROXIES</p>
        </div>
        <div>
          <p className="text-5xl font-semibold">
            We are the <span className="text-pot-sky2">Fastest</span> and the{" "}
            <span className="text-pot-green1">Most Reliable</span> Proxy Service
            since 2020
          </p>
        </div>
        <div className="w-8/12 m-auto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
            augue sit amet mollis molestie.
          </p>
        </div>
        <div className="bg-pot-sky2 flex w-[222px] m-auto p-2 rounded-lg justify-center items-center text-pot-white gap-px">
          <p>Get Started</p>
          <LeftArrow />
        </div>
        <div className="bg-pot-green2 w-[222px] m-auto my-2 py-4 rounded-lg border-[1px] border-pot-green3">
          <div className="flex justify-center gap-px">
            <div className="bg-pot-green1">
              <WhiteStar />
            </div>
            <div className="bg-pot-green1">
              <WhiteStar />
            </div>
            <div className="bg-pot-green1">
              <WhiteStar />
            </div>
            <div className="bg-pot-green1">
              <WhiteStar />
            </div>
            <div className="half-green">
              <WhiteStar />
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <p>Rated 4.5 on</p>
            <GreenStar />
            <p>Trustpilot</p>
          </div>
        </div>
        <div className="w-[80%] h-px bg-pot-grey1 m-auto my-7"></div>
      </div>

      <div className="flex w-[80%] m-auto justify-around mb-10">
        <div className="bg-pot-green2 p-5 rounded-lg border-[1px] border-pot-green3 ">
          <List1 />
        </div>
        <div className="bg-pot-green2 p-5 rounded-lg border-[1px] border-pot-green3">
          <List2 />
        </div>
        <div className="bg-pot-green2 p-5 rounded-lg border-[1px] border-pot-green3">
          <List3 />
        </div>
        <div className="bg-pot-green2 p-5 rounded-lg border-[1px] border-pot-green3">
          <List4 />
        </div>
      </div>

      <div className="bg-pot-blue1">
        <div className="w-[60%] m-auto py-20">
          <div className="text-center text-white text-4xl">
            <h1>Why we are the Best Proxy Providers</h1>
          </div>
          <div className="w-[45%] m-auto">
            <p className="text-center text-pot-grey1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
              augue sit amet mollis molestie.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {featureData.map((el) => (
              <div
                className="border-[1px] border-pot-grey2 p-3 rounded-lg"
                key={uuidv4()}
              >
                <div>{el.icon}</div>
                <p className="text-xl text-pot-white">Feature No {el.no}</p>
                <p className="text-xs">{el.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div>
          <p className="text-center text-4xl font-semibold">
            You choose, we <span className="text-pot-blue1">Deliver!</span>{" "}
          </p>
        </div>
        <div className="w-[30%] m-auto mb-10">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
            augue sit amet mollis molestie.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-[40%] m-auto">
          <div className="bg-pot-grey-3 border-2 p-3 rounded-lg border-[rgba(30, 30, 30, 0.1)] ">
            <div className="flex  justify-between">
              <div>
                <div>
                  <p className="bg-pot-sky2 inline py-1 px-2 rounded-lg">
                    v{v4Data.version}
                  </p>
                </div>
                <div>
                  <p className="font-bold">IPv{v4Data.version} Proxies</p>
                </div>
                <div>
                  <p>Static/Routing</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-xs">FROM</p>
                </div>
                <div>
                  <p className="text-xs">
                    <span>{v4Data.day}/day</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs">OR</p>
                </div>
                <div>
                  <p className="text-xs">
                    <span>{v4Data.month}/mo</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full bg-pot-grey1 h-px m-auto my-3"></div>
            <div>
              <div>
                <p className="text-pot-grey7">Plan includes:</p>
              </div>
              {v4Data.data.map((el) => (
                <div className="flex items-center gap-1">
                  <div>{el.type === "1" ? <BlueTick /> : <GreenTick />}</div>
                  <div>{el.text}</div>
                </div>
              ))}
            </div>
            <div className="bg-pot-sky2 flex m-auto p-2 rounded-lg justify-center items-center text-pot-white gap-px">
              <p>View Pricing</p>
              <LeftArrow />
            </div>
          </div>
          <div className="relative bg-pot-green4 border-2 p-3 rounded-lg border-[#16D113]">
            <div className="absolute -top-3 left-5 bg-[#16D113] p-1 py-[0.5px] text-xs text-pot-white">
              BEST SELLER
            </div>
            <div className="flex  justify-between">
              <div>
                <div>
                  <p className="bg-[#16D113] inline py-1 px-2 rounded-lg">
                    v{v6Data.version}
                  </p>
                </div>
                <div>
                  <p className="font-bold">IPv{v6Data.version} Proxies</p>
                </div>
                <div>
                  <p>Static/Routing</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-xs">FROM</p>
                </div>
                <div>
                  <p className="text-xs">
                    <span>{v6Data.day}/day</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs">OR</p>
                </div>
                <div>
                  <p className="text-xs">
                    <span>{v6Data.month}/mo</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full bg-pot-grey1 h-px m-auto my-3"></div>
            <div>
              <div>
                <p className="text-pot-grey7">Plan includes:</p>
              </div>
              {v6Data.data.map((el) => (
                <div className="flex items-center gap-1">
                  <div>{el.type === "1" ? <BlueTick /> : <GreenTick />}</div>
                  <div>{el.text}</div>
                </div>
              ))}
            </div>
            <div className="bg-[#16D113] flex m-auto p-2 rounded-lg justify-center items-center text-pot-white gap-px">
              <p>View Pricing</p>
              <LeftArrow />
            </div>
          </div>
          <div className="col-span-2 bg-pot-grey3 p-3 border-[1px] border-pot-grey5 rounded-lg flex justify-between">
            <div>
              <p>--</p>
              <p>Become a Reseller</p>
              <p>200+ Happy Resellers</p>
            </div>
            <div className="w-[60%]">
              <p className="text-pot-grey7 opacity-50">Plan includes:</p>
              <div className="grid grid-cols-2 ">
                {
                  planData.map(el=>(
                    <div className="flex items-center gap-1">
                      <BlueTick />
                      <p>{el.text}</p>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
        </div>
        
      </div>

      <div className=" w-[80%] m-auto my-20">
        <div>
          <p className="text-5xl text-center font-semibold">
            Customers <span className="text-pot-green1">Love</span> our Proxies
          </p>
        </div>
        <div className="w-[30%] m-auto mb-10">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
            augue sit amet mollis molestie.
          </p>
        </div>
        <div className="flex gap-4 w-[80%] m-auto">
          {feedbackData.map((el) => (
            <div className="bg-pot-green4 p-5 border-2 border-pot-green3 rounded-lg">
              <div className="flex">
                {new Array(el.star).fill(0).map((el) => (
                  <div>
                    <GreenStar />
                  </div>
                ))}
                {new Array(5 - el.star).fill(0).map((el) => (
                  <div>
                    <WhiteStar />
                  </div>
                ))}
              </div>
              <div className="my-2">
                <p className="text-sm">{el.feedback}</p>
              </div>
              <div className="flex gap-2">
                <div>
                  <UserImage />
                </div>
                <div>
                  <p className="font-semibold">{el.name}</p>
                  <p className="text-sm">{el.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" w-[65%] m-auto my-20 background-blue3 p-2">
        <div>
          <p className="text-5xl text-center font-semibold">
            Read our <span className="text-pot-blue1">Exclusive</span> Blog
          </p>
        </div>
        <div className="w-[50%] m-auto ">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
            augue sit amet mollis molestie.
          </p>
        </div>
        <div className="flex justify-center items-center gap-1 mb-10">
          <p className="text-pot-sky2">Read All Blogs</p>
          <LeftArrow color="#077BFF"/>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {
            blogData.map(el=>(
              <div>
                <div className="bg-pot-blue2 h-[150px] border-[1px] border-pot-blue4">

                </div>
                <div>
                  <p className="font-semibold text-pot-grey7">{el.title}</p>
                </div>
                <div>
                  <p className="text-sm text-pot-grey7 opacity-50">{el.category}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default Home;

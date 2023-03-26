import GreenStar from "../../assets/svg/GreenStar";
import LeftArrow from "../../assets/svg/LeftArrow";
// import List1 from "../../assets/svg/List1";
// import png from "../../assets/png/3square.png"
import List2 from "../../assets/svg/List2";
import List3 from "../../assets/svg/List3";
import List4 from "../../assets/svg/List4";
import UserImage from "../../assets/svg/UserImage";
import WhiteStar from "../../assets/svg/WhiteStar";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./index.css";
import {
  blogData,
  featureData,
  feedbackData,
  planData,
  v4Data,
  v6Data,
} from "./Data";
import { v4 as uuidv4 } from "uuid";
import BlueTick from "../../assets/svg/BlueTick";
import GreenTick from "../../assets/svg/GreenTick";
import { Link } from "react-router-dom";

const Home = () => {
  console.log(v6Data);
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* section 1 */}
      <div className="m-auto my-10  text-center text-pot-grey7  flex-row gap-5 w-[60%] lg:w-[40%]">
        <div>
          <p>WELCOME TO CREATIVE PROXIES</p>
        </div>
        <div>
          <p className="text-4xl font-semibold ">
            We are the <span className="text-pot-sky2">Fastest</span> and the{" "}
            <span className="text-pot-green1">Most Reliable</span> Proxy Service
            since 2020
          </p>
        </div>
        <div className="m-auto my-3">
          <p className="text-sm lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
            augue sit amet mollis molestie.
          </p>
        </div>
        <Link to="/proxychecker">
          <div className="bg-pot-sky2 flex w-[222px] m-auto p-2 rounded-lg justify-center items-center text-pot-white gap-px cursor-pointer">
            <p>Get Started</p>

            <LeftArrow />
          </div>
        </Link>
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

      {/* section 2 */}
      <div className="w-[90%] m-auto grid grid-cols-2 gap-2  lg:flex  justify-around mb-10 lg:w-[50%]">
        <div className="h-12 bg-pot-green2 p-2 rounded-lg border-[1px] border-pot-green3 flex gap-1 lg:h-auto">
          {/* <List1 /> */}
          <div className="list-1 w-8 h-8 flex justify-center rounded items-center">
            <img src="/3square.png" alt="3square" />
          </div>
          <p className="text-[9px] lg:text-sm">Lorem Ipsum Dolor Sit Amet Top</p>
        </div>
        <div className="h-12 bg-pot-green2 p-2 rounded-lg border-[1px] border-pot-green3 flex gap-1 lg:h-auto">
          <div className="list-2 w-8 h-8 flex justify-center rounded items-center">
            <img src="/lock.png" alt="3square" />
          </div>
          <p className="text-[9px] lg:text-sm">Lorem Ipsum Dolor Sit Amet Top</p>
        </div>
        <div className="h-12 bg-pot-green2 p-2 rounded-lg border-[1px] border-pot-green3 flex gap-1 lg:h-auto">
          <div className="list-3 w-8 h-8 flex justify-center rounded items-center">
            <img src="/dollar-square.png" alt="3square" />
          </div>
          <p className="text-[9px] lg:text-sm">Lorem Ipsum Dolor Sit Amet Top</p>
        </div>
        <div className="h-12 bg-pot-green2 p-2 rounded-lg border-[1px] border-pot-green3 flex gap-1 lg:h-auto">
          <div className="list-4 w-8 h-8 flex justify-center rounded items-center">
            <img src="/security-safe.png" alt="3square" />
          </div>
          <p className="text-[9px] lg:text-sm">Lorem Ipsum Dolor Sit Amet Top</p>
        </div>
      </div>

      {/* section 3 */}
      <div className="bg-pot-blue1">
        <div className=" m-auto py-20 lg:w-[80%]">
          <div className="text-center text-white text-xl lg:text-2xl">
            <h1>Why we are the Best Proxy Providers</h1>
          </div>
          <div className="w-[60%] m-auto">
            <p className="text-center text-pot-grey1 text-[9px] lg:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
              augue sit amet mollis molestie.
            </p>
          </div>
          <div className="w-[90%] m-auto grid grid-cols-2 lg:grid-cols-4 gap-3 lg:w-[70%]">
            {featureData.map((el) => (
              <div
                className="border-[1px] border-pot-grey2 p-3 rounded-lg"
                key={uuidv4()}
              >
                <div>{el.icon}</div>
                <p className="text-sm font-semibold text-pot-white lg:text-xl">
                  Feature No {el.no}
                </p>
                <p className="text-[9px] text-pot-grey1 lg:text-sm">{el.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className="mt-10">
        <div>
          <p className="text-center text-3xl font-semibold">
            You choose, we <span className="text-pot-blue1">Deliver!</span>{" "}
          </p>
        </div>
        <div className="w-[90%] m-auto mb-10">
          <p className="text-center text-[0.8rem] lg:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
            augue sit amet mollis molestie.
          </p>
        </div>
        <div className="w-[70%] grid grid-cols-1 gap-5 m-auto lg:w-[50%] lg:grid-cols-2">
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
                  <p className="text-xs lg:text-sm">FROM</p>
                </div>
                <div>
                  <p className="text-xs lg:text-sm">
                    <span>{v4Data.day}/day</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs lg:text-sm">OR</p>
                </div>
                <div>
                  <p className="text-xs lg:text-sm">
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
            <div className="absolute -top-3 left-5 bg-[#16D113] p-1 py-[0.5px] text-xs lg:text-sm text-pot-white">
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
                  <p className="text-xs lg:text-sm">FROM</p>
                </div>
                <div>
                  <p className="text-xs lg:text-sm">
                    <span>{v6Data.day}/day</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs lg:text-sm">OR</p>
                </div>
                <div>
                  <p className="text-xs lg:text-sm">
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
          <div className="w-[120%] relative -left-[15%] bg-pot-grey3 p-3 border-[1px] border-pot-grey5 rounded-lg flex justify-between lg:col-span-2 lg:static">
            <div>
              <div className="crown w-8 h-8 flex justify-center rounded items-center">
                <img src="/crown.png" alt="crown" />
              </div>

              <p className="font-semibold text-[0.9rem]">Become a Reseller</p>
              <p className="text-[0.8rem] lg:text-sm">200+ Happy Resellers</p>
            </div>
            <div className="w-[70%]">
              <p className="text-pot-grey7 opacity-50">Plan includes:</p>
              <div className="grid grid-cols-2 ">
                {planData.map((el) => (
                  <div className="flex items-center gap-1 text-[0.8rem] lg:text-sm">
                    <BlueTick />
                    <p>{el.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className="w-[90%] m-auto my-20">
        <div>
          <p className="text-2xl text-center font-semibold">
            Customers <span className="text-pot-green1">Love</span> our Proxies
          </p>
        </div>
        <div className=" m-auto mb-10">
          <p className="text-center text-sm lg:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
            augue sit amet mollis molestie.
          </p>
        </div>
        <div className="grid gap-4 gap-4 w-[70%] m-auto grid-cols-1 lg:grid-cols-3 lg:w-[80%]">
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
                <p className="text-xs lg:text-sm">{el.feedback}</p>
              </div>
              <div className="flex gap-2">
                <div>
                  <UserImage />
                </div>
                <div>
                  <p className="font-semibold text-xs lg:text-sm">{el.name}</p>
                  <p className="text-xs lg:text-sm">{el.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* section 6 */}
      <div className=" m-auto my-20 background-blue3 p-2 lg:w-[60%]">
        <div>
          <p className="text-xl text-center font-semibold">
            Read our <span className="text-pot-blue1">Exclusive</span> Blog
          </p>
        </div>
        <div className="w-[90%] m-auto ">
          <p className="text-center text-xs lg:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
            augue sit amet mollis molestie.
          </p>
        </div>
        <div className="flex justify-center items-center gap-1 mb-10">
          <p className="text-pot-sky2 text-sm lg:text-md">Read All Blogs</p>
          <LeftArrow color="#077BFF" />
        </div>
        <div className=" grid  gap-3 grid-cols-2 w-[90%] m-auto lg:grid-cols-3 ">
          {blogData.map((el) => (
            <div>
              <div className="bg-pot-blue2 h-[100px] rounded border-[1px] border-pot-blue4"></div>
              <div>
                <p className="font-semibold text-pot-grey7 text-[0.6rem] md:text-sm">{el.title}</p>
              </div>
              <div>
                <p className="text-[0.5rem] text-pot-grey7 opacity-50 md:text-sm">
                  {el.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

import CreativeLogo from "../../assets/svg/CreativeLogo";
import Discord from "../../assets/svg/Discord";
import DownArrow from "../../assets/svg/DownArrow";

const Navbar = () => {
  return (
    <div className="max-w-[70%]">
      <div className=" flex justify-between items-center p-3">
        <div className="flex gap-4 justify-center items-center">
          <div className="flex">
            <CreativeLogo />
          </div>
          <div className="hidden xl:flex gap-4 justify-center items-center">
            <div>
              <p className="text-pot-grey7">Pricing</p>
            </div>
            <div className="flex gap-1 items-center">
              <p className="text-pot-grey7">Explore Tools</p>
              <DownArrow />
            </div>
            <div className="flex gap-1 items-center">
              <p className="text-pot-grey7">Resources</p>
              <DownArrow />
            </div>
            <div>
              <p className="text-pot-grey7">FAQs</p>
            </div>
            <div>
              <p className="text-pot-grey7">Blogs</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div className="hidden xl:flex gap-2 items-center">
            <Discord />
            <p className="text-pot-sky1">Join Discord</p>
          </div>
          <div className="hidden xl:block w-px h-6 bg-pot-grey1 "></div>
          <div className="hidden xl:block">
            <p className="text-pot-grey7">Log in</p>
          </div>
          <div className=" bg-pot-sky2 rounded-lg py-2 px-6">
            <p className="text-pot-white">Get Started</p>
          </div>
        </div>
      </div>
      <div className=" bg-pot-grey1 h-px m-auto"></div>
    </div>
  );
};

export default Navbar;

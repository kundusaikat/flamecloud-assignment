
import CreativeLogo from "../../assets/svg/CreativeLogo";
import Discord from "../../assets/svg/Discord";

const Footer = () => {
  return (
    <div className="w-[80%] m-auto mb-10">
      <div className=" h-px bg-pot-grey1 my-5"></div>
      <div className="sm:block  lg:flex justify-between">
        <div className="flex justify-around lg:block">
          <div className="w-[40%]">
            <div className="flex items-center justify">
              <div className="lg:block">
              <CreativeLogo />
              </div>
              
              <p className="font-figtree text-sm">CreativeProxies</p>
            </div>

            <div>
              <p className="text-[0.5rem] ">
                Copyright © 2023 Creative Proxies. All rights reserved.
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-2 bg-pot-blue5  justify-center border-[1px] border-pot-sky2 rounded-lg px-3">
            <Discord />
            <p className="text-pot-sky2 text-sm">Join Our Discord</p>
          </div>
        </div>
        <div className="w-full lg:w-[60%] flex  justify-around text-xs lg:text-sm">
          <div className="grid grid-cols-1 gap-1">
            <p className="text-xs text-pot-grey7 opacity-50">Explore</p>
            <p className="text-[0.6rem] font-bold lg:text-sm">Proxy Location Checker</p>
            <p className="text-[0.6rem] font-bold lg:text-sm">IPv6 Compatibility</p>
            <p className="text-[0.6rem] font-bold lg:text-sm">Blogs</p>
          </div>
          <div className="grid grid-cols-1 gap-1">
            <p className="text-xs text-pot-grey7 opacity-50">Resources</p>
            <p className="text-[0.6rem] font-bold lg:text-sm">FAQs</p>
            <p className="text-[0.6rem] font-bold lg:text-sm">Branding</p>
            <p className="text-[0.6rem] font-bold lg:text-sm">Network Infomation</p>
            <p className="text-[0.6rem] font-bold lg:text-sm">Imprint</p>
          </div>
          <div className="grid grid-cols-1 gap-1">
            <p className="text-xs text-pot-grey7 opacity-50">Support</p>
            <p className="text-[0.6rem] font-bold lg:text-sm">Status</p>
            <p className="text-[0.6rem] font-bold lg:text-sm">Terms of Service</p>
            <p className="text-[0.6rem] font-bold lg:text-sm">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

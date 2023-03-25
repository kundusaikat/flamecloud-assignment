import CreativeLogo from "../../assets/svg/CreativeLogo";
import Discord from "../../assets/svg/Discord";

const Footer = () => {
  return (
    <div className="w-[80%] m-auto">
      <div className=" h-px bg-pot-grey1 my-5"></div>
      <div className="flex justify-between">
        <div >
          <CreativeLogo />
          <div>
            <p className="text-sm my-2">Copyright © 2023 Creative Proxies. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-2 bg-pot-blue5 w-[50%] justify-center border-[1px] border-pot-sky2 rounded-lg p-2">
            <Discord />
            <p className="text-pot-sky2">Join Our Discord</p>
          </div>
        </div>
        <div className="flex w-[60%] justify-around">
          <div>
            <p className="text-sm text-pot-grey7 opacity-50">Explore</p>
            <p>Proxy Location Checker</p>
            <p>IPv6 Compatibility</p>
            <p>Blogs</p>
          </div>
          <div>
            <p className="text-sm text-pot-grey7 opacity-50">Resources</p>
            <p>FAQs</p>
            <p>Branding</p>
            <p>Network Infomation</p>
            <p>Imprint</p>
          </div>
          <div>
            <p className="text-sm text-pot-grey7 opacity-50">Support</p>
            <p>Status</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

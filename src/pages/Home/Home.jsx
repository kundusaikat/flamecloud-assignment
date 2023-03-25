import GreenStar from "../../assets/svg/GreenStar";
import LeftArrow from "../../assets/svg/LeftArrow";
import List1 from "../../assets/svg/List1";
import List2 from "../../assets/svg/List2";
import List3 from "../../assets/svg/List3";
import List4 from "../../assets/svg/List4";
import WhiteStar from "../../assets/svg/WhiteStar";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./index.css";
import { featureData } from "./Data";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
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

      <div className="flex w-[1192px] m-auto justify-around mb-10">
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
              <div className="border-[1px] border-pot-grey2 p-3 rounded-lg" key={uuidv4()}>
                <div>{el.icon}</div>
                <p className="text-xl text-pot-white">Feature No {el.no}</p>
                <p className="text-xs" >{el.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <div>
          <p>We choose, we Deliver!</p>
        </div>
        <div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
            augue sit amet mollis molestie.
          </p>
        </div>
      </div>

      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
        voluptate quae sed eum repellat? Quia natus sequi, exercitationem
        voluptas corrupti deleniti necessitatibus incidunt fuga similique
        consequatur recusandae animi cupiditate hic. Dolorum quisquam hic odio
        dolor, quae sint ullam ea mollitia, eius debitis laborum eligendi,
        aliquid assumenda soluta ex sit optio vitae amet autem fugiat! Eius
        doloribus quibusdam unde incidunt deserunt. Debitis quod, repellat rerum
        impedit fugiat quia odio ipsum cumque quis sapiente at nam officia odit.
        Velit enim aliquid eos maiores nulla quis mollitia nihil ut, animi atque
        quod molestias! Officia sequi nulla deserunt temporibus assumenda, ex
        accusantium eos vitae soluta magni, minima dolore dolorem quidem, eaque
        minus labore placeat pariatur aspernatur. Quas libero corrupti rerum
        fugit ullam suscipit dicta! Culpa, incidunt? Nesciunt deleniti et eos,
        quos quo iste praesentium quod quisquam quam assumenda minima provident
        dolore eum ab deserunt. Soluta eveniet architecto repudiandae at modi
        ducimus quo esse nulla? Maxime eveniet natus, magnam totam neque veniam.
        Accusantium beatae rem magni nesciunt atque nihil expedita ipsa
        distinctio quisquam ratione est exercitationem eaque eveniet, officia,
        impedit tempora at, reiciendis dolorum dignissimos? Architecto, optio
        earum. Vel odio error unde reprehenderit iusto accusamus, dicta,
        doloribus commodi minus voluptates hic. Fugiat tempora quod quis minus
        mollitia enim nemo eos omnis, delectus nam hic voluptates? Quos illo
        nostrum ad assumenda, debitis vero explicabo quaerat eveniet, non alias
        recusandae magnam nesciunt placeat, cumque perferendis? Tempore
        laudantium ad excepturi sapiente impedit? Commodi et sed at dignissimos
        perspiciatis. Placeat odit quis laboriosam iste quaerat facilis velit,
        magni, illo labore quisquam quod enim aut alias reiciendis dignissimos
        at, hic commodi repudiandae non debitis ipsa facere voluptas.
        Repellendus, cum neque? Voluptates fuga consequatur reprehenderit ipsa
        porro debitis dolore nostrum iusto fugiat unde doloremque, eum sed
        veritatis. Officia nobis ad, inventore nesciunt esse officiis aliquam
        laboriosam quisquam repellat eveniet deleniti deserunt. Quam dignissimos
        error amet consequuntur magnam iure! Ratione unde odio officiis illo
        maiores culpa consectetur saepe earum, ex ab, quam, sit ea distinctio
        dolor ut! Fuga alias impedit quos facilis? Eos perspiciatis repellendus,
        nobis eveniet cum aspernatur temporibus cupiditate maiores eaque quos
        qui vitae esse dicta vel! Maxime ipsam est, reiciendis eveniet excepturi
        maiores obcaecati aspernatur numquam dignissimos qui voluptate. Nulla
        fugit veritatis explicabo nam autem vero porro eum ad laboriosam, facere
        eius accusamus saepe quibusdam totam tempore nesciunt magni officia
        temporibus consectetur reprehenderit veniam repellat asperiores quod
        consequuntur? Alias! Blanditiis nobis ullam adipisci cupiditate.
        Repudiandae inventore tenetur atque, ut facilis culpa eos nisi velit,
        voluptas blanditiis eligendi reprehenderit molestiae ad dicta a rerum,
        quod accusamus possimus sed ex dolorum. Obcaecati fuga qui magni quam
        nostrum iste magnam eligendi quo rem blanditiis iure dicta nobis id,
        illum quia! Repudiandae repellat similique asperiores error voluptate
        eveniet sint tenetur, magnam rerum sequi! Laboriosam qui nulla inventore
        dolores necessitatibus odit eum? Earum tenetur corporis dolor asperiores
        sint natus praesentium debitis cupiditate, ea ratione veritatis officia
        consequuntur nostrum blanditiis ipsam mollitia. Illum, nemo quas.
        praesentium doloribus a voluptates eos nisi quidem aut, molestiae harum
        asperiores expedita aliquam minus? Cupiditate tempora voluptate veniam
        iusto nobis minus, debitis iste sit consequuntur! Molestiae doloremque
        repellat nulla dicta. Blanditiis praesentium voluptas earum quidem
        aperiam nemo vitae, quia totam, eligendi velit odit pariatur
        perspiciatis, quas provident repellat doloribus accusantium optio
        possimus exercitationem. Asperiores nemo dolorem quaerat modi vero aut!
        Aut, libero necessitatibus nulla ea modi voluptas ab cupiditate vero
        fugiat ratione debitis reiciendis quasi officiis nihil quas dignissimos?
        Alias ducimus optio eius consequatur distinctio possimus quam voluptate
        temporibus voluptates? Similique magnam, sunt sequi, in voluptatibus
        placeat voluptas sint velit eligendi, molestias ipsam. Praesentium quo
        ex dolor neque. Molestiae officia porro, sunt temporibus aliquam sequi
        magni ad dolore quaerat deleniti. Vel modi quidem in odio fugiat
        tenetur, consequatur natus! Iure rerum, odit voluptas pariatur maiores
        consectetur nisi facere nostrum aliquam explicabo magnam voluptates
        natus accusamus impedit consequuntur voluptatibus. Repellendus, ea.
        Harum saepe aliquam, maiores qui distinctio quas quibusdam consequuntur
        autem iste voluptas aliquid odio atque voluptatem? Ullam numquam,
        voluptatem error accusamus magni, illo laborum excepturi atque enim
        iusto recusandae commodi! Perspiciatis sint tempore illo suscipit natus
        officia quo, adipisci explicabo itaque impedit architecto eum dolorem
        omnis corporis temporibus molestiae alias voluptatem esse et aliquid
        repellendus quidem? Harum possimus eum eveniet! Voluptatibus non vel
        quod, esse quia mollitia eos nisi, quibusdam cum necessitatibus officia.
        Vitae rerum vel laudantium dolorem, ullam recusandae maiores? Corrupti
        similique earum fuga omnis laborum necessitatibus repellendus harum.
        Delectus asperiores, quod sequi necessitatibus placeat consectetur neque
        voluptate. Iste sint, nihil distinctio voluptas suscipit fugiat officiis
        quo error nostrum, odit velit facilis veniam dolor ut sed laudantium,
        molestiae est. Nihil laudantium distinctio ut. Impedit voluptates non
        ipsum cumque possimus, nisi minus quae dolorum repellendus dignissimos
        delectus exercitationem cum laudantium dolores, at ducimus. Est minima
        iste ipsum odit, tenetur soluta. Tempore sunt, facere eos ipsam velit
        ratione rerum earum iusto fuga dolorem. Exercitationem reprehenderit
        cupiditate error. Consequatur ipsum impedit iste esse temporibus,
        delectus culpa iusto fuga, explicabo error iure numquam. Corrupti ipsa
        illum doloribus optio, sunt vero, iure reprehenderit neque dolorum
        necessitatibus laudantium dicta, harum debitis esse iste officia. Iure
        rerum ipsa accusantium quos non esse animi porro tempora iste. Odio,
        eveniet at. Dolorem et officia id quis cupiditate cum ex dignissimos,
        veritatis magni laudantium quia culpa. Recusandae quis explicabo, enim
        neque in natus similique vitae nobis, quod, accusantium amet. Recusandae
        eos labore architecto distinctio provident libero vel iure, sit natus,
        incidunt, alias possimus ab obcaecati earum quibusdam inventore. Debitis
        ullam atque provident saepe omnis tempore veniam nostrum perferendis
        recusandae!
      </div>
      <Footer />
    </div>
  );
};

export default Home;

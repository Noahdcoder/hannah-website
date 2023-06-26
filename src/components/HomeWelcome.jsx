import Link from "next/link";

export default function HomeWelcome() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="p-8 lg:w-1/2">
        <img src="images/general/hannah-picture.jpg" />
      </div>
      <div className="hidden p-8 space-y-4 text-lg lg:block lg:w-1/2">
        <h2 className="text-center font-bold text-4xl">Enter Hannah's World</h2>
        <p>
          Welcome to my website, my name is{" "}
          <span className="text-rawSienna font-bold">
            Hannah Eghonghon Aghedo.{" "}
          </span>
          With over a decade of being a Transactional Lawyer, Investment,
          Business Strategist and Corporate Trainer. I help business interns and
          executives acquire short-term and long-term training to refine their
          business leadership and management skills befitting of a present-day
          need, without physical interaction and in line with sustainable
          economy.
        </p>
        <p>
          <span className="text-rawSienna font-bold">Early days-</span>
          <br /> Born on the 22nd day of March, I had my first real exposure in
          Nigeria’s foremost single sex school for girls, Queens College, Lagos,
          where I learned that real pursuit in life is akin to passion and
          realistic goals. I grew up as the only girl child in the family.
        </p>
        <p>
          <span className="text-rawSienna font-bold">Career-</span>
          <br />I am a Lawyer & Business Expert exploring extreme areas of the
          law and business and have sat over many arbitration matters as an
          Arbitration Specialist. As a commercial law expert, I have gained
          prominence in the corporate ladder and I'm currently on a mission to
          support dwindling economies thrive through delivering sessions on
          Capital Projects and Capital project funds management within Africa.
        </p>
        <div>
          <Link href="/about" legacyBehavior>
            <a>
              <button className="bg-rawSienna text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                About Page
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div className="p-8 space-y-4 text-lg lg:hidden">
        <h2 className="text-center font-bold text-4xl">
          Welcome To My Website
        </h2>
        <p>
          Welcome to my website, my name is{" "}
          <span className="text-rawSienna font-bold">
            Hannah Eghonghon Aghedo.{" "}
          </span>
          With over a decade of being a Transactional Lawyer, Investment,
          Business Strategist and Corporate Trainer. I help business interns and
          executives acquire short-term and long-term training to refine their
          business leadership and management skills befitting of a present-day
          need, without physical interaction and in line with sustainable
          economy.
        </p>
        <p>
          <span className="text-rawSienna font-bold">Early days-</span>
          <br /> Born on the 22nd day of March to ENGR & Mrs Abraham Aghedo,
          Hannah had her first real exposure in Nigeria’s foremost single sex
          school for girls, Queens College, Lagos, where she learned that real
          pursuit in life is akin to passion and realistic goals.
        </p>
        <p>
          <span className="text-rawSienna font-bold">Education-</span>
          <br />A Graduate of the Faculty of Law Ambrose Alli University, Edo
          State where she bagged her LL.B degree with a second class upper
          division sparking up intuitive calculations about how someone so
          daring could combine tough leadership roles and academics in a single
          stroke. After her call to the Nigerian Bar as a Barrister of the
          Supreme Court of Nigeria and an LLM degree in Commercial Law from
          Ahmadu Bello University, Kaduna State, her professional journey has
          been far from lopsided as she has berthed through areas in the legal
          profession that are gradually taking toll. Currently, an MBA student
          of the Prestigious Coventry University in England.
        </p>
        <div>
          <Link href="/about" legacyBehavior>
            <a>
              <button className="bg-rawSienna text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                About Page
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

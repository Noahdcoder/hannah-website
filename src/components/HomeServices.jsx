import Link from "next/link";

export default function HomeServices({ services, isVisible }) {
  const firstFourServices = services.slice(0, 4);
  return (
    <div className="p-8 space-y-4">
      <h3 className="text-4xl font-bold text-center">Services</h3>
      <div className="grid grid-cols-1 space-y-8 md:space-y-0 md:space-x-4 md:grid-cols-4">
        {firstFourServices.map((service) => {
          const { id, title, image, paragraphs } = service;
          return (
            <div
              className={`slide bg-white space-y-4 shadow-lg ${
                isVisible ? "slide-in-right" : ""
              }`}
              key={id}
            >
              <img src={image} className="h-48 w-full" />
              <div className="flex flex-col justify-between px-8 pb-8 space-y-4">
                <h4 className="flex-1 text-2xl font-bold text-gray">{title}</h4>
                <p className="text-lg">{`${paragraphs[0].content.substring(
                  0,
                  200
                )} ...more`}</p>
                <div className="flex justify-center">
                  <Link href={`/services/${id}`} legacyBehavior>
                    <a>
                      <button className="bg-rawSienna text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                        See More
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link href={`/services`} legacyBehavior>
          <a>
            <button className="bg-rawSienna mt-8 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              See All Services Provided By Hannah Aghedo
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

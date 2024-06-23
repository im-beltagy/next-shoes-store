import SectionHeadding from "@/components/sectionHeadding";

const quotesIcon = (
  <svg
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <g>
      <path
        d="M119.472,66.59C53.489,66.59,0,120.094,0,186.1c0,65.983,53.489,119.487,119.472,119.487
 c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.135,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.829-6.389
 c82.925-90.7,115.385-197.448,115.385-251.8C238.989,120.094,185.501,66.59,119.472,66.59z"
      />
      <path
        d="M392.482,66.59c-65.983,0-119.472,53.505-119.472,119.51c0,65.983,53.489,119.487,119.472,119.487
 c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.136,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.828-6.389
 C479.539,347.2,512,240.452,512,186.1C512,120.094,458.511,66.59,392.482,66.59z"
      />
    </g>
  </svg>
);

const starIcon = (
  <svg
    className="w-full"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
      fill="currentColor"
    />
  </svg>
);

interface CardPropsType {
  feedback: string;
  author: {
    name: string;
    location: string;
  };
  stars: number;
}

function Card(props: CardPropsType) {
  return (
    <div className="relative rounded-2xl border-2 border-white px-4 py-16 text-center text-white md:px-6 lg:px-12">
      <p className="mx-auto text-balance lg:text-lg">{props.feedback}</p>

      {/* Author */}
      <div className="my-4 text-lg lg:text-xl">
        <span className="font-special">{props.author.name}</span>
        {" - "}
        <span className="font-semibold">{props.author.location}</span>
      </div>

      {/* Rating */}
      <div className="mx-auto flex w-fit gap-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            className={`w-5 text-orange-500 ${props.stars < item ? "opacity-60" : ""}`}
            key={item}
          >
            {starIcon}
          </div>
        ))}
      </div>

      {/* Quotes Icons */}
      {/* Top Icon */}
      <div className="absolute bottom-full right-full w-20 translate-x-[85%] translate-y-[75%] rotate-180 bg-accent-main p-2 text-white">
        {quotesIcon}
      </div>
      {/* Bottom Icon */}
      <div className="absolute left-full top-full w-20 translate-x-[-85%] translate-y-[-75%] bg-accent-main p-2 text-white">
        {quotesIcon}
      </div>
    </div>
  );
}

const cardsContents: CardPropsType[] = [
  {
    author: { name: "John Doe", location: "London" },
    feedback:
      "All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols",
    stars: 5,
  },
  {
    author: { name: "Jane Smith", location: "New York" },
    feedback:
      "The user interface is intuitive and easy to navigate. The design is modern and visually appealing. The video quality is excellent on all devices. I highly recommend this platform.",
    stars: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-accent-main">
      <div className="py-section-sm md:py-section-md container mx-auto max-w-screen-lg px-4">
        <SectionHeadding headding="What Our Clients Say" darkBG />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {cardsContents.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { navLinks } from "../config-navigation";

const sendIcon = (
  <svg
    className="h-full"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.7071 2.29292C21.9787 2.56456 22.0707 2.96779 21.9438 3.33038L15.3605 22.14C14.9117 23.4223 13.1257 23.4951 12.574 22.2537L9.90437 16.2471L17.3676 7.33665C17.7595 6.86875 17.1312 6.24038 16.6633 6.63229L7.75272 14.0956L1.74631 11.426C0.504876 10.8743 0.577721 9.08834 1.85999 8.63954L20.6696 2.05617C21.0322 1.92926 21.4354 2.02128 21.7071 2.29292Z"
      fill="currentColor"
    />
  </svg>
);

const Brand = () => (
  <Link href="/" className="font-brand block text-3xl text-primary">
    ShoesStore
  </Link>
);

function Nav() {
  return (
    <dl className="grid max-w-lg grow grid-cols-2 gap-8 md:grid-cols-3 lg:gap-20">
      {navLinks.map((col) => (
        <div key={col.category}>
          <dt className="mb-2 text-nowrap font-bold uppercase">
            {col.category}
          </dt>
          <dd>
            <ul>
              {col.pages.map((item) => (
                <li className="mt-3 block" key={item.name}>
                  <Link
                    href={item.href}
                    className="capitalize hover:text-accent-main"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Email() {
  return (
    <div className="max-w-md">
      <h2 className="font-bold uppercase md:max-lg:text-center">Subscribe</h2>
      <form>
        <label
          htmlFor="input"
          className="my-4 flex items-center bg-[#E0ECFD] px-4 has-[*:focus]:ring-2"
        >
          <input
            type="email"
            name="email"
            id="input"
            className="grow bg-transparent py-2 leading-8 focus:outline-none"
            placeholder="Enter Your Email"
          />
          <button
            type="button"
            className="my-2 block w-8 p-1 hover:text-primary active:text-natural"
          >
            {sendIcon}
          </button>
        </label>
      </form>
      <p className="text-sm opacity-70">
        Join our newsletter to stay up to date on features and releases
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="py-section-sm mx-auto px-4 lg:container">
      <div className="flex gap-8 max-lg:flex-col md:max-lg:items-center lg:justify-between lg:gap-16">
        <Brand />
        <Nav />
        <Email />
      </div>
    </footer>
  );
}

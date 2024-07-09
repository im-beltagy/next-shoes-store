import { useTranslations } from "next-intl";

const cards = [
  {
    name: "Feature1",
    icon: (
      <svg
        className="w-full"
        viewBox="0 0 40 34"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0V34H17.6V0H0ZM1.6 1.61905H16V32.381H1.6V1.61905ZM26.4 4.04762C24.2031 4.04762 22.4 5.87221 22.4 8.09524V25.9048C22.4 28.1278 24.2031 29.9524 26.4 29.9524H36C38.1969 29.9524 40 28.1278 40 25.9048V8.09524C40 5.87221 38.1969 4.04762 36 4.04762H26.4Z" />
      </svg>
    ),
  },
  {
    name: "Feature2",
    icon: (
      <svg
        className="w-full"
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 0C19.5198 0 19.1304 0.389318 19.1304 0.869565C19.1304 1.34981 19.5198 1.73913 20 1.73913C20.4802 1.73913 20.8696 1.34981 20.8696 0.869565C20.8696 0.389318 20.4802 0 20 0ZM16.2602 0.348166C15.7799 0.348166 15.3906 0.737483 15.3906 1.21773C15.3906 1.69798 15.7799 2.0873 16.2602 2.0873C16.7404 2.0873 17.1298 1.69798 17.1298 1.21773C17.1298 0.737483 16.7404 0.348166 16.2602 0.348166ZM23.7398 0.348166C23.2596 0.348166 22.8702 0.737483 22.8702 1.21773C22.8702 1.69798 23.2596 2.0873 23.7398 2.0873C24.2201 2.0873 24.6094 1.69798 24.6094 1.21773C24.6094 0.737483 24.2201 0.348166 23.7398 0.348166ZM12.6953 1.47758C12.2151 1.47758 11.8257 1.8669 11.8257 2.34715C11.8257 2.82739 12.2151 3.21671 12.6953 3.21671C13.1756 3.21671 13.5649 2.82739 13.5649 2.34715C13.5649 1.8669 13.1756 1.47758 12.6953 1.47758ZM27.3047 1.47758C26.8244 1.47758 26.4351 1.8669 26.4351 2.34715C26.4351 2.82739 26.8244 3.21671 27.3047 3.21671C27.7849 3.21671 28.1743 2.82739 28.1743 2.34715C28.1743 1.8669 27.7849 1.47758 27.3047 1.47758ZM9.39198 3.21671C8.91174 3.21671 8.52242 3.60603 8.52242 4.08628C8.52242 4.56652 8.91174 4.95584 9.39198 4.95584C9.87223 4.95584 10.2615 4.56652 10.2615 4.08628C10.2615 3.60603 9.87223 3.21671 9.39198 3.21671ZM30.608 3.21671C30.1278 3.21671 29.7385 3.60603 29.7385 4.08628C29.7385 4.56652 30.1278 4.95584 30.608 4.95584C31.0883 4.95584 31.4776 4.56652 31.4776 4.08628C31.4776 3.60603 31.0883 3.21671 30.608 3.21671ZM20 5.21739C11.8512 5.21739 5.21739 11.8512 5.21739 20C5.21739 28.1488 11.8512 34.7826 20 34.7826C28.1488 34.7826 34.7826 28.1488 34.7826 20C34.7826 11.8512 28.1488 5.21739 20 5.21739ZM6.43512 5.56556C5.95487 5.56556 5.56556 5.95487 5.56556 6.43512C5.56556 6.66575 5.65717 6.88692 5.82025 7.05C5.98332 7.21307 6.2045 7.30469 6.43512 7.30469C6.66575 7.30469 6.88692 7.21307 7.05 7.05C7.21307 6.88692 7.30469 6.66575 7.30469 6.43512C7.30469 6.2045 7.21307 5.98332 7.05 5.82025C6.88692 5.65717 6.66575 5.56556 6.43512 5.56556ZM33.5649 5.56556C33.0846 5.56556 32.6953 5.95487 32.6953 6.43512C32.6953 6.66575 32.7869 6.88692 32.95 7.05C33.1131 7.21307 33.3343 7.30469 33.5649 7.30469C33.7955 7.30469 34.0167 7.21307 34.1798 7.05C34.3428 6.88692 34.4344 6.66575 34.4344 6.43512C34.4344 5.95487 34.0451 5.56556 33.5649 5.56556ZM20 7.82609C26.7389 7.82609 32.1739 13.2611 32.1739 20C32.1739 26.7389 26.7389 32.1739 20 32.1739C13.2611 32.1739 7.82609 26.7389 7.82609 20C7.82609 13.2611 13.2611 7.82609 20 7.82609ZM4.08628 8.52242C3.60603 8.52242 3.21671 8.91174 3.21671 9.39198C3.21671 9.87223 3.60603 10.2615 4.08628 10.2615C4.56652 10.2615 4.95584 9.87223 4.95584 9.39198C4.95584 8.91174 4.56652 8.52242 4.08628 8.52242ZM35.9137 8.52242C35.4335 8.52242 35.0442 8.91174 35.0442 9.39198C35.0442 9.87223 35.4335 10.2615 35.9137 10.2615C36.394 10.2615 36.7833 9.87223 36.7833 9.39198C36.7833 8.91174 36.394 8.52242 35.9137 8.52242ZM20 11.3043C15.2284 11.3043 11.3043 15.2284 11.3043 20C11.3043 24.7716 15.2284 28.6957 20 28.6957C24.7716 28.6957 28.6957 24.7716 28.6957 20C28.6957 15.2284 24.7716 11.3043 20 11.3043ZM2.34715 11.8257C1.8669 11.8257 1.47758 12.2151 1.47758 12.6953C1.47758 13.1756 1.8669 13.5649 2.34715 13.5649C2.82739 13.5649 3.21671 13.1756 3.21671 12.6953C3.21671 12.2151 2.82739 11.8257 2.34715 11.8257ZM37.6529 11.8257C37.1726 11.8257 36.7833 12.2151 36.7833 12.6953C36.7833 13.1756 37.1726 13.5649 37.6529 13.5649C38.1331 13.5649 38.5224 13.1756 38.5224 12.6953C38.5224 12.2151 38.1331 11.8257 37.6529 11.8257ZM1.21773 15.3906C0.737483 15.3906 0.348166 15.7799 0.348166 16.2602C0.348166 16.7404 0.737483 17.1298 1.21773 17.1298C1.69798 17.1298 2.0873 16.7404 2.0873 16.2602C2.0873 15.7799 1.69798 15.3906 1.21773 15.3906ZM38.7823 15.3906C38.302 15.3906 37.9127 15.7799 37.9127 16.2602C37.9127 16.7404 38.302 17.1298 38.7823 17.1298C39.2625 17.1298 39.6518 16.7404 39.6518 16.2602C39.6518 15.7799 39.2625 15.3906 38.7823 15.3906ZM20 16.5217C21.9519 16.5217 23.4783 18.0481 23.4783 20C23.4783 21.9519 21.9519 23.4783 20 23.4783C18.0481 23.4783 16.5217 21.9519 16.5217 20C16.5217 18.0481 18.0481 16.5217 20 16.5217ZM0.869565 19.1304C0.389318 19.1304 0 19.5198 0 20C0 20.4802 0.389318 20.8696 0.869565 20.8696C1.34981 20.8696 1.73913 20.4802 1.73913 20C1.73913 19.5198 1.34981 19.1304 0.869565 19.1304ZM39.1304 19.1304C38.6502 19.1304 38.2609 19.5198 38.2609 20C38.2609 20.4802 38.6502 20.8696 39.1304 20.8696C39.6107 20.8696 40 20.4802 40 20C40 19.5198 39.6107 19.1304 39.1304 19.1304ZM1.21773 22.8702C0.737483 22.8702 0.348166 23.2596 0.348166 23.7398C0.348166 24.2201 0.737483 24.6094 1.21773 24.6094C1.69798 24.6094 2.0873 24.2201 2.0873 23.7398C2.0873 23.2596 1.69798 22.8702 1.21773 22.8702ZM38.7823 22.8702C38.302 22.8702 37.9127 23.2596 37.9127 23.7398C37.9127 24.2201 38.302 24.6094 38.7823 24.6094C39.2625 24.6094 39.6518 24.2201 39.6518 23.7398C39.6518 23.2596 39.2625 22.8702 38.7823 22.8702ZM2.34715 26.4351C1.8669 26.4351 1.47758 26.8244 1.47758 27.3047C1.47758 27.7849 1.8669 28.1743 2.34715 28.1743C2.82739 28.1743 3.21671 27.7849 3.21671 27.3047C3.21671 26.8244 2.82739 26.4351 2.34715 26.4351ZM37.6529 26.4351C37.1726 26.4351 36.7833 26.8244 36.7833 27.3047C36.7833 27.7849 37.1726 28.1743 37.6529 28.1743C38.1331 28.1743 38.5224 27.7849 38.5224 27.3047C38.5224 26.8244 38.1331 26.4351 37.6529 26.4351ZM4.08628 29.7385C3.60603 29.7385 3.21671 30.1278 3.21671 30.608C3.21671 31.0883 3.60603 31.4776 4.08628 31.4776C4.56652 31.4776 4.95584 31.0883 4.95584 30.608C4.95584 30.1278 4.56652 29.7385 4.08628 29.7385ZM35.9137 29.7385C35.4335 29.7385 35.0442 30.1278 35.0442 30.608C35.0442 31.0883 35.4335 31.4776 35.9137 31.4776C36.394 31.4776 36.7833 31.0883 36.7833 30.608C36.7833 30.1278 36.394 29.7385 35.9137 29.7385ZM6.43512 32.6953C5.95487 32.6953 5.56556 33.0846 5.56556 33.5649C5.56556 34.0451 5.95487 34.4344 6.43512 34.4344C6.66575 34.4344 6.88692 34.3428 7.05 34.1798C7.21307 34.0167 7.30469 33.7955 7.30469 33.5649C7.30469 33.3343 7.21307 33.1131 7.05 32.95C6.88692 32.7869 6.66575 32.6953 6.43512 32.6953ZM33.5649 32.6953C33.0846 32.6953 32.6953 33.0846 32.6953 33.5649C32.6953 34.0451 33.0846 34.4344 33.5649 34.4344C34.0451 34.4344 34.4344 34.0451 34.4344 33.5649C34.4344 33.0846 34.0451 32.6953 33.5649 32.6953ZM9.39198 35.0442C8.91174 35.0442 8.52242 35.4335 8.52242 35.9137C8.52242 36.394 8.91174 36.7833 9.39198 36.7833C9.87223 36.7833 10.2615 36.394 10.2615 35.9137C10.2615 35.4335 9.87223 35.0442 9.39198 35.0442ZM30.608 35.0442C30.1278 35.0442 29.7385 35.4335 29.7385 35.9137C29.7385 36.394 30.1278 36.7833 30.608 36.7833C31.0883 36.7833 31.4776 36.394 31.4776 35.9137C31.4776 35.4335 31.0883 35.0442 30.608 35.0442ZM12.6953 36.7833C12.2151 36.7833 11.8257 37.1726 11.8257 37.6529C11.8257 38.1331 12.2151 38.5224 12.6953 38.5224C13.1756 38.5224 13.5649 38.1331 13.5649 37.6529C13.5649 37.1726 13.1756 36.7833 12.6953 36.7833ZM27.3047 36.7833C26.8244 36.7833 26.4351 37.1726 26.4351 37.6529C26.4351 38.1331 26.8244 38.5224 27.3047 38.5224C27.7849 38.5224 28.1743 38.1331 28.1743 37.6529C28.1743 37.1726 27.7849 36.7833 27.3047 36.7833ZM16.2602 37.9127C15.7799 37.9127 15.3906 38.302 15.3906 38.7823C15.3906 39.2625 15.7799 39.6518 16.2602 39.6518C16.7404 39.6518 17.1298 39.2625 17.1298 38.7823C17.1298 38.302 16.7404 37.9127 16.2602 37.9127ZM23.7398 37.9127C23.2596 37.9127 22.8702 38.302 22.8702 38.7823C22.8702 39.2625 23.2596 39.6518 23.7398 39.6518C24.2201 39.6518 24.6094 39.2625 24.6094 38.7823C24.6094 38.302 24.2201 37.9127 23.7398 37.9127ZM20 38.2609C19.5198 38.2609 19.1304 38.6502 19.1304 39.1304C19.1304 39.6107 19.5198 40 20 40C20.4802 40 20.8696 39.6107 20.8696 39.1304C20.8696 38.6502 20.4802 38.2609 20 38.2609Z" />
      </svg>
    ),
  },
  {
    name: "Feature3",
    icon: (
      <svg
        className="w-full"
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.7531 2.98946V37.0106C19.8352 37.0118 19.9176 37.0124 20 37.0124C29.3957 37.0124 37.0123 29.3957 37.0123 20C37.0123 10.6044 29.3957 2.9877 20 2.9877C19.9176 2.9877 19.8352 2.98829 19.7531 2.98946ZM32.5926 20.4939C32.5926 22.5394 30.9344 24.1976 28.8889 24.1976C26.8434 24.1976 25.1852 22.5394 25.1852 20.4939C25.1852 18.4484 26.8434 16.7902 28.8889 16.7902C30.9344 16.7902 32.5926 18.4484 32.5926 20.4939ZM40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
        />
      </svg>
    ),
  },
];

export default function Features() {
  const t = useTranslations("Pages.Home.Features");

  return (
    <section className="main-container px-4 py-section-sm md:py-section-md">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {cards.map((item) => (
          <div
            className="group/card ring-divider rounded px-8 py-section-sm ring-1 transition-colors hover:bg-accent-main lg:py-section-md"
            key={item.name}
          >
            {/* Title */}
            <div className="text-accent grid justify-center gap-4 transition-colors group-hover/card:text-white">
              <div className="mx-auto w-12">{item.icon}</div>
              <h3 className="cursor-default text-lg font-semibold md:text-xl lg:text-2xl">
                {t(`${item.name}.title`)}
              </h3>
            </div>
            <p className="max-w-100 text-primary mx-auto my-12 cursor-default text-center text-lg font-light leading-7 transition-colors group-hover/card:text-white">
              {t(`${item.name}.text`)}
            </p>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-accent-main transition-colors group-hover/card:bg-white"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

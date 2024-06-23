import Link from "next/link";

export default function GetInTouch() {
  return (
    <section
      className="bg-cover bg-center lg:bg-[center_30%]"
      style={{
        backgroundImage: `linear-gradient(#0007, #0008), url('assets/visitStore.webp')`,
      }}
    >
      <div className="py-section-sm md:py-section-md container mx-auto max-w-screen-lg px-4 text-center">
        <h2 className="mx-auto my-6 font-special text-3xl text-white md:text-5xl md:leading-[1.3] lg:my-10 lg:text-7xl lg:leading-[1.2]">
          Long headline to turn your visitors into users
        </h2>
        <Link href="/shop" className="btn-outlined font-brand lg:text-xl">
          Go Shop
        </Link>
      </div>
    </section>
  );
}

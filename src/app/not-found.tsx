import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Not Found",
};

export default function NotFound() {
  return (
    <html>
      <body>
        <main className="grid place-items-center text-xl">
          404 | This page could not be found.
        </main>
      </body>
    </html>
  );
}

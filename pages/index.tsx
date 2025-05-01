import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-teal-400 p-6 space-y-6">
      <h1 className="text-3xl font-bold border-b border-teal-600 pb-2">
      Todos App – 3 Rendering Methods
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Link href="/client-todos">
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition hover:bg-teal-900 cursor-pointer">
            <h2 className="text-xl font-semibold text-teal-300 mb-2">
              Client Side Rendering
            </h2>
            <p className="text-sm text-teal-400">
              Sahifa brauzerda yuklanadi va maʼlumotlar client tomonda olinadi.
            </p>
          </div>
        </Link>

        <Link href="/server-todos">
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition hover:bg-teal-900 cursor-pointer">
            <h2 className="text-xl font-semibold text-teal-300 mb-2">
              Server Side Rendering
            </h2>
            <p className="text-sm text-teal-400">
              Har bir so‘rovda serverda sahifa tayyorlanadi va yuboriladi.
            </p>
          </div>
        </Link>

        <Link href="/static-todos">
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition hover:bg-teal-900 cursor-pointer">
            <h2 className="text-xl font-semibold text-teal-300 mb-2">
              Static Site Generation
            </h2>
            <p className="text-sm text-teal-400">
              Maʼlumotlar build vaqtida oldindan tayyorlanadi.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

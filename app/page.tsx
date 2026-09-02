import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Verified Professionals.<br />
          <span className="text-blue-900">Trusted Repairs.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          South Africa’s trusted platform for finding independently verified automotive mechanics and workshops.
        </p>

        {/* Search Box */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <input
              type="text"
              placeholder="Search by brand, city or workshop..."
              className="flex-1 px-4 py-3 rounded-xl outline-none text-sm"
            />
            <Link
              href="/search"
              className="bg-blue-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-800 transition text-center"
            >
              Search
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Independently Verified</h3>
            <p className="text-gray-600 text-sm">
              Every mechanic and workshop goes through a structured verification process.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Verifi Score™</h3>
            <p className="text-gray-600 text-sm">
              A transparent trust score based on qualifications, experience and compliance.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">Digital Credentials</h3>
            <p className="text-gray-600 text-sm">
              Unique Verifi ID and QR code for instant verification of professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to find a trusted professional?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Join vehicle owners across South Africa who only work with verified mechanics and workshops.
        </p>
        <Link
          href="/search"
          className="bg-blue-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-800 transition inline-block"
        >
          Start Searching
        </Link>
      </section>
    </div>
  );
}
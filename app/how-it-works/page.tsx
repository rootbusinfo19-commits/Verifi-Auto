import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            How Verifi Auto Works
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We independently verify automotive professionals so vehicle owners can find trusted mechanics and workshops with confidence.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 bg-blue-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold shrink-0">
              1
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Professionals Apply</h2>
              <p className="text-gray-600 leading-relaxed">
                Mechanics and workshop owners create an account and submit a verification application. 
                They provide their qualifications, experience, specializations, and location.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 bg-blue-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold shrink-0">
              2
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Independent Review</h2>
              <p className="text-gray-600 leading-relaxed">
                Our team carefully reviews each application. We check the information provided 
                and only approve professionals who meet our verification standards.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 bg-blue-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold shrink-0">
              3
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Verifi Score™ & Credential</h2>
              <p className="text-gray-600 leading-relaxed">
                Approved professionals receive a Verifi Score™ and a unique Digital Credential. 
                This makes it easy for vehicle owners to identify trusted service providers.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 bg-blue-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold shrink-0">
              4
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Find & Trust</h2>
              <p className="text-gray-600 leading-relaxed">
                Vehicle owners can search for verified mechanics and workshops by brand, city, or specialization. 
                Only independently verified professionals appear in the results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Who is Verifi Auto for?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Vehicle Owners</h3>
              <p className="text-gray-600 text-sm">
                Find mechanics and workshops you can trust for your car, bakkie, or fleet.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Mechanics</h3>
              <p className="text-gray-600 text-sm">
                Get verified, build trust, and connect with customers looking for qualified professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Workshops</h3>
              <p className="text-gray-600 text-sm">
                Showcase your workshop as independently verified and attract more quality customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Whether you’re looking for a trusted professional or want to get verified yourself.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/search"
            className="bg-blue-900 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition"
          >
            Find a Professional
          </Link>
          <Link
            href="/register"
            className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition"
          >
            Get Verified
          </Link>
        </div>
      </section>
    </div>
  );
}
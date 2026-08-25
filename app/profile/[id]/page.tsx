export default function ProfilePage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Cover + Profile Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 h-40 md:h-52"></div>

      <div className="max-w-5xl mx-auto px-6 -mt-16">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar */}
            <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-900 font-bold text-3xl shrink-0">
              TS
            </div>

            {/* Main Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl md:text-3xl font-bold">Thabo’s Auto Specialists</h1>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                  Verified
                </span>
              </div>
              <p className="text-gray-500 mt-1">Workshop · Johannesburg, Gauteng</p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Verifi Score™</span>
                  <div className="text-2xl font-bold text-blue-900">92</div>
                  <div className="text-xs text-gray-400">Platinum</div>
                </div>
                <div className="border-l border-gray-200 pl-4">
                  <span className="text-gray-500">Years in Business</span>
                  <div className="text-xl font-semibold">11</div>
                </div>
                <div className="border-l border-gray-200 pl-4">
                  <span className="text-gray-500">Reviews</span>
                  <div className="text-xl font-semibold">48</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <button className="bg-blue-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-800 transition">
                Contact Workshop
              </button>
              <button className="border border-gray-300 px-6 py-2.5 rounded-full font-medium hover:bg-gray-50 transition">
                Save to Favourites
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-8">
          {/* About */}
          <section>
            <h2 className="text-lg font-semibold mb-3">About</h2>
            <p className="text-gray-600 leading-relaxed">
              Thabo’s Auto Specialists is a fully verified workshop specialising in Toyota, Volkswagen and Ford vehicles. 
              We offer diagnostic services, mechanical repairs, and maintenance with genuine parts. 
              All technicians are trade-tested and continuously trained.
            </p>
          </section>

          {/* Brands */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Supported Brands</h2>
            <div className="flex flex-wrap gap-2">
              {["Toyota", "Volkswagen", "Ford", "Nissan", "Hyundai"].map((brand) => (
                <span
                  key={brand}
                  className="bg-gray-100 text-gray-800 text-sm px-3 py-1.5 rounded-full"
                >
                  {brand}
                </span>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Qualifications & Certifications</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                Trade Test Certificate (Red Seal)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                Toyota South Africa Technical Training
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                Volkswagen Group Specialist
              </li>
            </ul>
          </section>
        </div>

        {/* Right Column - Credential Card */}
        <div>
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50 sticky top-24">
            <h3 className="font-semibold mb-4">Verifi Digital Credential™</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Verifi ID</span>
                <span className="font-medium">VA-ZA-WS-000042</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span className="text-green-700 font-medium">Verified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Verified On</span>
                <span>12 Mar 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Valid Until</span>
                <span>12 Mar 2027</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 text-center">
              <div className="w-24 h-24 bg-white border border-gray-300 rounded-xl mx-auto flex items-center justify-center text-xs text-gray-400">
                QR Code
              </div>
              <p className="text-xs text-gray-500 mt-2">Scan to verify</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
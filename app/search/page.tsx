export default function SearchPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Page Header */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Find Verified Professionals
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Search independently verified mechanics and workshops across South Africa.
          </p>

          {/* Search Filters */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              type="text"
              placeholder="Brand (e.g. Toyota, BMW...)"
              className="px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-900"
            />
            <input
              type="text"
              placeholder="City or Province"
              className="px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-900"
            />
            <select className="px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-900 bg-white">
              <option value="">All Types</option>
              <option value="mechanic">Mechanics</option>
              <option value="workshop">Workshops</option>
            </select>
            <button className="bg-blue-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-800 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-gray-500">Showing verified professionals</p>
          <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white">
            <option>Highest Verifi Score</option>
            <option>Nearest</option>
            <option>Most Reviews</option>
          </select>
        </div>

        {/* Example Result Cards */}
        <div className="grid gap-6">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition bg-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-900 font-bold text-lg">
                  TS
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">Thabo’s Auto Specialists</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Verified
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Workshop · Johannesburg, Gauteng</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Specialises in Toyota, Volkswagen & Ford
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-900">92</div>
                <div className="text-xs text-gray-500">Verifi Score™</div>
                <div className="text-xs text-gray-400 mt-1">Platinum</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition bg-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-900 font-bold text-lg">
                  LM
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">Lerato Mokoena</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Verified
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Mechanic · Pretoria, Gauteng</p>
                  <p className="text-sm text-gray-600 mt-2">
                    BMW & Mercedes-Benz specialist · 12 years experience
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-900">88</div>
                <div className="text-xs text-gray-500">Verifi Score™</div>
                <div className="text-xs text-gray-400 mt-1">Gold</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition bg-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-900 font-bold text-lg">
                  CP
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">Cape Precision Motors</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Verified
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Workshop · Cape Town, Western Cape</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Audi, Volkswagen & Porsche · Full diagnostic equipment
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-900">95</div>
                <div className="text-xs text-gray-500">Verifi Score™</div>
                <div className="text-xs text-gray-400 mt-1">Platinum</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
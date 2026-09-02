import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">VA</span>
            </div>
            <span className="text-2xl font-semibold tracking-tight">Verifi Auto</span>
          </div>
          <p className="mt-3 text-gray-600">Create your Verifi Auto account</p>
        </div>

        {/* Register Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-900 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-900 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                I am a...
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-900 bg-white transition">
                <option value="">Select account type</option>
                <option value="customer">Vehicle Owner</option>
                <option value="mechanic">Mechanic</option>
                <option value="workshop">Workshop Owner</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-900 transition"
              />
            </div>

            <button
              type="button"
              className="w-full bg-blue-900 text-white py-3 rounded-xl font-medium hover:bg-blue-800 transition"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-900 font-medium hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";

export default function LoginPage() {
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
          <p className="mt-3 text-gray-600">Sign in to your account</p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <form className="space-y-5">
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
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-900 transition"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-blue-900 font-medium hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="button"
              className="w-full bg-blue-900 text-white py-3 rounded-xl font-medium hover:bg-blue-800 transition"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/register" className="text-blue-900 font-medium hover:underline">
              Create one
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
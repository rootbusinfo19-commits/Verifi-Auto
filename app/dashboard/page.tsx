"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUser(user);
      setLoading(false);
    };

    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const accountType = user?.user_metadata?.account_type || "customer";
  const fullName = user?.user_metadata?.full_name || "User";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Welcome back, {fullName}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Log out
          </button>
        </div>

        {/* Account Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-semibold text-lg mb-2">Account Type</h2>
            <p className="text-gray-600 capitalize">
              {accountType === "customer" && "Vehicle Owner"}
              {accountType === "mechanic" && "Mechanic"}
              {accountType === "workshop" && "Workshop Owner"}
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-semibold text-lg mb-2">Email</h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-semibold text-lg mb-2">Status</h2>
            <p className="text-green-700 font-medium">Active</p>
          </div>
        </div>

        {/* Different content based on account type */}
        {accountType === "customer" && (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Vehicle Owner Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Find and connect with verified mechanics and workshops across South Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/search"
                className="bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-800 transition"
              >
                Search Verified Professionals
              </Link>
              <Link
                href="/"
                className="border border-gray-300 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        )}

        {accountType === "mechanic" && (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Mechanic Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Manage your professional profile and verification status.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
              <p className="text-sm text-blue-900">
                <strong>Verification Status:</strong> Not yet submitted
              </p>
              <p className="text-sm text-blue-800 mt-1">
                Complete your verification to appear in search results and receive a Verifi Score™.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
             <Link
  href="/apply"
  className="bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-800 transition"
>
  Start Verification Application
</Link>
              <Link
                href="/search"
                className="border border-gray-300 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition"
              >
                View Search
              </Link>
            </div>
          </div>
        )}

        {accountType === "workshop" && (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Workshop Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Manage your workshop profile, technicians, and verification.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
              <p className="text-sm text-blue-900">
                <strong>Verification Status:</strong> Not yet submitted
              </p>
              <p className="text-sm text-blue-800 mt-1">
                Submit your workshop for verification to get a Verifi Score™ and appear in search results.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
  href="/apply"
  className="bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-800 transition"
>
  Start Verification Application
</Link>
              <Link
                href="/search"
                className="border border-gray-300 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition"
              >
                View Search
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
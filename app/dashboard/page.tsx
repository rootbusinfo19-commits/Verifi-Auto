"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [application, setApplication] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUser(user);

      // Get the user's latest application
      const { data } = await supabase
        .from("applications")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      setApplication(data);
      setLoading(false);
    };

    getData();
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

  const statusColor = {
    pending: "bg-orange-100 text-orange-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

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

        {/* Customer View */}
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

        {/* Mechanic / Workshop View */}
        {(accountType === "mechanic" || accountType === "workshop") && (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              {accountType === "workshop" ? "Workshop Dashboard" : "Mechanic Dashboard"}
            </h2>
            <p className="text-gray-600 mb-6">
              Manage your professional profile and verification status.
            </p>

            {/* Application Status */}
            {application ? (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Verification Status</p>
                    <p className="font-medium mt-1 capitalize">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor[application.status as keyof typeof statusColor] || "bg-gray-100"}`}>
                        {application.status}
                      </span>
                    </p>
                  </div>
                  <p className="text-xs text-gray-400">
                    Submitted {new Date(application.created_at).toLocaleDateString()}
                  </p>
                </div>

                {application.status === "pending" && (
                  <p className="text-sm text-gray-600 mt-3">
                    Your application is being reviewed by the Verifi Auto team.
                  </p>
                )}
                {application.status === "approved" && (
                  <p className="text-sm text-green-700 mt-3">
                    Congratulations! You are now a verified professional on Verifi Auto.
                  </p>
                )}
                {application.status === "rejected" && (
                  <p className="text-sm text-red-600 mt-3">
                    Your application was not approved. Please contact support for more information.
                  </p>
                )}
              </div>
            ) : (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                <p className="text-sm text-blue-900">
                  <strong>Verification Status:</strong> Not yet submitted
                </p>
                <p className="text-sm text-blue-800 mt-1">
                  Complete your verification to appear in search results and receive a Verifi Score™.
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              {!application && (
                <Link
                  href="/apply"
                  className="bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-800 transition"
                >
                  Start Verification Application
                </Link>
              )}
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
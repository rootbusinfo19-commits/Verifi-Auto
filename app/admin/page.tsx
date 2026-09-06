"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      // For now we allow any logged-in user to see the admin page.
      // Later we will restrict this to real admins only.
      setUser(user);
      setLoading(false);
    };

    checkAdmin();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading admin panel...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Manage Verifi Auto platform
            </p>
          </div>
          <Link
            href="/dashboard"
            className="text-sm border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Back to Dashboard
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Users</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">—</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">Pending Verifications</p>
            <p className="text-3xl font-bold text-orange-600 mt-1">—</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">Verified Mechanics</p>
            <p className="text-3xl font-bold text-green-700 mt-1">—</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">Verified Workshops</p>
            <p className="text-3xl font-bold text-green-700 mt-1">—</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <p className="text-gray-600 mb-6">
            This is the foundation of the Admin panel. In the next steps we will add:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
            <li>View all registered users</li>
            <li>Review verification applications</li>
            <li>Approve or reject mechanics and workshops</li>
            <li>Manage Verifi Scores</li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-800 transition">
              View Users (coming soon)
            </button>
            <button className="border border-gray-300 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition">
              Review Applications (coming soon)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
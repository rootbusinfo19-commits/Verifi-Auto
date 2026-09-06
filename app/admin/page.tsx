"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUser(user);

      const { data, error } = await supabase
        .from("applications")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setApplications(data || []);
      }

      setLoading(false);
    };

    loadData();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading admin panel...</p>
      </div>
    );
  }

  const pendingCount = applications.filter((a) => a.status === "pending").length;
  const approvedCount = applications.filter((a) => a.status === "approved").length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Manage verification applications
            </p>
          </div>
          <Link
            href="/dashboard"
            className="text-sm border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Back to Dashboard
          </Link>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Applications</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{applications.length}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">Pending</p>
            <p className="text-3xl font-bold text-orange-600 mt-1">{pendingCount}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">Approved</p>
            <p className="text-3xl font-bold text-green-700 mt-1">{approvedCount}</p>
          </div>
        </div>

        {/* Applications List */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Verification Applications</h2>
          </div>

          {applications.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No applications yet.
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {applications.map((app) => (
                <div key={app.id} className="p-6 hover:bg-gray-50 transition">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-gray-900">
                          {app.full_name}
                          {app.business_name && ` – ${app.business_name}`}
                        </h3>
                        <span
                          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                            app.status === "pending"
                              ? "bg-orange-100 text-orange-800"
                              : app.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {app.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1 capitalize">
                        {app.account_type} · {app.city}, {app.province}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        {app.specializations}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        Submitted: {new Date(app.created_at).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-sm bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition">
                        Approve
                      </button>
                      <button className="text-sm border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
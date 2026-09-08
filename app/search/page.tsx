"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default function SearchPage() {
  const [professionals, setProfessionals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    const fetchApproved = async () => {
      const { data, error } = await supabase
        .from("applications")
        .select("*")
        .eq("status", "approved")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setProfessionals(data || []);
      }
      setLoading(false);
    };

    fetchApproved();
  }, []);

  const filtered = professionals.filter((p) => {
    const matchesSearch =
      !searchTerm ||
      p.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.business_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.specializations?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCity =
      !cityFilter ||
      p.city?.toLowerCase().includes(cityFilter.toLowerCase()) ||
      p.province?.toLowerCase().includes(cityFilter.toLowerCase());

    const matchesType =
      !typeFilter || p.account_type === typeFilter;

    return matchesSearch && matchesCity && matchesType;
  });

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
              placeholder="Brand, name or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-900"
            />
            <input
              type="text"
              placeholder="City or Province"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-900"
            />
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-900 bg-white"
            >
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
          <p className="text-sm text-gray-500">
            {loading
              ? "Loading..."
              : `Showing ${filtered.length} verified professional${filtered.length !== 1 ? "s" : ""}`}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading professionals...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No verified professionals found yet.</p>
            <p className="text-gray-400 text-sm mt-2">
              Approve some applications in the Admin panel to see them here.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filtered.map((pro) => (
              <Link
                key={pro.id}
                href={`/profile/${pro.id}`}
                className="block"
              >
                <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition bg-white cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-900 font-bold text-lg">
                        {(pro.business_name || pro.full_name || "VA")
                          .split(" ")
                          .map((w: string) => w[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold">
                            {pro.business_name || pro.full_name}
                          </h3>
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            Verified
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1 capitalize">
                          {pro.account_type} · {pro.city}, {pro.province}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          {pro.specializations}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-900">—</div>
                      <div className="text-xs text-gray-500">Verifi Score™</div>
                      <div className="text-xs text-gray-400 mt-1">Coming soon</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [professionals, setProfessionals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      const { data } = await supabase
        .from("applications")
        .select("*")
        .eq("status", "approved")
        .order("verifi_score", { ascending: false })
        .limit(3);

      setProfessionals(data || []);
      setLoading(false);
    };

    fetchFeatured();
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Verified Professionals.<br />
          <span className="text-blue-900">Trusted Repairs.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          South Africa’s trusted platform for finding independently verified automotive mechanics and workshops.
        </p>

        {/* Search Box */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <input
              type="text"
              placeholder="Search by brand, city or workshop..."
              className="flex-1 px-4 py-3 rounded-xl outline-none text-sm"
            />
            <Link
              href="/search"
              className="bg-blue-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-800 transition text-center"
            >
              Search
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Independently Verified</h3>
            <p className="text-gray-600 text-sm">
              Every mechanic and workshop goes through a structured verification process.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Verifi Score™</h3>
            <p className="text-gray-600 text-sm">
              A transparent trust score based on qualifications, experience and compliance.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">Digital Credentials</h3>
            <p className="text-gray-600 text-sm">
              Unique Verifi ID and QR code for instant verification of professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Verified Professionals</h2>
          <Link href="/search" className="text-sm text-blue-900 font-medium hover:underline">
            View all →
          </Link>
        </div>

        {loading ? (
          <p className="text-gray-500 text-center py-8">Loading professionals...</p>
        ) : professionals.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl">
            <p className="text-gray-500">No verified professionals yet.</p>
            <p className="text-sm text-gray-400 mt-1">
              Approve applications in the Admin panel to feature them here.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {professionals.map((pro) => (
              <Link
                key={pro.id}
                href={`/profile/${pro.id}`}
                className="block border border-gray-200 rounded-2xl p-6 hover:shadow-md transition bg-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-900 font-bold">
                    {(pro.business_name || pro.full_name || "VA")
                      .split(" ")
                      .map((w: string) => w[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      {pro.business_name || pro.full_name}
                    </h3>
                    <p className="text-xs text-gray-500 capitalize">
                      {pro.account_type} · {pro.city}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {pro.specializations}
                </p>
                <div className="flex items-center justify-between">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Verified
                  </span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-900">
                      {pro.verifi_score || "—"}
                    </div>
                    <div className="text-xs text-gray-500">Verifi Score™</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to find a trusted professional?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Join vehicle owners across South Africa who only work with verified mechanics and workshops.
        </p>
        <Link
          href="/search"
          className="bg-blue-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-800 transition inline-block"
        >
          Start Searching
        </Link>
      </section>
    </div>
  );
}
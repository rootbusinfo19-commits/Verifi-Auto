"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";

export default function ProfilePage() {
  const params = useParams();
  const id = params.id as string;

  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("applications")
        .select("*")
        .eq("id", id)
        .eq("status", "approved")
        .maybeSingle();

      if (error || !data) {
        setNotFound(true);
      } else {
        setProfile(data);
      }
      setLoading(false);
    };

    if (id) {
      fetchProfile();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (notFound || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile not found</h1>
          <p className="text-gray-600 mb-6">
            This professional is not verified or does not exist.
          </p>
          <Link
            href="/search"
            className="bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-800 transition"
          >
            Back to Search
          </Link>
        </div>
      </div>
    );
  }

  const displayName = profile.business_name || profile.full_name;
  const initials = displayName
    .split(" ")
    .map((w: string) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Cover */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 h-40 md:h-52"></div>

      <div className="max-w-5xl mx-auto px-6 -mt-16">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar */}
            <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-900 font-bold text-3xl shrink-0">
              {initials}
            </div>

            {/* Main Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl md:text-3xl font-bold">{displayName}</h1>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                  Verified
                </span>
              </div>
              <p className="text-gray-500 mt-1 capitalize">
                {profile.account_type} · {profile.city}, {profile.province}
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Verifi Score™</span>
                  <div className="text-2xl font-bold text-blue-900">—</div>
                  <div className="text-xs text-gray-400">Coming soon</div>
                </div>
                <div className="border-l border-gray-200 pl-4">
                  <span className="text-gray-500">Years Experience</span>
                  <div className="text-xl font-semibold">{profile.years_experience || "—"}</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <button className="bg-blue-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-800 transition">
                Contact
              </button>
              <Link
                href="/search"
                className="border border-gray-300 px-6 py-2.5 rounded-full font-medium hover:bg-gray-50 transition text-center"
              >
                Back to Search
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* About */}
          <section>
            <h2 className="text-lg font-semibold mb-3">About</h2>
            <p className="text-gray-600 leading-relaxed">
              {profile.account_type === "workshop"
                ? `${displayName} is a verified workshop based in ${profile.city}, ${profile.province}.`
                : `${profile.full_name} is a verified mechanic based in ${profile.city}, ${profile.province}.`}
            </p>
          </section>

          {/* Specializations */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Specializations / Brands</h2>
            <div className="flex flex-wrap gap-2">
              {(profile.specializations || "")
                .split(",")
                .map((item: string) => item.trim())
                .filter(Boolean)
                .map((brand: string) => (
                  <span
                    key={brand}
                    className="bg-gray-100 text-gray-800 text-sm px-3 py-1.5 rounded-full"
                  >
                    {brand}
                  </span>
                ))}
            </div>
          </section>

          {/* Qualifications */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Qualifications & Certifications</h2>
            <p className="text-gray-600 whitespace-pre-line">
              {profile.qualifications || "No qualifications listed."}
            </p>
          </section>
        </div>

        {/* Credential Card */}
        <div>
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50 sticky top-24">
            <h3 className="font-semibold mb-4">Verifi Digital Credential™</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Verifi ID</span>
                <span className="font-medium text-xs">
                  VA-{profile.id?.slice(0, 8).toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span className="text-green-700 font-medium">Verified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Type</span>
                <span className="capitalize">{profile.account_type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Location</span>
                <span>{profile.city}</span>
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
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SmartSellLanding() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      {/* Header with Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <Image
            src="/smartsell-logo.svg"
            alt="SmartSell Logo"
            width={100}
            height={100}
            priority
          />
        </div>
        <h1 className="text-5xl font-bold text-blue-900 mb-4">SmartSell</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Maximize your home sale with AI-powered pricing, ROI-driven renovations, and investor-backed upgrades — all in one seamless platform.
        </p>
      </motion.div>

      {/* Value Props */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full">
        {[
          {
            title: "AI-Powered Valuation",
            desc: "Accurate pricing using comps, finish levels, and neighborhood trends.",
          },
          {
            title: "Renovation ROI Analyzer",
            desc: "Identify upgrades that double their cost in added value.",
          },
          {
            title: "Investor-Backed Upgrades",
            desc: "Get your home market-ready with no upfront cost.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* ROI Before/After Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 max-w-6xl w-full"
      >
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Upgrade Impact: Before & After
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Before Card */}
          <Card className="rounded-2xl shadow-md border-red-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Before</h3>
              <p className="text-sm text-gray-600 mb-4">3 bed • 2 bath • 1,850 sq ft • Built 1998</p>
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-700">As‑Is Value</span>
                <span className="font-semibold text-gray-900">$365,000</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
                <div className="h-2 bg-gray-500 rounded-full" style={{ width: "55%" }} />
              </div>
              <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                <li>Original oak cabinets, Formica counters</li>
                <li>Builder‑grade lighting & fixtures</li>
                <li>Weathered exterior paint</li>
              </ul>
            </CardContent>
          </Card>

          {/* After Card */}
          <Card className="rounded-2xl shadow-md border-green-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">After (SmartSell Plan)</h3>
              <p className="text-sm text-gray-600 mb-4">AI‑selected upgrades funded at closing</p>
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-700">Projected List Price</span>
                <span className="font-semibold text-gray-900">$429,000</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
                <div className="h-2 bg-green-600 rounded-full" style={{ width: "75%" }} />
              </div>
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-gray-600">Upgrade Budget</span>
                <span className="font-medium text-gray-900">$22,000</span>
              </div>
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-gray-600">Net Uplift</span>
                <span className="font-medium text-green-700">+$42,000</span>
              </div>
              <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                <li>Kitchen refresh (paint, quartz, pulls)</li>
                <li>Primary bath vanity + lighting</li>
                <li>Exterior repaint + landscape clean‑up</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Spanish-Style Hybrid Refresh Example */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-900 text-center mb-6">
            Case Study: Spanish-Style Hybrid Refresh
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow-md border-red-100">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Before</h4>
                <p className="text-sm text-gray-600 mb-4">4 bed • 3 bath • 2,650 sq ft • 1992 brick</p>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-700">As‑Is Value</span>
                  <span className="font-semibold text-gray-900">$545,000</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
                  <div className="h-2 bg-gray-500 rounded-full" style={{ width: "60%" }} />
                </div>

                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>Mixed exterior materials; aging roof color</li>
                  <li>Brown/cream palette feels dated</li>
                  <li>Basic ironwork; unframed windows</li>
                </ul>
              </CardContent>
            </Card>


            <Card className="rounded-2xl shadow-md border-green-100">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">After (Hybrid Plan)</h4>
                <p className="text-sm text-gray-600 mb-4">White-painted brick + red Spanish-look shingles + iron accents</p>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-700">Projected List Price</span>
                  <span className="font-semibold text-gray-900">$629,000</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
                  <div className="h-2 bg-green-600 rounded-full" style={{ width: "78%" }} />
                </div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Upgrade Budget</span>
                  <span className="font-medium text-gray-900">$34,000</span>
                </div>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-gray-600">Net Uplift</span>
                  <span className="font-medium text-green-700">+$50,000</span>
                </div>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>Exterior paint (warm white) + black trims</li>
                  <li>Spanish-tone roof shingles</li>
                  <li>Decorative iron rail + window frames</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Button className="rounded-full px-6 py-3 text-lg">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="text-sm text-gray-500 mt-3">
          Join SmartSell today and unlock your home’s true value.
        </p>
      </motion.div>
    </div>
  );
}

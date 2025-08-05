"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Progress } from "~/components/ui/progress";
import { Droplets, Heart, Users } from "lucide-react";
import { ModeToggle } from "~/components/mode-toggle";

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const donationAmounts = [25, 50, 100, 250];
  const totalRaised = 47850;
  const goal = 75000;
  const donors = 1247;
  const progress = (totalRaised / goal) * 100;

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-3">
            <Droplets className="h-8 w-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Clean Water for All
            </h1>
          </div>
          <ModeToggle />
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <img
            src="/placeholder.svg?height=300&width=600&text=Children+accessing+clean+water"
            alt="Children accessing clean water"
            className="mb-8 h-64 w-full rounded-lg object-cover shadow-lg"
          />
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Help Bring Clean Water to Rural Communities
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Every $25 provides clean drinking water for one person for an entire
            year. Join us in making clean water accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Donation Stats */}
          <Card className="border-gray-200 bg-gray-50 shadow-lg dark:border-gray-800 dark:bg-gray-950">
            <CardHeader className="border-b border-gray-200 dark:border-gray-800">
              <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white">
                <Heart className="h-6 w-6 text-blue-500" />
                Campaign Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Raised so far
                  </span>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    ${totalRaised.toLocaleString()} of ${goal.toLocaleString()}
                  </span>
                </div>
                <Progress
                  value={progress}
                  className="h-3 w-full bg-gray-200 dark:bg-gray-700"
                />
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {Math.round(progress)}% complete
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {donors}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Donors
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {Math.floor(totalRaised / 25)}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    People Helped
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="font-medium text-gray-900 dark:text-white">
                    Recent Donors
                  </span>
                </div>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <p>• Anonymous donated $50 - 2 hours ago</p>
                  <p>• Anonymous donated $100 - 4 hours ago</p>
                  <p>• Anonymous donated $25 - 6 hours ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Donation Form */}
          <Card className="border-gray-200 bg-gray-50 shadow-lg dark:border-gray-800 dark:bg-gray-950">
            <CardHeader className="border-b border-gray-200 dark:border-gray-800">
              <CardTitle className="text-xl text-gray-900 dark:text-white">
                Make a Donation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div>
                <Label className="mb-3 block text-base font-medium text-gray-900 dark:text-white">
                  Choose Amount
                </Label>
                <div className="mb-4 grid grid-cols-2 gap-3">
                  {donationAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={
                        selectedAmount === amount ? "default" : "outline"
                      }
                      className={`h-12 text-lg font-semibold ${
                        selectedAmount === amount
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "border-gray-300 bg-white text-gray-800 hover:border-blue-500 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-blue-500"
                      }`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="custom-amount"
                    className="text-gray-900 dark:text-white"
                  >
                    Other Amount
                  </Label>
                  <div className="relative">
                    <span className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400">
                      $
                    </span>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter amount"
                      className="border-gray-300 pl-8 focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:border-blue-500"
                      value={customAmount}
                      onChange={(e) => handleCustomAmount(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm dark:border-blue-900/50 dark:bg-blue-900/20">
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>Impact:</strong> Your $
                  {selectedAmount || customAmount || "XX"} donation will provide
                  clean water for{" "}
                  {Math.floor(
                    (selectedAmount || Number.parseInt(customAmount) || 0) / 25,
                  )}{" "}
                  people for a full year!
                </p>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-blue-600 py-4 text-lg font-semibold text-white hover:bg-blue-700">
                  Donate ${selectedAmount || customAmount || "0"} Now
                </Button>

                <div className="text-center">
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    Quick donation options:
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 bg-transparent text-xs hover:border-blue-500 dark:border-gray-700 dark:hover:border-blue-500"
                    >
                      PayPal
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 bg-transparent text-xs hover:border-blue-500 dark:border-gray-700 dark:hover:border-blue-500"
                    >
                      Apple Pay
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 bg-transparent text-xs hover:border-blue-500 dark:border-gray-700 dark:hover:border-blue-500"
                    >
                      Google Pay
                    </Button>
                  </div>
                </div>
              </div>

              <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                Anonymous donations are secure and processed instantly. No
                personal information required.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Simple Footer */}
        <footer className="mt-16 border-t border-gray-200 pt-8 text-center dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-300">
            Clean Water for All is a registered 501(c)(3) nonprofit
            organization.
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Tax ID: 12-3456789 | All donations are tax-deductible.
          </p>
        </footer>
      </div>
    </div>
  );
}

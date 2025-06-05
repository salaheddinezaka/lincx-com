
import { useState } from "react"
import { Sun, Moon } from "lucide-react"
import Threads from "@/components/threads"

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {/* Navigation */}
      <nav
        className={`flex items-center justify-between px-6 py-4 border-b transition-colors duration-300 ${isDark ? "border-zinc-800" : "border-gray-200"}`}
      >
        <div className="flex items-center">{/* Logo section removed */}</div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg transition-colors duration-300 ${isDark ? "text-zinc-400 hover:text-white hover:bg-zinc-800" : "text-gray-600 hover:text-black hover:bg-gray-100"}`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#"
            className={`text-sm transition-colors duration-300 ${isDark ? "text-zinc-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
          >
            Log in
          </a>
        </div>
      </nav>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumbs */}
        <div
          className={`flex items-center justify-center text-sm mb-8 transition-colors duration-300 ${isDark ? "text-zinc-500" : "text-gray-500"}`}
        >
          <a
            href="#"
            className={`transition-colors duration-300 ${isDark ? "hover:text-white" : "hover:text-black"}`}
          >
            Proposal
          </a>
          <span className="mx-2">/</span>
          <span>Prepared for Teads by Lincx</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight">
          Lincx + Teads Strategic Marketing Partnership
        </h1>

        {/* Visual Element - Threads Background */}
        <div className="relative h-64 mb-16">
          <div className="w-full h-full flex justify-center items-center">
            <div className="relative w-full max-w-4xl h-48 overflow-hidden">
              <Threads
                color={isDark ? [1, 1, 1] : [0, 0, 0]}
                amplitude={1}
                distance={0}
                enableMouseInteraction={true}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Author and Date */}
        <div
          className={`flex items-center justify-center space-x-4 text-sm mb-16 transition-colors duration-300 ${isDark ? "text-zinc-400" : "text-gray-600"}`}
        >
          <span>Lincx</span>
          <span>•</span>
          <span>June 2025</span>
        </div>

        {/* Content */}
        <div className="max-w-none mx-auto">
          <h2
            className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
          >
            1. Executive Summary
          </h2>
          <p className={`mb-6 leading-7 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
            Following the Outbrain merger, Teads aims to strengthen its brand and increase advertiser spend on its
            platform. Lincx offers a solution: an AI-driven platform that optimizes advertorials and listicles,
            achieving 20-45% conversion rate (CR) improvements within 60-90 days through advanced targeting, A/B
            testing, and device optimization.
          </p>
          <p className={`mb-6 leading-7 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
            This partnership is straightforward:
          </p>
          <ul className={`list-disc pl-6 mb-6 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
            <li className="mb-2 leading-7">
              Teads promotes Lincx to its top advertorial and listicle advertisers, requiring no technical integration
              for Teads.
            </li>
            <li className="mb-2 leading-7">
              Advertisers adopt Lincx, improve their profitability, and allocate higher budgets to Teads' inventory.
            </li>
            <li className="mb-2 leading-7">
              Lincx shares a portion of its platform fees with Teads, creating an additional revenue stream that
              includes spend advertisers place on competing platforms (e.g., Google, Meta, Taboola).
            </li>
          </ul>
          <p className={`mb-12 leading-7 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
            This collaboration delivers increased ad revenue, a new profit source, and positions Teads as a leader in
            AI-driven advertising solutions, all with minimal effort.
          </p>

          <h2
            className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
          >
            2. Market Context & Opportunity
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-700" : "border-gray-300"}`}
                >
                  <th
                    className={`py-3 text-left font-medium transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
                  >
                    Challenge for Teads' Advertisers
                  </th>
                  <th
                    className={`py-3 text-left font-medium transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
                  >
                    Impact
                  </th>
                  <th
                    className={`py-3 text-left font-medium transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
                  >
                    Lincx Solution
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-800" : "border-gray-200"}`}
                >
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Suboptimal revenue per visitor (RPV) on landing pages
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Constrains traffic budgets and reduces ROI
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Machine learning optimizes offer sequences and presentations, increasing RPV by 10-30%.
                  </td>
                </tr>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-800" : "border-gray-200"}`}
                >
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Manual advertorial, listicle and landing page management
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Raises labor costs and delays market responsiveness
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Automated, real-time optimization streamlines operations.
                  </td>
                </tr>
                <tr>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Rising cost-per-click (CPC) pressures margins
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Limits ad spend scalability
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Improved margins enable higher, sustainable bids on Teads' inventory.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={`mb-12 leading-7 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
            <strong>Impact:</strong> A modest increase in RPV, such as 10%, could enable a proportional boost in daily
            ad spend on Teads. Lincx helps advertisers manage rising costs, sustain profitability, and scale campaigns,
            driving mutual revenue growth for Teads and its partners.
          </p>

          <h2
            className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
          >
            3. Partnership Structure
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-700" : "border-gray-300"}`}
                >
                  <th
                    className={`py-3 text-left font-medium transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
                  >
                    Monthly Lincx Billings (per advertiser)
                  </th>
                  <th
                    className={`py-3 text-left font-medium transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
                  >
                    Revenue Share to Teads
                  </th>
                  <th
                    className={`py-3 text-left font-medium transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
                  >
                    Tead's 18-Month Revenue from 20 Referrals*
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-800" : "border-gray-200"}`}
                >
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Up to $10,000
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>10%</td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    $360,000
                  </td>
                </tr>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-800" : "border-gray-200"}`}
                >
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    $10,001 – $24,999
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>15%</td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    $1,080,000
                  </td>
                </tr>
                <tr>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    $25,000+
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>20%</td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    $1,800,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={`mb-6 text-sm transition-colors duration-300 ${isDark ? "text-zinc-400" : "text-gray-600"}`}>
            *Assumes 20 referred advertisers remain in the same billing tier for 18 months, provided as an estimate of
            potential revenue.
          </p>
          <p className={`mb-6 leading-7 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
            <strong>Mechanics:</strong> Teads connects advertisers to Lincx. Lincx pays Teads a quarterly commission
            based on the platform fees collected from these advertisers.
          </p>
          <p className={`mb-6 leading-7 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
            <strong>Benefits for Teads:</strong>
          </p>
          <ul className={`list-disc pl-6 mb-12 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
            <li className="mb-2 leading-7">
              <strong>Dual Revenue:</strong> Increased advertiser spend on Teads plus a share of Lincx's fees.
            </li>
            <li className="mb-2 leading-7">
              <strong>Brand Enhancement:</strong> Positions Teads as an innovator in AI solutions post-merger.
            </li>
            <li className="mb-2 leading-7">
              <strong>Low Effort:</strong> Requires only promotional efforts, with Lincx managing onboarding and
              support.
            </li>
            <li className="mb-2 leading-7">
              <strong>Competitive Advantage:</strong> Captures revenue from advertisers' spend on other platforms.
            </li>
          </ul>

          <h2
            className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
          >
            4. Go-To-Market Plan & Timeline
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-700" : "border-gray-300"}`}
                >
                  <th
                    className={`py-3 text-left font-medium transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
                  >
                    Phase
                  </th>
                  <th
                    className={`py-3 text-left font-medium transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
                  >
                    Activity
                  </th>
                  <th
                    className={`py-3 text-left font-medium transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
                  >
                    Owner
                  </th>
                  <th
                    className={`py-3 text-left font-medium transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
                  >
                    Timing*
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-800" : "border-gray-200"}`}
                >
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Enable
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Deliver a webinar and one-pager to educate Teads Account Managers
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Lincx
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Late June / Early July
                  </td>
                </tr>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-800" : "border-gray-200"}`}
                >
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Launch
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Publish a Teads blog post and newsletter: "Enhance Advertorial ROI with Lincx AI"
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Teads
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Early June
                  </td>
                </tr>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-800" : "border-gray-200"}`}
                >
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Activate
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Account Managers contact top 50 advertorial/listicle advertisers, targeting ≥10 demos
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Teads AMs
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    June–July
                  </td>
                </tr>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-800" : "border-gray-200"}`}
                >
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Engage
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Host a round-table discussion at Affiliate Summit East (NYC, Aug 4-5)**
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Teads + Lincx
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Aug 4-5
                  </td>
                </tr>
                <tr>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Scale
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Release a case study on early successes and expand to additional advertisers
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Joint
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Sep–Dec
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={`mb-6 text-sm transition-colors duration-300 ${isDark ? "text-zinc-400" : "text-gray-600"}`}>
            *Timing adjusts based on partnership confirmation.
            <br />
            **Strong engagement at Affiliate Summit East may lead to collaboration at future industry events.
          </p>

          <h2
            className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
          >
            5. Success Metrics
          </h2>
          <ul className={`list-disc pl-6 mb-6 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
            <li className="mb-2 leading-7">
              <strong>Advertiser Adoption:</strong> 10 active Lincx clients by September, 25+ by December.
            </li>
            <li className="mb-2 leading-7">
              <strong>Incremental Media Spend:</strong> 15% increase in average daily spend from Lincx-adopting
              advertisers within 90 days.
            </li>
            <li className="mb-2 leading-7">
              <strong>Revenue Share:</strong> Target $2M+ in cumulative revenue share to Teads over 18 months.
            </li>
          </ul>
          <p className={`mb-12 leading-7 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
            These metrics foster mutual motivation. If adoption lags, we'll refine our approach with targeted campaigns
            or extra support to achieve our shared goals.
          </p>

          <h2
            className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
          >
            6. Why This Deal Wins for Teads
          </h2>
          <ul className={`list-disc pl-6 mb-6 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
            <li className="mb-2 leading-7">
              <strong>Differentiation:</strong> Offering Lincx's AI tools sets Teads apart as a forward-thinking
              platform, enhancing its post-merger reputation.
            </li>
            <li className="mb-2 leading-7">
              <strong>Risk-Free Model:</strong> Revenue share is earned only upon success, with no upfront costs or
              operational burden.
            </li>
            <li className="mb-2 leading-7">
              <strong>Advertiser Retention:</strong> Profitable advertisers are more likely to increase reliance on
              Teads, fostering long-term loyalty.
            </li>
            <li className="mb-2 leading-7">
              <strong>Market Leadership:</strong> This partnership reinforces Teads' position as an innovator in a
              competitive ad-tech landscape.
            </li>
          </ul>
          <p className={`mb-12 leading-7 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
            This collaboration aligns Teads' goals with advertiser success, driving growth without complexity.
          </p>

          <h2
            className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
          >
            7. Next Steps
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-700" : "border-gray-300"}`}
                >
                  <th
                    className={`py-3 text-left font-medium transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
                  >
                    Action
                  </th>
                  <th
                    className={`py-3 text-left font-medium transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
                  >
                    Date*
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-800" : "border-gray-200"}`}
                >
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Approve partnership terms and revenue-share tiers
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    By mid-late June
                  </td>
                </tr>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-800" : "border-gray-200"}`}
                >
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Confirm June blog slot and asset deadlines
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    By June 10
                  </td>
                </tr>
                <tr
                  className={`border-b transition-colors duration-300 ${isDark ? "border-zinc-800" : "border-gray-200"}`}
                >
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Conduct joint enablement session for Account Managers
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>TBD</td>
                </tr>
                <tr>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    Finalize Affiliate Summit East round-table invite list and venue
                  </td>
                  <td className={`py-3 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                    By July 3
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={`mb-6 text-sm transition-colors duration-300 ${isDark ? "text-zinc-400" : "text-gray-600"}`}>
            *Dates are flexible pending final agreement.
          </p>

          <div
            className={`mt-12 pt-6 border-t transition-colors duration-300 ${isDark ? "border-zinc-800" : "border-gray-200"}`}
          >
            <p className={`transition-colors duration-300 ${isDark ? "text-zinc-400" : "text-gray-600"}`}>
              <strong>Point of Contact (Lincx):</strong>
              <br />
              Rex Humphries, SVP | rex@interlincx.com | +1 832-250-2461
            </p>
            <p className={`mt-4 leading-7 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
              We are eager to partner with Teads to drive advertiser success and deliver significant revenue growth
              through this strategic collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

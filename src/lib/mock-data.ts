// Realistic sample data for JourneyIQ

export const overviewMetrics = [
  { label: "Revenue", value: "$1.84M", delta: "+12.4%", trend: "up", hint: "vs last 30 days" },
  { label: "Conversion Rate", value: "4.62%", delta: "+0.38pp", trend: "up", hint: "vs last 30 days" },
  { label: "Journey Completion", value: "68.1%", delta: "+3.2%", trend: "up", hint: "of started journeys" },
  { label: "Avg. Time to Conversion", value: "5d 14h", delta: "-9.1%", trend: "up", hint: "faster than last month" },
  { label: "Customer Retention", value: "82.4%", delta: "+1.6%", trend: "up", hint: "90-day retention" },
];

export const revenueTrend = [
  { date: "Apr 01", revenue: 42100, conversions: 312 },
  { date: "Apr 08", revenue: 51200, conversions: 388 },
  { date: "Apr 15", revenue: 47800, conversions: 362 },
  { date: "Apr 22", revenue: 58400, conversions: 441 },
  { date: "Apr 29", revenue: 62900, conversions: 470 },
  { date: "May 06", revenue: 71200, conversions: 522 },
  { date: "May 13", revenue: 68500, conversions: 506 },
  { date: "May 20", revenue: 79100, conversions: 581 },
  { date: "May 27", revenue: 84300, conversions: 612 },
  { date: "Jun 03", revenue: 91500, conversions: 664 },
];

export const channelMix = [
  { channel: "Meta Ads", revenue: 412000, share: 28 },
  { channel: "Google Ads", revenue: 358000, share: 24 },
  { channel: "Email", revenue: 268000, share: 18 },
  { channel: "Website (Organic)", revenue: 224000, share: 15 },
  { channel: "Mobile App", revenue: 218000, share: 15 },
];

export const journeySteps = [
  {
    id: 1,
    channel: "Instagram Ad",
    label: "Saw 'Summer Runners' carousel ad",
    timestamp: "Jun 02 · 9:14 AM",
    probability: 18,
    dropoff: 62,
    sentiment: "Curious",
    note: "First touch — interest-based targeting (running, fitness gear).",
  },
  {
    id: 2,
    channel: "Website Visit",
    label: "Landed on /collections/running-shoes",
    timestamp: "Jun 02 · 9:21 AM",
    probability: 27,
    dropoff: 48,
    sentiment: "Engaged",
    note: "Spent 2m 14s, viewed 4 products, no add to cart.",
  },
  {
    id: 3,
    channel: "Product View",
    label: "Viewed 'Velocity Pro 4' three times",
    timestamp: "Jun 03 · 7:48 PM",
    probability: 41,
    dropoff: 36,
    sentiment: "High intent",
    note: "Returned via direct traffic, compared with 'Velocity Pro 3'.",
  },
  {
    id: 4,
    channel: "Email Reminder",
    label: "'Still thinking it over?' — 10% off",
    timestamp: "Jun 05 · 8:00 AM",
    probability: 83,
    dropoff: 12,
    sentiment: "Convinced",
    note: "Opened in 14m, clicked primary CTA, returned to PDP.",
  },
  {
    id: 5,
    channel: "Purchase",
    label: "Checked out — $189.00",
    timestamp: "Jun 05 · 8:36 AM",
    probability: 100,
    dropoff: 0,
    sentiment: "Satisfied",
    note: "Paid with Apple Pay. Eligible for post-purchase upsell flow.",
  },
];

export const journeyInsights = [
  {
    title: "Email reminder lifted conversion by +42%",
    body: "Customers who received the day-2 abandonment email converted 42% more often than control. Strongest effect on first-time buyers under $250 AOV.",
    confidence: 94,
  },
  {
    title: "Instagram is undervalued by last-click",
    body: "78% of journeys with a purchase touched a Meta ad in the first 3 steps. Last-click attribution credits Meta with 14% of revenue; multi-touch suggests 26%.",
    confidence: 88,
  },
  {
    title: "Mobile app users churn at step 2",
    body: "61% of app sessions drop off after the product view step. Cart load time on Android averages 3.4s — above the 2s engagement threshold.",
    confidence: 91,
  },
];

export const recentJourneys = [
  { id: "j-8421", customer: "Aarav Mehta", stage: "Purchase", steps: 5, value: "$189", started: "2d ago", status: "Completed" },
  { id: "j-8420", customer: "Priya Sharma", stage: "Email Reminder", steps: 4, value: "—", started: "3d ago", status: "Active" },
  { id: "j-8419", customer: "Liam O'Connor", stage: "Product View", steps: 3, value: "—", started: "4d ago", status: "At risk" },
  { id: "j-8418", customer: "Sofia Rossi", stage: "Purchase", steps: 6, value: "$312", started: "5d ago", status: "Completed" },
  { id: "j-8417", customer: "Marcus Chen", stage: "Website Visit", steps: 2, value: "—", started: "5d ago", status: "Dropped" },
  { id: "j-8416", customer: "Nora Halvorsen", stage: "Purchase", steps: 5, value: "$94", started: "6d ago", status: "Completed" },
];

export const customers = [
  {
    id: "c-1042",
    name: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    location: "Bangalore, IN",
    ltv: "$1,284",
    interests: ["Running", "Fitness", "Smart Watches"],
    lastSeen: "2 hours ago",
    nextPurchaseProb: 76,
    predictedInterest: "Heart rate monitor straps",
  },
  {
    id: "c-1041",
    name: "Priya Sharma",
    email: "priya.s@example.com",
    location: "Mumbai, IN",
    ltv: "$842",
    interests: ["Yoga", "Wellness", "Athleisure"],
    lastSeen: "Yesterday",
    nextPurchaseProb: 58,
    predictedInterest: "Recovery foam roller",
  },
  {
    id: "c-1040",
    name: "Liam O'Connor",
    email: "liam.oc@example.com",
    location: "Dublin, IE",
    ltv: "$2,109",
    interests: ["Trail running", "Hiking", "Outdoor gear"],
    lastSeen: "3 days ago",
    nextPurchaseProb: 41,
    predictedInterest: "Lightweight rain shell",
  },
  {
    id: "c-1039",
    name: "Sofia Rossi",
    email: "sofia.rossi@example.com",
    location: "Milan, IT",
    ltv: "$3,420",
    interests: ["Cycling", "Triathlon", "Nutrition"],
    lastSeen: "1 hour ago",
    nextPurchaseProb: 81,
    predictedInterest: "Carbon road bike pedals",
  },
  {
    id: "c-1038",
    name: "Marcus Chen",
    email: "marcus.c@example.com",
    location: "Singapore",
    ltv: "$612",
    interests: ["Casual running", "Streetwear"],
    lastSeen: "5 days ago",
    nextPurchaseProb: 22,
    predictedInterest: "Limited edition sneaker drops",
  },
  {
    id: "c-1037",
    name: "Nora Halvorsen",
    email: "nora.h@example.com",
    location: "Oslo, NO",
    ltv: "$978",
    interests: ["Cross-country skiing", "Running"],
    lastSeen: "12 hours ago",
    nextPurchaseProb: 64,
    predictedInterest: "Thermal base layers",
  },
];

export const customerTimeline = [
  { channel: "Email", action: "Opened 'Velocity Pro 4 restocked'", time: "Today · 8:14 AM" },
  { channel: "Website", action: "Viewed product page (3x)", time: "Yesterday · 7:48 PM" },
  { channel: "Mobile App", action: "Added 'Trail Socks' to wishlist", time: "Yesterday · 6:02 PM" },
  { channel: "Instagram", action: "Engaged with 'Summer Runners' ad", time: "Jun 02 · 9:14 AM" },
  { channel: "Email", action: "Subscribed to 'Race Week' newsletter", time: "May 29 · 11:20 AM" },
  { channel: "Website", action: "Purchased 'Velocity Pro 3' — $164", time: "Apr 18 · 4:33 PM" },
];

export const channels = [
  { name: "Meta Ads", revenue: "$412,000", conversions: 1842, assisted: 3210, roi: "4.2x", confidence: 86 },
  { name: "Google Ads", revenue: "$358,000", conversions: 1620, assisted: 2940, roi: "3.8x", confidence: 92 },
  { name: "Website (Organic)", revenue: "$224,000", conversions: 1184, assisted: 4120, roi: "—", confidence: 78 },
  { name: "Email", revenue: "$268,000", conversions: 1402, assisted: 2210, roi: "11.6x", confidence: 95 },
  { name: "Mobile App", revenue: "$218,000", conversions: 1056, assisted: 1480, roi: "5.1x", confidence: 81 },
];

export const attributionConflicts = [
  {
    title: "Meta Ads vs GA4 vs Shopify — 'Summer Runners' campaign",
    sources: [
      { name: "Meta Ads Manager", value: 180, label: "conversions" },
      { name: "GA4", value: 120, label: "conversions" },
      { name: "Shopify", value: 110, label: "purchases" },
    ],
    explanation:
      "Most of this gap comes from differing attribution windows. Meta uses a 7-day click + 1-day view window and counts cross-device. GA4 uses a 30-day data-driven model but excludes app sessions. Shopify only counts completed orders.",
    recommendation: "Use the 110 purchases as your revenue truth, but credit Meta with ~38% influence based on multi-touch modeling.",
    confidence: 89,
  },
  {
    title: "Google Ads vs GA4 — branded search",
    sources: [
      { name: "Google Ads", value: 540, label: "conversions" },
      { name: "GA4", value: 612, label: "conversions" },
    ],
    explanation:
      "GA4 is including organic-assisted branded sessions. The 72 conversion delta is almost entirely from users who clicked an ad once, then returned via direct traffic within 7 days.",
    recommendation: "Trust GA4 for total branded demand; trust Google Ads for paid-incremental.",
    confidence: 81,
  },
];

export const aiInsights = [
  {
    title: "Running enthusiasts who receive email reminders convert 2.3x more often",
    evidence: "Segment of 4,210 customers tagged 'Running'. 12-week observation window.",
    action: "Add the 'Day 2 Reminder' flow to all Running segment journeys missing it (est. +$32k / mo).",
    confidence: 94,
    impact: "high",
  },
  {
    title: "Mobile users in Bangalore show a 24% higher cart abandonment rate",
    evidence: "11,820 mobile sessions in last 30 days. Median cart-to-checkout time 4.2s vs 2.1s elsewhere.",
    action: "Investigate Android checkout performance and enable Apple Pay / GPay on cart.",
    confidence: 91,
    impact: "high",
  },
  {
    title: "Customers exposed to both Instagram and Email convert at 9.4%",
    evidence: "vs 4.1% for Email-only and 2.7% for Instagram-only. Sample: 38k journeys.",
    action: "Build a synced audience: retarget Email engagers on Meta for 14 days post-open.",
    confidence: 87,
    impact: "medium",
  },
  {
    title: "Tuesday 8–10 AM is your highest-ROI email window",
    evidence: "Open rate 38% / CTR 6.1% / Revenue per send $0.42 over last 8 sends.",
    action: "Shift Wednesday and Thursday sends earlier. Hold Friday for re-engagement only.",
    confidence: 83,
    impact: "medium",
  },
  {
    title: "Cart abandoners ignored by SMS recover at 0.4%",
    evidence: "1,840 SMS sends over 30 days. Compare to email recovery at 5.6%.",
    action: "Pause SMS recovery flow. Reallocate spend to email + Meta retargeting.",
    confidence: 90,
    impact: "low",
  },
];

export const successMetrics = [
  { label: "Revenue", value: "$1.84M", trend: "+12.4%", explain: "Total revenue attributed to tracked journeys this period." },
  { label: "ROAS", value: "4.6x", trend: "+0.3", explain: "Revenue divided by paid ad spend across Meta and Google." },
  { label: "Customer Lifetime Value", value: "$1,284", trend: "+6.8%", explain: "Predicted 24-month revenue per active customer." },
  { label: "Conversion Rate", value: "4.62%", trend: "+0.38pp", explain: "Share of started journeys that ended in a purchase." },
  { label: "Journey Completion", value: "68.1%", trend: "+3.2%", explain: "Journeys that reached the intended end state without dropoff." },
  { label: "Cross-Channel Engagement", value: "72 / 100", trend: "+4", explain: "How fluidly customers move between channels in a journey." },
  { label: "Attribution Accuracy", value: "88%", trend: "+2pp", explain: "Confidence the model places on its credit assignment." },
];

export const metricTrend = [
  { date: "Wk 1", roas: 3.9, ltv: 1180, completion: 62 },
  { date: "Wk 2", roas: 4.1, ltv: 1205, completion: 63 },
  { date: "Wk 3", roas: 4.0, ltv: 1212, completion: 65 },
  { date: "Wk 4", roas: 4.3, ltv: 1240, completion: 66 },
  { date: "Wk 5", roas: 4.4, ltv: 1258, completion: 67 },
  { date: "Wk 6", roas: 4.5, ltv: 1271, completion: 67 },
  { date: "Wk 7", roas: 4.6, ltv: 1284, completion: 68 },
];

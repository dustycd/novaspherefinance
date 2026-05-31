import { BarChart3, Target, TrendingUp, Users } from "lucide-react";

export const servicePages = {
  financial: {
    slug: "financial-advisory",
    eyebrow: "Financial advisory",
    navLabel: "Financial Advisory",
    icon: BarChart3,
    title: "Financial clarity for sharper business decisions.",
    accent: "business decisions.",
    intro:
      "We help leadership teams understand their numbers, build reliable planning rhythms, and turn financial visibility into confident growth decisions.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1800&auto=format&fit=crop",
    heroStats: [
      { value: "13-week", label: "rolling cash-flow visibility" },
      { value: "Monthly", label: "leadership reporting cadence" },
      { value: "Margin", label: "analysis by product, branch, or service line" },
    ],
    highlights: [
      "Cash-flow visibility",
      "Margin and profitability discipline",
      "Decision-ready reporting",
    ],
    visualBadge: {
      label: "Decision view",
      value: "Cash, margin, runway",
    },
    outcomes: [
      {
        icon: TrendingUp,
        title: "Planning with confidence",
        text: "Budgets, forecasts, and scenarios that give founders and executives a clearer view of what comes next.",
      },
      {
        icon: Target,
        title: "Stronger profitability",
        text: "Cost structure, pricing, and margin reviews that reveal where performance can improve.",
      },
      {
        icon: Users,
        title: "Better leadership rhythm",
        text: "Reporting packs and KPI dashboards that keep decisions focused, timely, and accountable.",
      },
    ],
    scopeTitle: "What we cover",
    scope: [
      "Financial planning, budgeting, and cash-flow forecasting",
      "Management reporting, KPI dashboards, and decision support",
      "Profitability analysis, cost structure review, and pricing visibility",
      "Growth planning, investment readiness, and board-level financial narratives",
    ],
    deepDive: {
      eyebrow: "Finance operating system",
      title: "From scattered numbers to a decision-ready finance rhythm.",
      text:
        "We organize the finance function around the questions leadership actually needs answered: where cash is moving, which activities create margin, and what the next investment decision should depend on.",
      items: [
        {
          icon: BarChart3,
          title: "Forecasting and scenarios",
          text: "Build base, stretch, and downside models so growth decisions are not made from a single assumption.",
        },
        {
          icon: TrendingUp,
          title: "Performance dashboards",
          text: "Translate accounting data into a concise view of revenue, margin, working capital, and cash conversion.",
        },
        {
          icon: Target,
          title: "Profitability levers",
          text: "Identify pricing, cost, mix, and capacity levers that can improve operating performance.",
        },
        {
          icon: Users,
          title: "Leadership cadence",
          text: "Create review routines with clear ownership, action items, and decisions the team can follow through.",
        },
      ],
    },
    process: [
      "Assess the current financial structure, reporting habits, and decision bottlenecks.",
      "Build the planning models, dashboards, and reporting cadence your team needs.",
      "Review performance regularly so leadership can act on the numbers, not chase them.",
    ],
    idealFor: [
      "Companies preparing for growth or expansion",
      "Teams that need clearer reporting and forecasting",
      "Founders looking for practical finance leadership without building a full finance department immediately",
    ],
    engagement: {
      eyebrow: "Engagement rhythm",
      title: "A practical cadence your team can keep using.",
      steps: [
        {
          label: "Weeks 1-2",
          title: "Diagnostic and data map",
          text: "We review the chart of accounts, reporting flow, cash position, and the decisions currently slowed by missing visibility.",
        },
        {
          label: "Weeks 3-6",
          title: "Models, dashboards, and reporting pack",
          text: "We build the tools and review format around your actual revenue model, cost structure, and leadership priorities.",
        },
        {
          label: "Ongoing",
          title: "Review, sharpen, and act",
          text: "We keep the rhythm alive through monthly reviews, scenario updates, and action tracking tied to the numbers.",
        },
      ],
    },
    otherLabel: "Explore Our Services",
    otherHref: "/#services",
  },
} as const;

export type ServicePage = (typeof servicePages)[keyof typeof servicePages];

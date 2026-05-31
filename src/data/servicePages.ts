import { BarChart3, Building2, Target, TrendingUp, Users } from "lucide-react";

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
    otherLabel: "Explore F&B Consulting",
    otherHref: "/food-beverage-consulting",
  },
  foodBeverage: {
    slug: "food-beverage-consulting",
    eyebrow: "F&B consulting",
    navLabel: "F&B Consulting",
    icon: Building2,
    title: "F&B consulting from concept to profitable growth.",
    accent: "profitable growth.",
    intro:
      "We support restaurants, cafes, and food businesses with the commercial, operational, and financial structure needed to launch, improve, and expand.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1800&auto=format&fit=crop",
    heroStats: [
      { value: "Concept", label: "positioning and customer promise" },
      { value: "Menu", label: "costing, pricing, and margin logic" },
      { value: "Launch", label: "operational readiness and service flow" },
    ],
    highlights: [
      "Concept and positioning",
      "Menu economics",
      "Operational readiness",
    ],
    visualBadge: {
      label: "Operator view",
      value: "Concept, menu, flow",
    },
    outcomes: [
      {
        icon: Target,
        title: "Sharper positioning",
        text: "Concept, audience, and offer clarity that helps the business stand out in a competitive market.",
      },
      {
        icon: BarChart3,
        title: "Healthier unit economics",
        text: "Menu costing, supplier structure, and margin analysis that make profitability visible.",
      },
      {
        icon: Users,
        title: "Ready-to-scale operations",
        text: "Team structure, launch planning, and operating routines built for smoother execution.",
      },
    ],
    scopeTitle: "What we cover",
    scope: [
      "Concept development, brand positioning, and operating model design",
      "Menu engineering, recipe costing, supplier structure, and margin improvement",
      "Launch planning, team structure, service flow, and operational controls",
      "Expansion readiness, performance tracking, and multi-location planning",
    ],
    deepDive: {
      eyebrow: "F&B growth playbook",
      title: "A concept is only strong when the economics and operations hold.",
      text:
        "We connect the creative idea to the commercial model behind it: customer positioning, menu margin, team structure, supplier assumptions, service flow, and the controls needed to scale without losing consistency.",
      items: [
        {
          icon: Target,
          title: "Concept and market position",
          text: "Clarify the audience, offer, pricing posture, and competitive space before operational decisions lock in.",
        },
        {
          icon: BarChart3,
          title: "Menu economics",
          text: "Pressure-test recipes, cost assumptions, supplier structure, and contribution margin across key menu categories.",
        },
        {
          icon: Building2,
          title: "Operational model",
          text: "Shape the team structure, service flow, prep rhythm, controls, and launch plan around real daily execution.",
        },
        {
          icon: Users,
          title: "Scale readiness",
          text: "Turn one good location or concept into repeatable standards, reporting, and branch-level performance visibility.",
        },
      ],
    },
    process: [
      "Clarify the concept, market position, audience, and commercial opportunity.",
      "Pressure-test the model through menu economics, supplier assumptions, and operating structure.",
      "Build the launch or improvement roadmap with clear milestones and performance measures.",
    ],
    idealFor: [
      "New restaurant, cafe, cloud kitchen, or food retail concepts",
      "Existing F&B businesses looking to improve margins and operations",
      "Operators preparing for a new branch, franchise model, or expansion plan",
    ],
    engagement: {
      eyebrow: "Engagement rhythm",
      title: "From idea to operating discipline.",
      steps: [
        {
          label: "Discover",
          title: "Concept and commercial audit",
          text: "We study the offer, customer profile, competitive position, menu structure, space, staffing, and current economics.",
        },
        {
          label: "Design",
          title: "Menu, model, and operating roadmap",
          text: "We refine the concept, validate unit economics, define the operating model, and build the launch or improvement plan.",
        },
        {
          label: "Execute",
          title: "Controls and performance cadence",
          text: "We support rollout through supplier decisions, team routines, reporting, branch readiness, and margin review.",
        },
      ],
    },
    otherLabel: "Explore Financial Advisory",
    otherHref: "/financial-advisory",
  },
} as const;

export type ServicePage = (typeof servicePages)[keyof typeof servicePages];

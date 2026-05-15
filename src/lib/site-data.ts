export const BRAND = {
  name: "Golden Trust Insure",
  tagline: "Smart coverage for everything you value.",
  phone: "+1 (800) 555-0192",
  email: "hello@goldentrustinsure.com",
  address: "118 Mariner's Quay, Suite 400, Boston, MA 02110",
  hours: "Mon–Fri 8:00–18:00 · Sat 9:00–14:00",
};

export type Service = {
  slug: string;
  title: string;
  icon: "Shield" | "Heart" | "Car" | "Home" | "Briefcase" | "Plane";
  shortDesc: string;
  longDesc: string;
  covered: string[];
  notCovered: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "life-insurance",
    title: "Life Insurance",
    icon: "Shield",
    shortDesc: "Lasting financial protection so the people who depend on you stay supported.",
    longDesc:
      "Term, whole, and universal life policies tailored to your stage of life — designed to replace income, cover debts, and fund long-term goals for your loved ones.",
    covered: [
      "Income replacement",
      "Mortgage & debt payoff",
      "Education funding",
      "Final expenses",
      "Estate planning",
    ],
    notCovered: [
      "Acts of war",
      "Undisclosed pre-existing conditions",
      "Suicide within first 24 months",
    ],
    faqs: [
      {
        q: "How much coverage do I actually need?",
        a: "Most advisors recommend 10–15× your annual income, but our agents tailor it to your debts, dependents, and goals.",
      },
      {
        q: "Term vs. whole life — which is right?",
        a: "Term is affordable and goal-bound; whole life builds cash value. We'll model both for your situation.",
      },
      {
        q: "Will I need a medical exam?",
        a: "Many of our policies under $500k qualify for accelerated underwriting with no exam required.",
      },
      {
        q: "How quickly can I be covered?",
        a: "Same-day instant approval is available for qualifying applicants — most policies bind within 48 hours.",
      },
    ],
  },
  {
    slug: "health-insurance",
    title: "Health Insurance",
    icon: "Heart",
    shortDesc: "Comprehensive medical plans that put quality care within reach.",
    longDesc:
      "Individual, family, and supplemental health plans with broad provider networks, preventive care, and predictable out-of-pocket maximums.",
    covered: [
      "Primary & preventive care",
      "Specialist visits",
      "Hospitalization",
      "Prescription drugs",
      "Mental health services",
    ],
    notCovered: [
      "Cosmetic procedures",
      "Experimental treatments",
      "Out-of-network non-emergency care",
    ],
    faqs: [
      {
        q: "Can I keep my current doctor?",
        a: "We help match you with PPO and HMO networks that include your existing providers.",
      },
      {
        q: "What about prescriptions?",
        a: "All plans include formularies — we'll verify your medications before you commit.",
      },
      {
        q: "Are pre-existing conditions covered?",
        a: "Yes. Under ACA-qualified plans, pre-existing conditions are fully covered from day one.",
      },
      {
        q: "Can I add my family?",
        a: "Family plans cover spouses and dependents up to age 26 with bundled premium savings.",
      },
    ],
  },
  {
    slug: "auto-insurance",
    title: "Auto Insurance",
    icon: "Car",
    shortDesc: "Coverage that keeps you moving — from daily commutes to long road trips.",
    longDesc:
      "Liability, collision, and comprehensive auto policies with roadside assistance, accident forgiveness, and multi-vehicle savings.",
    covered: [
      "Liability",
      "Collision & comprehensive",
      "Uninsured motorist",
      "Roadside assistance",
      "Rental reimbursement",
    ],
    notCovered: [
      "Intentional damage",
      "Racing or commercial use (separate policy)",
      "Personal items inside vehicle",
    ],
    faqs: [
      {
        q: "Can I bundle with home insurance?",
        a: "Yes — bundling typically saves 12–18% across both policies.",
      },
      {
        q: "What if I have a teen driver?",
        a: "We offer good-student discounts and telematics programs to keep premiums fair.",
      },
      {
        q: "Will my rate go up after a claim?",
        a: "With our accident forgiveness rider, your first at-fault accident won't raise your rate.",
      },
      {
        q: "Is rideshare driving covered?",
        a: "We offer rideshare endorsements for Uber, Lyft, and delivery drivers.",
      },
    ],
  },
  {
    slug: "home-insurance",
    title: "Home Insurance",
    icon: "Home",
    shortDesc: "Protect the place that holds your life — from foundation to roofline.",
    longDesc:
      "Homeowners and renters policies covering structure, personal property, liability, and loss-of-use, with optional riders for jewelry, art, and home offices.",
    covered: [
      "Dwelling & structures",
      "Personal property",
      "Liability",
      "Loss of use",
      "Natural disaster (varies)",
    ],
    notCovered: ["Flood (separate policy)", "Earthquake (separate policy)", "Normal wear & tear"],
    faqs: [
      {
        q: "Is flood damage included?",
        a: "Standard policies exclude flood. We can add a federal NFIP policy or private flood coverage.",
      },
      {
        q: "How is replacement cost calculated?",
        a: "Our agents perform a free home walk-through to set accurate dwelling coverage.",
      },
      {
        q: "Does it cover home offices?",
        a: "Yes, with a home-business endorsement covering equipment and limited liability.",
      },
      {
        q: "What about valuables?",
        a: "Add scheduled personal property riders for jewelry, art, and collectibles above $2,500.",
      },
    ],
  },
  {
    slug: "business-insurance",
    title: "Business Insurance",
    icon: "Briefcase",
    shortDesc: "Tailored protection for the business you've worked hard to build.",
    longDesc:
      "General liability, professional liability, commercial property, workers' comp, and cyber insurance designed for small to mid-size operations.",
    covered: [
      "General liability",
      "Commercial property",
      "Workers' compensation",
      "Cyber & data breach",
      "Business interruption",
    ],
    notCovered: [
      "Intentional acts",
      "Professional errors (separate E&O)",
      "Employment practices (separate EPLI)",
    ],
    faqs: [
      {
        q: "Do I need a BOP or separate policies?",
        a: "A Business Owners Policy bundles property + liability and saves most clients 15–20%.",
      },
      {
        q: "Is cyber insurance worth it?",
        a: "Yes — 60% of small businesses close within 6 months of a serious breach. Coverage starts at $40/mo.",
      },
      {
        q: "What about contractors & freelancers?",
        a: "We offer per-project liability for independent professionals.",
      },
      {
        q: "Can I cover multiple locations?",
        a: "Yes — multi-location policies with consolidated billing and a single point of contact.",
      },
    ],
  },
  {
    slug: "travel-insurance",
    title: "Travel Insurance",
    icon: "Plane",
    shortDesc: "Travel with confidence — covered for cancellations, medical, and lost bags.",
    longDesc:
      "Single-trip and annual travel insurance with trip cancellation, emergency medical evacuation, baggage protection, and 24/7 global assistance.",
    covered: [
      "Trip cancellation & interruption",
      "Emergency medical & evacuation",
      "Baggage loss/delay",
      "Travel delay reimbursement",
      "24/7 assistance",
    ],
    notCovered: [
      "Pre-existing conditions (waivable)",
      "Extreme sports (add-on available)",
      "Travel against advisories",
    ],
    faqs: [
      {
        q: "When should I buy travel insurance?",
        a: "Within 14–21 days of your initial trip deposit to unlock pre-existing condition waivers.",
      },
      {
        q: "Does it cover COVID-19?",
        a: "Yes — both medical treatment abroad and trip cancellation due to illness are included.",
      },
      {
        q: "Is adventure travel covered?",
        a: "Add an adventure rider for skiing, scuba, climbing, and other higher-risk activities.",
      },
      {
        q: "What's the claims process?",
        a: "Claims are filed online with most reimbursements processed within 10 business days.",
      },
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Eleanor Voss",
    role: "Founder & CEO",
    bio: "25 years guiding families through life's biggest financial decisions.",
    initials: "EV",
  },
  {
    name: "Marcus Chen",
    role: "Head of Claims",
    bio: "Champions every client through the claims process — start to settlement.",
    initials: "MC",
  },
  {
    name: "Priya Raman",
    role: "Senior Risk Advisor",
    bio: "Builds custom coverage strategies for entrepreneurs and growing families.",
    initials: "PR",
  },
  {
    name: "Jonah Albright",
    role: "Director of Partnerships",
    bio: "Negotiates exclusive carrier rates that keep premiums fair, year after year.",
    initials: "JA",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    location: "Boston, MA",
    rating: 5,
    initials: "SM",
    quote:
      "After 12 years with a national carrier, switching to Golden Trust Insure cut our family premium by a third — and the service is night and day better.",
  },
  {
    name: "David Okonkwo",
    location: "Brooklyn, NY",
    rating: 5,
    initials: "DO",
    quote:
      "When a tree fell on our garage, my agent had an adjuster on-site the next morning. Cheque cleared in a week. That's what insurance is supposed to feel like.",
  },
  {
    name: "Lina Park",
    location: "Austin, TX",
    rating: 5,
    initials: "LP",
    quote:
      "They walked me through life insurance options without any pressure. I finally understand what I'm paying for — and why it matters.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: "Insurance Tips" | "News" | "Guides";
  date: string;
  author: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "life-insurance-30s",
    title: "Why Life Insurance Is Cheapest in Your 30s",
    excerpt:
      "Locking in a 20-year term policy before 35 can save you tens of thousands over its lifetime. Here's the math.",
    content:
      "When you're in your 30s, life insurance is often the last thing on your mind. However, this is precisely the decade when you should be thinking about it most. Premiums are primarily based on age and health status. By locking in a term policy while you're still young and statistically healthy, you can secure rates that remain unchanged for two or even three decades. A 35-year-old might pay $25 a month for $500,000 in coverage, whereas waiting until age 45 could see that premium double or triple for the exact same protection.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
    category: "Guides",
    date: "May 8, 2026",
    author: "Eleanor Voss",
  },
  {
    slug: "claims-fast",
    title: "5 Things to Do in the First 24 Hours After a Claim",
    excerpt:
      "The steps you take right after an incident can make the difference between a quick settlement and a long battle.",
    content:
      "The first 24 hours after a car accident, a house fire, or a burst pipe are critical for your insurance claim. Step one: Safety first—ensure everyone is okay and prevent further damage (like turning off the main water valve). Step two: Document everything. Take photos and videos of the damage from every angle. Step three: Contact your broker. An independent broker can guide you through the initial report to ensure you don't miss key details. Step four: Keep all receipts for emergency repairs or temporary lodging. Step five: Do not admit fault or sign anything from third parties until you've spoken with your insurance representative.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200",
    category: "Insurance Tips",
    date: "Apr 22, 2026",
    author: "Marcus Chen",
  },
  {
    slug: "small-business-cyber",
    title: "Cyber Insurance Is No Longer Optional for Small Business",
    excerpt:
      "Why ransomware now targets businesses under 50 employees — and how a $40/month policy can save your livelihood.",
    content:
      "Cybercriminals have pivoted. While big corporations have multi-million dollar security budgets, small businesses often have basic firewalls and outdated software. Ransomware attacks on businesses with fewer than 50 employees have increased by 400% in the last two years. Cyber insurance doesn't just pay the ransom—it provides a forensic team to find the breach, a legal team to handle data notification laws, and a PR team to manage your reputation. For the cost of a few pizzas a month, your business can survive a catastrophic data breach that would otherwise force 60% of small companies to close their doors within six months.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    category: "News",
    date: "Apr 4, 2026",
    author: "Priya Raman",
  },
];

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

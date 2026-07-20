/* ============================================================
   PORTFOLIO DATA
   Add a new project or certification by adding an object here —
   the list + detail pages render automatically from this file.
   ============================================================ */

const PROJECTS = [
  {
    id: "brain-tumor",
    num: "01",
    category: "Deep Learning · Healthcare AI",
    title: "AI-Based Brain Tumor Detection System",
    summary: "Deep learning web app classifying MRI images into Glioma, Meningioma, Pituitary, and Healthy cases with confidence scoring.",
    tech: ["Python", "Deep Learning", "Streamlit", "Computer Vision", "SQL"],
    cover: "images/brain-tumor-2.png",
    gallery: [
      { src: "images/brain-tumor-1.png", caption: "Upload screen — drag & drop an MRI scan" },
      { src: "images/brain-tumor-2.png", caption: "AI analysis flags Meningioma with confidence score" },
      { src: "images/brain-tumor-3.png", caption: "Full class-wise confidence breakdown & recommendations" }
    ],
    problem: "Radiologists reviewing brain MRI scans need a fast first-pass triage tool that can flag likely tumor type so urgent cases get prioritized. The goal was to build an accessible web app — not a locked-down research script — that any clinician could upload a scan to and get an interpretable result from in seconds.",
    approach: [
      "Trained a CNN-based image classifier on MRI datasets across 4 classes: Glioma, Meningioma, Pituitary, and No Tumor",
      "Built the entire interface in Streamlit — named it ANNA Brain Detection — so it runs as a shareable web app with no separate frontend needed",
      "Added a confidence bar per class, not just a single label, so the output is interpretable rather than a black-box verdict",
      "Wired in a clinical-alert layer that surfaces a 'Medical Attention Needed' banner and a recommended next step when a tumor class crosses the confidence threshold",
      "Displayed image metadata (dimensions, format, size) alongside the scan so users can verify the correct file was analyzed"
    ],
    tools: ["Python", "TensorFlow / CNN", "Streamlit", "NumPy", "SQL for result logging"],
    highlights: [
      "4-class classification: Glioma, Meningioma, Pituitary, Healthy",
      "Per-class confidence scoring, not just a single prediction label",
      "Clinical recommendation layer triggered on high-risk detections",
      "Deployed as a self-contained Streamlit web app"
    ],
    outcome: "Delivered a working end-to-end MRI triage tool: upload → analysis → confidence-scored diagnosis → clinical recommendation, all in one interface. The confidence-breakdown view (43% Meningioma, 25.6% Glioma, 23.5% No Tumor, 7.9% Pituitary in the demo run) shows the model's full reasoning rather than a single answer, which is what makes it usable as a second opinion instead of a black box."
  },
  {
    id: "sales-forecasting",
    num: "02",
    category: "Time Series · Business Analytics",
    title: "Business Sales Forecasting & Inventory Optimization",
    summary: "Time-series forecasting pipeline that predicts demand and optimizes inventory levels to cut overstock and stock-out risk.",
    tech: ["Python", "SQL", "Power BI", "Excel", "NumPy"],
    cover: null,
    gallery: [],
    problem: "A retail business was losing money two ways at once — overstocking slow-moving items and running out of fast movers during demand spikes. Without a forecasting model, inventory decisions were based on gut feel rather than historical demand patterns.",
    approach: [
      "Cleaned and structured historical sales data in SQL, aggregating by product, region, and week",
      "Built time-series forecasting models using Prophet and ARIMA to capture trend and seasonality separately",
      "Backtested forecasts against held-out historical periods to validate accuracy before trusting the model on future data",
      "Translated forecast output into reorder-point and safety-stock recommendations per SKU",
      "Built a Power BI layer so non-technical stakeholders could see forecast vs. actual and adjust inventory targets themselves"
    ],
    tools: ["Python (Prophet, ARIMA)", "SQL", "Power BI", "Excel", "NumPy / Pandas"],
    highlights: [
      "Combined Prophet + ARIMA to separately model seasonality and trend",
      "Forecast accuracy validated through backtesting before deployment",
      "Reorder-point logic derived directly from forecasted demand, not static rules",
      "Self-serve Power BI dashboard for the business team"
    ],
    outcome: "The forecasting layer identified clear seasonal demand cycles the business hadn't been planning around, and the resulting reorder-point adjustments reduced both overstock and stock-out risk significantly compared to the previous fixed-threshold approach."
  },
  {
    id: "churn-prediction",
    num: "03",
    category: "Machine Learning · Classification",
    title: "Customer Churn Prediction & Retention Strategy",
    summary: "Churn model that flags at-risk customers ahead of time and surfaces the drivers behind why they leave.",
    tech: ["Python", "Scikit-learn", "EDA", "Machine Learning"],
    cover: null,
    gallery: [],
    problem: "The business could see customers churning in hindsight, but had no way to flag who was likely to leave before it happened — so retention offers were reactive instead of targeted.",
    approach: [
      "Ran exploratory data analysis to understand usage, billing, and support-interaction patterns across churned vs. retained customers",
      "Engineered features around tenure, contract type, and recent activity changes",
      "Trained and compared Logistic Regression and Random Forest classifiers, tuning for recall on the churn class since missing an at-risk customer is costlier than a false alarm",
      "Used feature importance from the Random Forest model to identify the top churn drivers",
      "Converted model output into a ranked at-risk customer list with the top contributing factor per customer, so retention outreach could be targeted and personalized"
    ],
    tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib / Seaborn for EDA"],
    highlights: [
      "Compared Logistic Regression vs. Random Forest, selected on recall for the churn class",
      "Feature importance analysis surfaced concrete churn drivers, not just a score",
      "Output designed as an actionable ranked list, not a raw probability dump"
    ],
    outcome: "Produced a model that ranks customers by churn risk along with the leading reason for each — giving the retention team a prioritized, explainable list to act on instead of guessing who to reach out to."
  },
  {
    id: "bi-dashboard",
    num: "04",
    category: "Business Intelligence · Data Automation",
    title: "Automated Business Performance Dashboard",
    summary: "SQL + Power BI dashboard automating revenue, product, and customer-segment reporting for faster decisions.",
    tech: ["SQL", "Power BI", "Excel", "Data Cleaning"],
    cover: null,
    gallery: [],
    problem: "Monthly performance reporting was a manual, spreadsheet-heavy process — someone had to pull numbers, clean them, and rebuild charts every reporting cycle, which delayed decisions and introduced copy-paste errors.",
    approach: [
      "Consolidated multiple raw data sources into a single clean SQL schema",
      "Built repeatable data-cleaning steps to handle missing values, duplicates, and inconsistent product naming",
      "Designed Power BI report pages for revenue trends, top-performing products, and customer segmentation",
      "Set up the report to refresh from the SQL source directly, removing the manual spreadsheet-rebuild step entirely"
    ],
    tools: ["SQL", "Power BI", "Excel", "Data cleaning / ETL"],
    highlights: [
      "Replaced a manual spreadsheet workflow with a refreshable SQL-backed dashboard",
      "Three focused report views: revenue trends, top products, customer segments",
      "Cleaned and standardized data at the source instead of patching it in the report layer"
    ],
    outcome: "Turned a multi-hour manual reporting cycle into a live, self-refreshing dashboard, giving the business real-time visibility into revenue and product performance instead of a monthly snapshot."
  },
  {
    id: "wheelchair",
    num: "05",
    category: "Embedded Systems · Hardware",
    title: "Foldable Electronic Wheelchair",
    summary: "A foldable, motorized wheelchair built to improve everyday mobility for elderly and physically challenged users.",
    tech: ["Embedded Systems", "Hardware Testing", "Electronics Design", "Prototyping"],
    cover: "images/wheelchair.jpeg",
    gallery: [
      { src: "images/wheelchair.jpeg", caption: "Team demonstration at MIT Academy of Engineering, Alandi, Pune" }
    ],
    problem: "Standard electric wheelchairs are bulky and hard to transport or store, which limits their usefulness for elderly or physically challenged users who don't have space for a full-size unit or a way to carry it in a car.",
    approach: [
      "Designed a folding chassis that collapses to a fraction of its operating footprint for storage and transport",
      "Integrated a motorized drive system controlled through a simple joystick interface mounted on the armrest",
      "Selected and tested motor and battery components for a balance of torque, weight, and runtime",
      "Iterated on the folding mechanism through multiple hardware prototypes to get reliable, tool-free folding",
      "Validated the build with the team at MIT Academy of Engineering, Alandi, Pune"
    ],
    tools: ["Embedded controller + motor driver", "Joystick input module", "Battery & motor sizing", "Mechanical prototyping"],
    highlights: [
      "Fully foldable frame for easy transport and storage",
      "Joystick-controlled motorized drive",
      "Built and tested as a functioning team prototype, not just a concept"
    ],
    outcome: "Delivered a working foldable electronic wheelchair prototype, demonstrated live with the project team — proving the folding mechanism and motorized drive both function reliably outside of simulation."
  }
];

const CERTIFICATIONS = [
{
  id: "aws-ccp",
  icon: "☁",
  name: "AWS Certified Cloud Practitioner",
  issuer: "Amazon Web Services (AWS)",
  description: "Foundational AWS certification validating overall understanding of the AWS Cloud, its core services, security, architecture, pricing, and support model.",
  covers: [
    "Core AWS services across compute, storage, networking, and databases",
    "Cloud security and the AWS shared responsibility model",
    "AWS pricing, billing, and cost-management fundamentals",
    "Cloud architecture best practices and the AWS Well-Architected Framework"
  ],
     gallery: [
      { src: "images/Screenshot 2026-07-20 134500.png" }
    ],
  relevance: "Backs up the AWS listed under Cloud & DevOps skills and supports deploying data science apps (like the brain tumor detection tool) to the cloud.",
  issueDate: "May 18, 2026",
  expirationDate: "May 18, 2029",
  validationNumber: "ba765377105b486b96d63034cca899b0",
  validateUrl: "https://aws.amazon.com/verification"
}

   
  {
    id: "mysql-cert",
    icon: "🗄",
    name: "MySQL Certification",
    issuer: "Schema design, SQL queries, CRUD, normalization & indexing",
    description: "Certification covering relational database fundamentals — from schema design through query optimization.",
    covers: [
      "Database schema design and normalization (1NF–3NF)",
      "Writing CRUD operations and multi-table JOIN queries",
      "Indexing strategy for query performance",
      "Aggregate functions, subqueries, and views"
    ],
    relevance: "Directly underpins the SQL work across the churn prediction, sales forecasting, and BI dashboard projects — all three rely on clean schema design and efficient queries."
  },
  {
    id: "python-cert",
    icon: "🐍",
    name: "Python Certification",
    issuer: "HackerRank — Core Python, OOP, Data Structures",
    description: "HackerRank-verified certification covering core Python programming, object-oriented design, and data structures.",
    covers: [
      "Core Python syntax, control flow, and functions",
      "Object-oriented programming: classes, inheritance, encapsulation",
      "Built-in data structures: lists, dicts, sets, tuples",
      "Problem-solving with algorithmic challenges"
    ],
    relevance: "The foundation for every ML and data project in this portfolio — from the brain tumor CNN pipeline to the churn prediction model."
  },
  {
    id: "hackathon",
    icon: "⚡",
    name: "Embedded Innovators Hackathon",
    issuer: "Participation in national-level hardware hackathon",
    description: "Competed in a national-level embedded systems hackathon, building and demonstrating a working hardware prototype under time constraints.",
    covers: [
      "Rapid embedded hardware prototyping",
      "Team-based problem solving under a tight deadline",
      "Live demonstration and technical judging"
    ],
    relevance: "Built the collaborative, fast-iteration hardware skills applied directly in the Foldable Electronic Wheelchair project."
  }
];

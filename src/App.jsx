import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const PROFILE = {
  name: "Fahimeh Pouryani",
  title: "Senior Data Engineer · Freelance Consultant",
  tagline: "13+ years building scalable data infrastructure across healthcare, consulting & nonprofit sectors.",
  email: "fpouryani@gmail.com",
  phone: "(302) 743-2318",
  github: "https://github.com/fahimehpouryani",
  skills: ["AWS", "Databricks", "Python", "PySpark", "dbt", "Spark", "SQL", "Terraform", "Grafana", "Tableau"],
  certs: ["Databricks Certified Data Engineer Associate", "Databricks Certified Associate Developer for Apache Spark 3.0"],
};

const PROJECTS = [
  {
    id: "lakehouse-msk",
    title: "AWS Data Lakehouse at MSK",
    emoji: "🏥",
    status: "Production",
    objective:
      "Design and deploy a cloud-native data lakehouse at Memorial Sloan Kettering Cancer Center to unify analytics and ML data pipelines across clinical and research teams.",
    audience: "Oncology researchers, data scientists, and clinical decision-makers who need reliable, low-latency access to large-scale patient and genomics datasets.",
    resources: ["AWS Glue", "Apache Hudi", "Databricks", "Glue Blueprints", "CloudFormation", "Azure Pipelines", "Grafana", "EventBridge", "Lambda"],
    educational: [
      { label: "Databricks Lakehouse Fundamentals", url: "https://www.databricks.com/learn/training/lakehouse-fundamentals" },
      { label: "AWS Glue Developer Guide", url: "https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html" },
      { label: "Apache Hudi Docs", url: "https://hudi.apache.org/docs/overview/" },
    ],
    github: "https://github.com/fahimehpouryani/aws-lakehouse-msk",
    demoType: "architecture",
    demoData: {
      nodes: [
        { id: "s3", label: "S3 Raw Zone", icon: "🪣", x: 10, y: 40 },
        { id: "glue", label: "AWS Glue ETL", icon: "⚙️", x: 30, y: 40 },
        { id: "hudi", label: "Apache Hudi\n(ACID Layer)", icon: "📦", x: 50, y: 40 },
        { id: "databricks", label: "Databricks\nAnalytics", icon: "🔷", x: 70, y: 25 },
        { id: "ml", label: "ML Pipelines", icon: "🤖", x: 70, y: 55 },
        { id: "grafana", label: "Grafana\nMonitoring", icon: "📊", x: 90, y: 40 },
      ],
      edges: [
        ["s3", "glue"], ["glue", "hudi"], ["hudi", "databricks"], ["hudi", "ml"], ["databricks", "grafana"], ["ml", "grafana"],
      ],
      metrics: [
        { label: "Data Availability", before: "62%", after: "98%", delta: "+58%" },
        { label: "ETL Processing Time", before: "4.2 hrs", after: "38 min", delta: "−85%" },
        { label: "Pipeline Failures/Month", before: "14", after: "1.2", delta: "−91%" },
      ],
    },
  },
  {
    id: "salesforce-migration",
    title: "Salesforce Data Migration",
    emoji: "🔄",
    status: "Completed",
    objective:
      "Orchestrate a full-scale data migration to Salesforce for The Salvation Army's Eastern Territory HQ, consolidating fragmented legacy systems with zero operational downtime.",
    audience: "Non-profit operations managers and field coordinators who rely on Salesforce for donor management, program tracking, and reporting.",
    resources: ["Salesforce", "SSIS", "SQL Server", "Python", "Azure DevOps"],
    educational: [
      { label: "Salesforce Data Migration Guide", url: "https://trailhead.salesforce.com/content/learn/modules/data_migration" },
      { label: "Microsoft SSIS Documentation", url: "https://docs.microsoft.com/en-us/sql/integration-services/" },
    ],
    github: "https://github.com/fahimehpouryani/salesforce-migration",
    demoType: "pipeline",
    demoData: {
      stages: [
        { id: 1, name: "Audit & Profiling", icon: "🔍", description: "Profile 12 legacy source systems, identify data quality issues, map schemas.", duration: "2 weeks", status: "done" },
        { id: 2, name: "Schema Mapping", icon: "🗺️", description: "Design field mappings from legacy SQL Server tables to Salesforce objects.", duration: "1 week", status: "done" },
        { id: 3, name: "SSIS Pipeline Build", icon: "⚙️", description: "Build SSIS packages for extract, transform, and load with error logging.", duration: "3 weeks", status: "done" },
        { id: 4, name: "Validation & QA", icon: "✅", description: "Row-count reconciliation, spot-check sampling, data integrity tests.", duration: "1 week", status: "done" },
        { id: 5, name: "Cutover & Go-Live", icon: "🚀", description: "Zero-downtime cutover with rollback plan. Achieved <2hr migration window.", duration: "2 days", status: "done" },
      ],
      stats: [
        { label: "Records Migrated", value: "2.4M+" },
        { label: "Downtime", value: "< 2 hrs" },
        { label: "Data Accuracy", value: "99.97%" },
        { label: "Legacy Systems Retired", value: "12" },
      ],
    },
  },
  {
    id: "mckinsey-metadata",
    title: "Enterprise Metadata Governance",
    emoji: "🏛️",
    status: "Completed",
    objective:
      "Build an enterprise metadata consolidation framework for McKinsey & Company to support data change impact analysis, regulatory compliance, and strategic decision-making.",
    audience: "Senior data architects, compliance officers, and consulting teams who need rapid impact analysis during large-scale organizational transformations.",
    resources: ["Python", "SQL", "Collibra (metadata catalog)", "dbt", "GitHub", "Tableau"],
    educational: [
      { label: "DAMA Data Management Body of Knowledge", url: "https://www.dama.org/cpages/body-of-knowledge" },
      { label: "dbt Docs – Metadata & Lineage", url: "https://docs.getdbt.com/docs/collaborate/explore-projects" },
    ],
    github: "https://github.com/fahimehpouryani/metadata-governance",
    demoType: "lineage",
    demoData: {
      lineage: [
        { id: "src_crm", label: "CRM Source", type: "source", children: ["stg_crm"] },
        { id: "src_erp", label: "ERP Source", type: "source", children: ["stg_erp"] },
        { id: "stg_crm", label: "stg_crm", type: "staging", children: ["int_clients"] },
        { id: "stg_erp", label: "stg_erp", type: "staging", children: ["int_clients", "int_financials"] },
        { id: "int_clients", label: "int_clients", type: "intermediate", children: ["fct_engagements"] },
        { id: "int_financials", label: "int_financials", type: "intermediate", children: ["fct_engagements"] },
        { id: "fct_engagements", label: "fct_engagements", type: "mart", children: ["rpt_exec_dashboard"] },
        { id: "rpt_exec_dashboard", label: "Exec Dashboard", type: "report", children: [] },
      ],
    },
  },
  {
    id: "genai-pipeline",
    title: "GenAI Data Pipeline Toolkit",
    emoji: "🤖",
    status: "In Progress",
    objective:
      "Build a reusable LLM-ready data pipeline toolkit that prepares structured and unstructured healthcare data for ingestion into RAG (Retrieval-Augmented Generation) and fine-tuning workflows.",
    audience:
      "Data engineers and ML engineers at healthcare organizations looking to integrate GenAI capabilities without sacrificing data governance or HIPAA compliance.",
    resources: ["Python", "LangChain", "AWS S3", "Databricks", "dbt", "Hugging Face", "Chroma (vector DB)"],
    educational: [
      { label: "LangChain RAG Tutorial", url: "https://python.langchain.com/docs/tutorials/rag/" },
      { label: "Hugging Face Datasets Docs", url: "https://huggingface.co/docs/datasets/" },
      { label: "Databricks GenAI Cookbook", url: "https://ai-cookbook.io/" },
    ],
    github: "https://github.com/fahimehpouryani/genai-pipeline-toolkit",
    demoType: "genai",
    demoData: {
      steps: [
        { icon: "📄", label: "Raw Documents", desc: "EHR notes, PDFs, structured tables" },
        { icon: "🧹", label: "Preprocessing", desc: "Chunking, de-identification, normalization" },
        { icon: "🔢", label: "Embedding", desc: "Sentence-transformers via Hugging Face" },
        { icon: "🗂️", label: "Vector Store", desc: "Chroma / Pinecone ingestion" },
        { icon: "🔍", label: "Retrieval", desc: "Semantic search + re-ranking" },
        { icon: "💬", label: "LLM Response", desc: "GPT-4 / Claude via LangChain" },
      ],
    },
  },
];

// ─── STYLES ──────────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0c0f14;
    --surface: #13181f;
    --surface2: #1a2130;
    --border: #1e2a3a;
    --accent: #3b82f6;
    --accent2: #06b6d4;
    --gold: #f59e0b;
    --text: #e8edf5;
    --muted: #7a8fa6;
    --green: #10b981;
    --red: #f43f5e;
    --font-display: 'Instrument Serif', serif;
    --font-mono: 'DM Mono', monospace;
    --font-body: 'DM Sans', sans-serif;
  }

  body { background: var(--bg); color: var(--text); font-family: var(--font-body); min-height: 100vh; }

  .page { min-height: 100vh; animation: fadeIn 0.4s ease; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

  /* NAV */
  nav {
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 40px; border-bottom: 1px solid var(--border);
    background: rgba(12,15,20,0.95); backdrop-filter: blur(12px);
    position: sticky; top: 0; z-index: 100;
  }
  .nav-brand { font-family: var(--font-display); font-size: 1.1rem; color: var(--text); cursor: pointer; letter-spacing: 0.01em; }
  .nav-brand span { color: var(--accent); }
  .nav-back { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; color: var(--muted); cursor: pointer; font-family: var(--font-mono); letter-spacing: 0.05em; transition: color 0.2s; }
  .nav-back:hover { color: var(--accent); }
  .nav-badge { font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent2); border: 1px solid var(--accent2); padding: 3px 10px; border-radius: 20px; }

  /* HERO */
  .hero {
    padding: 80px 40px 60px;
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr auto; gap: 40px; align-items: start;
  }
  .hero-eyebrow { font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent2); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 16px; }
  .hero-name { font-family: var(--font-display); font-size: clamp(2.5rem, 5vw, 4rem); line-height: 1.1; margin-bottom: 14px; }
  .hero-name em { font-style: italic; color: var(--accent); }
  .hero-tagline { font-size: 1rem; color: var(--muted); max-width: 520px; line-height: 1.7; margin-bottom: 28px; }
  .hero-meta { display: flex; gap: 20px; flex-wrap: wrap; }
  .hero-meta a { font-family: var(--font-mono); font-size: 0.75rem; color: var(--muted); text-decoration: none; display: flex; align-items: center; gap: 6px; transition: color 0.2s; }
  .hero-meta a:hover { color: var(--accent); }

  .skills-panel { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 22px; min-width: 280px; }
  .skills-panel h4 { font-family: var(--font-mono); font-size: 0.68rem; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 14px; }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 18px; }
  .skill-tag { font-family: var(--font-mono); font-size: 0.7rem; padding: 4px 10px; border-radius: 4px; background: var(--surface2); border: 1px solid var(--border); color: var(--text); }
  .cert-list { display: flex; flex-direction: column; gap: 8px; }
  .cert-item { font-size: 0.72rem; color: var(--muted); display: flex; align-items: flex-start; gap: 8px; line-height: 1.4; }
  .cert-icon { color: var(--gold); flex-shrink: 0; }

  /* SECTION */
  .section { max-width: 1100px; margin: 0 auto; padding: 0 40px 80px; }
  .section-header { display: flex; align-items: baseline; gap: 16px; margin-bottom: 36px; }
  .section-title { font-family: var(--font-display); font-size: 1.8rem; }
  .section-count { font-family: var(--font-mono); font-size: 0.75rem; color: var(--muted); }

  /* PROJECT CARDS */
  .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(480px, 1fr)); gap: 20px; }
  .project-card {
    background: var(--surface); border: 1px solid var(--border); border-radius: 14px;
    padding: 28px; cursor: pointer; transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
    position: relative; overflow: hidden;
  }
  .project-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    opacity: 0; transition: opacity 0.25s;
  }
  .project-card:hover { border-color: var(--accent); transform: translateY(-3px); box-shadow: 0 12px 40px rgba(59,130,246,0.12); }
  .project-card:hover::before { opacity: 1; }

  .card-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 16px; }
  .card-emoji { font-size: 2rem; margin-bottom: 8px; }
  .card-status { font-family: var(--font-mono); font-size: 0.65rem; padding: 3px 9px; border-radius: 20px; letter-spacing: 0.05em; }
  .status-Production { background: rgba(16,185,129,0.15); color: var(--green); border: 1px solid rgba(16,185,129,0.3); }
  .status-Completed { background: rgba(59,130,246,0.15); color: var(--accent); border: 1px solid rgba(59,130,246,0.3); }
  .status-InProgress { background: rgba(245,158,11,0.15); color: var(--gold); border: 1px solid rgba(245,158,11,0.3); }

  .card-title { font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 10px; }
  .card-objective { font-size: 0.85rem; color: var(--muted); line-height: 1.6; margin-bottom: 16px; }

  .card-resources { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px; }
  .resource-tag { font-family: var(--font-mono); font-size: 0.65rem; padding: 3px 8px; border-radius: 3px; background: rgba(59,130,246,0.1); color: var(--accent); border: 1px solid rgba(59,130,246,0.2); }

  .card-footer { display: flex; align-items: center; justify-content: space-between; }
  .audience-label { font-size: 0.72rem; color: var(--muted); font-family: var(--font-mono); }
  .demo-btn { font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent2); display: flex; align-items: center; gap: 6px; letter-spacing: 0.05em; }

  /* ── PROJECT DETAIL PAGE ── */
  .detail-hero { max-width: 900px; margin: 0 auto; padding: 50px 40px 40px; }
  .detail-eyebrow { font-family: var(--font-mono); font-size: 0.7rem; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
  .detail-title { font-family: var(--font-display); font-size: clamp(1.8rem, 4vw, 3rem); line-height: 1.15; margin-bottom: 18px; }
  .detail-title em { font-style: italic; color: var(--accent); }

  .detail-grid { max-width: 900px; margin: 0 auto; padding: 0 40px; display: grid; grid-template-columns: 1fr 280px; gap: 28px; margin-bottom: 40px; }
  .detail-main { display: flex; flex-direction: column; gap: 20px; }
  .detail-sidebar { display: flex; flex-direction: column; gap: 16px; }

  .info-card { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 20px; }
  .info-card h3 { font-family: var(--font-mono); font-size: 0.68rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px; }
  .info-card p { font-size: 0.88rem; color: var(--text); line-height: 1.7; }

  .resource-list { display: flex; flex-wrap: wrap; gap: 7px; }
  .edu-list { display: flex; flex-direction: column; gap: 8px; }
  .edu-link { font-size: 0.8rem; color: var(--accent); text-decoration: none; display: flex; align-items: center; gap: 7px; transition: color 0.2s; }
  .edu-link:hover { color: var(--accent2); }

  .github-btn {
    display: flex; align-items: center; justify-content: center; gap: 10px;
    background: var(--surface2); border: 1px solid var(--border); border-radius: 8px;
    padding: 14px; text-decoration: none; color: var(--text); font-family: var(--font-mono);
    font-size: 0.78rem; transition: border-color 0.2s, background 0.2s;
  }
  .github-btn:hover { border-color: var(--accent); background: rgba(59,130,246,0.08); }

  /* DEMO SECTIONS */
  .demo-section { max-width: 900px; margin: 0 auto; padding: 0 40px 60px; }
  .demo-section h2 { font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
  .demo-section h2 span { font-family: var(--font-mono); font-size: 0.68rem; color: var(--accent2); border: 1px solid var(--accent2); padding: 3px 10px; border-radius: 20px; letter-spacing: 0.05em; }

  /* Architecture Demo */
  .arch-container { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 32px; overflow-x: auto; }
  .arch-flow { display: flex; align-items: center; gap: 0; flex-wrap: nowrap; min-width: 600px; }
  .arch-node { display: flex; flex-direction: column; align-items: center; gap: 8px; flex-shrink: 0; }
  .arch-node-box { background: var(--surface2); border: 1px solid var(--border); border-radius: 8px; padding: 14px 18px; text-align: center; min-width: 110px; transition: border-color 0.2s; }
  .arch-node-box:hover { border-color: var(--accent); }
  .arch-node-icon { font-size: 1.5rem; }
  .arch-node-label { font-family: var(--font-mono); font-size: 0.65rem; color: var(--muted); text-align: center; line-height: 1.4; margin-top: 2px; }
  .arch-arrow { color: var(--border); font-size: 1.2rem; margin: 0 6px; flex-shrink: 0; }
  .arch-fork { display: flex; flex-direction: column; gap: 8px; }

  .metrics-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-top: 24px; }
  .metric-card { background: var(--surface2); border: 1px solid var(--border); border-radius: 8px; padding: 16px; text-align: center; }
  .metric-label { font-family: var(--font-mono); font-size: 0.65rem; color: var(--muted); margin-bottom: 12px; letter-spacing: 0.05em; }
  .metric-compare { display: flex; align-items: center; justify-content: center; gap: 10px; }
  .metric-before { font-size: 0.85rem; color: var(--muted); text-decoration: line-through; }
  .metric-after { font-size: 1.1rem; font-weight: 600; color: var(--green); }
  .metric-delta { font-family: var(--font-mono); font-size: 0.7rem; color: var(--green); background: rgba(16,185,129,0.1); padding: 2px 7px; border-radius: 4px; }

  /* Pipeline Demo */
  .pipeline-stages { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
  .pipeline-stage { display: flex; align-items: flex-start; gap: 16px; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 16px; position: relative; }
  .stage-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }
  .stage-content h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 4px; }
  .stage-content p { font-size: 0.8rem; color: var(--muted); line-height: 1.5; }
  .stage-duration { font-family: var(--font-mono); font-size: 0.65rem; color: var(--accent2); margin-left: auto; flex-shrink: 0; margin-top: 2px; }
  .stage-check { position: absolute; right: 16px; top: 50%; transform: translateY(-50%); color: var(--green); font-size: 0.9rem; }

  .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
  .stat-box { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 18px; text-align: center; }
  .stat-value { font-family: var(--font-display); font-size: 1.6rem; color: var(--accent); margin-bottom: 4px; }
  .stat-label { font-family: var(--font-mono); font-size: 0.65rem; color: var(--muted); letter-spacing: 0.05em; }

  /* Lineage Demo */
  .lineage-container { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 28px; overflow-x: auto; }
  .lineage-row { display: flex; gap: 0; align-items: center; margin-bottom: 8px; flex-wrap: nowrap; }
  .lineage-columns { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; min-width: 700px; }
  .lineage-col { display: flex; flex-direction: column; gap: 8px; align-items: center; }
  .lineage-col-label { font-family: var(--font-mono); font-size: 0.6rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; text-align: center; }
  .lineage-node { padding: 8px 12px; border-radius: 6px; font-family: var(--font-mono); font-size: 0.7rem; text-align: center; border: 1px solid; min-width: 110px; }
  .lineage-source { background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.4); color: var(--green); }
  .lineage-staging { background: rgba(59,130,246,0.1); border-color: rgba(59,130,246,0.4); color: var(--accent); }
  .lineage-intermediate { background: rgba(245,158,11,0.1); border-color: rgba(245,158,11,0.4); color: var(--gold); }
  .lineage-mart { background: rgba(6,182,212,0.1); border-color: rgba(6,182,212,0.4); color: var(--accent2); }
  .lineage-report { background: rgba(244,63,94,0.1); border-color: rgba(244,63,94,0.4); color: var(--red); }

  /* GenAI Demo */
  .genai-pipeline { display: flex; align-items: center; gap: 0; flex-wrap: nowrap; overflow-x: auto; padding: 24px; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; }
  .genai-step { display: flex; flex-direction: column; align-items: center; gap: 8px; flex-shrink: 0; }
  .genai-step-box { background: var(--surface2); border: 1px solid var(--border); border-radius: 10px; padding: 16px 14px; text-align: center; width: 110px; transition: border-color 0.3s, transform 0.3s; cursor: default; }
  .genai-step-box:hover { border-color: var(--accent2); transform: translateY(-4px); }
  .genai-icon { font-size: 1.6rem; margin-bottom: 6px; }
  .genai-label { font-family: var(--font-mono); font-size: 0.62rem; color: var(--text); font-weight: 500; margin-bottom: 4px; }
  .genai-desc { font-size: 0.6rem; color: var(--muted); line-height: 1.4; }
  .genai-arrow { color: var(--accent2); font-size: 1.1rem; margin: 0 6px; flex-shrink: 0; opacity: 0.5; }

  /* FOOTER */
  footer { border-top: 1px solid var(--border); padding: 30px 40px; text-align: center; font-family: var(--font-mono); font-size: 0.7rem; color: var(--muted); }
`;

// ─── DEMO COMPONENTS ─────────────────────────────────────────────────────────

function ArchitectureDemo({ data }) {
  return (
    <div>
      <div className="arch-container">
        <div className="arch-flow">
          <div className="arch-node">
            <div className="arch-node-box"><div className="arch-node-icon">🪣</div></div>
            <div className="arch-node-label">S3 Raw Zone</div>
          </div>
          <div className="arch-arrow">→</div>
          <div className="arch-node">
            <div className="arch-node-box"><div className="arch-node-icon">⚙️</div></div>
            <div className="arch-node-label">AWS Glue ETL</div>
          </div>
          <div className="arch-arrow">→</div>
          <div className="arch-node">
            <div className="arch-node-box"><div className="arch-node-icon">📦</div></div>
            <div className="arch-node-label">Apache Hudi<br/>ACID Layer</div>
          </div>
          <div className="arch-arrow">→</div>
          <div className="arch-fork">
            <div className="arch-node">
              <div className="arch-node-box"><div className="arch-node-icon">🔷</div></div>
              <div className="arch-node-label">Databricks<br/>Analytics</div>
            </div>
            <div className="arch-node">
              <div className="arch-node-box"><div className="arch-node-icon">🤖</div></div>
              <div className="arch-node-label">ML Pipelines</div>
            </div>
          </div>
          <div className="arch-arrow">→</div>
          <div className="arch-node">
            <div className="arch-node-box"><div className="arch-node-icon">📊</div></div>
            <div className="arch-node-label">Grafana<br/>Monitoring</div>
          </div>
        </div>
      </div>
      <div className="metrics-grid">
        {data.metrics.map(m => (
          <div key={m.label} className="metric-card">
            <div className="metric-label">{m.label}</div>
            <div className="metric-compare">
              <span className="metric-before">{m.before}</span>
              <span>→</span>
              <span className="metric-after">{m.after}</span>
            </div>
            <div style={{marginTop:8}}><span className="metric-delta">{m.delta}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PipelineDemo({ data }) {
  return (
    <div>
      <div className="pipeline-stages">
        {data.stages.map((s, i) => (
          <div key={s.id} className="pipeline-stage">
            <span className="stage-icon">{s.icon}</span>
            <div className="stage-content">
              <h4>{s.name}</h4>
              <p>{s.description}</p>
            </div>
            <span className="stage-duration">{s.duration}</span>
            <span className="stage-check">✓</span>
          </div>
        ))}
      </div>
      <div className="stats-grid">
        {data.stats.map(s => (
          <div key={s.label} className="stat-box">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LineageDemo({ data }) {
  const cols = {
    source: data.lineage.filter(n => n.type === "source"),
    staging: data.lineage.filter(n => n.type === "staging"),
    intermediate: data.lineage.filter(n => n.type === "intermediate"),
    mart: data.lineage.filter(n => n.type === "mart"),
    report: data.lineage.filter(n => n.type === "report"),
  };
  return (
    <div className="lineage-container">
      <div className="lineage-columns">
        {Object.entries(cols).map(([type, nodes]) => (
          <div key={type} className="lineage-col">
            <div className="lineage-col-label">{type}</div>
            {nodes.map(n => (
              <div key={n.id} className={`lineage-node lineage-${type}`}>{n.label}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{marginTop:20, fontSize:"0.78rem", color:"var(--muted)", fontFamily:"var(--font-mono)"}}>
        → Data flows left-to-right through source → staging → intermediate → mart → reporting layers
      </div>
    </div>
  );
}

function GenAIDemo({ data }) {
  return (
    <div>
      <div className="genai-pipeline">
        {data.steps.map((s, i) => (
          <div key={i} style={{display:"flex", alignItems:"center"}}>
            <div className="genai-step">
              <div className="genai-step-box">
                <div className="genai-icon">{s.icon}</div>
                <div className="genai-label">{s.label}</div>
                <div className="genai-desc">{s.desc}</div>
              </div>
            </div>
            {i < data.steps.length - 1 && <div className="genai-arrow">→</div>}
          </div>
        ))}
      </div>
      <div style={{marginTop:20, background:"var(--surface)", border:"1px solid var(--border)", borderRadius:8, padding:"16px 20px"}}>
        <p style={{fontFamily:"var(--font-mono)", fontSize:"0.72rem", color:"var(--accent2)", marginBottom:8}}>// ARCHITECTURE NOTE</p>
        <p style={{fontSize:"0.82rem", color:"var(--muted)", lineHeight:1.7}}>
          This toolkit is designed with HIPAA compliance in mind — de-identification runs before any embedding step,
          ensuring PHI never reaches external LLM APIs. Supports both self-hosted models (Hugging Face) and
          managed APIs (OpenAI, Anthropic) through a pluggable provider interface.
        </p>
      </div>
    </div>
  );
}

function DemoRenderer({ project }) {
  if (project.demoType === "architecture") return <ArchitectureDemo data={project.demoData} />;
  if (project.demoType === "pipeline") return <PipelineDemo data={project.demoData} />;
  if (project.demoType === "lineage") return <LineageDemo data={project.demoData} />;
  if (project.demoType === "genai") return <GenAIDemo data={project.demoData} />;
  return null;
}

// ─── PAGES ───────────────────────────────────────────────────────────────────

function ProjectDetailPage({ project, onBack }) {
  const statusKey = project.status.replace(/\s/g,"");
  return (
    <div className="page">
      <nav>
        <span className="nav-brand">fp<span>.</span>dev</span>
        <span className="nav-back" onClick={onBack}>← Back to Portfolio</span>
        <span className="nav-badge">{project.status}</span>
      </nav>

      <div className="detail-hero">
        <div className="detail-eyebrow">
          <span>{project.emoji}</span>
          <span>Project Overview</span>
          <span className={`card-status status-${statusKey}`}>{project.status}</span>
        </div>
        <h1 className="detail-title">{project.title.split(" ").map((w,i) => i===0 ? <em key={i}>{w} </em> : w+" ")}</h1>
      </div>

      <div className="detail-grid">
        <div className="detail-main">
          <div className="info-card">
            <h3>🎯 Project Objective</h3>
            <p>{project.objective}</p>
          </div>
          <div className="info-card">
            <h3>👥 Intended Audience</h3>
            <p>{project.audience}</p>
          </div>
          <div className="info-card">
            <h3>🛠 Resources & Technologies</h3>
            <div className="resource-list" style={{marginTop:4}}>
              {project.resources.map(r => <span key={r} className="resource-tag">{r}</span>)}
            </div>
          </div>
          {project.educational && project.educational.length > 0 && (
            <div className="info-card">
              <h3>📚 Educational Resources</h3>
              <div className="edu-list">
                {project.educational.map(e => (
                  <a key={e.url} href={e.url} target="_blank" rel="noreferrer" className="edu-link">
                    ↗ {e.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="detail-sidebar">
          <a href={project.github} target="_blank" rel="noreferrer" className="github-btn">
            <span>⌥</span> View on GitHub
          </a>
          <div className="info-card" style={{fontSize:"0.78rem", color:"var(--muted)", lineHeight:1.6}}>
            <h3 style={{marginBottom:10}}>About This Project</h3>
            Part of <strong style={{color:"var(--text)"}}>Fahimeh Pouryani's</strong> portfolio — demonstrating
            production-grade data engineering across healthcare, consulting, and non-profit sectors.
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo <span>LIVE PREVIEW</span></h2>
        <DemoRenderer project={project} />
      </div>

      <footer>Fahimeh Pouryani · fpouryani@gmail.com · (302) 743-2318</footer>
    </div>
  );
}

function PortfolioPage({ onProjectClick }) {
  return (
    <div className="page">
      <nav>
        <span className="nav-brand">fp<span>.</span>dev</span>
        <span className="nav-badge">Open to Contracts</span>
      </nav>

      <div className="hero">
        <div>
          <div className="hero-eyebrow">// Senior Data Engineer · Freelance</div>
          <h1 className="hero-name">Fahimeh <em>Pouryani</em></h1>
          <p className="hero-tagline">{PROFILE.tagline}</p>
          <div className="hero-meta">
            <a href={`mailto:${PROFILE.email}`}>✉ {PROFILE.email}</a>
            <a href={`tel:${PROFILE.phone}`}>☎ {PROFILE.phone}</a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">⌥ GitHub</a>
          </div>
        </div>
        <div className="skills-panel">
          <h4>Core Stack</h4>
          <div className="skill-tags">
            {PROFILE.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
          </div>
          <h4>Certifications</h4>
          <div className="cert-list">
            {PROFILE.certs.map(c => (
              <div key={c} className="cert-item">
                <span className="cert-icon">🏅</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <span className="section-count">{PROJECTS.length} projects</span>
        </div>
        <div className="projects-grid">
          {PROJECTS.map(project => {
            const statusKey = project.status.replace(/\s/g,"");
            return (
              <div key={project.id} className="project-card" onClick={() => onProjectClick(project)}>
                <div className="card-emoji">{project.emoji}</div>
                <div className="card-header" style={{marginTop:0}}>
                  <h3 className="card-title">{project.title}</h3>
                  <span className={`card-status status-${statusKey}`}>{project.status}</span>
                </div>
                <p className="card-objective">{project.objective.slice(0,160)}…</p>
                <div className="card-resources">
                  {project.resources.slice(0,5).map(r => <span key={r} className="resource-tag">{r}</span>)}
                  {project.resources.length > 5 && <span className="resource-tag">+{project.resources.length - 5}</span>}
                </div>
                <div className="card-footer">
                  <span className="audience-label">👥 {project.audience.slice(0,60)}…</span>
                  <span className="demo-btn">View Demo →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer>© 2025 Fahimeh Pouryani · Built with React · fpouryani@gmail.com</footer>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <style>{css}</style>
      {selectedProject
        ? <ProjectDetailPage project={selectedProject} onBack={() => setSelectedProject(null)} />
        : <PortfolioPage onProjectClick={setSelectedProject} />
      }
    </>
  );
}

export function CampaignManagerMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`border border-neutral-200 bg-white shadow-sm ${className}`}>
      <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 border-b border-neutral-200">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-neutral-300" />
          <div className="w-2 h-2 rounded-full bg-neutral-300" />
          <div className="w-2 h-2 rounded-full bg-neutral-300" />
        </div>
        <span className="text-[10px] text-neutral-500 ml-2">Campaign Manager — AdVolcano DSP</span>
      </div>
      <div className="flex">
        <div className="w-36 border-r border-neutral-200 bg-neutral-50 p-2 hidden sm:block">
          {["Dashboard", "Campaigns", "Audiences", "Creatives", "Reports", "Billing"].map((item, i) => (
            <div key={item} className={`px-2 py-1.5 text-[9px] rounded ${i === 1 ? "bg-white text-navy font-medium border border-neutral-200" : "text-neutral-500"}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="flex-1 p-3">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[11px] font-semibold text-navy">Active Campaigns</span>
            <span className="text-[9px] px-2 py-0.5 bg-teal/10 text-teal font-medium">12 Running</span>
          </div>
          <div className="space-y-1.5">
            {[
              { name: "Q2 Brand Awareness", spend: "$124,500", roas: "3.2x", status: "Active" },
              { name: "Retargeting — Cart Abandon", spend: "$48,200", roas: "5.8x", status: "Active" },
              { name: "CTV Holiday Push", spend: "$89,000", roas: "2.1x", status: "Optimizing" },
              { name: "Mobile App Install", spend: "$31,400", roas: "4.5x", status: "Active" },
            ].map((c) => (
              <div key={c.name} className="flex items-center justify-between px-2 py-1.5 bg-neutral-50 border border-neutral-100 text-[9px]">
                <span className="text-neutral-800 font-medium w-2/5 truncate">{c.name}</span>
                <span className="text-neutral-500 w-1/5">{c.spend}</span>
                <span className="text-success font-medium w-1/5">{c.roas}</span>
                <span className={`w-1/5 text-right ${c.status === "Active" ? "text-teal" : "text-blue"}`}>{c.status}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <div className="flex-1 h-16 bg-neutral-50 border border-neutral-100 p-1.5">
              <div className="text-[8px] text-neutral-500 mb-1">Spend Trend (7d)</div>
              <svg viewBox="0 0 120 40" className="w-full h-8">
                <polyline points="0,35 20,28 40,30 60,18 80,22 100,10 120,15" fill="none" stroke="#1E5AA8" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex-1 h-16 bg-neutral-50 border border-neutral-100 p-1.5">
              <div className="text-[8px] text-neutral-500 mb-1">Impressions</div>
              <div className="text-[14px] font-semibold text-navy mt-1">48.2M</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AnalyticsMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`border border-neutral-200 bg-white shadow-sm ${className}`}>
      <div className="px-3 py-2 bg-neutral-50 border-b border-neutral-200 text-[10px] text-neutral-500">
        Analytics Dashboard — Attribution Report
      </div>
      <div className="p-3 grid grid-cols-3 gap-2">
        {[
          { label: "Total Conversions", value: "24,891" },
          { label: "Attributed Revenue", value: "$1.2M" },
          { label: "CPA", value: "$18.40" },
        ].map((m) => (
          <div key={m.label} className="p-2 bg-neutral-50 border border-neutral-100">
            <div className="text-[8px] text-neutral-500">{m.label}</div>
            <div className="text-[13px] font-semibold text-navy mt-0.5">{m.value}</div>
          </div>
        ))}
      </div>
      <div className="px-3 pb-3">
        <svg viewBox="0 0 300 80" className="w-full">
          <rect x="0" y="0" width="300" height="80" fill="#f8f9fa" />
          {[40, 55, 35, 60, 45, 70, 50].map((h, i) => (
            <rect key={i} x={i * 42 + 8} y={80 - h} width="30" height={h} fill="#1E5AA8" opacity={0.3 + i * 0.1} />
          ))}
          <polyline points="15,45 57,30 99,50 141,25 183,40 225,15 267,35" fill="none" stroke="#0F766E" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

export function AudienceBuilderMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`border border-neutral-200 bg-white shadow-sm ${className}`}>
      <div className="px-3 py-2 bg-neutral-50 border-b border-neutral-200 text-[10px] text-neutral-500">
        Audience Builder — Segment Composer
      </div>
      <div className="p-3 space-y-2">
        <div className="flex gap-2">
          <div className="flex-1 p-2 border border-blue/30 bg-blue/5">
            <div className="text-[9px] font-medium text-navy">Include</div>
            <div className="mt-1 space-y-1">
              {["Past purchasers (90d)", "High-intent browsers", "Lookalike 1% — converters"].map((s) => (
                <div key={s} className="text-[8px] px-1.5 py-0.5 bg-white border border-neutral-200 text-neutral-700">{s}</div>
              ))}
            </div>
          </div>
          <div className="flex-1 p-2 border border-neutral-200 bg-neutral-50">
            <div className="text-[9px] font-medium text-navy">Exclude</div>
            <div className="mt-1 space-y-1">
              {["Existing customers", "Competitor employees"].map((s) => (
                <div key={s} className="text-[8px] px-1.5 py-0.5 bg-white border border-neutral-200 text-neutral-700">{s}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-2 bg-neutral-50 border border-neutral-100">
          <span className="text-[9px] text-neutral-500">Estimated reach</span>
          <span className="text-[12px] font-semibold text-navy">4.2M users</span>
        </div>
      </div>
    </div>
  );
}

export function RTBArchitectureDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 320" className={className} aria-label="RTB architecture diagram">
      <rect width="600" height="320" fill="#f8f9fa" />
      {/* Advertiser */}
      <rect x="20" y="120" width="100" height="60" fill="#fff" stroke="#0F2744" strokeWidth="1.5" rx="2" />
      <text x="70" y="155" textAnchor="middle" fill="#0F2744" fontSize="11" fontWeight="600">Advertiser</text>
      {/* DSP */}
      <rect x="170" y="100" width="120" height="100" fill="#fff" stroke="#1E5AA8" strokeWidth="2" rx="2" />
      <text x="230" y="145" textAnchor="middle" fill="#0F2744" fontSize="12" fontWeight="600">AdVolcano DSP</text>
      <text x="230" y="162" textAnchor="middle" fill="#495057" fontSize="9">Bid Logic</text>
      <text x="230" y="175" textAnchor="middle" fill="#495057" fontSize="9">Budget Mgmt</text>
      {/* Ad Exchange */}
      <rect x="340" y="120" width="100" height="60" fill="#fff" stroke="#0F2744" strokeWidth="1.5" rx="2" />
      <text x="390" y="155" textAnchor="middle" fill="#0F2744" fontSize="11" fontWeight="600">Ad Exchange</text>
      {/* SSP */}
      <rect x="490" y="100" width="100" height="100" fill="#fff" stroke="#0F766E" strokeWidth="2" rx="2" />
      <text x="540" y="145" textAnchor="middle" fill="#0F2744" fontSize="11" fontWeight="600">SSP</text>
      <text x="540" y="162" textAnchor="middle" fill="#495057" fontSize="9">Inventory</text>
      {/* Publisher */}
      <rect x="490" y="240" width="100" height="50" fill="#fff" stroke="#0F2744" strokeWidth="1.5" rx="2" />
      <text x="540" y="270" textAnchor="middle" fill="#0F2744" fontSize="11" fontWeight="600">Publisher</text>
      {/* Arrows */}
      <line x1="120" y1="150" x2="168" y2="150" stroke="#1E5AA8" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <line x1="290" y1="150" x2="338" y2="150" stroke="#1E5AA8" strokeWidth="1.5" />
      <line x1="440" y1="150" x2="488" y2="150" stroke="#1E5AA8" strokeWidth="1.5" />
      <line x1="540" y1="200" x2="540" y2="238" stroke="#0F766E" strokeWidth="1.5" />
      {/* Bid request/response labels */}
      <text x="145" y="140" fill="#1E5AA8" fontSize="8">Campaign</text>
      <text x="310" y="140" fill="#1E5AA8" fontSize="8">Bid Request</text>
      <text x="455" y="140" fill="#0F766E" fontSize="8">Bid Response</text>
      {/* Latency badge */}
      <rect x="200" y="30" width="200" height="30" fill="#0F2744" rx="2" />
      <text x="300" y="50" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="500">&lt; 50ms end-to-end bid latency</text>
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="#1E5AA8" />
        </marker>
      </defs>
    </svg>
  );
}

export function PlatformArchitectureDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} aria-label="Platform architecture diagram">
      <rect width="600" height="400" fill="#f8f9fa" />
      {/* Layers */}
      {[
        { y: 30, label: "Client Layer", items: ["Web Console", "REST API", "SDK"] },
        { y: 120, label: "Application Layer", items: ["DSP", "Analytics", "Fraud Engine", "Audience Mgr"] },
        { y: 210, label: "Processing Layer", items: ["RTB Engine", "ML Pipeline", "Event Stream"] },
        { y: 300, label: "Data Layer", items: ["Data Warehouse", "Real-time Cache", "Object Storage"] },
      ].map((layer) => (
        <g key={layer.label}>
          <text x="20" y={layer.y + 20} fill="#0F2744" fontSize="10" fontWeight="600">{layer.label}</text>
          {layer.items.map((item, i) => (
            <g key={item}>
              <rect x={120 + i * 120} y={layer.y} width="105" height="45" fill="#fff" stroke="#dee2e6" strokeWidth="1" rx="2" />
              <text x={172 + i * 120} y={layer.y + 27} textAnchor="middle" fill="#343a40" fontSize="10">{item}</text>
            </g>
          ))}
          {layer.y < 300 && <line x1="60" y1={layer.y + 55} x2="560" y2={layer.y + 55} stroke="#e9ecef" strokeWidth="1" strokeDasharray="4" />}
        </g>
      ))}
      <rect x="480" y="30" width="100" height="315" fill="none" stroke="#0F766E" strokeWidth="1.5" strokeDasharray="4" rx="4" />
      <text x="530" y="360" textAnchor="middle" fill="#0F766E" fontSize="9" fontWeight="600">Global CDN</text>
    </svg>
  );
}

export function WorkflowDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 120" className={className} aria-label="Campaign workflow diagram">
      <rect width="500" height="120" fill="#f8f9fa" />
      {["Define Audience", "Set Budget", "Upload Creative", "Launch", "Optimize", "Report"].map((step, i) => (
        <g key={step}>
          <rect x={10 + i * 82} y="35" width="72" height="40" fill="#fff" stroke={i === 3 ? "#1E5AA8" : "#dee2e6"} strokeWidth={i === 3 ? 2 : 1} rx="2" />
          <text x={46 + i * 82} y="60" textAnchor="middle" fill="#0F2744" fontSize="8" fontWeight="500">{step}</text>
          {i < 5 && <line x1={82 + i * 82} y1="55" x2={92 + i * 82} y2="55" stroke="#adb5bd" strokeWidth="1" />}
        </g>
      ))}
      <text x="250" y="100" textAnchor="middle" fill="#495057" fontSize="9">Average time to first impression: 4 hours</text>
    </svg>
  );
}

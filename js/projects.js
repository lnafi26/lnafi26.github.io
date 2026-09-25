/* Edit this one file to update the content of both wings. Dates are MM/YY or null (unconfirmed / not launched).
   Never put private repository URLs, secrets, API keys, or unreleased milestones on a public portfolio. */
window.PORTFOLIO_PROJECTS = {
  compound: [
    {
      id: 'syncora', name: 'Syncora', category: 'CREATIVE SOFTWARE', status: 'IN DEVELOPMENT',
      line: 'Find the signal in the noise.',
      what: 'A music-discovery and edit-planning workspace for video editors. Syncora turns a creative brief into focused track suggestions, then helps turn musical structure into decisions for the timeline.',
      how: 'Nova explores music against an editor’s intent; Pulsar maps useful song moments into editing cues; Echoes keeps those plans available to revisit. The application combines a browser interface, a Python API, music data, and language-model-assisted discovery.',
      stack: ['Python / FastAPI', 'JavaScript', 'Supabase', 'Audio analysis', 'LLMs'],
      dates: { concept: '07/26', rnd: '07/26', launch: null },
      art: 'assets/syncora.svg', artAlt: 'Concept art showing layered cyan and violet music waveforms and an edit timeline',
      artCaption: 'PLACEHOLDER / AUDIO → EDITING SIGNAL',
      theme: { base: '#17112b', accent: '#bca1ff', secondary: '#6be7e9', paper: '#f5f0ff' },
      links: [{ label: 'VIEW PUBLIC REPOSITORY', url: 'https://github.com/lnafi26/Syncora' }]
    },
    {
      id: 'sentry', name: 'Project Sentry', category: 'HOME SECURITY / INFRASTRUCTURE', status: 'R&D',
      line: 'A lookout for the home network.',
      what: 'A modular home-network security and monitoring project built around a small, dedicated machine. It is designed to bring network visibility, privacy utilities, and security observations into one approachable home lab.',
      how: 'A local device hosts the underlying network and security services; a separate assistant, ROBERT, is planned as a reasoning and interaction layer on top of those tools—not as a replacement for them.',
      stack: ['Linux / Home lab', 'Network monitoring', 'Privacy tooling', 'Security architecture'],
      dates: { concept: '07/26', rnd: '09/26', launch: null },
      art: 'assets/sentry.svg', artAlt: 'Concept illustration of a black and gold network perimeter with connected nodes',
      artCaption: 'PLACEHOLDER / NETWORK PERIMETER',
      theme: { base: '#151512', accent: '#e8bd58', secondary: '#fff1af', paper: '#fff5da' },
      links: [], privateLabel: 'PUBLIC RELEASE / NOT AVAILABLE'
    }
  ],
  watchtower: [
    {
      id: 'dex', name: 'DEX', category: 'DEVELOPMENT ASSISTANT', status: 'ACTIVE R&D',
      line: 'A second set of hands, with guardrails.',
      what: 'DEX (Development, Explanation, and eXecution) is a personal AI software-development assistant being built to understand a code workspace, explain technical decisions, and help carry out controlled development tasks.',
      how: 'A centralized Core coordinates with device-local Bridges and an IDE extension. Read-only workspace awareness came first; edit proposals and permissions are being developed separately, with explicit boundaries around what an agent can change.',
      stack: ['Python / FastAPI', 'TypeScript', 'VS Code', 'Local Bridge', 'AI systems'],
      dates: { concept: null, rnd: '09/26', launch: null },
      art: 'assets/dex.svg', artAlt: 'Concept art for DEX: a geometric orange and blue voice visualizer inside a dark interface',
      artCaption: 'PLACEHOLDER / AGENT VISUALIZER',
      theme: { base: '#121c21', accent: '#ff865a', secondary: '#98c9d9', paper: '#f8ebe0' },
      links: [], privateLabel: 'PRIVATE DEVELOPMENT REPOSITORY'
    },
    {
      id: 'robert', name: 'ROBERT', category: 'SECURITY ASSISTANT', status: 'R&D',
      line: 'Observe the signals. Surface what matters.',
      what: 'ROBERT (Risk Observation, Behavioral Evaluation, Response, and Triage) is the planned AI assistant for Project Sentry. Its role is to help interpret home-network security events and make monitoring more understandable.',
      how: 'ROBERT is conceived as an interface and reasoning layer for purpose-built security tools running inside Project Sentry. Its proposed responsibilities include observations, contextual triage, and human-readable explanations; deployment and capability details are still in development.',
      stack: ['Security monitoring', 'LLM integration', 'Network telemetry', 'Human-in-the-loop'],
      dates: { concept: '07/26', rnd: null, launch: null },
      art: 'assets/robert.svg', artAlt: 'Concept art for ROBERT: emerald radar rings, scanning trace, and security telemetry',
      artCaption: 'PLACEHOLDER / TELEMETRY INTERFACE',
      theme: { base: '#0e201c', accent: '#a6e0b1', secondary: '#d2f29a', paper: '#e4f4df' },
      links: [], privateLabel: 'PUBLIC RELEASE / NOT AVAILABLE'
    }
  ]
};

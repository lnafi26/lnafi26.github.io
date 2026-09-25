/* Edit this one file to update both collections. Dates are MM/YY or null (unconfirmed / not launched).
   Project theme colors must stay inside the project media frame. Do not use them for site UI.
   Never put private repository URLs, secrets, API keys, or unreleased milestones on a public portfolio. */
window.PORTFOLIO_PROJECTS = {
  compound: [
    {
      id: 'syncora', name: 'Project Syncora', category: 'Creative software', status: 'In development',
      line: 'Find the signal in the noise.',
      what: 'A music-discovery and edit-planning workspace for video editors. Project Syncora turns a creative brief into focused track suggestions, then helps turn musical structure into decisions for the timeline.',
      how: 'Nova explores music against an editor’s intent; Pulsar maps useful song moments into editing cues; Echoes keeps those plans available to revisit. The application combines a browser interface, a Python API, music data, and language-model-assisted discovery.',
      stack: ['Python / FastAPI', 'JavaScript', 'Supabase', 'Audio analysis', 'LLMs'],
      dates: { concept: '07/26', rnd: '07/26', launch: null },
      theme: { base: '#211440', accent: '#B08CFF', secondary: '#70E4EF', paper: '#BFF7FF' },
      links: [{ label: 'View public repository', url: 'https://github.com/lnafi26/Syncora' }]
    },
    {
      id: 'sentry', name: 'Project Sentry', category: 'Home network / Infrastructure', status: 'R&D',
      line: 'A lookout for the home network.',
      what: 'A modular home-network security and monitoring project built around a small, dedicated machine. It is designed to bring network visibility, privacy utilities, and security observations into one approachable home lab.',
      how: 'A local device hosts the underlying network and security services; a separate assistant, ROBERT, is planned as a reasoning and interaction layer on top of those tools—not as a replacement for them.',
      stack: ['Linux / Home lab', 'Network monitoring', 'Privacy tooling', 'Security architecture'],
      dates: { concept: '07/26', rnd: '09/26', launch: null },
      theme: { base: '#101010', accent: '#E8BD58', secondary: '#E8BD58', paper: '#E8BD58' },
      links: [], privateLabel: 'Not publicly available yet'
    }
  ],
  watchtower: [
    {
      id: 'dex', name: 'DEX', category: 'Development assistant', status: 'Active R&D',
      line: 'A second set of hands, with guardrails.',
      what: 'DEX (Development, Explanation, and eXecution) is a personal AI software-development assistant being built to understand a code workspace, explain technical decisions, and help carry out controlled development tasks.',
      how: 'A centralized Core coordinates with device-local Bridges and an IDE extension. Read-only workspace awareness came first; edit proposals and permissions are being developed separately, with explicit boundaries around what an agent can change.',
      stack: ['Python / FastAPI', 'TypeScript', 'VS Code', 'Local Bridge', 'AI systems'],
      dates: { concept: null, rnd: '09/26', launch: null },
      theme: { base: '#101C3B', accent: '#FFFFFF', secondary: '#FFFFFF', paper: '#FFFFFF' },
      links: [], privateLabel: 'Private development project'
    },
    {
      id: 'robert', name: 'ROBERT', category: 'Security assistant', status: 'R&D',
      line: 'Observe the signals. Surface what matters.',
      what: 'ROBERT (Risk Observation, Behavioral Evaluation, Response, and Triage) is the planned AI assistant for Project Sentry. Its role is to help interpret home-network security events and make monitoring more understandable.',
      how: 'ROBERT is conceived as an interface and reasoning layer for purpose-built security tools running inside Project Sentry. Its proposed responsibilities include observations, contextual triage, and human-readable explanations; deployment and capability details are still in development.',
      stack: ['Security monitoring', 'LLM integration', 'Network telemetry', 'Human-in-the-loop'],
      dates: { concept: '07/26', rnd: null, launch: null },
      theme: { base: '#E8BD58', accent: '#101010', secondary: '#101010', paper: '#101010' },
      links: [], privateLabel: 'Not publicly available yet'
    }
  ]
};

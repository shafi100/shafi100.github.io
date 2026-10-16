export interface McpToolGroup {
  title: string;
  tools: string[];
  blurb: string;
}

/** Tool groups exposed by the portfolio MCP server (shafi-/portfolio). */
export const mcpToolGroups: McpToolGroup[] = [
  {
    title: 'Discover & search',
    tools: ['listProjects', 'searchProjects', 'discoverProjects', 'searchByTechnology', 'listTechnologies', 'searchFiles', 'searchFeatures', 'searchDocumentation'],
    blurb: 'Find projects, features, files or docs across the whole local ecosystem.',
  },
  {
    title: 'Understand a codebase',
    tools: ['getProject', 'getProjectStructure', 'listProjectFiles', 'getFileContent', 'getDependencies', 'listProjectTechnologies'],
    blurb: 'Structure, files, dependencies and tech stack of any indexed project.',
  },
  {
    title: 'Analyze & remember',
    tools: ['getAnalysis', 'storeAnalysis', 'listFeatures', 'storeFeature', 'getProjectAnalyzerPrompt'],
    blurb: 'Durable architecture analyses and feature knowledge the agent can recall later.',
  },
  {
    title: 'Connect & maintain',
    tools: ['listRelationships', 'storeRelationship', 'storeTechnology', 'tagProjectWithTechnology', 'listProjectsNeedingAnalysis', 'health', 'getConfiguration', 'updateConfiguration'],
    blurb: 'Cross-project relationships, tagging and index health.',
  },
];

export const mcpToolCount = mcpToolGroups.reduce((n, g) => n + g.tools.length, 0);

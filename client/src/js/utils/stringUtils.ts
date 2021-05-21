const CONTEXT_VARIABLES_REGEX = /[^{{}]+(?=}})/g

export const getRequiredContextVariables = (template: string): string[] => {
  // Parse HTML from template to find required context variables
  const contextVariables = template.match(CONTEXT_VARIABLES_REGEX);

  if (!contextVariables) return [];
  
  return contextVariables.map((contextVariable: string) => contextVariable.trim());
}
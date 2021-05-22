/**
 * Function that takes a stringified html email template and parses for context variables
 * and returns an array of context variables required
 * 
 * example input:   '<h1>Hello {{ user.name }}</h1>'
 * example output:  ['user.name']
 * 
 * @param   {String}  template  stringified html template representing the email template
 * @returns {Array}             array of context variables required within the template    
 */
export const getRequiredContextVariables = (template: string): string[] => {
  // Regex grabs everything in between double curly brackets
  const CONTEXT_VARIABLES_REGEX = /[^{{}]+(?=}})/g
  // Parse HTML from template to find required context variables
  const contextVariables = template.match(CONTEXT_VARIABLES_REGEX);

  if (!contextVariables) return [];
  
  return contextVariables.map((contextVariable: string) => contextVariable.trim());
}

/**
 * Function that takes id of email template as an input and returns titleize string
 * version of the name
 * 
 * example input:   'registration-confirmation.tmp'
 * example output:  'Registration Confirmation'
 * 
 * @param   {String}  templateId    string representing ID of selected email template
 * @returns {String}                string representing Titleized string
 */
export const getTemplateIdName = (templateId: string = ''): string => {
  if (templateId.length === 0) { return '' }
  
  // Strip the .tmp from the templateId
  let parsedString: string | string[] = templateId.split('.')[0];
  parsedString = parsedString
    .split('-')
    // Capitalizes first letter of every word in template Id
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');

  return parsedString;
}
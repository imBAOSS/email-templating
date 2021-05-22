import { getRequiredContextVariables, getTemplateIdName } from './stringUtils'

describe('getRequiredContextVariables', () => {
  it('should get the required context variables from a given template', () => {
    const template = '<h1>{{ user.name }}</h1>'
    expect(getRequiredContextVariables(template)).toEqual(['user.name']);
  });

  it('should return an empty array if template is empty', () => {
    expect(getRequiredContextVariables('')).toEqual([]);
  });
});

describe('getTemplateIdName', () => {
  it('should parse the templateId to get a titleized template name', () => {
    const templateId = 'some-new-template.tmp';
    expect(getTemplateIdName(templateId)).toBe('Some New Template');
  })

  it('should return empty string if empty templateId is given', () => {
    expect(getTemplateIdName('')).toBe('');
  })
})
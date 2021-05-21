const BASE_URL = 'http://0.0.0.0:5000';

export const fetchTemplates = () => {
  return fetch(`${BASE_URL}/templates`)
    .then((response: any) => response.json());
}

export const fetchTemplate = (templateId: string) => {
  return fetch(`${BASE_URL}/templates/${templateId}`)
    .then((response: any) => response.json());
}

export const renderTemplate = (body: { context: object, template: string }) => {
  return fetch(`${BASE_URL}/render`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body)
  }).then((response: any) => response.json());
}

export const saveTemplate = (payload: { content: string, templateId: string}) => {
  return fetch(`${BASE_URL}/templates/${payload.templateId}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({content: payload.content})
  }).then((response: any) => response.json());
}
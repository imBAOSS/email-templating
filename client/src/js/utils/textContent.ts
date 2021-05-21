interface TextContentMap {
    [key: string]: string
}

export const ALERT_MESSAGE: TextContentMap = {
    SAVE_ERROR: "There was an error saving your template",
    SAVE_SUCCESS: "Successfully saved your template!"
}

export const BUTTON_TEXT: TextContentMap = {
    SAVE: "Save",
    PREVIEW: "Preview" 
}

export const EMAIL_TEMPLATE_PREVIEW: TextContentMap = {
    "email.template.preview.header": "Template Preview"
}

export const EMAIL_TEMPLATE_EDITOR: TextContentMap = {
    "email.template.editor.header.TEMPLATE": "Template",
    "email.template.editor.header.CONTEXT": "Context Variables"
}
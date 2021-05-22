import { useState } from 'react';
import {
  set as _set,
  get as _get
} from 'lodash';

import { EDITOR_TYPE } from '../emailTemplate/emailTemplate';
import { EMAIL_TEMPLATE_EDITOR } from '../../utils/textContent';
import { getRequiredContextVariables } from '../../utils/stringUtils';
import { BaseSyntheticEvent } from 'react';

import '../../../assets/styles/components/emailTemplateEditor/emailTemplateEditor.scss';

export interface IEmailTemplateEditorProps {
  content: string,
  setContent: Function,
  emailTemplateEditorType: EDITOR_TYPE,
  updateDidUpdateState: Function
}

export default function EmailTemplateEditor(props: IEmailTemplateEditorProps) {
  // Build out initial context variable state
  const CONTEXT_VARIABLES = getRequiredContextVariables(props.content);
  const initialContext = {};
  
  CONTEXT_VARIABLES.forEach((contextVariable: string) => {
    _set(initialContext, contextVariable, '')
  });
  
  const [context, setContext] = useState(initialContext);

  function handleTemplateChange(event: BaseSyntheticEvent) {
    props.setContent(event.target.value)
    props.updateDidUpdateState(true);
  }

  const handleInputChange = (contextVariable: string) => (event: BaseSyntheticEvent) => {
    _set(context, contextVariable, event.target.value);
    setContext(context);
    props.setContent(JSON.stringify(context));
    props.updateDidUpdateState(true);
  }

  // Renders the list of context variables with respective input fields to populate variables
  function renderContextTemplate() {
    return (
      <div className='email-template-editor__context-variable-container'>
        {
          CONTEXT_VARIABLES.map((contextVariable: string) => (
            <label className='email-template-editor__context-variable-label'>
              { contextVariable }
              <input 
                type="text"
                name={ contextVariable }
                className='email-template-editor__context-variable-input'
                value={ _get(context, contextVariable) }
                onChange={ handleInputChange(contextVariable) }
              />
            </label>
          ))
        }
      </div>
    )
  }
  
  return (
    <div className='email-template-editor'>
      <div className='email-template-editor__header'>
        <h4>{ EMAIL_TEMPLATE_EDITOR[`email.template.editor.header.${EDITOR_TYPE[props.emailTemplateEditorType]}`] }</h4>
      </div>
      <div className='email-template-editor__body'>
        { props.emailTemplateEditorType === EDITOR_TYPE.TEMPLATE
          ? <textarea 
              className='email-template-editor__textarea'
              value={props.content}
              onChange={handleTemplateChange}
            />
          : renderContextTemplate()
        }
      </div>
    </div>
  )
}
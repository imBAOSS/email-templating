import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import EmailTemplatePreview from '../emailTemplatePreview/emailTemplatePreview';
import EmailTemplateEditor from '../emailTemplateEditor/emailTemplateEditor';

import { ALERT_MESSAGE, BUTTON_TEXT } from '../../utils/textContent';
import { STATUS, VISIBILITY } from '../../utils/constants';

import { fetchTemplate, renderTemplate, saveTemplate } from '../../services/templates';

import '../../../assets/styles/components/emailTemplates/emailTemplates.scss';

export interface IEmailTemplateProps {
  templateId: string
}

interface IRenderTemplate {
  body?: string,
  error?: string
}

export enum EDITOR_TYPE {
  TEMPLATE,
  CONTEXT
}

const ALERT_TIMEOUT = 3000;

export default function EmailTemplate(props: IEmailTemplateProps) {
  const [template, setTemplate] = useState('');
  const [context, setContext] = useState('{}');
  const [previewContent, setPreviewContent] = useState<IRenderTemplate>({
    body: 'Add context variables to preview template'
  });
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStatus, setAlertStatus] = useState('');
  const [showAlert, setShowAlert] = useState('invisible');
  const [didUpdate, setDidUpdate] = useState(false);
  
  useEffect(() => {
    fetchTemplate(props.templateId)
      .then((data: { content: string }) => setTemplate(data.content))
  }, [props.templateId])

  function renderSaveAlertMessage() {
    setShowAlert(VISIBILITY.VISIBLE)

    setTimeout(() => {
      setShowAlert(VISIBILITY.INVISIBLE)
    }, ALERT_TIMEOUT);
  }

  function handleSave() {
    saveTemplate({ content: template, templateId: props.templateId })
      .then((data: { error?: string }) => {
        if (data.error) {
          console.error(`${data.error}`);
          setAlertMessage(`${ALERT_MESSAGE.SAVE_ERROR}: ${data.error}`)
          setAlertStatus(STATUS.ERROR);
        } else {
          setAlertMessage(`${ALERT_MESSAGE.SAVE_SUCCESS}`);
          setAlertStatus(STATUS.SUCCESS);
        }

        renderSaveAlertMessage();
      })
  }

  function handlePreview() {
    renderTemplate({ template, context: JSON.parse(context) })
      .then((data: IRenderTemplate) => {
        setPreviewContent({ body: data.body || data.error })
      })
  }

  return(
    <div className="email-template-container">
      <header className="email-template-header">
        <Link className="email-template-header__link" to="/">Back to Templates</Link>
        <div className={`email-template-header__alert email-template-header__alert--${alertStatus} ${showAlert}`}>{alertMessage}</div>
      </header>
      <div className="email-template-body">
        <section className="email-template-body__left-panel">
          <EmailTemplatePreview content={previewContent} templateId={props.templateId} />
        </section>
        <section className="email-template-body__right-panel">
          <EmailTemplateEditor
            content={template}
            setContent={setTemplate}
            emailTemplateEditorType={EDITOR_TYPE.TEMPLATE}
            updateDidUpdateState={setDidUpdate}
          />
          <EmailTemplateEditor
            content={template}
            setContent={setContext}
            emailTemplateEditorType={EDITOR_TYPE.CONTEXT}
            updateDidUpdateState={setDidUpdate}
          />
        </section>
      </div>
      <div className="email-template-footer">
        <div className="email-template-footer__action-buttons-group">
          <button className="action-buttons" onClick={handleSave} disabled={!didUpdate}>{ BUTTON_TEXT.SAVE }</button>
          <button className="action-buttons" onClick={handlePreview}>{ BUTTON_TEXT.PREVIEW }</button>
        </div>
      </div>
    </div>
  );
}

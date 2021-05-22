import { EMAIL_TEMPLATE_PREVIEW } from '../../utils/textContent';
import { getTemplateIdName } from '../../utils/stringUtils'
import SanitizedHTML from 'react-sanitized-html';

import '../../../assets/styles/components/emailTemplatePreview/emailTemplatePreview.scss';

export interface IEmailTemplatePreviewProps {
  content: {
    body?: string,
    error?: string
  },
  templateId: string
}

export default function EmailTemplatePreview(props: IEmailTemplatePreviewProps) {
  const emailTemplatePreviewTitle =
    `${EMAIL_TEMPLATE_PREVIEW['email.template.preview.header']}: ${getTemplateIdName(props.templateId)}`;
  
  return(
    <div className="email-template-preview">
      <div className="email-template-preview__header">
        <h4>{ emailTemplatePreviewTitle }</h4>
      </div>
      <div className="email-template-preview__body">
        <SanitizedHTML
          html={props.content.body || props.content.error}
        />
      </div>
    </div>
  )
}
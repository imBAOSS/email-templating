import { shallow } from 'enzyme'

import EmailTemplateEditor from './emailTemplateEditor';
import { EDITOR_TYPE } from '../emailTemplate/emailTemplate'

const SELECTORS = {
  TEMPLATE: '.email-template-editor__textarea',
  CONTEXT: '.email-template-editor__context-variable-container'
}

function setup(props) {
  const initialProps = {
    content: '',
    setContent: jest.fn(),
    emailTemplateEditorType: '',
    updateDidUpdateState: jest.fn()
  }

  return shallow(<EmailTemplateEditor {...{...initialProps, ...props}} />, { disableLifecycleMethods: true })
}

describe('<EmailTemplateEditor />', () => {
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });
  
  it('should render correct version of the component when passed EditorType of TEMPLATE', () => {
    wrapper = setup({ emailTemplateEditorType: EDITOR_TYPE.TEMPLATE });

    expect(wrapper.find(SELECTORS.TEMPLATE).length).toBe(1);
  });

  it('should render correct version of the component when passed EditorType of CONTEXT', () => {
    wrapper = setup({ emailTemplateEditorType: EDITOR_TYPE.CONTEXT });

    expect(wrapper.find(SELECTORS.CONTEXT).length).toBe(1);
  });
});
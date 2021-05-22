import { shallow } from 'enzyme'

import { TEMPLATE_ID } from '../../utils/constants';
import { getTemplateIdName } from '../../utils/stringUtils';
import EmailTemplatePreview from './emailTemplatePreview';

const SELECTORS = {
  PREVIEW_HEADER: '.email-template-preview__header h4'
}

function setup(props) {
  const initialProps = {
    content: {
      body: '',
      error: ''
    },
    templateId: ''
  }

  return shallow(<EmailTemplatePreview {...{...initialProps, ...props}} />, { disableLifecycleMethods: true })
}

describe('<EmailTemplatePreview />', () => {
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });
  
  it('should render the correct title when passed templateId', () => {
    wrapper = setup({ templateId: TEMPLATE_ID.EXERCISE_APPROVAL });

    expect(wrapper.find(SELECTORS.PREVIEW_HEADER).text())
      .toContain(getTemplateIdName(TEMPLATE_ID.EXERCISE_APPROVAL));
  });
});
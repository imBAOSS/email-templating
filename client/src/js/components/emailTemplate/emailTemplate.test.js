import { shallow } from 'enzyme'

import { TEMPLATE_ID } from '../../utils/constants';

import EmailTemplate from './emailTemplate';

function setup(props) {
  const initialProps = {
    templateId: ''
  }

  return shallow(<EmailTemplate {...{...initialProps, ...props}} />, { disableLifecycleMethods: true })
}

describe('<EmailTemplate />', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });
  
  it('should render the component correctly when passed templateId', () => {
    wrapper = setup({ templateId: TEMPLATE_ID.REGISTRATION_CONFIRMATION });

    expect(wrapper.find('.action-buttons').length).toBe(2);
    expect(wrapper.find('EmailTemplatePreview').length).toBe(1);
    expect(wrapper.find('EmailTemplateEditor').length).toBe(2);
  });
});
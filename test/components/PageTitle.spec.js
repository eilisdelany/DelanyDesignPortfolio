import 'jsdom-global/register';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import PageTitle from '../../src/components/PageTitle';
import { expect } from 'chai';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

const text = 'test text';

describe('PageTitle component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
    <PageTitle text={text} />
    );
  });

  it('should display the text prop ', () => {
    expect(wrapper.text().includes(text)).to.be.true;
  });
  
});

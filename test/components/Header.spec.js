import 'jsdom-global/register';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../src/components/Header';
import { pages, pageKeys } from '../../src/constants/pages';
import { expect } from 'chai';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

const initialActiveLinkIndex = 0;

describe('Header component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BrowserRouter>
        <Header
          location={{
            pathname: pages[pageKeys[initialActiveLinkIndex]].path
          }}
        />
      </BrowserRouter>
    ).find(Header).dive();
  });

  it('should render a Header-tab for every pageKey', () => {
    expect(wrapper.find({ 'data-test': "Header-tab" }).length).to.eql(pageKeys.length);
  });

  it('should give the active tab the active-tab class name', () => {
    expect(wrapper.find({ 'data-test': "Header-tab" }).at(initialActiveLinkIndex).hasClass('Header-active-tab')).to.be.true;
  });

  it('should not give the non active tab the active-tab class name', () => {
    expect(wrapper.find({ 'data-test': "Header-tab" }).at(1).hasClass('Header-active-tab')).to.be.false;
  });
  
});

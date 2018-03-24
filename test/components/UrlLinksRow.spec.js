import 'jsdom-global/register';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UrlLinksRow from '../../src/components/UrlLinksRow';
import { expect } from 'chai';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

const date = "12.12.12";

const files = [{
    text: 'url link 1',
    url: 'www.google.com'
}, {
    text: 'url link 2',
    url: 'www.google.com'
}];

describe('UrlLinksRow component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
        <UrlLinksRow
            date={date}
            files={files}
        />
    );
  });

  it('should display the date string passed as a prop', () => {
    expect(wrapper.find({ 'data-test': "UrlLinksRow-date" }).text().includes(date)).to.be.true;
  });

  it('should render a link for every file in the files array passed as a prop', () => {
    expect(wrapper.find({ 'data-test': "UrlLinksRow-link" }).length).to.eql(files.length);
  });
  
});

import 'jsdom-global/register';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Archive from '../../src/pages/Archive';
import articles from '../../src/archive/top-five';
import { expect } from 'chai';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

const pageTitleText = "Test title"; 
const archive = [{
  date: "24.03.18",
  files: [{
    text: "first link",
    url: "https://google.com"
  }, {
    text: "second link",
    url: "https://google.com"
  }]
}];


describe('Archive page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Archive
        pageTitleText={pageTitleText}
        archive={archive}
      />
    );
  });

  it('should pass the pageTitleText as props to the PageTitle component ', () => {
    expect(wrapper.find({ 'data-test': "Archive-PageTitle" }).props().text).to.eql(pageTitleText);
  });

  it('should render a UrlLinksRow for every article in the articles from archive array passed as props', () => {
    expect(wrapper.find({ 'data-test': "Archive-UrlLinksRow" }).length).to.eql(archive.length);
  });

});

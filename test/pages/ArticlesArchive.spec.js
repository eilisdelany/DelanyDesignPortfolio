import 'jsdom-global/register';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticlesArchive, { pageTitleText } from '../../src/pages/ArticlesArchive';
import articles from '../../src/archive/top-five';
import { expect } from 'chai';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticlesArchive page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArticlesArchive />);
  });

  it('should pass the pageTitleText as props to the PageTitle component ', () => {
    expect(wrapper.find({ 'data-test': "ArticlesArchive-PageTitle" }).props().text).to.eql(pageTitleText);
  });

  it('should render a UrlLinksRow for every article in the articles from top-five', () => {
    expect(wrapper.find({ 'data-test': "ArticlesArchive-UrlLinksRow" }).length).to.eql(articles.length);
  });

});

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LinkItem from "../components/link-item.jsx"
import TableLink from "../components/table-link.jsx"

describe('LinkItem', () => {
  let getWrapper,testData,wrapper,links,getTableComponent;

  beforeEach(() => {

    testData = {
      id: 0,
      name: "Test Name",
      url: "Test URL",
      vote: 5,
      createdDate: Date.now(),
      voteDate: null,
    }

    links= [ {
      "id": 0,
      "name": "Test Name",
      "url": "Test URL",
      "vote": 5,
      "createdDate": 3,
      "voteDate": 2
  }]

  getTableComponent = () => mount(
    <TableLink  />
);
    getWrapper = () => mount(
          <LinkItem item={testData} 
                    links={links} 
                    setLinks={getTableComponent}
                    sortByVote={getTableComponent}/>
    );
    wrapper = getWrapper();

  });


  it('Should show correct up vote', () => {
    expect(wrapper.find('.up-vote').length).toBe(1);
  });

  it('Should show correct down vote', () => {
    expect(wrapper.find('.down-vote').length).toBe(1);
  });

  it('Should show correct vote number', () => {
    expect(wrapper.find('.vote-number').length).toBe(1);
  });

  it('Should show correct link url', () => {
    expect(wrapper.find('.link-url').length).toBe(1);
  });


  it('Should show correct vote-number',   () => {
    const button = wrapper.find('.down-vote');
    button.simulate('click');
    wrapper.update();
    expect(wrapper.find('.vote-number').text()).toBe("4");
  });
});
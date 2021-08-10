import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CreateLink from "../pages/create-link"
import { ToastContainer} from 'react-toastify';
import {jest} from '@jest/globals';

describe('CreateLink', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CreateLink />);
  });



  it('Should show correct link name', () => {
    expect(wrapper.find('.link-name').length).toBe(1);
  });

  it('Should show correct link url', () => {
    expect(wrapper.find('.link-url').length).toBe(1);
  });

  it('Should show correct link url', () => {
    expect(wrapper.find('.create-button').length).toBe(1);
  });

  it('cancels changes when user presses esc', done => {
    wrapper.find('.link-name').simulate('change', {target: {value: 'My new value'}})
    expect(wrapper.find('.link-name').get(0).props.value).toEqual('My new value');
    done();
  }); 

  it('cancels changes when user presses esc', done => {
    wrapper.find('.link-url').simulate('change', {target: {value: 'test'}})
    expect(wrapper.find('.link-url').get(0).props.value).toEqual('test');
    done();
  }); 

  it('cancels changes when user presses esc', async () => {
    const button = wrapper.find('.create-button');
    wrapper.find('.link-name').simulate('change', {target: {value: 'My new value'}})
    wrapper.find('.link-url').simulate('change', {target: {value: 'test'}})
    button.simulate('click');
    expect(wrapper.find(ToastContainer).length).toBe(1);
  }); 

  it('cancels changes when user presses esc', async () => {
    const button = wrapper.find('.create-button');
    wrapper.find('.link-name').simulate('change', {target: {value: ''}})
    wrapper.find('.link-url').simulate('change', {target: {value: ''}})
    button.simulate('click');
    expect(wrapper.find('#url-error')).toHaveLength(1);
    expect(wrapper.find('#name-error')).toHaveLength(1);
  }); 






  
  // it('calls "handleButtonClick()" on button click', () => {
  //   const wrapper = mount(<CreateLink />);
  //   const spy = jest.spyOn()
  //   wrapper.update();
  //   wrapper.find('button').simulate('click');
  //   expect(spy).toHaveBeenCalled();
  // });
  
  // it("Testing", () => {
  //   const onSubmitMock = jest.fn();
  //   const button = wrapper.find('.create-button');
  //   const component = mount(
  //     <CreateLink createItem={onSubmitMock} />
  //   );

  //   component.find('.link-name').simulate('change', {target: {value: 's'}})
  //   component.find('.link-url').simulate('change', {target: {value: 's'}})
  //   component.find(".create-button").simulate("click");

  //   expect(onSubmitMock).toHaveBeenCalled()
  // });


  // it('handleNameInput',  done => {
    
  //   let wrapper1 = shallow(<CreateLink/>);
  //   const button = wrapper1.find('.create-button');

  //   wrapper1.find('.link-name').simulate('change', {target: {value: 'f'}})
  //   wrapper.find('.link-url').simulate('change', {target: {value: 'f'}})
  //   const mockOnClick = jest.fn();
  //   wrapper1.createItem = mockOnClick;
  //   button.simulate('click');

  //   expect(mockOnClick.mock.calls.length).toBe(1);
  //   done();




    // const mockCallBack = jest.fn();

    // const button = shallow((<CreateLink onClick={mockCallBack}>Ok!</CreateLink>));
    // button.find('.create-button').simulate('click');
    // expect(mockCallBack.mock.calls.length).toBe(1);
//  })

// it('calls "handleAnchorClick()" on button click', () => {
//   const wrapper = mount(<CreateLink />);
//   const spy = jest.spyOn(wrapper.instance(), 'handleAnchorClick');
//   wrapper.update();
//   wrapper.find('a').simulate('click');
//   expect(spy).toHaveBeenCalled();
// });
 


});
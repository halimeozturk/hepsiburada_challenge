import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CreateLink from "../pages/create-link"
import { ToastContainer} from 'react-toastify';

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

  it('Does the input fill up', done => {
    wrapper.find('.link-name').simulate('change', {target: {value: 'My new value'}})
    expect(wrapper.find('.link-name').get(0).props.value).toEqual('My new value');
    done();
  }); 

  it('Does the input fill up', done => {
    wrapper.find('.link-url').simulate('change', {target: {value: 'test'}})
    expect(wrapper.find('.link-url').get(0).props.value).toEqual('test');
    done();
  }); 

  it('Did you click the button and get a notification', async () => {
    const button = wrapper.find('.create-button');
    wrapper.find('.link-name').simulate('change', {target: {value: 'My new value'}})
    wrapper.find('.link-url').simulate('change', {target: {value: 'test'}})
    button.simulate('click');
    expect(wrapper.find(ToastContainer).length).toBe(1);
  }); 

  it('Did the validation work ', async () => {
    const button = wrapper.find('.create-button');
    wrapper.find('.link-name').simulate('change', {target: {value: ''}})
    wrapper.find('.link-url').simulate('change', {target: {value: ''}})
    button.simulate('click');
    expect(wrapper.find('#url-error')).toHaveLength(1);
    expect(wrapper.find('#name-error')).toHaveLength(1);
  }); 

});
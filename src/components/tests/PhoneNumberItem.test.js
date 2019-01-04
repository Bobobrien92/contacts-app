import React from 'react'
import ReactDOM from 'react-dom'
import PhoneNumberItem from '../PhoneNumberItem'
//import { mount, shallow } from 'enzyme'
import sinon from 'sinon';
import {stubConsoleError} from './testUtil'

function expectMissingProp(prop, component) {
  sinon.assert.calledWithMatch(console.error,
    new RegExp(`Warning: Failed prop type: The prop \`${prop}\` is marked as required in \`${component}\`, but its value is \`undefined\`.`))
}

describe('PhoneNumberItem', () => {

  stubConsoleError()

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PhoneNumberItem number="1234567890" title="Home" />, div)
    ReactDOM.unmountComponentAtNode(div)
    sinon.assert.notCalled(console.error)
  })


  it('fails to render without number and title', () => {
    const div = document.createElement('div')
    ReactDOM.render(<PhoneNumberItem />, div)
    ReactDOM.unmountComponentAtNode(div)
    sinon.assert.callCount(console.error, 2)
    expectMissingProp('number', 'PhoneNumberItem')
    expectMissingProp('title', 'PhoneNumberItem')
  })



  // it('warns on render without title', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<PhoneNumberItem number="1234567890"/>, div)
  //   sinon.assert.callCount(console.error, 1)
  //   expectMissingProp('title', 'PhoneNumberItem')
  // })


  // it('warns on  render without number', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<PhoneNumberItem title="WORK" />, div)
  //   sinon.assert.callCount(console.error, 1)
  //   expectMissingProp('number', 'PhoneNumberItem')
  // })


})
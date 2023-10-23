import React from 'react';
import { getByText, render } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialog component specs', () => {
  it('should display the confirmation dialog', () => {
    const isOpen = true;
    const onAccept = () => {};
    const onClose = () => {};
    const title = 'Testing Title';
    const labels = {
      closeButton : 'Close button',
      acceptButton : 'Accept button',
    }
    const children = <div key={1}>Mocked children</div>;

    const { getByText } = render(
      <ConfirmationDialogComponent
        isOpen={isOpen}
        onAccept={onAccept}
        onClose={onClose}
        title={title}
        labels={labels}
        children={children}
      />)

    const closeButtonElement = getByText(labels.closeButton)
    expect(closeButtonElement).not.toBeNull()
    expect(closeButtonElement.tagName).toEqual('BUTTON')

    const acceptButtonElement = getByText(labels.acceptButton)
    expect(acceptButtonElement).not.toBeNull()
    expect(acceptButtonElement.tagName).toEqual('BUTTON')

    const titleElement = getByText(title)
    expect(titleElement).not.toBeNull()

    const childrenElement = getByText('Mocked children')
    expect(childrenElement).not.toBeNull()
    expect(childrenElement.tagName).toEqual('DIV')

  });

  it('should display the confirmation dialog using snapshot', () => {
    const isOpen = true;
    const onAccept = () => {};
    const onClose = () => {};
    const title = 'Testing Title';
    const labels = {
      closeButton : 'Close button',
      acceptButton : 'Accept button',
    }
    const children = <div key={1}>Mocked children</div>;

    const { baseElement } = render(
      <ConfirmationDialogComponent
        isOpen={isOpen}
        onAccept={onAccept}
        onClose={onClose}
        title={title}
        labels={labels}
        children={children}
      />)

    expect(baseElement).toMatchSnapshot()
  });
})

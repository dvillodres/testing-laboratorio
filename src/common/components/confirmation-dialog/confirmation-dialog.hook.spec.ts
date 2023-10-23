import { renderHook, act } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models';

describe('ConfirmationDialog hook', () => {
  it('should set isOpen to true and itemToDelete when onOpenDialog is called', () => {
    const itemToDelete: Lookup = createEmptyLookup();
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(itemToDelete);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toBe(itemToDelete);
  });

  it('should set isOpen to false when onClose is called', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toBe(false);
  });

});

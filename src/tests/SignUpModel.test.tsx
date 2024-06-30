import { RecoilRoot } from 'recoil';
import { act, renderHook } from '@testing-library/react';

import useSignUpModel from '../models/SignUpModel';

describe('useSignUpModel', () => {
  describe('getColors', () => {
    test('should set isFetching to true before making request', async () => {
      const { result } = renderHook(() => useSignUpModel(), {
        wrapper: RecoilRoot
      });

      act(() => {
        result.current.getColors();
      });

      expect(result.current.isFetching).toBe(true);
    });
  });
});
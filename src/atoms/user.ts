import { DefaultValue, atom, selectorFamily } from 'recoil';

import { User } from '../types/user';

export const defaultUser: User = {
  name: '',
  email: '',
  password: '',
  terms: false,
};

const fetchingState = atom<{ isFetching: boolean; error?: string }>({
  key: 'fetchingInfo',
  default: {
    isFetching: false,
  },
});

const signUpUserInput = atom<User>({
  key: 'signUpUserInput',
  default: defaultUser,
});

const signUpUserErrors = atom<{ [key in keyof User]?: string }>({
  key: 'signUpErrors',
  default: {},
});

const signUpUserSelector = selectorFamily({
  key: 'signUpUserAccess',
  get:
    (fieldName: keyof User) =>
    ({ get }) => {
      const user = get(signUpUserInput);
      const errors = get(signUpUserErrors);

      return { value: user[fieldName], error: errors[fieldName] };
    },
  set:
    (fieldName: keyof User) =>
    ({ set, reset }, newFieldInfo) => {
      if (newFieldInfo instanceof DefaultValue) {
        reset(signUpUserInput);
        reset(signUpUserErrors);
        return;
      }

      set(signUpUserInput, (prev) => ({
        ...prev,
        [fieldName]: newFieldInfo.value,
      }));
      set(signUpUserErrors, (prev) => ({
        ...prev,
        [fieldName]: newFieldInfo.error,
      }));
    },
});

export { fetchingState, signUpUserInput, signUpUserErrors, signUpUserSelector };

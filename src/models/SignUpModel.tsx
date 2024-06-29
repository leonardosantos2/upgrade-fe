import { useRecoilState } from "recoil";

import { colorsAtom } from "../atoms/colors";
import { SERVER_URL } from "../constants";
import { User } from "../types/user";
import { fetchingState } from "../atoms/user";

const useSignUpModel = () => {
  const [colors, setColors] = useRecoilState(colorsAtom);
  const [fetchInfo, setFetchInfo] = useRecoilState(fetchingState);

  const getColors = async () => {
    try {
      setFetchInfo((prevState) => ({ ...prevState, isFetching: true }));

      const colorsResponse = await fetch(`${ SERVER_URL }/api/colors`, {
        method: 'GET',
      });

      const colorsData = await colorsResponse.json();

      setColors(colorsData);
      setFetchInfo((prevState) => ({ ...prevState, isFetching: false, error: undefined }));

      return colorsData;
    } catch (error) {
      console.error(error);
      setFetchInfo((prevState) => ({ ...prevState, isFetchingColors: false, error: 'An error occurred while fetching colors.' }));

      return null;
    }
  };

  const submitUser = async (user: User) => {
    try {
      setFetchInfo((prevState) => ({ ...prevState, isFetching: true }));

      const response = await fetch(`${ SERVER_URL }/api/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.status !== 200) {
        const parsedResponse = await response.json();
        throw new Error(parsedResponse.error);
      }

      setFetchInfo((prevState) => ({ ...prevState, isFetching: false, error: undefined }));

      return { success: true };
    } catch (error) {
      console.error(error);
      setFetchInfo((prevState) => ({
        ...prevState,
        isFetching: false,
        error: error &&
          typeof error === 'object' &&
          !Array.isArray(error) &&
          'error' in error ?
          (error as { error: string }).error :
          'An error occurred while submitting user info.',
      }));
      return null;
    }
  };

  return {
    colors,
    ...fetchInfo,
    getColors,
    submitUser,
  }
};

export default useSignUpModel;
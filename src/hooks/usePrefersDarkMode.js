import useMedia from './useMedia';

function usePrefersDarkMode() {
    return useMedia(['(prefers-color-scheme: dark)'], [true], false);
  }

export default usePrefersDarkMode;
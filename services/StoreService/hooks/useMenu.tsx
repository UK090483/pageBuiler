import { useStore } from "../StoreProvider";

const useMenu = () => {
  const { state, setState } = useStore();
  const { menuOpen } = state;

  const toggleMenu = () => {
    setState({ ...state, menuOpen: !menuOpen });
  };

  const closeMenu = () => {
    setState({ ...state, menuOpen: false });
  };

  const openMenu = () => {
    setState({ ...state, menuOpen: true });
  };

  return { menuOpen, toggleMenu, closeMenu, openMenu };
};

export default useMenu;

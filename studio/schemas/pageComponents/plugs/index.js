import Button from "./Button";
import Spacer from "./Spacer";
import ImagPlug from "./ImagePlug";
import ImageGallery from "./ImageGallery/index";
import PlayerPlug from "./PlayerPlug";
import AutoGallery from "./AutoGallery";

const Plugs = [
  Button,
  Spacer,
  ImagPlug,
  ...ImageGallery,
  ...AutoGallery,
  PlayerPlug,
];

export default Plugs;

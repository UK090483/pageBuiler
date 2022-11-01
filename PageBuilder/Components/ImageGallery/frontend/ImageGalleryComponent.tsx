import React from "react";
import { ImageGalleryPlugResult } from "../imageGallery.query";
import Portal from "@components/Portal/Portal";
import { LightBox } from "./LightBox";
import Masonry from "./masonry/Masonry";
import SanityImage from "@components/SanityImage";
import Grid from "./grid/Grid";
import Section from "@components/Section/Section";

const ImageGalleryComponent: React.FC<ImageGalleryPlugResult> = (props) => {
  const {
    items,
    rows = 4,
    rows_mobile = 2,
    ratio = "1:1",
    lightBox,
    variant = "grid",
  } = props;

  const [open, SetOpen] = React.useState<number | null>(null);
  if (!items || items.length < 1) return <div>No Images</div>;

  if (!items || items.length < 1) return null;

  return (
    <Section noProse>
      {variant === "masonry" && (
        <Masonry margin={0} columns={rows} sizes={{ 2: 600, 3: 1000, 4: 1200 }}>
          {items.map((item, index) => {
            return (
              <button
                key={item._key}
                onClick={() => SetOpen(index)}
                style={{ lineHeight: 0 }}
                tabIndex={lightBox ? 1 : -1}
              >
                <SanityImage sizes="20vw" src={item.image} />
                {""}
              </button>
            );
          })}
        </Masonry>
      )}

      {variant === "grid" ||
        (variant === null && (
          <Grid
            onItemClick={(index) => {
              SetOpen(index);
            }}
            {...props}
          />
        ))}
      {lightBox && open !== null && (
        <Portal>
          <LightBox
            items={items}
            initialIndex={open}
            onClose={() => SetOpen(null)}
          />
        </Portal>
      )}
    </Section>
  );
};

export default ImageGalleryComponent;

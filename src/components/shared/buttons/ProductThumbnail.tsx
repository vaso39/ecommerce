import { ImageDTO } from "../../layout/ProductImage";

interface Props {
  image: ImageDTO;
  selectedPicture: ImageDTO;
  // eslint-disable-next-line no-unused-vars
  handlePicture: (image: ImageDTO) => void;
}

function ProductThumbnail(props: Props) {
  return (
    <>
      <div
        className={`cursor-pointer rounded size-20 box-border bg-[white] ${
          props.selectedPicture.id === props.image.id
            ? "shadow-[0_0_0_3px_orange] box-border"
            : "border-0"
        } `}
      >
        <img
          src={props.image.image.small.url}
          className={`rounded hover:opacity-65 box-border size-full ${
            props.selectedPicture.id === props.image.id && "opacity-65"
          } `}
          onClick={() => props.handlePicture(props.image)}
        />
      </div>
    </>
  );
}

export default ProductThumbnail;

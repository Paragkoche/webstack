import Image, { StaticImageData } from "next/image";

export default ({
  image,
  title,
  para,
}: {
  image: StaticImageData;
  title: string;
  para: string;
}) => {
  return (
    <div className="card service">
      <div className="image-wrapper">
        <Image
          src={image}
          alt="img"
          width={1000}
          height={1000}
          loading="eager"
          className="image cover"
        />
      </div>
      <div className="card-service-content">
        <h3 className="heading-h3-size">{title}</h3>
        <p className="mg-bottom-0">{para}</p>
      </div>
    </div>
  );
};

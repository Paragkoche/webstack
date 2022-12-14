export default ({image,title,para}:{image:string,title:string,para:string}) => {
  return (
    <div

      className="card service"
    >
      <div className="image-wrapper">
        <img
          src={image}
          loading="eager"
          className="image cover"
        />
      </div>
      <div className="card-service-content">
        <h3 className="heading-h3-size">{title}</h3>
        <p className="mg-bottom-0">
          {para}
        </p>
      </div>
    </div>
  );
};

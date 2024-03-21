export default function FeatureIcon(props: {
  imgUri: string;
  altText: string;
}) {
  return (
    <div className="rounded-full w-[35px] h-[35px] border mx-2 flex justify-center items-center overflow-hidden hover:bg-gray-100 cursor-pointer p-1">
      <img className="w-[90%] h-[90%]" src={props.imgUri} alt={props.altText} />
    </div>
  );
}

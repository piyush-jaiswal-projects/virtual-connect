export default function SentMsgCard(props: { msg: string }) {
  return (
    <div className="flex justify-end w-[100%]">
      <div
        className="border bg-gray-300 rounded-tr-lg overflow-hidden rounded-tl-lg rounded-bl-lg  
      min-w-[200px] min-h-[35px] max-w-[350px] flex justify-end items-center p-2 m-2"
      >
        {props.msg}
      </div>
    </div>
  );
}

export default function ReceivedMsgCard(props: { msg: string }) {
  return (
    <div className="flex justify-start w-[100%]">
      <div
        className="border bg-gray-100 rounded-tr-lg rounded-bl-lg rounded-br-lg  
      min-w-[200px] max-w-[350px] min-h-[35px] flex justify-end items-center p-2 m-2"
      >
        {props.msg}
      </div>
    </div>
  );
}

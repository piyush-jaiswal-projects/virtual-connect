const Redirect = ({ uri }: { uri: string }) => {
  window.location.replace(uri);
  return <></>;
};

export default Redirect;

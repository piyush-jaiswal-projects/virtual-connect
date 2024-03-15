interface User {
  name: string;
  email: string;
  uid: string;
  sid: string;
}

function deleteUserFromSocketList(list: User[], user: User) {
  const newList: User[] = [];
  if (list.length > 0) {
    list.forEach((usr) => {
      if (usr.name !== user.name) newList.push(usr);
    });
  }
  return newList;
}

export default deleteUserFromSocketList;

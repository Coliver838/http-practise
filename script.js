fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((data) => {
    renderUsers(data);
  })
  .catch((error) => console.log(error));

const renderUsers = (user) => {
  const markap = users
    .map((user) => {
      return ` <li>
            <p>name:${user.name}</p>
            <p>username:${user.username}</p>
            <p>company:${user.company.name}</p>
          </li>`;
    })
    .join("");

  console.log(markap);
  const userList = document.querySelector(".user_list");
  userList.insertAdjacentHTML("beforeend", markap);
};

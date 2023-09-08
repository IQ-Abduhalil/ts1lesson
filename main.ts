// export {};
// 👇️ only necessary if running in Node.js version < 17.5
// (Remove this line if running in the browser)

var elList = document.querySelector(".lists");

type User = {
  id: number;
  email: string;
  first_name: string;
};

type GetUsersResponse = {
  data: User[];
};

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = (await response.json()) as GetUsersResponse;

    let listItem = document.createElement("li");
    elList?.append(listItem);

    return result.map((i: object) => listItem.append(i.name));
  } catch (error) {
    if (error instanceof Error) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
getUsers();

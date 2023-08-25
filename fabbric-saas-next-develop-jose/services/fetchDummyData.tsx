import React from "react";


async function fetchUsers() {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    console.log(data)
}

export default fetchUsers;
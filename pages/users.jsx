import Link from "next/link";
import { useState } from "react";
import MainContainer from "../components/MainContainer";

function Users({ users }) {
  return (
    <MainContainer keywords={"users page"}>
      <h1>User List</h1>
      <ul>
        {users.map((el) => (
          <li key={el.id}>
            <Link href={`/users/${el.id}`}>
              <a>{el.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
}

export default Users;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}

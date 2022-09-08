import Head from "next/head";
import A from "../components/A";

function MainContainer({ children, keywords }) {
  return (
    <>
      <Head>
        <meta keywords={"r3asonwhy,nextjs" + keywords}></meta>
        <title>Main Page</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text={"Main"}></A>
        <A href={"/users"} text={"Users"}></A>
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
}

export default MainContainer;

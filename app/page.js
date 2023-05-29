import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <section>
      <h1>Home</h1>
      <h2>Server side rendered</h2>
      <p>{JSON.stringify(session)}</p>
    </section>
  );
}

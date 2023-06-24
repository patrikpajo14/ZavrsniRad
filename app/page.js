import AuthForm from "@/components/AuthForm";
import "@/styles/globals.css";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  return (
    <section className="auth-page">
      <div className="inner card py-[20px] px-[35px] w-[360px]">
        <AuthForm />
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
    },
  };
}

import AuthForm from "@/components/AuthForm";
import "@/styles/globals.css";

export default async function Home() {
  return (
    <section className="auth-page">
      <div className="inner card py-[20px] px-[35px] w-[360px]">
        <AuthForm />
      </div>
    </section>
  );
}

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./style.scss";

const page = () => {
  return (
    <section id="auth-sign-in">
      <SignIn
        appearance={{
          baseTheme: dark,
        }}
        path="/auth"
        redirectUrl="/admin"
      />
    </section>
  );
};

export default page;

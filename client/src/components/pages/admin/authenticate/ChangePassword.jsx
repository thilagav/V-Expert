import ChangePasswordForm from "./ChangePasswordForm";
import "../../../../assests/css/admin.css";

export default () => {
  return (
    <section
      id={"login-page"}
      className={"h-screen w-full bg-gray flex justify-center items-center"}
    >
      <ChangePasswordForm />
    </section>
  );
};

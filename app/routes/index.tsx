import { Form, Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <div>
    {user ? (
      <>
 
        <p>hola {user.email}</p>
        <Form action="/logout" method="post">
        <button
          type="submit"
         
        >
          Logout
        </button>
      </Form>
        
      </>
    ) : (
      <div>
        <Link
          to="/register"
        >
          Sign up
        </Link>
        <Link
          to="/login"
         
        >
          Log In
        </Link>
      </div>
    )}

  </div>
  );
}

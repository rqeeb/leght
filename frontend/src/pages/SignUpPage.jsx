import React from "react";
import { useAuthStore } from "../store/useAuthStore.js";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { signUp, isSigningUp } = useAuthStore();

  // return (

  // )
};

export default SignUpPage;

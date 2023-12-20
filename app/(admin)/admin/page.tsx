import FormData from "@/components/admin/FormData";
import { auth } from "@clerk/nextjs";
import React from "react";

const page = () => {
  const { userId } = auth();
  // console.log("userID =====>>", userId);

  return (
    <section id="formData">
      <FormData />
    </section>
  );
};

export default page;

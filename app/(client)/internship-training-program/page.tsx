import React from "react";

import "./style.scss";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

const page = () => {
  return (
    <section id="internship-closed">
      <Card className="card" variant="ghost">
        <div className="flex">
          <Heading size="2">
            Important Announcement: Closure of Internship Application Form
          </Heading>
          <Text>
            We would like to inform you that the application form for our
            Internship Training Program will be temporarily closed for updates
            and improvements. <br />
            This means you won't be able to submit new internship applications
            during this period. If you have already submitted your application,
            rest assured that it is under review.
            <br /> We apologize for any inconvenience this may cause and
            appreciate your understanding as we work to enhance our systems for
            a better application experience. <br />
            Thank you for your interest in our Internship Training Program.
          </Text>
          <Link href="/">Go to Home</Link>
        </div>
      </Card>
    </section>
  );
};

export default page;

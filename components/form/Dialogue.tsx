import { Button, Dialog, Flex, Inset, Separator } from "@radix-ui/themes";
import React from "react";

const Dialogue = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="crimson" variant="soft" size="1">
          Know more
        </Button>
      </Dialog.Trigger>
      <Dialog.Content className="open">
        <Dialog.Title size="4">
          Welcome to WebStack's Free Online Internship Training Program!
        </Dialog.Title>
        <Dialog.Description size="2">
          Are you ready to embark on an exciting journey into the world of web
          development? Look no further! We are thrilled to announce our free
          online internship program designed to empower aspiring developers like
          you.
        </Dialog.Description>

        <Separator my="3" size="4" color="pink" />

        <Dialog.Title size="2"> Program Overview:</Dialog.Title>
        <Dialog.Description size="2">
          • Duration: 2 weeks <br />• Time Commitment: 1 to 2 hours per day, 5
          days a week
        </Dialog.Description>

        <Separator my="3" size="1" />

        <Dialog.Title size="2"> Front-End Development:</Dialog.Title>
        <Dialog.Description size="2">
          Our program is structured to provide comprehensive mentoring in
          front-end development. You will dive deep into essential technologies
          such as HTML, CSS, JavaScript, and TypeScript. Gain hands-on
          experience with popular frameworks like React, Next.js, and Angular.
          Learn the art of seamless API integration to enhance your web
          development skills.
        </Dialog.Description>

        <Separator my="3" size="1" />

        <Dialog.Title size="2"> Back-End Development:</Dialog.Title>
        <Dialog.Description size="2">
          Explore the intricacies of back-end development as we guide you
          through a journey encompassing a variety of key topics. Delve into
          database management with both SQL and NoSQL databases. Master the use
          of ORMs, middlewares, and loggers for efficient and scalable
          applications. Understand the importance of authentication, system
          designing, and the deployment of containers. Get hands-on experience
          with Node.js and Express while mastering CRUD (Create, Read, Update,
          Delete) operations.
        </Dialog.Description>

        <Separator my="3" size="1" />

        <Dialog.Title size="2">What You'll Learn:</Dialog.Title>
        <Dialog.Description size="2">
          • HTML, CSS, JavaScript, TypeScript <br />• React, Next.js, Angular{" "}
          <br />• API Integration <br />• SQL and NoSQL Databases <br />• ORM
          (Object-Relational Mapping) <br />• Middlewares and Loggers <br />•
          Authentication <br />• System Designing <br />• Container Deployment
          <br />• Node.js and Express <br />• CRUD Operations
        </Dialog.Description>

        <Separator my="3" size="1" />

        <Dialog.Title size="2">
          Why Join WebStack's Internship Program:
        </Dialog.Title>
        <Dialog.Description size="2">
          • Hands-on mentoring from experienced professionals <br />• Portfolio
          website as final project <br />• Certificate of completion to boost
          your resume
        </Dialog.Description>
        <Separator my="3" size="1" />
        <Dialog.Description size="2">
          Are you ready to shape your future as a web developer? Don't miss this
          opportunity to gain valuable skills and experience. Apply now to
          secure your spot in WebStack's Free Online Internship Training
          Program!
        </Dialog.Description>

        <Flex gap="3" justify="end" my="4">
          <Dialog.Close>
            <Button variant="soft" color="pink">
              Close
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default Dialogue;

"use client";

import "./style.scss";
import "@radix-ui/themes/styles.css";
import {
  Card,
  Theme,
  Flex,
  Text,
  Button,
  TextField,
  Responsive,
  RadioGroup,
  Checkbox,
} from "@radix-ui/themes";

const inputElements: Array<{
  Lable: string;
  type: string;
  placeHolder: string;
  TextField?: typeof TextField.Input;
  size: Responsive<"3" | "2" | "1"> | undefined;
  child?: React.ReactElement;
}> = [
  {
    Lable: "Full Name:",
    type: "input",
    placeHolder: "Enter your Full Name",
    size: "3",
    TextField: TextField.Input,
  },
  {
    Lable: "Contact Number",
    type: "input",
    placeHolder: "Enter your Contact Number",
    size: "3",
    TextField: TextField.Input,
  },
  {
    Lable: "Current Institution/University",
    type: "input",
    placeHolder: "Enter your Current Institution/University",
    size: "3",
    TextField: TextField.Input,
  },
  {
    Lable: "Education / Degree and Major",
    type: "input",
    placeHolder: "Enter your Education / Degree and Major",
    size: "3",
    TextField: TextField.Input,
  },
  {
    Lable: "Expected Graduation Year",
    type: "input",
    placeHolder: "Enter your Expected Graduation Year",
    size: "3",
    TextField: TextField.Input,
  },

  {
    Lable: "Any previous experience in software development or related fields?",
    type: "input",
    placeHolder: "Select your experience",
    size: "3",
    child: (
      <RadioGroup.Root defaultValue="2">
        <Flex gap="3" direction="column">
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item value="1" /> Yes
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item value="2" /> No
            </Flex>
          </Text>
        </Flex>
      </RadioGroup.Root>
    ),
  },
  {
    Lable: "List programming languages you are familiar with.",
    type: "input",
    placeHolder: "Enter your Full Name",
    size: "3",
    child: (
      <Flex direction="column" gap="3">
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox size="1" defaultChecked /> none
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox size="1" /> HTML
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox size="1" /> CSS
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox size="1" /> Javascript
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox size="1" /> React
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox size="1" /> Angular
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox size="1" /> Node
          </Flex>
        </Text>
        <TextField.Input placeholder="Other.." size="3" />
      </Flex>
    ),
  },

  {
    Lable: "Are you familiar with front-end or back-end development?",
    type: "input",
    placeHolder: "Select your experience",
    size: "3",
    child: (
      <RadioGroup.Root defaultValue="2">
        <Flex gap="3" direction="column">
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item value="1" /> Yes
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item value="2" /> No
            </Flex>
          </Text>
        </Flex>
      </RadioGroup.Root>
    ),
  },

  {
    Lable: "How many hours per week can you commit to the internship?",
    type: "input",
    placeHolder: "Enter your Expected Graduation Year",
    size: "3",
    TextField: TextField.Input,
  },
  {
    Lable: "Specify your preferred time slots for the internship.",
    type: "input",
    placeHolder: "Enter your Expected Graduation Year",
    size: "3",
    TextField: TextField.Input,
  },
  {
    Lable:
      "Why are you interested in the Full-Stack Development Internship Program?",
    type: "input",
    placeHolder: "Enter your Expected Graduation Year",
    size: "3",
    TextField: TextField.Input,
  },
  {
    Lable:
      "What specific skills or knowledge do you hope to gain from this internship?",
    type: "input",
    placeHolder: "Enter your Expected Graduation Year",
    size: "3",
    TextField: TextField.Input,
  },
  {
    Lable:
      "Have you worked on any coding projects? If so, briefly describe them.",
    type: "input",
    placeHolder: "Enter your Expected Graduation Year",
    size: "3",
    TextField: TextField.Input,
  },
  {
    Lable: "Is there anything else you would like us to know about you?",
    type: "input",
    placeHolder: "Enter your Expected Graduation Year",
    size: "3",
    TextField: TextField.Input,
  },
];

const page = () => {
  return (
    <Theme appearance="dark">
      <section id="internshipFormMain">
        <div className="internship-form-container">
          <Card>
            <Flex direction="column" gap="3">
              {inputElements.map((iE, i) => (
                <div key={i} className="formElement">
                  <Text size="3" className="lable">
                    {iE.Lable}
                  </Text>
                  {iE.TextField && (
                    <iE.TextField placeholder={iE.placeHolder} size={iE.size} />
                  )}
                  {iE.child && iE.child}
                </div>
              ))}
              <Button>Apply</Button>
            </Flex>
          </Card>
        </div>
      </section>
    </Theme>
  );
};

export default page;

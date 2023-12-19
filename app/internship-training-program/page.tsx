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
import { ChangeEvent, FormEvent, useState } from "react";

const inputElements: Array<{
  Lable: string;
  type: string;
  placeHolder: string;
  TextField?: typeof TextField.Input;
  size: Responsive<"3" | "2" | "1"> | undefined;
  child?: ({ name, Function }: { name: string; Function: any }) => JSX.Element;
  name: string;
}> = [
  {
    Lable: "Full Name:",
    type: "input",
    placeHolder: "Enter your Full Name",
    size: "3",
    TextField: TextField.Input,
    name: "entry.2059636522",
  },
  {
    Lable: "Contact Number",
    type: "input",
    placeHolder: "Enter your Contact Number",
    size: "3",
    TextField: TextField.Input,
    name: "entry.1213609955",
  },
  {
    Lable: "Current Institution/University",
    type: "input",
    placeHolder: "Enter your Current Institution/University",
    size: "3",
    TextField: TextField.Input,
    name: "entry.197399352",
  },
  {
    Lable: "Education / Degree and Major",
    type: "input",
    placeHolder: "Enter your Education / Degree and Major",
    size: "3",
    TextField: TextField.Input,
    name: "entry.915614454",
  },
  {
    Lable: "Expected Graduation Year",
    type: "input",
    placeHolder: "Enter your Expected Graduation Year",
    size: "3",
    TextField: TextField.Input,
    name: "entry.1108857489",
  },

  {
    Lable: "Any previous experience in software development or related fields?",
    type: "input",
    placeHolder: "Select your experience",
    size: "3",
    name: "entry.1810284299",
    child: () => (
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
    child: (props) => (
      <Flex direction="column" gap="3">
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox
              size="1"
              onClick={(e) => {
                props.Function((s: any) => {
                  // console.log(s[props.name]);
                  if (s[props.name].indexOf("None") != -1) {
                    // console.log("sex");
                    return {
                      ...s,
                      [props.name]: [
                        ...s[props.name].filter((v: any) => v != "None"),
                      ],
                    };
                  }
                  return { ...s, [props.name]: [...s[props.name], "None"] };
                });
              }}
            />{" "}
            none
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox
              size="1"
              onClick={(e) => {
                props.Function((s: any) => {
                  // console.log(s[props.name]);
                  if (s[props.name].indexOf("HTML") != -1) {
                    // console.log("sex");
                    return {
                      ...s,
                      [props.name]: [
                        ...s[props.name].filter((v: any) => v != "HTML"),
                      ],
                    };
                  }
                  return { ...s, [props.name]: [...s[props.name], "HTML"] };
                });
              }}
            />{" "}
            HTML
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox
              size="1"
              onClick={(e) => {
                props.Function((s: any) => {
                  // console.log(s[props.name]);
                  if (s[props.name].indexOf("CSS") != -1) {
                    // console.log("sex");
                    return {
                      ...s,
                      [props.name]: [
                        ...s[props.name].filter((v: any) => v != "CSS"),
                      ],
                    };
                  }
                  return { ...s, [props.name]: [...s[props.name], "CSS"] };
                });
              }}
            />{" "}
            CSS
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox
              size="1"
              onClick={(e) => {
                props.Function((s: any) => {
                  // console.log(s[props.name]);
                  if (s[props.name].indexOf("Javascript") != -1) {
                    // console.log("sex");
                    return {
                      ...s,
                      [props.name]: [
                        ...s[props.name].filter((v: any) => v != "Javascript"),
                      ],
                    };
                  }
                  return {
                    ...s,
                    [props.name]: [...s[props.name], "Javascript"],
                  };
                });
              }}
            />{" "}
            Javascript
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox
              size="1"
              onClick={(e) => {
                props.Function((s: any) => {
                  // console.log(s[props.name]);
                  if (s[props.name].indexOf("React") != -1) {
                    // console.log("sex");
                    return {
                      ...s,
                      [props.name]: [
                        ...s[props.name].filter((v: any) => v != "React"),
                      ],
                    };
                  }
                  return { ...s, [props.name]: [...s[props.name], "React"] };
                });
              }}
            />{" "}
            React
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox
              size="1"
              onClick={(e) => {
                props.Function((s: any) => {
                  // console.log(s[props.name]);
                  if (s[props.name].indexOf("Angular") != -1) {
                    // console.log("sex");
                    return {
                      ...s,
                      [props.name]: [
                        ...s[props.name].filter((v: any) => v != "Angular"),
                      ],
                    };
                  }
                  return { ...s, [props.name]: [...s[props.name], "Angular"] };
                });
              }}
            />{" "}
            Angular
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox
              size="1"
              onClick={(e) => {
                props.Function((s: any) => {
                  // console.log(s[props.name]);
                  if (s[props.name].indexOf("Node") != -1) {
                    // console.log("sex");
                    return {
                      ...s,
                      [props.name]: [
                        ...s[props.name].filter((v: any) => v != "Node"),
                      ],
                    };
                  }
                  return { ...s, [props.name]: [...s[props.name], "Node"] };
                });
              }}
            />{" "}
            Node
          </Flex>
        </Text>
        <TextField.Input
          placeholder="Other.."
          onChange={(e) => {
            props.Function((s: any) => {
              // console.log(s[props.name]);
              // if (s[props.name].indexOf(e.target.value) != -1) {
              //   // console.log("sex");
              //   return {
              //     ...s,
              //     [props.name]: [
              //       ...s[props.name].filter((v: any) => v != e.target.value),
              //     ],
              //   };
              // }
              return { ...s, [props.name]: [...s[props.name], e.target.value] };
            });
          }}
          size="3"
        />
      </Flex>
    ),
    name: "entry.1128007592",
  },

  {
    Lable: "Are you familiar with front-end or back-end development?",
    type: "input",
    placeHolder: "Select your experience",
    size: "3",
    child: (props) => (
      <RadioGroup.Root defaultValue="2">
        <Flex gap="3" direction="column">
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item
                onClick={() =>
                  props.Function((s: any) => ({ ...s, [props.name]: "Yes" }))
                }
                value="1"
              />{" "}
              Yes
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item
                onClick={() =>
                  props.Function((s: any) => ({ ...s, [props.name]: "No" }))
                }
                value="2"
              />{" "}
              No
            </Flex>
          </Text>
        </Flex>
      </RadioGroup.Root>
    ),
    name: "entry.1054318809",
  },

  {
    Lable: "How many hours per week can you commit to the internship?",
    type: "input",
    placeHolder: "Enter Hours",
    size: "3",
    TextField: TextField.Input,
    name: "entry.1651366155",
  },
  {
    Lable: "Specify your preferred time slots for the internship.",
    type: "input",
    placeHolder: "Enter time slot",
    size: "3",
    TextField: TextField.Input,
    name: "entry.1384696040",
  },
  {
    Lable:
      "Why are you interested in the Full-Stack Development Internship Program?",
    type: "input",
    placeHolder: "Enter your interest",
    size: "3",
    TextField: TextField.Input,
    name: "entry.391308544",
  },
  {
    Lable:
      "What specific skills or knowledge do you hope to gain from this internship?",
    type: "input",
    placeHolder: "Enter your skills",
    size: "3",
    TextField: TextField.Input,
    name: "entry.1848413988",
  },
  {
    Lable:
      "Have you worked on any coding projects? If so, briefly describe them.",
    type: "input",
    placeHolder: "Enter your projects",
    size: "3",
    TextField: TextField.Input,
    name: "entry.599463602",
  },
  {
    Lable: "Is there anything else you would like us to know about you?",
    type: "input",
    placeHolder: "Enter your hear",
    size: "3",
    TextField: TextField.Input,
    name: "entry.766134268",
  },
];

const url =
  "https://docs.google.com/forms/u/1/d/e/1FAIpQLSc9DNU-uqKxuv5AipTyQ_F6LimcW9p0fBCo_D9vcJPodJFJNg/formResponse";
const page = () => {
  const [fData, setFData] = useState({
    "entry.2059636522": "",
    "entry.1213609955": "",
    "entry.197399352": "",
    "entry.915614454": "",
    "entry.1108857489": "",
    "entry.1810284299": "",
    "entry.1128007592": [],
    "entry.1054318809": "",
    "entry.1651366155": "",
    "entry.1384696040": "",
    "entry.391308544": "",
    "entry.1848413988": "",
    "entry.599463602": "",
    "entry.766134268": "",
  });
  console.log(fData);

  const SubmitHandel = (e: FormEvent<HTMLFormElement>) => {};
  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {};
  return (
    <Theme appearance="dark">
      <section id="internshipFormMain">
        <div className="internship-form-container">
          <Card>
            <form onSubmit={SubmitHandel}>
              <h3>Internship Training Program</h3>
              <Flex direction="column" gap="3">
                {inputElements.map((iE, i) => (
                  <div key={i} className="formElement">
                    <Text size="3" className="label">
                      {iE.Lable}
                    </Text>
                    {iE.TextField && (
                      <iE.TextField
                        onChange={(e) => e}
                        placeholder={iE.placeHolder}
                        size={iE.size}
                      />
                    )}
                    {iE.child && (
                      <iE.child Function={setFData} name={iE.name} />
                    )}
                  </div>
                ))}
                <Button>Apply</Button>
              </Flex>
            </form>
          </Card>
        </div>
      </section>
    </Theme>
  );
};

export default page;

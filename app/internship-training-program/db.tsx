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

type elements = {
  Lable: string;
  type: string;
  placeHolder: string;
  TextField?: typeof TextField.Input;
  size: Responsive<"3" | "2" | "1"> | undefined;
  name: string;
  required: boolean;
  child?: JSX.Element;
  RadioGroupOne?: typeof RadioGroup.Root;
  RadioGroupTwo?: typeof RadioGroup.Root;
  checkBox?: typeof Checkbox;
};

export const inputElements: Array<elements> = [
  {
    Lable: "Full Name:",
    type: "input",
    placeHolder: "Enter your Full Name",
    size: "3",
    TextField: TextField.Input,
    name: "name",
    required: true,
  },
  {
    Lable: "Contact Number",
    type: "input",
    placeHolder: "Enter your Contact Number",
    size: "3",
    TextField: TextField.Input,
    name: "contactNumber",
    required: true,
  },
  {
    Lable: "Current Institution/University",
    type: "input",
    placeHolder: "Enter your Current Institution/University",
    size: "3",
    TextField: TextField.Input,
    name: "currentInstitutionUniversity",
    required: false,
  },
  {
    Lable: "Education / Degree and Major",
    type: "input",
    placeHolder: "Enter your Education / Degree and Major",
    size: "3",
    TextField: TextField.Input,
    name: "educationDegreeAndMajor",
    required: false,
  },
  {
    Lable: "Expected Graduation Year",
    type: "input",
    placeHolder: "Enter your Expected Graduation Year",
    size: "3",
    TextField: TextField.Input,
    name: "expectedGraduationYear",
    required: false,
  },
  {
    Lable: "Any previous experience in software development or related fields?",
    type: "input",
    placeHolder: "Select your experience",
    size: "3",
    name: "experience",
    required: true,
    RadioGroupOne: RadioGroup.Root,
  },
  {
    Lable: "List programming languages you are familiar with.",
    type: "input",
    placeHolder: "Select your programming languages",
    size: "3",
    name: "programming_languages",
    required: true,
    checkBox: Checkbox,
  },
  {
    Lable: "Are you familiar with front-end or back-end development?",
    type: "input",
    placeHolder: "Select your experience",
    size: "3",
    name: "scope",
    required: true,
    RadioGroupTwo: RadioGroup.Root,
  },
  {
    Lable: "How many hours per week can you commit to the internship?",
    type: "input",
    placeHolder: "Enter Hours",
    size: "3",
    TextField: TextField.Input,
    name: "hourOfWeek",
    required: true,
  },
  {
    Lable: "Specify your preferred time slots for the internship.",
    type: "input",
    placeHolder: "Enter time slot",
    size: "3",
    TextField: TextField.Input,
    name: "timeSlot",
    required: true,
  },
  {
    Lable:
      "Why are you interested in the Full-Stack Development Internship Program?",
    type: "input",
    placeHolder: "Enter your interest",
    size: "3",
    TextField: TextField.Input,
    name: "intrusted",
    required: true,
  },
  {
    Lable:
      "What specific skills or knowledge do you hope to gain from this internship?",
    type: "input",
    placeHolder: "Enter your skills",
    size: "3",
    TextField: TextField.Input,
    name: "skills",
    required: true,
  },
  {
    Lable:
      "Have you worked on any coding projects? If so, briefly describe them.",
    type: "input",
    placeHolder: "Enter your projects",
    size: "3",
    TextField: TextField.Input,
    name: "project",
    required: false,
  },
  {
    Lable: "Is there anything else you would like us to know about you?",
    type: "input",
    placeHolder: "Enter hear",
    size: "3",
    TextField: TextField.Input,
    name: "aboutYou",
    required: false,
  },
];

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
import { KeyboardEvent } from "react";

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
  inputMode?:
    | "search"
    | "text"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | undefined;
  pattern?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyDownHr?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export const inputElements: Array<elements> = [
  {
    Lable: "Full Name:*",
    type: "input",
    placeHolder: "Enter your Full Name",
    size: "3",
    TextField: TextField.Input,
    name: "name",
    required: true,
  },
  {
    Lable: "Contact Number (with country code):*",
    type: "input",
    placeHolder: "start with +91",
    size: "3",
    TextField: TextField.Input,
    name: "contactNumber",
    required: true,
    inputMode: "tel",
    pattern: "+[0-9]*",
    onKeyDown: (e) => {
      const isNumeric = /^[0-9]$/;
      const isArrowKey = [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
      ].includes(e.key);
      const isShiftKey = e.key === "Shift";
      const isBackspace = e.key === "Backspace" || e.key === "Delete";

      if (!(isNumeric.test(e.key) || isArrowKey || isShiftKey || isBackspace)) {
        e.preventDefault();
      }
    },
  },
  {
    Lable: "Email:*",
    type: "email",
    placeHolder: "Enter your Email Address",
    size: "3",
    TextField: TextField.Input,
    name: "email",
    required: true,
  },
  {
    Lable: "Current Institution/University:",
    type: "input",
    placeHolder: "Enter your Current Institution/University",
    size: "3",
    TextField: TextField.Input,
    name: "currentInstitutionUniversity",
    required: false,
  },
  {
    Lable: "Education / Degree and Major:",
    type: "input",
    placeHolder: "Enter your Education / Degree and Major",
    size: "3",
    TextField: TextField.Input,
    name: "educationDegreeAndMajor",
    required: false,
  },
  {
    Lable: "Expected Graduation Year:",
    type: "input",
    placeHolder: "Enter your Expected Graduation Year",
    size: "3",
    TextField: TextField.Input,
    name: "expectedGraduationYear",
    required: false,
  },
  {
    Lable:
      "Any previous experience in software development or related fields?*",
    type: "input",
    placeHolder: "Select your experience",
    size: "3",
    name: "experience",
    required: true,
    RadioGroupOne: RadioGroup.Root,
  },
  {
    Lable: "List programming languages you are familiar with:*",
    type: "input",
    placeHolder: "Select your programming languages",
    size: "3",
    name: "programming_languages",
    required: true,
    checkBox: Checkbox,
  },
  {
    Lable: "Are you familiar with front-end or back-end development?*",
    type: "input",
    placeHolder: "Select your experience",
    size: "3",
    name: "scope",
    required: true,
    RadioGroupTwo: RadioGroup.Root,
  },

  {
    Lable:
      "Why are you interested in the Full-Stack Development Internship Program?*",
    type: "input",
    placeHolder: "short answer",
    size: "3",
    TextField: TextField.Input,
    name: "intrusted",
    required: true,
  },
  {
    Lable:
      "What specific skills or knowledge do you hope to gain from this internship?*",
    type: "input",
    placeHolder: "short answer",
    size: "3",
    TextField: TextField.Input,
    name: "skills",
    required: true,
  },
  {
    Lable:
      "Have you worked on any coding projects? If so, briefly describe them:",
    type: "input",
    placeHolder: "Enter your projects",
    size: "3",
    TextField: TextField.Input,
    name: "project",
    required: false,
  },
  {
    Lable: "Is there anything else you would like us to know about you?*",
    type: "input",
    placeHolder: "short answer",
    size: "3",
    TextField: TextField.Input,
    name: "aboutYou",
    required: false,
  },
];

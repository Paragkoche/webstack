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

import { inputElements } from "./db";
import { useState, ChangeEvent, useEffect } from "react";

type FormData = {
  [key: string]: string | number | boolean | undefined;
};

const page = () => {
  const [formData, setFormData] = useState<FormData>({
    ["experience"]: false,
    ["scope"]: false,
  });

  const handleInputChange = (
    name: string,
    value: string | number | boolean | undefined
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formData", formData);
  };

  return (
    <Theme appearance="dark">
      <section id="internshipFormMain">
        <div className="internship-form-container">
          <Card>
            <form onSubmit={handleFormSubmit}>
              <h3>Internship Training Program</h3>
              <Flex direction="column" gap="3">
                {inputElements.map((iE, i) => (
                  <div key={i} className="formElement">
                    <Text size="3" className="label">
                      {iE.Lable}
                    </Text>
                    {iE.TextField && (
                      <iE.TextField
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleInputChange(iE.name, e.target.value)
                        }
                        placeholder={iE.placeHolder}
                        required={iE.required}
                        size={iE.size}
                      />
                    )}
                    {iE.RadioGroupOne && (
                      <RadioGroup.Root
                        defaultValue="no"
                        required={iE.required}
                        onValueChange={(value: string) => {
                          if (value === "yes") {
                            handleInputChange(iE.name, true);
                          } else handleInputChange(iE.name, false);
                        }}
                      >
                        <Flex gap="3" direction="column">
                          <Text as="label" size="2">
                            <Flex gap="2">
                              <RadioGroup.Item value="yes" />
                              Yes
                            </Flex>
                          </Text>
                          <Text as="label" size="2">
                            <Flex gap="2">
                              <RadioGroup.Item value="no" /> No
                            </Flex>
                          </Text>
                        </Flex>
                      </RadioGroup.Root>
                    )}
                    {iE.checkBox && (
                      <Flex direction="column" gap="3">
                        <Text as="label" size="2">
                          <Flex gap="2">
                            <Checkbox size="1" />
                            none
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
                    )}
                    {iE.RadioGroupTwo && (
                      <RadioGroup.Root
                        defaultValue="no"
                        required={iE.required}
                        onValueChange={(value: string) => {
                          if (value === "yes") {
                            handleInputChange(iE.name, true);
                          } else handleInputChange(iE.name, false);
                        }}
                      >
                        <Flex gap="3" direction="column">
                          <Text as="label" size="2">
                            <Flex gap="2">
                              <RadioGroup.Item value="yes" />
                              Yes
                            </Flex>
                          </Text>
                          <Text as="label" size="2">
                            <Flex gap="2">
                              <RadioGroup.Item value="no" /> No
                            </Flex>
                          </Text>
                        </Flex>
                      </RadioGroup.Root>
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

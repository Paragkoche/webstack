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
  [key: string]: string | number | boolean | undefined | string[];
};

type checkBox = string[];

const page = () => {
  const [formData, setFormData] = useState<FormData>({
    ["experience"]: false,
    ["scope"]: false,
  });

  const [checkBox, setCheckBox] = useState<checkBox>([]);
  const [isNone, setIsNone] = useState<boolean>(true);
  const [other, setOther] = useState<string>("");

  const handleInputChange = (
    name: string,
    value: string | number | boolean | undefined
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckBox = (name: string, value: boolean | string) => {
    if (value) {
      setCheckBox((prevData) => [...prevData, name]);
    } else {
      if (checkBox.indexOf(name) !== -1) {
        setCheckBox((prevData) => prevData.filter((value) => value !== name));
      }
    }
  };
  //console.log("checkBox", checkBox);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCheckBox((prevData) => [...prevData, other]);

    setFormData((prevData) => ({
      ...prevData,
      programming_languages: new Array(...new Set(checkBox)),
    }));

    console.log("formData", formData);
  };

  //console.log("isNone", isNone);

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
                        <Text as="label" size="2" className="checkbox">
                          <Flex gap="2">
                            <Checkbox
                              size="1"
                              defaultChecked
                              checked={isNone}
                              onCheckedChange={(checked) => {
                                handleCheckBox("none", checked);
                                setIsNone(!isNone);
                                setCheckBox([]);
                              }}
                            />
                            none
                          </Flex>
                        </Text>
                        <Text
                          as="label"
                          size="2"
                          htmlFor="HTML"
                          className="checkbox"
                          onClick={() => {
                            setIsNone(false);
                          }}
                        >
                          <Flex gap="2">
                            <Checkbox
                              size="1"
                              disabled={isNone}
                              checked={checkBox.indexOf("HTML") !== -1}
                              onCheckedChange={(checked) => {
                                handleCheckBox("HTML", checked);
                              }}
                              id="HTML"
                            />
                            HTML
                          </Flex>
                        </Text>
                        <Text as="label" size="2" className="checkbox">
                          <Flex gap="2">
                            <Checkbox
                              size="1"
                              disabled={isNone}
                              checked={checkBox.indexOf("CSS") !== -1}
                              onCheckedChange={(checked) => {
                                handleCheckBox("CSS", checked);
                              }}
                            />
                            CSS
                          </Flex>
                        </Text>
                        <Text as="label" size="2" className="checkbox">
                          <Flex gap="2">
                            <Checkbox
                              size="1"
                              checked={checkBox.indexOf("Javascript") !== -1}
                              disabled={isNone}
                              onCheckedChange={(checked) => {
                                handleCheckBox("Javascript", checked);
                              }}
                            />
                            Javascript
                          </Flex>
                        </Text>
                        <Text as="label" size="2" className="checkbox">
                          <Flex gap="2">
                            <Checkbox
                              size="1"
                              checked={checkBox.indexOf("React") !== -1}
                              disabled={isNone}
                              onCheckedChange={(checked) => {
                                handleCheckBox("React", checked);
                              }}
                            />
                            React
                          </Flex>
                        </Text>
                        <Text as="label" size="2" className="checkbox">
                          <Flex gap="2">
                            <Checkbox
                              size="1"
                              checked={checkBox.indexOf("Angular") !== -1}
                              disabled={isNone}
                              onCheckedChange={(checked) => {
                                handleCheckBox("Angular", checked);
                              }}
                            />
                            Angular
                          </Flex>
                        </Text>
                        <Text as="label" size="2" className="checkbox">
                          <Flex gap="2">
                            <Checkbox
                              size="1"
                              checked={checkBox.indexOf("Node") !== -1}
                              disabled={isNone}
                              onCheckedChange={(checked) => {
                                handleCheckBox("Node", checked);
                              }}
                            />
                            Node
                          </Flex>
                        </Text>
                        <TextField.Input
                          disabled={isNone}
                          placeholder="Other.."
                          size="3"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setOther(e.target.value)
                          }
                        />
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

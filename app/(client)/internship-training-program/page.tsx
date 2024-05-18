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
  RadioGroup,
  Checkbox,
  AlertDialog,
} from "@radix-ui/themes";

import { inputElements } from "./db";
import { useState, ChangeEvent, useEffect } from "react";
import { addData } from "@/supabase/addData";
import { useRouter } from "next/navigation";
import Dialogue from "@/components/form/Dialogue";

type FormData = {
  [key: string]: string | number | boolean | undefined | string[];
};

const page = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData | any>({
    ["experience"]: false,
    ["scope"]: false,
    programming_languages: [],
  });

  const [isNone, setIsNone] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);

  const handleInputChange = (
    name: string,
    value: string | number | boolean | undefined
  ) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckBox = (name: string, value: boolean | string) => {
    if (value) {
      setFormData((prevData: any) => ({
        ...prevData,
        programming_languages: [...prevData["programming_languages"], name],
      }));
    } else {
      if (formData.programming_languages.indexOf(name) !== -1) {
        setFormData((prevData: any) => ({
          ...prevData,
          programming_languages: prevData["programming_languages"].filter(
            (value: any) => value !== name
          ),
        }));
      }
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addData(formData)
      .then((ss: any) => {
        if (ss instanceof Error) {
          alert(ss.message);
        } else {
          if (ss.error) {
            alert(
              "An application has previously been submitted using this email address"
            );
          } else {
            console.log(ss);
            console.log("formData --->>>>", formData);
            setSuccess(true);
          }
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <Theme appearance="dark">
      <section id="internshipFormMain">
        <div className="internship-form-container">
          <Card>
            <AlertDialog.Root open={success}>
              <AlertDialog.Content style={{ maxWidth: 450 }}>
                <AlertDialog.Title>
                  Form Sublited Successfully!
                </AlertDialog.Title>
                <AlertDialog.Description size="3">
                  Thank you for your interest.
                </AlertDialog.Description>
                <AlertDialog.Description size="2">
                  We will call or email you as soon as possible.
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                  <AlertDialog.Cancel>
                    <Button
                      variant="soft"
                      color="gray"
                      onClick={() => {
                        setSuccess(false);
                        router.back();
                      }}
                    >
                      Cancel
                    </Button>
                  </AlertDialog.Cancel>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>

            <form onSubmit={handleFormSubmit}>
              <Flex direction="column" gap="1" className="form-title">
                <h3>Internship Training Program</h3>
                <Text className="title-desc">
                  Are you ready to embark on an exciting journey into the world
                  of web development? Look no further!
                </Text>
                <Dialogue />
              </Flex>

              <Flex direction="column" gap="3">
                {inputElements.map((iE, i) => (
                  <div key={i} className="formElement">
                    <Text size="3" className="label">
                      {iE.Lable}
                    </Text>
                    {iE.TextField && (
                      <iE.TextField
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          const Numvalue = e.target.value
                            .replace(/[^0-9]/g, "")
                            .slice(0, 12);
                          handleInputChange(
                            iE.name,
                            iE.onKeyDown ? `+${Numvalue}` : e.target.value
                          );
                        }}
                        value={
                          iE.onKeyDown
                            ? formData.contactNumber || "+"
                            : undefined
                        }
                        type={iE.type}
                        inputMode={iE.inputMode}
                        pattern={iE.pattern}
                        onKeyDown={iE.onKeyDown}
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
                                setFormData((prevData: any) => ({
                                  ...prevData,
                                  programming_languages: [],
                                }));
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
                              checked={
                                formData.programming_languages.indexOf(
                                  "HTML"
                                ) !== -1
                              }
                              onCheckedChange={(checked) => {
                                handleCheckBox("HTML", checked);
                              }}
                              id="HTML"
                            />
                            HTML
                          </Flex>
                        </Text>
                        <Text
                          as="label"
                          size="2"
                          className="checkbox"
                          onClick={() => {
                            setIsNone(false);
                          }}
                        >
                          <Flex gap="2">
                            <Checkbox
                              size="1"
                              disabled={isNone}
                              checked={
                                formData.programming_languages.indexOf(
                                  "CSS"
                                ) !== -1
                              }
                              onCheckedChange={(checked) => {
                                handleCheckBox("CSS", checked);
                              }}
                            />
                            CSS
                          </Flex>
                        </Text>
                        <Text
                          as="label"
                          size="2"
                          className="checkbox"
                          onClick={() => {
                            setIsNone(false);
                          }}
                        >
                          <Flex gap="2">
                            <Checkbox
                              size="1"
                              checked={
                                formData.programming_languages.indexOf(
                                  "Javascript"
                                ) !== -1
                              }
                              disabled={isNone}
                              onCheckedChange={(checked) => {
                                handleCheckBox("Javascript", checked);
                              }}
                            />
                            Javascript
                          </Flex>
                        </Text>
                        <Text
                          as="label"
                          size="2"
                          className="checkbox"
                          onClick={() => {
                            setIsNone(false);
                          }}
                        >
                          <Flex gap="2">
                            <Checkbox
                              size="1"
                              checked={
                                formData.programming_languages.indexOf(
                                  "React"
                                ) !== -1
                              }
                              disabled={isNone}
                              onCheckedChange={(checked) => {
                                handleCheckBox("React", checked);
                              }}
                            />
                            React
                          </Flex>
                        </Text>
                        <Text
                          as="label"
                          size="2"
                          className="checkbox"
                          onClick={() => {
                            setIsNone(false);
                          }}
                        >
                          <Flex gap="2">
                            <Checkbox
                              size="1"
                              checked={
                                formData.programming_languages.indexOf(
                                  "Angular"
                                ) !== -1
                              }
                              disabled={isNone}
                              onCheckedChange={(checked) => {
                                handleCheckBox("Angular", checked);
                              }}
                            />
                            Angular
                          </Flex>
                        </Text>
                        <Text
                          as="label"
                          size="2"
                          className="checkbox"
                          onClick={() => {
                            setIsNone(false);
                          }}
                        >
                          <Flex gap="2">
                            <Checkbox
                              size="1"
                              checked={
                                formData.programming_languages.indexOf(
                                  "Node"
                                ) !== -1
                              }
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
                            setFormData((prevData: any) => ({
                              ...prevData,
                              programming_languages_other: e.target.value,
                            }))
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
                <Button color="crimson" variant="solid" size="3">
                  Apply
                </Button>
              </Flex>
            </form>
          </Card>
        </div>
      </section>
    </Theme>
  );
};

export default page;

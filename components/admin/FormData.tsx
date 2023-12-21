import { Table, Theme } from "@radix-ui/themes";
import React from "react";
import "@radix-ui/themes/styles.css";
import { getData } from "@/supabase/addData";

type DATA = {
  id: string;
  created_at: string;
  name: string;
  contactNumber: string;
  email: string;
  currentInstitutionUniversity: string;
  EducationDegreeAndMajor: string;
  ExpectedGraduationYear: string;
  experience: boolean;
  programming_languages: string[];
  programming_languages_other: string;
  scope: string;
  intrusted: string;
  skills: string;
  project: string;
  aboutYou: string;
};

const FormData = async () => {
  const formData: any = await getData();
  const listData: Array<DATA> = formData.data;

  //console.log("Data ===>", listData);

  function formatDateTime(dateTimeString: any) {
    const date = new Date(dateTimeString);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const formattedDate = date.toLocaleDateString("en-GB", options);
    return formattedDate;
  }

  function getRowColor(created_at: string) {
    const currentDate = new Date();
    const orderDate = new Date(created_at);
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);

    if (orderDate >= oneDayAgo && orderDate <= currentDate) {
      return "blue";
    } else if (orderDate >= oneWeekAgo && orderDate <= currentDate) {
      return "green";
    } else if (orderDate > currentDate) {
      return "white";
    } else {
      return "";
    }
  }

  let serialNumber = 1;

  return (
    <Theme appearance="dark">
      <div className="container">
        <h3>Internship FormData</h3>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Sr. no.</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Mob. No.</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>College</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Education</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Graduation Year</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Experience</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Languages</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Other</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Familiar</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Why interested</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Gain skills</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Coding projects</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>About</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Time</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {listData.map((data, i) => (
              <Table.Row key={i} className={getRowColor(data.created_at)}>
                <Table.Cell>{serialNumber++}</Table.Cell>
                <Table.RowHeaderCell>{data.name}</Table.RowHeaderCell>
                <Table.Cell>{data.contactNumber}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>{data.currentInstitutionUniversity}</Table.Cell>
                <Table.Cell>{data.EducationDegreeAndMajor}</Table.Cell>
                <Table.Cell>{data.ExpectedGraduationYear}</Table.Cell>
                <Table.Cell>{data.experience.toString()}</Table.Cell>
                <Table.Cell>{data.programming_languages.join(", ")}</Table.Cell>
                <Table.Cell>{data.programming_languages_other}</Table.Cell>
                <Table.Cell>{data.scope}</Table.Cell>
                <Table.Cell>{data.intrusted}</Table.Cell>
                <Table.Cell>{data.skills}</Table.Cell>
                <Table.Cell>{data.project}</Table.Cell>
                <Table.Cell>{data.aboutYou}</Table.Cell>
                <Table.Cell>{formatDateTime(data.created_at)}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </Theme>
  );
};

export default FormData;

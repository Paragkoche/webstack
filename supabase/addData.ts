import { supabase } from "./client";

export const addData = async (data: any) => {
  const {
    name,
    contactNumber,
    hoursOfWeek,
    timeSlot,
  }: { [x in string]: string } = data;

  console.log("Data", data);

  if (name == "") return new Error("[error] please enter valid name");
  if (contactNumber == "")
    return new Error("[error] please enter Contact Number");
  if (contactNumber != "") {
    if (!contactNumber.startsWith("+"))
      return new Error(
        "[error] please enter valid Contact Number with country code"
      );
  }
  if (hoursOfWeek == "")
    return new Error(
      "[error] please enter: how many hours per week can you commit to the internship?"
    );
  if (hoursOfWeek != "") {
    if (parseInt(hoursOfWeek) > 0) {
      return new Error("[error] 0 hours is not valid");
    }
    if (parseInt(hoursOfWeek) < 168) {
      return new Error("[error] 1 - 168 hours is not valid");
    }
  }
  if (timeSlot == "")
    return new Error(
      "[error] please enter your preferred time slots for the internship."
    );
  return await supabase.from("entrys").insert(data);
};

export const getData = async () => await supabase.from("entrys").select("*");

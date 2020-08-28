import { Student } from "./Models/StudentModel";
import moment from "moment";

export interface AddSudentFormValues {
    firstName: string;
    surname: string;
    isRetired: boolean;
    parentName: string;
    email: string;
    phone: string;
    mobile: string;
    instrument: string;
    grade: number;
    dateOfBirth: moment.Moment;
}

export default function toStudent(values: AddSudentFormValues): Student {
    const student: Student = {
        key: "",
        Id: "",
        FirstName: values.firstName,
        Surname: values.surname,
        IsRetired: values.isRetired ? true : false,
        ParentName: values.parentName,
        Email: values.email,
        Phone: values.phone,
        Mobile: values.mobile,
        Instrument: values.instrument,
        Grade: values.grade,
        DateOfBirth: moment(values.dateOfBirth).toISOString()
    };

    return student;
}
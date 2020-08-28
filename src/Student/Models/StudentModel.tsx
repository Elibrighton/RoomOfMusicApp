import moment from 'moment';

export type Student = {
    key: string,
    Id: string;
    FirstName: string;
    Surname: string;
    IsRetired: boolean;
    ParentName: string;
    Email: string;
    Phone: string;
    Mobile: string;
    Instrument: string;
    Grade: number;
    DateOfBirth: string;
}

export type StudentDto = {
    Id: string;
    FirstName: string;
    Surname: string;
    IsRetired: string;
    ParentName: string;
    Email: string;
    Phone: string;
    Mobile: string;
    Instrument: string;
    Grade: number;
    DateOfBirth: string;
}

export default function updateFromDto(studentDto: StudentDto): Student {
    const student: Student = {
        key: studentDto.Id,
        Id: studentDto.Id,
        FirstName: studentDto.FirstName,
        Surname: studentDto.Surname,
        IsRetired: studentDto.IsRetired ? true : false,
        ParentName: studentDto.ParentName,
        Email: studentDto.Email,
        Phone: studentDto.Phone,
        Mobile: studentDto.Mobile,
        Instrument: studentDto.Instrument,
        Grade: studentDto.Grade,
        DateOfBirth: moment(studentDto.DateOfBirth, "YYYY-MM-DD").format("DD/MM/YYYY")
    };

    return student;
}

export function toDto(student: Student): StudentDto {
    const studentDto: StudentDto = {
        Id: student.Id,
        FirstName: student.FirstName,
        Surname: student.Surname,
        IsRetired: student.IsRetired ? "true" : "false",
        ParentName: student.ParentName,
        Email: student.Email,
        Phone: student.Phone,
        Mobile: student.Mobile,
        Instrument: student.Instrument,
        Grade: student.Grade,
        DateOfBirth: student.DateOfBirth
    };

    return studentDto;
}
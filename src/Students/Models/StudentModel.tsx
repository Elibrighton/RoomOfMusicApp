import moment from 'moment';

export type Student = {
    key: string,
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

export type StudentDto = {
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
    DateOfBirth: Date;
}

export default function updateFromDto(studentDto: StudentDto): Student {
    const student: Student = {
        key: studentDto.Id,
        Id: studentDto.Id,
        FirstName: studentDto.FirstName,
        Surname: studentDto.Surname,
        IsRetired: studentDto.IsRetired.toString(),
        ParentName: studentDto.ParentName,
        Email: studentDto.Email,
        Phone: studentDto.Phone,
        Mobile: studentDto.Mobile,
        Instrument: studentDto.Instrument,
        Grade: studentDto.Grade,
        DateOfBirth: moment(studentDto.DateOfBirth).format('DD/MM/YYYY')
    };

    return student;
}
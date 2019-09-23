export type Student = {
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
    DateOfBirth: Date;
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
        DateOfBirth: studentDto.DateOfBirth
    };

    return student;
}
import axios from 'axios';
import updateFromDto, { StudentDto, Student } from './Models/StudentModel';

export class StudentsGateway {
    async GetStudentsList(): Promise<Student[]> {
        let studentsList: Student[] = [];
        await axios.get("/api/students")
            .then(res => {
                const studentsDtoList: StudentDto[] = res.data;
                studentsList = studentsDtoList.map((studentDto) => updateFromDto(studentDto));
            })
        return studentsList;
    }
}

export const gateway = new StudentsGateway();
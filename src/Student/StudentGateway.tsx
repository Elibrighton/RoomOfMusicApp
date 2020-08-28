import axios from 'axios';
import updateFromDto, { StudentDto, Student, toDto } from './Models/StudentModel';

export class StudentGateway {
    async GetStudentList(): Promise<Student[]> {
        let studentList: Student[] = [];
        await axios.get("/api/students")
            .then(res => {
                const studentDtoList: StudentDto[] = res.data;
                studentList = studentDtoList.map((studentDto) => updateFromDto(studentDto));
            })
        return studentList;
    }

    async AddStudent(student: Student): Promise<void> {
        const studentDto: StudentDto = toDto(student);

        return axios.post("/api/students", studentDto)
    }
}

export const gateway = new StudentGateway();
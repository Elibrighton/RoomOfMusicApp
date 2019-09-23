import { observable, action } from 'mobx'
import { Student } from './Models/StudentModel';
import { gateway } from './StudentsGateway';


export class StudentsStore {
    @observable studentsList: Student[] = [];

    @action
    getStudentsList() {
        gateway.GetStudentsList()
            .then((studentList) => {
                this.studentsList = studentList;
            })
    }
}

export const store = new StudentsStore();
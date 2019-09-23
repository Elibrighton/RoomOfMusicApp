import { observable, action } from 'mobx'
import { Student } from './Models/StudentModel';
import { gateway } from './StudentsGateway';


export class StudentsStore {
    @observable studentsList: Student[] = [];

    @action
    getStudentsList() {
        gateway.GetStudents()
            .then((data) => {
                this.studentsList = data;
            })
    }
}

export const store = new StudentsStore();
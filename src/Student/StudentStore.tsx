import { observable, action, computed } from 'mobx'
import { Student } from './Models/StudentModel';
import { gateway } from './StudentGateway';


export class StudentStore {
    @observable studentList: Student[] = [];
    @observable isPromiseFulfilled: boolean = false;

    @action
    getStudentList() {
        gateway.GetStudentList()
            .then((studentList) => {
                this.studentList = studentList;
            })
    }

    @action
    addStudent(student: Student) {
        gateway.AddStudent(student).then(res => {
            this.isPromiseFulfilled = true;
            console.log("isAddStudentPromiseFulfilled is true")
        })
    }

    @computed get isAddStudentPromiseFulfilled() {
        return this.isPromiseFulfilled;
    }
}

export const store = new StudentStore();
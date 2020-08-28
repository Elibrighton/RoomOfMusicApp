import { Form, Field } from "react-final-form";
import React from "react";
import { inject, observer } from "mobx-react";
import { StudentStore } from './StudentStore'
import { Student } from "./Models/StudentModel";
import toStudent, { AddSudentFormValues } from "./AddStudentFormValues";

interface IAddStudentsFormProps {
    store?: StudentStore;
}

interface IAddStudentsFormState {
    store?: StudentStore;
}

@inject('store')
@observer
export default class AddStudentForm extends React.Component<IAddStudentsFormProps> {
    render() {
        //console.log(this.props.store?.isAddStudentPromiseFulfilled)
        // this.props.store?.isAddStudentPromiseFulfilled
        // this.props.store?.isPromiseFulfilled;
        // const isAddStudentPromiseFulfilled = this.props.store?.isAddStudentPromiseFulfilled()

        // if (isAddStudentPromiseFulfilled !== undefined && isAddStudentPromiseFulfilled === true) {
        //     return <Redirect to="/students" />;
        // }

        const onSubmit = async (values: AddSudentFormValues) => {
            // easy way to see whats in the form object
            // window.alert(JSON.stringify(values, undefined, 2));
            const student: Student = toStudent(values);
            this.props.store!.addStudent(student);
        };

        return (
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Add student</h2>
                        <div>
                            <label>First Name</label>
                            <Field name="firstName" component="input" required />
                        </div>
                        <div>
                            <label>Surame</label>
                            <Field name="surName" component="input" required />
                        </div>
                        <div>
                            <label>Is retired</label>
                            <Field
                                name="isRetired"
                                type="checkbox"
                                component="input"
                            />
                        </div>
                        <div>
                            <label>Parent name</label>
                            <Field name="parentName" component="input" />
                        </div>
                        <div>
                            <label>Email</label>
                            <Field name="email" component="input" type="email" required />
                        </div>
                        <div>
                            <label>Phone</label>
                            <Field name="phone" component="input" />
                        </div>
                        <div>
                            <label>Mobile</label>
                            <Field name="mobile" component="input" />
                        </div>
                        <div>
                            <label>Instrument</label>
                            <Field name="instrument" component="select">
                                <option value="blank" />
                                <option value="clarinet">Clarinet</option>
                                <option value="saxaphone">Saxaphone</option>
                            </Field>
                        </div>
                        <div>
                            <label>Grade</label>
                            <Field
                                name="grade"
                                component="input"
                                type="number"
                            />
                        </div>
                        <div>
                            <label>Date of birth</label>
                            <Field
                                name="dateOfBirth"
                                component="input"
                                type="date"
                            />
                        </div>
                        <button type="submit">Save</button>
                    </form>
                )}
            />)
    }
}

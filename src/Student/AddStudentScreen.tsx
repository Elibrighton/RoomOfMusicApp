import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import AddStudentForm from "./AddStudentForm";

export default class AddStudentsScreen extends React.Component {
    render() {
        return (
            <>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item><Link to="/students">Students</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>Add</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                    <AddStudentForm />
                </div>
            </>
        )
    }
}
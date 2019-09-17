import React from "react";
import { Breadcrumb, Table } from "antd";
import { Student } from "./Models/Student";
import axios from "axios";

interface IStudentsState {
    studentList: Student[];
}

export default class Students extends React.Component<{}, IStudentsState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            studentList: []
        }
    }

    componentDidMount() {
        axios.get("/api/students")
            .then(res => {
                const studentList = res.data;
                this.setState({ studentList });
            })
    }
    render() {
        const columns = [
            {
                title: "First Name",
                dataIndex: "FirstName",
                key: "Id",
            },
            {
                title: "Surname",
                dataIndex: "Surname",
                key: "Id",
            },
            {
                title: "Is Retired",
                dataIndex: "IsRetired",
                key: "Id",
            },
            {
                title: "Parent Name",
                dataIndex: "ParentName",
                key: "Id",
            },
            {
                title: "Email",
                dataIndex: "Email",
                key: "Id",
            },
            {
                title: "Phone",
                dataIndex: "Phone",
                key: "Id",
            },
            {
                title: "Mobile",
                dataIndex: "Mobile",
                key: "Id",
            },
            {
                title: "Instrument",
                dataIndex: "Instrument",
                key: "Id",
            },
            {
                title: "Grade",
                dataIndex: "Grade",
                key: "Id",
            },
            {
                title: "Dob",
                dataIndex: "DateOfBirth",
                key: "Id",
            }
        ];
        return (
            <>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Students</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                    <Table dataSource={this.state.studentList} columns={columns} />
                </div>
            </>
        )
    }
}
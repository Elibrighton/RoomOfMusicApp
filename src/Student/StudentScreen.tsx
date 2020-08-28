import React from "react";
import { Breadcrumb, Table, Button } from "antd";
import { observer, inject } from 'mobx-react';
import { StudentStore } from './StudentStore'
import { Link } from "react-router-dom";

interface IStudentProps {
    store?: StudentStore;
}

@inject('store')
@observer
export default class StudentScreen extends React.Component<IStudentProps> {
    componentDidMount() {
        this.props.store!.getStudentList();
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
                title: "Date of birth",
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
                    <Link to="/students/add">
                        <Button type="primary" icon="plus">Add</Button>
                    </Link>
                    <Table columns={columns} dataSource={this.props.store!.studentList} />
                </div>
            </>
        )
    }
}
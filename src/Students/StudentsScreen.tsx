import React from "react";
import { Breadcrumb, Table } from "antd";
import { observer, inject } from 'mobx-react';
import { StudentsStore } from './StudentsStore'

interface IStudentsProps {
    store: StudentsStore;
}

@inject('store')
@observer
export default class StudentsScreen extends React.Component<IStudentsProps> {
    componentDidMount() {
        this.props.store.getStudentsList();
    }

    render() {
        const { store } = this.props
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
                    <Table dataSource={store.studentsList} columns={columns} />
                </div>
            </>
        )
    }
}
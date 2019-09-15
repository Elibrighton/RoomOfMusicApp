import React from 'react';
import { Breadcrumb, Table } from 'antd';
import { Student } from './Models/Student';

interface IStudentsState {
    studentList: Student[];
}

export default class Students extends React.Component<{}, IStudentsState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            studentList: [
                { "Id": "0", "FirstName": "Eli", "Surname": "Brighton" },
                { "Id": "1", "FirstName": "Topaz", "Surname": "Brighton" },
                { "Id": "2", "FirstName": "Leo", "Surname": "Doe" }
            ]
        }
    }
    render() {
        const columns = [
            {
                title: 'First Name',
                dataIndex: 'FirstName',
                key: 'Id',
            },
            {
                title: 'Surname',
                dataIndex: 'Surname',
                key: 'Id',
            }
        ];
        return (
            <>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Students</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <Table dataSource={this.state.studentList} columns={columns} />
                </div>
            </>
        )
    }
}
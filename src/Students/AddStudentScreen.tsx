import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

export default class AddStudentsScreen extends React.Component {
    render() {
        return (
            <>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Link to="/students">
                        <Breadcrumb.Item>Students</Breadcrumb.Item>
                    </Link>
                    <Breadcrumb.Item>Add</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                    Add Students
                </div>
            </>
        )
    }
}
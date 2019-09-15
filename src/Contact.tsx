import React from 'react';
import { Breadcrumb } from 'antd'

export default class Contact extends React.Component {
    render() {
        return (
            <>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Contact</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Contact</div>
            </>
        )
    }
}

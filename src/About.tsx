import React from 'react';
import { Breadcrumb } from 'antd'

export default class About extends React.Component {
    render() {
        return (
            <>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>About</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>About</div>
            </>
        )
    }
}

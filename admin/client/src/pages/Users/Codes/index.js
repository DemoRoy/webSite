import React, { Component } from 'react';
import { Button, Table } from 'antd';
import style from './index.less';

class Code extends Component {
	state = {
		dataSource: [{
		  key: '1',
		  name: '胡彦斌',
		  age: 32,
		  address: '西湖区湖底公园1号'
		}, {
		  key: '2',
		  name: '胡彦祖',
		  age: 42,
		  address: '西湖区湖底公园1号'
		}],
	};

	columns =  [{
	  title: '姓名',
	  dataIndex: 'name',
	  key: 'name',
	}, {
	  title: '年龄',
	  dataIndex: 'age',
	  key: 'age',
	}, {
	  title: '住址',
	  dataIndex: 'address',
	  key: 'address',
	}];

	render() {
		return (
			<div className={style.container}>
				<Button type="primary">生成邀请码</Button>
				<Table
					className={style.table}
					dataSource={this.state.dataSource}
					columns={this.columns}
					pagination={false} />
			</div>
		);
	}
}

module.exports = Code;

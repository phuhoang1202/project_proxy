import React from 'react'
import { Table } from 'antd'

const TableAdmin = ({ columns, dataSource, loading, pagination, onTableChange, rowSelection }) => {
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={pagination}
      onChange={onTableChange}
      rowKey='id'
    />
  )
}

export default TableAdmin

import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message, Modal } from 'antd'
import Card from '@pages/admin/components/card'
import ModalAdmin from '@pages/admin/components/common/ModalAdmin'
import TablleAdmin from '@pages/admin/components/common/TableAdmin'
import { getCategory, postCategory, updateCategory, deleteCategory } from '@services/user/auth'
import { Toast } from '@utils/toast'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const ManagerPromotion = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchText, setSearchText] = useState('')
  const [pagination, setPagination] = useState({ current: 1, pageSize: 8 })
  const [loading, setLoading] = useState(false)
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(null)
  const [isAddModalVisible, setIsAddModalVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [deleteCategoryId, setDeleteCategoryId] = useState(null)

  const [form] = Form.useForm()
  const [addForm] = Form.useForm()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await getCategory()
        setData(response.data)
        setFilteredData(response.data)
      } catch (error) {
        Toast.error('Failed to fetch categories:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleTableChange = (pagination) => {
    setPagination(pagination)
  }

  const handleSearch = (value) => {
    setSearchText(value)
    if (value === '') {
      setFilteredData(data)
    } else {
      const filteredData = data.filter((category) => category.name.toLowerCase().includes(value.toLowerCase()))
      setFilteredData(filteredData)
    }
  }

  const showEditModal = (category) => {
    setCurrentCategory(category)
    form.setFieldsValue(category)
    setIsEditModalVisible(true)
  }

  const handleEdit = async () => {
    setLoading(true)
    try {
      const values = await form.validateFields()
      const updatedCategory = { ...currentCategory, ...values }
      await updateCategory(updatedCategory)
      const updatedData = data.map((item) => (item.id === currentCategory.id ? updatedCategory : item))
      setData(updatedData)
      setFilteredData(updatedData)
      setIsEditModalVisible(false)
      message.success('Category updated successfully')
    } catch (error) {
      console.error('Failed to update category:', error)
      message.error('Failed to update category')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    setLoading(true)
    try {
      await deleteCategory(id)
      const updatedData = data.filter((item) => item.id !== id)
      setData(updatedData)
      setFilteredData(updatedData)
      setIsDeleteModalVisible(false)
      message.success('Category deleted successfully')
    } catch (error) {
      console.error('Error deleting category:', error)
      message.error('Failed to delete category')
    } finally {
      setLoading(false)
    }
  }

  const showDeleteModal = (id) => {
    setDeleteCategoryId(id)
    setIsDeleteModalVisible(true)
  }

  const showAddModal = () => {
    addForm.resetFields()
    setIsAddModalVisible(true)
  }

  const handleAdd = async () => {
    setLoading(true)
    try {
      const values = await addForm.validateFields()
      const response = await postCategory(values)
      const newData = [...data, response.data]
      setData(newData)
      setFilteredData(newData)
      setIsAddModalVisible(false)
      message.success('Category added successfully')
    } catch (error) {
      console.error('Failed to add category:', error)
      message.error('Failed to add category')
    } finally {
      setLoading(false)
    }
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      render: (text, record, index) => (pagination.current - 1) * pagination.pageSize + index + 1,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      align: 'center',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (text, record) => (
        <span>
          <Button
            type='button'
            className='text-white w-20 bg-cyan-700 hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-300 rounded-lg text-sm px-2 py-2 me-2 focus:outline-none'
            onClick={() => showEditModal(record)}
          >
            <EditOutlined /> Edit
          </Button>
          <Button
            type='button'
            className='text-white w-20 border-red-600 bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-2 py-2 me-2 focus:outline-none'
            onClick={() => showDeleteModal(record.id)}
          >
            <DeleteOutlined /> Delete
          </Button>
        </span>
      ),
    },
  ]

  return (
    <div>
      <Card extra={'w-full h-full p-4'}>
        <div>
          <div className='flex justify-between m-6'>
            <Button
              type='button'
              onClick={showAddModal}
              className='text-white w-32 h-9 bg-cyan-700 hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-300 rounded-lg text-sm px-2 py-2 me-2 focus:outline-none'
            >
              Add Category
            </Button>
            <Input.Search
              placeholder='Search category'
              onSearch={handleSearch}
              onChange={(e) => handleSearch(e.target.value)}
              value={searchText}
              style={{ width: 200 }}
            />
          </div>
        </div>

        <div className='h-full overflow-x-scroll xl:overflow-x-hidden mt-4'>
          <TablleAdmin
            columns={columns}
            dataSource={filteredData}
            loading={loading}
            pagination={pagination}
            onTableChange={handleTableChange}
          />
        </div>
      </Card>

      <ModalAdmin
        visible={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        onOk={handleEdit}
        form={form}
        initialValues={currentCategory}
        fields={[
          { name: 'name', label: 'Name' },
          { name: 'description', label: 'Description' },
        ]}
        title='Edit Category'
      />

      <ModalAdmin
        visible={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        onOk={handleAdd}
        form={addForm}
        fields={[
          { name: 'name', label: 'Name' },
          { name: 'description', label: 'Description' },
        ]}
        title='Add Category'
      />

      <Modal
        title='Delete Category'
        visible={isDeleteModalVisible}
        onCancel={() => setIsDeleteModalVisible(false)}
        onOk={() => handleDelete(deleteCategoryId)}
      >
        <p>Are you sure you want to delete this category?</p>
      </Modal>
    </div>
  )
}

export default ManagerPromotion

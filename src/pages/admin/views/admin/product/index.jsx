import { useEffect, useState } from 'react'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Form, Button, Input, Modal, Tag, Image, Upload } from 'antd'
import moment from 'moment'

import TableAdmin from '@pages/admin/components/common/TableAdmin'
import Card from '@pages/admin/components/card'
import ModalProduct from '@pages/admin/components/common/ModalProduct'

import { constants as c } from '@constants'
import { formatPrice } from '@utils'
import { useProductStore } from '@store/admin/productStore'
import { useCategoryStore } from '@store/admin/categoryStore'
import { usePromotionStore } from '@store/admin/promotionStore'
import { Toast } from '@utils/toast'
import { getColorTableAdmin } from '@utils/index'
import useMergeObjects from '../../../../../hooks/useMergeObjects'

const { confirm } = Modal

const Marketplace = () => {
  const {
    allPrds,
    getAllPrds,
    createdPrd,
    uploadImage,
    updateProduct,
    deleteListPrd,
    findPrdByConditions,
    deletePrdById,
    addNewPrd,
    searchPrdByName,
    loadingGetAllPrd,
    loadingCreatePrd,
    loadingDeletePrdById,
    loadingUpdatePrd,
  } = useProductStore((state) => state)

  const { allCategories } = useCategoryStore((state) => state)
  const { allPromotions } = usePromotionStore()

  const [searchText, setSearchText] = useState('')
  const [productToEdit, setProductToEdit] = useState(null)
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [isAddModalVisible, setIsAddModalVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [listImg, setListImg] = useState([])

  const [pagination, setPagination] = useState({ current: 1, pageSize: 20 })
  const [form] = Form.useForm()
  const [addForm] = Form.useForm()

  useEffect(() => {
    const form = {
      pageNumber: pagination.current - 1,
      pageSize: pagination.pageSize,
    }
    findPrdByConditions(form)
    getAllPrds()
  }, [])

  const showAddModal = () => {
    addForm.resetFields()
    setListImg([])
    setIsAddModalVisible(true)
  }

  const showDeleteListPrd = () => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: <p className='text-[#333333]'>Do you want to delete there products?</p>,
      onOk() {
        const listPrd = {
          productIds: [...selectedRowKeys],
        }
        deleteListPrd(
          listPrd,
          () => {
            Toast.success('Delete products success !')
            const form = {
              pageNumber: 0,
              pageSize: pagination.pageSize,
            }
            findPrdByConditions(form)
          },
          () => {
            Toast.error('Delete product failed !')
          },
        )
      },
      onCancel() {
        Modal.destroyAll()
      },
    })
  }

  const showEditModal = (prd) => {
    setProductToEdit(prd)
    setIsEditModalVisible(true)
  }

  const showDeleteModal = (id) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: <p className='text-[#333333]'>Do you want to delete this product?</p>,
      onOk() {
        const form = {
          pageNumber: pagination.current - 1,
          pageSize: pagination.pageSize,
        }
        deletePrdById(
          id,
          () => {
            Toast.success('Delete product success !')
            findPrdByConditions(form)
          },
          () => {
            Toast.error('Delete product failed !')
          },
        )
      },
      onCancel() {
        Modal.destroyAll()
      },
    })
  }

  const handleSearchTable = (value) => {
    if (!value) {
      Toast.warning('Please enter product name !')
      return
    }
    const form = {
      name: value,
      pageNumber: 0,
      pageSize: 20,
    }
    searchPrdByName(
      form,
      () => {},
      () => {
        Toast.error('Something is wrong, please try again !')
      },
    )
  }

  const handleTableChange = (pagination) => {
    setPagination(pagination)
  }

  const mergeObjects = useMergeObjects()
  const handleEdit = async () => {
    const values = await form.validateFields()
    const formEdit = mergeObjects(productToEdit, values)
    formEdit.categories = allCategories.find((cate) => cate.id === values.categories)
    formEdit.promotions = allPromotions.filter((promo) => values.promotions.includes(promo.id))
    updateProduct(
      formEdit,
      () => {
        const form = {
          pageNumber: pagination.current - 1,
          pageSize: pagination.pageSize,
        }
        findPrdByConditions(form)
        Toast.success('Update product success !')
        setIsEditModalVisible(false)
      },
      () => {
        Toast.error('Update product failed! Please try it again!')
      },
    )
  }

  const handleAdd = async () => {
    const values = await addForm.validateFields()
    addNewPrd(
      values,
      (createdProduct) => {
        handleUploadImg(createdProduct.id)
        Toast.success('Add new product success!')
        const form = {
          pageNumber: 0,
          pageSize: 20,
        }
        findPrdByConditions(form)
      },
      () => {
        Toast.error('Add new product fail! Please try it again !')
      },
      setIsAddModalVisible(false),
      setListImg([]),
    )
  }

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  const handleUploadImg = (productId) => {
    const formData = new FormData()
    listImg.forEach((file) => {
      formData.append('files', file.originFileObj)
    })
    formData.append('productId', productId)
    uploadImage(
      formData,
      () => {},
      () => {},
    )
  }

  // def UI CPN
  const columnsTable = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      render: (text, record, index) => (pagination.current - 1) * pagination.pageSize + index + 1,
    },
    {
      title: 'Name',
      dataIndex: 'productName',
      key: 'productName',
      sorter: (a, b) => a.name.localeCompare(b.name),
      align: 'center',
    },
    {
      title: 'Images',
      dataIndex: 'productImages',
      key: 'productImages',
      align: 'center',
      render: (text, record) => (
        <img
          className='w-[60px] h-[60px] object-cover'
          src={`${c.DOMAIN_IMG}${record.productImages[0]?.imageUrl}`}
          alt=''
        />
      ),
    },
    {
      title: 'Category',
      dataIndex: 'categories',
      key: 'lastModcategoriesifiedDate',
      align: 'center',
      render: (record) => <span>{record.name}</span>,
    },
    {
      title: 'Short Desc',
      dataIndex: 'generalDescription',
      key: 'generalDescription',
      align: 'center',
      render: (text) => (
        <div
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: 200,
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      render: (text) => <span>{formatPrice(text)}</span>,
    },
    {
      title: 'Stock',
      dataIndex: 'stockQuantity',
      key: 'stockQuantity',
      align: 'center',
    },
    {
      title: 'Promotions',
      dataIndex: 'promotions',
      key: 'promotions',
      align: 'center',
      render: (promotions, _) => {
        return promotions?.length > 0
          ? promotions.map((promotion, index) => (
              <Tag key={index} color={getColorTableAdmin(promotion.type)} style={{ textTransform: 'capitalize' }}>
                {promotion.name}
              </Tag>
            ))
          : null
      },
    },
    {
      title: 'Create Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
      align: 'center',
      render: (text) => (text ? moment(text).format('DD-MM-YYYY HH:mm:ss') : ''),
    },
    {
      title: 'Actions',
      key: 'actions',
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
    <Card extra={'w-full h-full p-4'}>
      <div>
        <div className='flex justify-between m-6'>
          <div className='flex justify-between'>
            <Button
              type='button'
              onClick={showAddModal}
              className='text-white w-32 bg-cyan-700 hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-300 rounded-lg text-sm px-2 py-2 me-2 focus:outline-none'
            >
              Add New Product
            </Button>

            {selectedRowKeys?.length > 0 && (
              <Button
                type='button'
                onClick={showDeleteListPrd}
                className='text-white w-32 bg-cyan-700 hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-300 rounded-lg text-sm px-2 py-2 me-2 focus:outline-none'
              >
                Delete products
              </Button>
            )}
          </div>
          <Input.Search
            placeholder='Search by product name'
            onSearch={handleSearchTable}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            className='w-1/3'
          />
        </div>
      </div>

      <div className='h-full overflow-x-scroll xl:overflow-x-hidden mt-4'>
        <TableAdmin
          rowSelection={rowSelection}
          columns={columnsTable}
          dataSource={allPrds.length > 0 ? allPrds : []}
          loading={loadingGetAllPrd}
          pagination={pagination}
          onTableChange={handleTableChange}
        />
      </div>

      {/* modal edit */}
      <ModalProduct
        visible={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        onOk={handleEdit}
        form={form}
        loading={loadingUpdatePrd}
        initialValues={productToEdit}
        listImg={listImg}
        setListImg={setListImg}
        fields={[
          { name: 'productName', label: 'Name' },
          { name: 'generalDescription', label: 'General Description' },
          { name: 'categories', label: 'Category' },
          { name: 'price', label: 'Price' },
          { name: 'promotions', label: 'Promotions' },
          { name: 'stockQuantity', label: 'Stock Quantity' },
          { name: 'description', label: 'Description' },
        ]}
        title='Edit Product'
      />

      {/* modal add */}
      <ModalProduct
        visible={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        loading={loadingCreatePrd}
        onOk={handleAdd}
        form={addForm}
        listImg={listImg}
        setListImg={setListImg}
        fields={[
          { name: 'productName', label: 'Name' },
          { name: 'generalDescription', label: 'General Description' },
          { name: 'categories', label: 'Category' },
          { name: 'price', label: 'Price' },
          { name: 'promotions', label: 'Promotions' },
          { name: 'stockQuantity', label: 'Stock Quantity' },
          { name: 'description', label: 'Description' },
        ]}
        title='Add New Product'
      />

      <Modal
        loading={loadingDeletePrdById}
        title='Delete Product'
        visible={isDeleteModalVisible}
        onCancel={() => setIsDeleteModalVisible(false)}
      >
        <p>Are you sure you want to delete this category?</p>
      </Modal>
    </Card>
  )
}

export default Marketplace

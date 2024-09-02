import WeeklyRevenue from '@pages/admin/views/admin/default/components/WeeklyRevenue'
import TotalSpent from '@pages/admin/views/admin/default/components/TotalSpent'
import { IoMdHome } from 'react-icons/io'
import { IoDocuments } from 'react-icons/io5'
import { MdBarChart, MdDashboard } from 'react-icons/md'
import Widget from '@pages/admin/components/widget/Widget'
import { useEffect, useState } from 'react'
import { getPromotion } from '@services/user/auth'

const Dashboard = () => {
  const [totalPromotion, setTotalPromotion] = useState('')

  useEffect(() => {
    const fetchPromotionData = async () => {
      try {
        const response = await getPromotion()
        const { data } = response

        setTotalPromotion(data.length)
      } catch (error) {
        console.error('Error fetching promotion data:', error)
      }
    }

    fetchPromotionData()
  }, [])

  return (
    <div>
      {/* Card widget */}

      <div className='mt-3 grid  grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6'>
        <Widget icon={<MdBarChart className='h-7 w-7' />} title={'Earnings'} subtitle={'$340.5'} />
        <Widget icon={<IoDocuments className='h-6 w-6' />} title={'Spend this month'} subtitle={'$642.39'} />
        <Widget icon={<MdBarChart className='h-7 w-7' />} title={'Sales'} subtitle={'$574.34'} />
        <Widget icon={<MdDashboard className='h-6 w-6' />} title={'Your Balance'} subtitle={'$1,000'} />
        <Widget icon={<MdBarChart className='h-7 w-7' />} title={'Total Promotions'} subtitle={totalPromotion} />
        <Widget icon={<IoMdHome className='h-6 w-6' />} title={'Total Projects'} subtitle={'$2433'} />
      </div>

      {/* Charts */}

      <div className='mt-5 grid grid-cols-1 gap-5 md:grid-cols-2'>
        <TotalSpent />
        <WeeklyRevenue />
      </div>
    </div>
  )
}

export default Dashboard

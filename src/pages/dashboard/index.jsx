import React from 'react'
import DashboardHeader from '../../dashboardSections/DashboardHeader/DashboardHeader'
import Discount from '../../dashboardSections/Discount/Discount'
import Products from '../../dashboardSections/Products/Products'
import Access from '../../dashboardSections/Access/Access'

const DashboardPage = () => {
  return (
    <>
    <DashboardHeader/>
    <Discount/>
    <Products/>
    <Access/>
    </>
  )
}

export default DashboardPage
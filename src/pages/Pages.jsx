import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import Discount from "../components/discount/Discount"
import Subscription from "../components/subscription/subscription"



const Pages = ({ productItems }) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} />
      <Discount />
      <Subscription />
    </>
  )
}

export default Pages

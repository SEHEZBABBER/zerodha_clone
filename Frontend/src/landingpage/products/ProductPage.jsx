import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from './Universe';

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection imagePath={"/media/images/kite.png"} heading={"Kite"} paragraph={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} link1_name={"Try Demo"} link2_name={"Learn More"}/>
      <RightSection imagePath={"media/images/console.png"} heading={"Console"} paragraph={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} link_name={"Learn More"}/>
      <LeftSection imagePath={"/media/images/coin.png"} heading={"Coin"} paragraph={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} link1_name={"Coin"}/>
      <RightSection imagePath={"/media/images/products-kiteconnect.png"} heading={"Kite Connect Api"} paragraph={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} link_name={"Kite Connect"}/>
      <LeftSection imagePath={"/media/images/varsity.png"} heading={"varsity mobile"} paragraph={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}/>
      <Universe/>
    </>
  );
}

export default ProductPage;

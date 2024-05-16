import landing1 from "@/assets/landing1.jpg";
import Header from "@/components/header";

function Landing() {
  return (
    <div className="w-screen h-screen flex flex-col ">
      <Header />
      <div className=" flex-auto">
        <div className="flex">
          <div>
            <p>Get your experience</p>
            <p>Feel the heart of Philippines Ecotourism</p>

            <p>
              Rediscover your soul and conscience as you explore the breathtaking beauty of life at
              our campsite. Immerse yourself in nature&apos;s wonders, and let us be your guide to
              an unforgettable experience. We are here to serve you and ensure that every moment is
              filled with happiness and satisfaction. Your joy is our mission, and your serenity is
              our promise. Join us and embrace the adventure that awaits.
            </p>
          </div>
          <div>
            <img src={landing1} alt="" className="w-[120px] h-[120px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

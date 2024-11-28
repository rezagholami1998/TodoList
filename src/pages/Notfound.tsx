import NotFoundImg from "../assets/images/notFound.svg";
///////////////////////////////////////////////////////
const Notfound = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-center xs:mx-4 sm:mx-0">
        <img src={NotFoundImg} className="xs:max-w-[100%]" />
        <h5 className="font-bold mt-6 leading-6 xs:text-lg sm:text-xl">
          صفحه مورد نظر یافت نشد
        </h5>
        <p className="text-sm leading-6 mt-2">آدرس وارد شده را بررسی نمایید</p>
      </div>
    </div>
  );
};
export default Notfound;

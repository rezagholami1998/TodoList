import NotFoundImg from "../assets/images/notFound.svg";
const Notfound = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <img src={NotFoundImg} className="xs:max-w-[100%] xs:px-5 sm:w-auto" />
      <h5 className="mt-6 color-[#2E3947] font-bold leading-6 xs:text-[1.25rem] sm:text-[1.5rem]">
        !صفحه مورد نظر یافت نشد
      </h5>
      <p className="text-[.876rem] leading-6 mt-4">
        .آدرس وارد شده را بررسی نمایید
      </p>
    </div>
  );
};
export default Notfound;

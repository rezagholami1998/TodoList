import { useState } from "react";
import { useNavigate } from "react-router-dom";
////////////////////////////
const Verification = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(["", "", "", ""]);
  //////////////////////////  for set value inputs
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      const newValue = [...inputs];
      newValue[index] = value;
      setInputs(newValue);
    }
    const nextInput = document.getElementById(`input${index + 1}`);
    if (nextInput && !isNaN(value)) {
      nextInput?.focus();
    }
  };
  /////////////////////////  for delete value whole input
  const handleClickDelete = () => {
    setInputs(["", "", "", ""]);
    document.getElementById("input0")?.focus();
  };
  /////////////////////////  for test until correct code and navigate to route home
  const handleClickVerify = (e) => {
    e.preventDefault();
    const validate = inputs.every((x) => x >= "0");
    if (inputs.join("") === "1234" && validate) {
      alert("کد وارد شده صحیح می باشد");
      navigate("/home");
    } else {
      alert("کد وارد شده نادرست است");
    }
  };
  //////// render
  return (
    <>
      <main className="h-full w-full flex flex-col justify-center overflow-hidden">
        <div className="mx-auto text-center xs:px-6 sm:px-8 py-10 rounded-xl shadow-md border border-1 animate-fadeInUp">
          <header className="mb-7">
            <h1 className="xs:text-[1.25rem] sm:text-[1.5rem] font-bold mb-2">
              احراز هویت
            </h1>
            <p className="xs:text-[.876rem] sm:text-[1rem] text-slate-500">
              کد چهار رقمی را وارد کنید
            </p>
          </header>
          <form>
            <div className="flex items-center justify-center gap-4">
              {/* می توان برای اینپوت زیر کامپوننت جدا در نظر گرفت */}
              {inputs.map((value, index) => (
                <input
                  id={`input${index}`}
                  key={index}
                  type="text"
                  maxLength={1}
                  value={value}
                  autoFocus={index == 0 && true}
                  onChange={(e) => handleChange(e, index)}
                  className="xs:w-10 xs:h-10 sm:w-14 sm:h-14 text-center xs:text-md sm:text-xl font-semibold text-gray-700 bg-gray-100 border border-1 rounded xs:p-0 sm:p-4 outline-none focus:bg-white focus:ring-2 focus:ring-gray-200 focus:border-none"
                />
              ))}
            </div>
            <div className="flex gap-4 mx-auto mt-4">
              <button
                type="button"
                onClick={handleClickDelete}
                className="w-full rounded bg-red-600 xs:py-2 sm:py-3 text-[.876rem] text-white shadow-sm  hover:bg-red-700 focus:outline-none focus:ring-0  transition-colors duration-200"
              >
                حذف
              </button>
              <button
                id="submitBtn"
                type="submit"
                onClick={(e) => handleClickVerify(e)}
                className="w-full rounded bg-green-500 xs:py-2 sm:py-3 text-[.876rem] text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-0  transition-colors duration-200"
              >
                تایید
              </button>
            </div>
          </form>
        </div>
      </main>
      <div
        className="absolute top-3 right-3 bg-teal-100 border-t-4 border-teal-500 rounded text-teal-900 px-4 py-3 shadow-md border border-1"
        role="alert"
      >
        <div className="flex">
          <div>
            <p className="font-bold">کد : 1234</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;

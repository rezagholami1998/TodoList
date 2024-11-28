import { FC } from "react";
interface Iprops {
  description: string;
  keyItem: string;
  onClick: React.MouseEventHandler;
}
////////////////////////////////////////////////////////////////////////////
//Component
const TodoList: FC<Iprops> = ({ description, keyItem, onClick }) => {
  return (
    <>
      <li
        key={keyItem}
        className="flex justify-between items-center p-2 border-b"
      >
        <p className="text-sm text-gray-700 max-w-80 text-wrap ">
          {description}
        </p>
        <button onClick={onClick} className="text-red-500 text-sm">
          حذف
        </button>
      </li>
    </>
  );
};

export default TodoList;

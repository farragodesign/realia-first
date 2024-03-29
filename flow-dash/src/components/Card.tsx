import { NextPage } from "next";

interface Props {
  title: any;
  count: any;
}
export const Card: NextPage<Props> = ({ title, count }) => {
  return (
    <div className="flex items-center p-8 bg-slate-100 dark:bg-slate-800 shadow rounded-lg  transition-all ">
      <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <div>
        <span className="block text-2xl font-bold text-slate-800 dark:text-slate-100">{count}</span>
        <span className="block text-gray-600 dark:text-gray-300 ">{title}</span>
      </div>
    </div>
  );
};

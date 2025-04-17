import Image from "next/image";

export default function ActivityCard({
  activityImage,
  activityTitle,
  activityDesc,
}) {
  return (
    <div className=" flex-col justify-center w-64">
      <div className="text-6xl flex justify-center py-5 text-sky-500">
        {activityImage}
      </div>
      <h3 className="text-xl font-bold text-sky-800">{activityTitle}</h3>
      <p className="text-gray-500">{activityDesc}</p>
    </div>
  );
}

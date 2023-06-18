export const UsersCard = ({ userData }) => {
  const { firstName, lastName, userhandle, profile } = userData;
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-2">
        <img
          src={profile}
          alt={userhandle}
          className="w-10 h-10 rounded-lg border border-black object-fill"
        />
        <div className="">
          <h1 className="font-semibold">
            {firstName} {lastName}
          </h1>
          <h3 className="text-sm text-gray-500">@{userhandle}</h3>
        </div>
      </div>
      <button
        className={`bg-[--pink-color]  text-sm px-3 py-0.5 rounded-full border border-black`}
      >
        Follow
      </button>
    </div>
  );
};

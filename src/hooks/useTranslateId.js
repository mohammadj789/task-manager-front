import { useSelector } from "react-redux";

const useTranslateId = (ids) => {
  const friends = useSelector((state) => state.user.friends);
  const friendsList = ids.map((id) =>
    friends.find((friend) => friend.id === id)
  );

  return friendsList;
};
export default useTranslateId;

import { useSelector } from "react-redux";

const useGetFriend = (id) => {
  const friends = useSelector((state) => state.user.friends);
  const friend = friends.find((friend) => friend.id === id);

  return friend;
};
export default useGetFriend;

import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const toggle = () => {
    setLiked(!liked);
  };

  if (liked) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;

  return <AiOutlineHeart size={20} onClick={toggle} />;
}

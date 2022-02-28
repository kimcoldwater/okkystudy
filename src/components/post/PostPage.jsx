import { useEffect } from "react";
import { useState } from "react";
import dummy from "./dummy.json";
import PostItem from "./PostItem";
import { Container } from "@mui/material";

const PostPage = () => {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // 여기서 response를 나중에 백엔드에서 axios로 받아오면 됨
        const response = dummy;
        setPost(response);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기중일떄
  if (loading) {
    return <div>대기 중...</div>;
  }
  if (!post) {
    return null;
  }
  // 포스트가 유효할 때
  return (
    <Container maxWidth="sm">
      {post &&
        post.map((post) => {
          return <PostItem key={post.regdate} post={post} />;
        })}
    </Container>
  );
};

export default PostPage;

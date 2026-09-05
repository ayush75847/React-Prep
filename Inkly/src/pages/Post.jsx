import React, { useEffect, useState } from "react";
import { Container, Button } from "../components/index";
import dbService from "../appwrite/database";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Post() {
  const [error, setError] = useState("");
  const { id } = useParams();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  const currUser = useSelector((state) => state.auth.userData);
  const isAuthor = post && currUser ? post.userId === currUser.$id : false;

  useEffect(() => {
    async function getPost() {
      try {
        const post = await dbService.getPost(id);
        setPost(post);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getPost();
  }, [id]);

  return (
    <Container>
      {loading === true ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          {isAuthor && (
            <div>
              <Button type="submit">Update</Button>
              <Button type="submit"> Delete</Button>
            </div>
          )}
        </div>
      )}
    </Container>
  );
}

export default Post;

import React, { useEffect, useState } from "react";
import { PostForm as PostFormComp, Container } from "../components/index";
import dbService from "../appwrite/database";
import { useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState();
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function getPost() {
      try {
        const post = await dbService.getPost(id);
        setPost(post);
      } catch (error) {
        setError(error.message);
      }
    }

    getPost();
  }, [id]);
  return (
    <div>
      <Container>
        <PostFormComp post={post} />
      </Container>
    </div>
  );
}

export default EditPost;

import React, { useEffect, useState } from "react";
import dbService from "../appwrite/database";
import { Container, PostCard as PostCardComp } from "../components/index";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getPosts() {
      try {
        const allPosts = await dbService.getPosts();
        setPosts(allPosts);
      } catch (error) {
        setError(error.message);
      }
    }

    getPosts();
  }, []);
  return (
    <>
      <Container>
        {posts.length === 0 ? (
          <h1>No Posts Currently</h1>
        ) : (
          posts.map((post) => (
            <div key={post.$id}>
              <PostCardComp {...post} />
            </div>
          ))
        )}
      </Container>
    </>
  );
}

export default AllPosts;

import React, { useState } from "react";
import { Input, Button, Select, RTE } from "../index";
import { useForm } from "react-hook-form";
import dbService from "../../appwrite/database";
import storageService from "../../appwrite/storage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PostForm({ post }) {
  const navigate = useNavigate();
  const { register, handleSubmit, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      status: post?.status || "active",
      content: post?.content || "",
    },
  });

  const userData = useSelector((state) => state.auth.userData);
  const [errors, setErrors] = useState("");

  const submit = async (data) => {
    setErrors("");
    if (post) {
      try {
        const file = data.image[0]
          ? await storageService.uploadFile(data.image[0])
          : null;

        const updatePost = await dbService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : post.featuredImage,
        });
        if (file) {
          await storageService.deleteFile(post.featuredImage);
        }

        if (updatePost) {
          navigate(`/post/${post.$id}`);
        }
      } catch (error) {
        setErrors(error.message);
      }
    } else {
      try {
        const file = data.image[0]
          ? await storageService.uploadFile(data.image[0])
          : null;
        if (file) {
          data.featuredImage = file.$id;
        }
        const newPost = await dbService.createPost({
          ...data,
          userId: userData.$userId,
        });
        navigate(`/post/${newPost.$id}`);
      } catch (error) {
        setErrors(error.message);
      }
    }
  };

  return (
    <div className="min-h-[75vh] px-4 py-10">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
            Inkly
          </p>

          <h1 className="text-3xl font-bold text-white">
            {post ? "Edit Your Post" : "Create a New Post"}
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            {post
              ? "Update your post and keep your content fresh."
              : "Share your thoughts with the Inkly community."}
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 shadow-2xl sm:p-8">
          <form onSubmit={handleSubmit(submit)} className="space-y-6">
            {/* Title */}
            <Input
              label="Title"
              placeholder="Enter your post title"
              type="text"
              {...register("title", {
                required: "title is required",
              })}
            />

            {/* Content */}
            <RTE
              label="Content"
              name="content"
              control={control}
              defaultValue={post?.content || ""}
            />

            {/* Image */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Featured Image
              </label>

              <input
                type="file"
                accept="image/png,image/jpg,image/jpeg"
                {...register("image")}
                className="block w-full cursor-pointer rounded-lg border border-gray-700 bg-gray-900 text-sm text-gray-400 file:mr-4 file:cursor-pointer file:border-0 file:bg-orange-500 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-black hover:file:bg-orange-400"
              />

              <p className="mt-2 text-xs text-gray-500">PNG, JPG or JPEG</p>
            </div>

            {/* Status */}
            <Select
              label="Status"
              options={["active", "inactive"]}
              {...register("status")}
            />

            {/* API Error */}
            {errors && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {errors}
              </div>
            )}

            {/* Submit */}
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full rounded-lg bg-orange-500 px-5 py-3 font-semibold text-black transition hover:bg-orange-400 active:scale-[0.99]"
              >
                {post ? "Update Post" : "Create Post"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostForm;

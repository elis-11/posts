import Post from "../models/Posts.js";
import User from "../models/User.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

export const createPost = async (req, res) => {
  try {
    const { title, text } = req.body;
    const user = await User.findById(req.userId);

    if (req.files) {
      let fileName = Date.now().toString() + req.files.image.name; // create imageName
      const _dirname = dirname(fileURLToPath(import.meta.url)); // access the folder / path k tekushej papke
      req.files.image.mv(path.join(_dirname, "..", "uploads", fileName)); //mv-move folder to uploads

      const newPostWithImage = new Post({
        name: user.name,
        title,
        text,
        imgUrl: fileName,
        author: req.userId,
      });
      await newPostWithImage.save();
      await User.findByIdAndUpdate(req.userId, {
        $push: { posts: newPostWithImage },
      });
      return res.json(newPostWithImage);
    }

    await newPostWithoutImage.save();
    await User.findByIdAndUpdate(req.userId, {
      $push: { posts: newPostWithoutImage },
    });
    return res.json(newPostWithoutImage);
  } catch (error) {
    res.join({ message: "Something went wrong!" });
  }
};

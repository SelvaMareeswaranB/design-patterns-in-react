import PropTypes from "prop-types";
import PostItem from "./PostItem";

const PostList = ({ posts = [] }) => {
  return (
    <div className="user-posts">
      <h2>Recent Posts ({posts?.length})</h2>
      {posts?.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts?.map((post,index) => (
          <PostItem key={`${index}-${post.createdAt}`} post={post} />
        ))
      )}
    </div>
  );
};

export default PostList;

PostList.propTypes = {
  posts: PropTypes.array,
};

import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
// import { comments } from "../../helpers/comments";
import { selectorFilters } from "../../redux/filterSlice";
import { useSelector } from "react-redux";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { Loader } from "../Loader/Loader";

export const Comments = () => {
  const filter = useSelector(selectorFilters);
  const { data: comments, isLoading, isError } = useGetCommentsQuery();
  // console.log(data);
  const filteredComponents = () => {
    return comments.filter((comment) =>
      comment.content.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Grid>
      {isLoading && <Loader />}
      {isError && <p>Oops,error!</p>}
      {comments &&
        filteredComponents().map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};

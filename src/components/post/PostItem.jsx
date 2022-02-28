import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./PostItem.css";

const PostItem = ({ post }) => {
  const { title, content, writer, regdate } = post;
  let firstChar = writer[0].charCodeAt(0);
  firstChar /= 100000;
  let personalColor = "#" + Math.round(firstChar * 16777215).toString(16);

  return (
    <Card>
      <CardHeader
        className="cardHeader"
        avatar={
          <Avatar sx={{ bgcolor: personalColor }} aria-label="recipe">
            {writer[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* 삭제 콜백 전달해야함 */}
            <DeleteIcon />
          </IconButton>
        }
        title={title}
        subheader={regdate}
      />
      <CardContent className="cardContent">
        <Typography className="typo">{content}</Typography>
      </CardContent>
      <hr />
    </Card>
  );
};

export default PostItem;

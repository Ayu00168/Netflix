import React, { useEffect, useState } from "react";
import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movies, setMovies] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/movies/find/" + item,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODhmN2EzYzMzZDhkMWIxOTY5MGVhMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzIyMTkxNSwiZXhwIjoxNjUzNjUzOTE1fQ.J2oQ7Szkk6hNTsvE5cpJ5zzXE_Mgu_Nvq4tj_tzpZLM",
            },
          }
        );
        console.log(res);
        setMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movies }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movies?.img} alt="" />
        {isHovered && (
          <>
            <video src={movies?.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movies?.duration}</span>
                <span className="limit">+{movies?.limit}</span>
                <span>{movies?.year}</span>
              </div>
              <div className="desc">{movies?.desc}</div>
              <div className="genre">{movies?.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;

import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { basePathStreamPlayer } from "../../variables/variables";
import { Player, Logo } from "./playerStyle";
import logo from "../../images/streamscape_logo.png";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export function PlayerComponent() {
  const streamNameParam = useParams();
  const [stream, setStream] = useState([]);
  const [streamFilePath, setStreamFilePath] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const requestApi = async () => {
      const response = await fetch(
        "https://streamscape-api.onrender.com/movies",
      );
      const data = await response.json();
      setStream(data);
      const foundStream = stream.find(
        (stream) => stream.name.toLowerCase() === streamNameParam.streamName,
      );
      foundStream ? setStreamFilePath(foundStream.file_path) : null;
    };
    requestApi();
  }, [streamNameParam, stream, streamFilePath]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";

    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.documentElement.style.width = "100vw";
    document.documentElement.style.height = "100vh";

    return () => {
      document.body.style.overflow = "";
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.width = "";
      document.body.style.height = "";

      document.documentElement.style.overflow = "";
      document.documentElement.style.margin = "";
      document.documentElement.style.padding = "";
      document.documentElement.style.width = "";
      document.documentElement.style.height = "";
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#2b2a2a">
      {isLoading ? (
        <Skeleton
          style={{
            width: "20rem",
            height: "3rem",
            position: "absolute",
            top: "0",
            left: "0",
            margin: "1rem 1rem",
          }}
        />
      ) : (
        <NavLink to={"/home"}>
          <Logo src={logo} alt="logo streamscape" />
        </NavLink>
      )}
      {isLoading ? (
        <Skeleton
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: "0",
            left: "0",
            borderRadius: "0",
          }}
        />
      ) : (
        <Player
          loading="lazy"
          allowFullScreen
          allow="autoplay"
          src={`${basePathStreamPlayer}${streamFilePath}`}
        ></Player>
      )}
    </SkeletonTheme>
  );
}

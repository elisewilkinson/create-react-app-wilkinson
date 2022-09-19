import React, { useEffect, useState } from "react";
import VideoJsPlayer from "./Component/VideoPlayer/VideoJsPlayer.component";
import "./styles.css";

// for Test
const playList = [
  {
    src:
      "https://vz-da6c7f24-d55.b-cdn.net/44f66069-ed0a-42cf-bfea-8332278f5f40/playlist.m3u8",
    thumbnail:
      "https://vz-da6c7f24-d55.b-cdn.net/44f66069-ed0a-42cf-bfea-8332278f5f40/thumbnail_1.jpg"
  },
  {
    src:
      "https://vz-da6c7f24-d55.b-cdn.net/0b45839c-845d-4c32-b9e5-9d517461a445/playlist.m3u8",
    thumbnail:
      "https://vz-da6c7f24-d55.b-cdn.net/0b45839c-845d-4c32-b9e5-9d517461a445/thumbnail_1.jpg"
  },
  {
    src:
      "https://vz-da6c7f24-d55.b-cdn.net/079788e7-93fe-47cb-a4d3-1ace0497a7c9/playlist.m3u8",
    thumbnail:
      "https://vz-da6c7f24-d55.b-cdn.net/079788e7-93fe-47cb-a4d3-1ace0497a7c9/thumbnail_1.jpg"
  },
  {
    src:
      "https://www.filimo.com/movie/watch/m3u8/mof/yes/v/1/usid/0/uid/163577869741896398/tot/1635663497/utp/91365749/movie_uid/x0p5y/movie_id/85779/devicetype/site/agentsdk/0/agentafcn/163470982622182/issmart/0/hash_url/5d6ddd11b8205d1ef6c97e7aa82c1d67/hash_urln/bd7280da509cc3aa1294a031d0f9cce5/afcn/163470982622182/movie.m3u8?bh=239",
    thumbnail:
      "https://static.cdn.asset.filimo.com/filimo-video/85779-thumb-t01.jpg"
  },
  {
    src:
      "https://www.filimo.com/movie/watch/m3u8/mof/yes/v/1/usid/0/uid/163577869741896398/tot/1635663497/utp/91365749/movie_uid/x0p5y/movie_id/85779/devicetype/site/agentsdk/0/agentafcn/163470982622182/issmart/0/hash_url/5d6ddd11b8205d1ef6c97e7aa82c1d67/hash_urln/bd7280da509cc3aa1294a031d0f9cce5/afcn/163470982622182/movie.m3u8?bh=239",
    thumbnail:
      "https://static.cdn.asset.filimo.com/filimo-video/85779-thumb-t01.jpg"
  },
  {
    src:
      "https://www.filimo.com/movie/watch/m3u8/mof/yes/v/1/usid/0/uid/163577869741896398/tot/1635663497/utp/91365749/movie_uid/x0p5y/movie_id/85779/devicetype/site/agentsdk/0/agentafcn/163470982622182/issmart/0/hash_url/5d6ddd11b8205d1ef6c97e7aa82c1d67/hash_urln/bd7280da509cc3aa1294a031d0f9cce5/afcn/163470982622182/movie.m3u8?bh=239",
    thumbnail:
      "https://static.cdn.asset.filimo.com/filimo-video/85779-thumb-t01.jpg"
  }
];

export default function App() {
  const [watcher, setWatcher] = useState(0); // for Testing
  const [source, setSource] = useState(null);
  useEffect(() => {
    setSource(playList[0].src);
  }, []);
  useEffect(() => {
    setSource(playList[watcher].src);
  }, [watcher]);
  // handle next or Previous button
  const handleAction = (actionName) => {
    if (actionName === "next") {
      if (watcher === playList.length - 1) {
        setWatcher(0);
      } else {
        setWatcher((prev) => prev + 1);
      }
    } else if (actionName === "before") {
      if (watcher === 0) {
        setWatcher(playList.length - 1);
      } else {
        setWatcher((prev) => prev - 1);
      }
    }
  };

  const videoSrc = {
    autoplay: true,
    controls: true,
    responsive: true
  };

  return (
    <div className="App">
      {source && (
        <VideoJsPlayer
          source={source}
          options={videoSrc}
          handleActionNext={() => handleAction("next")}
          handleActionBefore={() => handleAction("before")}
          teaserStartTime={1}
          teaserDuration={20}
        />
      )}
    </div>
  );
}

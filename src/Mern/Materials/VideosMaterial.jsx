import React from "react";

function VideosMaterial() {
  return (
    <div>
      <div>
        <div class="container text-center">
          <div class=" container grid row flex-column">
            <div class="col">
              <h2 className="mb-5">React Tutorial Video</h2>
              
                <iframe
                  width="760"
                  height="415"
                  className="rounded-5 shadow "
                  src="https://www.youtube.com/embed/mrHNSanmqQ4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideosMaterial;

import React from "react";

function VideosMaterial() {
  return (
    <div>
      <div>
        <div class="container text-center">
          <div class=" container grid row flex-column">
            <div class="col">
                <h2 className="mb-5">React Tutorial Video</h2>
                <video controls
                    className="rounded-5 "  
                    style={{width:"700px"}}
                >
                    <source src="" />
                </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideosMaterial;

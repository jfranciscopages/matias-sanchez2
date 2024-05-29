import React from "react";

const VslEmbeded = () => {
  return (
    <section>
      <script
        src="https://fast.wistia.com/embed/medias/g5wbwcolve.jsonp"
        async
      ></script>
      <script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        async
      ></script>
      <div
        class="wistia_responsive_padding"
        className="relative"
        // style="padding:56.25% 0 0 0;position:relative;"
      >
        <div
          class="wistia_responsive_wrapper"
          className="h-full left-0 absolute top-0 w-full"
          // style="height:100%;left:0;position:absolute;top:0;width:100%;"
        >
          <div
            class="wistia_embed wistia_async_g5wbwcolve seo=true videoFoam=true"
            className="h-full relative w-full"
            // style="height:100%;position:relative;width:100%"
          >
            <div
              class="wistia_swatch"
              className="h-full left-0 opacity-0 overflow-hidden absolute top-0 w-full"
              // style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"
            >
              <img
                src="https://fast.wistia.com/embed/medias/g5wbwcolve/swatch"
                className="h-full object-contain w-full"
                // style="filter:blur(5px);height:100%;object-fit:contain;width:100%;"
                alt=""
                aria-hidden="true"
                onload="this.parentNode.style.opacity=1;"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VslEmbeded;

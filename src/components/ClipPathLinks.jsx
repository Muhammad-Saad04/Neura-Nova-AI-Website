import { useAnimate } from "framer-motion";
import React from "react";
import {
  SiAdobe,
  SiApple,
  SiFacebook,
  SiGoogle,
  SiLinkedin,
  SiShopify,
  SiSoundcloud,
  SiTiktok
} from "react-icons/si";

export const ClipPathLinksExample = () => {
  return (
    <div className="bg-[#ffff] px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-gray-300 border border-gray-300 rounded-lg overflow-hidden shadow-lg">
      <div className="grid grid-cols-2 divide-x divide-gray-300">
        <LinkBox Icon={SiGoogle} href="#" />
        <LinkBox Icon={SiShopify} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-gray-300">
        <LinkBox Icon={SiApple} href="#" />
        <LinkBox Icon={SiSoundcloud} href="#" />
        <LinkBox Icon={SiAdobe} href="#" />
        <LinkBox Icon={SiFacebook} href="#" />
      </div>
      <div className="grid grid-cols-2 divide-x divide-gray-300">
        <LinkBox Icon={SiTiktok} href="#" />
        <LinkBox Icon={SiLinkedin} href="#" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const HOVER_CLIP = "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)";

const ENTRANCE_KEYFRAMES = {
  left: [HOVER_CLIP, NO_CLIP],
  bottom: [HOVER_CLIP, NO_CLIP],
  top: [HOVER_CLIP, NO_CLIP],
  right: [HOVER_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, HOVER_CLIP],
  bottom: [NO_CLIP, HOVER_CLIP],
  top: [NO_CLIP, HOVER_CLIP],
  right: [NO_CLIP, HOVER_CLIP],
};

const LinkBox = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const handleMouseEnter = () => {
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES.left,
    });
  };

  const handleMouseLeave = () => {
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES.left,
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 bg-[#213555] text-white rounded-lg overflow-hidden shadow-md"
    >
      <Icon className="text-2xl sm:text-4xl lg:text-5xl z-10" />

      <div
        ref={scope}
        style={{
          clipPath: NO_CLIP,
        }}
        className="absolute inset-0 bg-white/20 text-white grid place-content-center transition-all duration-300"
      >
        <Icon className="text-2xl sm:text-4xl md:text-5xl" />
      </div>
    </a>
  );
};

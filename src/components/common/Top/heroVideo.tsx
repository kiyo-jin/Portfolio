const HeroVideo = () => {
    return (
      // position: absolute, w/h: 100%, z-index: -1 で背景に配置
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        {/* 動画の上に半透明の黒いオーバーレイをかける（任意） */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

        <video
          // ✅ 使用したい動画のパスを指定
          src="/images/sea.mp4"
          autoPlay
          muted
          loop
          playsInline
          // w/h: 100%, object-fit: cover でコンテナ全体を覆う
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  // export default も1つだけにする
  export default HeroVideo;

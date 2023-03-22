const WordAnimation = () => {
  return (
    <div class="flex  font-bold text-white">
      <div class="  ">
        <div class=" text-2xl lg:text-5xl">
          <div class="relative inline-grid grid-cols-1 grid-rows-1  font-extrabold overflow-hidden">
            <span class="animate-word col-span-full row-span-full text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-purple-400">
              Next.js
            </span>
            <span class="animate-word-delay-1 col-span-full row-span-full text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-purple-400">
              Node.js
            </span>
            <span class="animate-word-delay-2 col-span-full row-span-full text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-pink-400">
              Vue.js
            </span>
            <span class="animate-word-delay-3 col-span-full row-span-full text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-purple-400">
              React Native
            </span>
            <span class="animate-word-delay-4 col-span-full row-span-full text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-purple-400">
              React
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordAnimation;

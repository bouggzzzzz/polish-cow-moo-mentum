const DecorativeCows = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <img
          key={i}
          src="/lovable-uploads/66eab8e1-0e71-4988-899a-0221ee28f151.png"
          alt="Decorative Cow"
          className={`fixed w-16 h-16 opacity-20 animate-float ${
            i === 0 ? 'top-[25vh] left-[15vw]' :
            i === 1 ? 'top-[25vh] right-[15vw]' :
            i === 2 ? 'top-[45vh] left-[10vw]' :
            i === 3 ? 'top-[45vh] right-[10vw]' :
            i === 4 ? 'top-[65vh] left-[15vw]' :
            'top-[65vh] right-[15vw]'
          }`}
          style={{
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>
  );
};

export default DecorativeCows;
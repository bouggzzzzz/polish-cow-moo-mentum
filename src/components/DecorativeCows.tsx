const DecorativeCows = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <img
          key={i}
          src="/lovable-uploads/66eab8e1-0e71-4988-899a-0221ee28f151.png"
          alt="Decorative Cow"
          className={`absolute w-16 h-16 opacity-20 animate-float ${
            i === 0 ? 'top-1/4 left-1/4' :
            i === 1 ? 'top-1/3 right-1/4' :
            i === 2 ? 'bottom-1/4 left-1/3' :
            i === 3 ? 'top-1/2 right-1/3' :
            i === 4 ? 'bottom-1/3 left-1/2' :
            'bottom-1/2 right-1/2'
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
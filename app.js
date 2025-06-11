const { useState, useEffect } = React;

function App() {
  const name = 'Rouie';
  const [fireworks, setFireworks] = useState([]);

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1',
    '#96CEB4', '#FFEAA7', '#DDA0DD',
    '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
  ];

  const generateFireworks = () => {
    const picks = [];
    for (let i = 0; i < 12; i++) {
      picks.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 60 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2
      });
    }
    setFireworks(picks);
  };

  useEffect(() => {
    generateFireworks();
    const interval = setInterval(generateFireworks, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden flex items-center justify-center px-4">
      {fireworks.map(fw => (
        <div key={fw.id} className="absolute firework"
          style={{
            left: `${fw.x}%`,
            top: `${fw.y}%`,
            animationDelay: `${fw.delay}s`
          }}>
          <div className="firework-explosion" style={{ '--firework-color': fw.color }} />
        </div>
      ))}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}>
            <div className="sparkle-icon opacity-70"></div>
          </div>
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-none">
          {'HAPPY'.split('').map((c, i) => (
            <span key={i}
              className="inline-block animate-bounce-slow text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
              style={{ animationDelay: `${i * 0.1}s` }}>{c}</span>
          ))}
        </h1>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none">
          {'BIRTHDAY'.split('').map((c, i) => (
            <span key={i}
              className="inline-block animate-bounce-slow text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400"
              style={{ animationDelay: `${(i + 5) * 0.1}s` }}>{c}</span>
          ))}
        </h2>

        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 animate-pulse">
          Dear {name}!
        </h3>

        <div className="space-y-6 text-white text-opacity-90 text-lg md:text-xl max-w-2xl mx-auto">
          <p className="animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            May your special day be filled with happiness, laughter, and all your favorite things!
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '2s' }}>
            Wishing you a year ahead filled with joy, success, and beautiful moments!
          </p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

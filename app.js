const { useState, useEffect } = React;

function App() {
  const name = 'Rouie';
  const [showCelebration, setShowCelebration] = useState(true);
  const [fireworks, setFireworks] = useState([]);

  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'];

  const generateFireworks = () => {
    const newFireworks = [];
    for (let i = 0; i < 12; i++) {
      newFireworks.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 60 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2
      });
    }
    setFireworks(newFireworks);
  };

  const resetCelebration = () => {
    setShowCelebration(false);
    setName('');
    setFireworks([]);
  };

  useEffect(() => {
    if (showCelebration) {
      generateFireworks();
      const interval = setInterval(generateFireworks, 3000);
      return () => clearInterval(interval);
    }
  }, [showCelebration]);

  return showCelebration ? (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden flex items-center justify-center px-4">
      {/* Fireworks */}
      {fireworks.map(firework => (
        <div key={firework.id} className="absolute firework" style={{
          left: `${firework.x}%`,
          top: `${firework.y}%`,
          animationDelay: `${firework.delay}s`
        }}>
          <div className="firework-explosion" style={{ '--firework-color': firework.color }} />
        </div>
      ))}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute animate-float" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}>
            <div className="sparkle-icon opacity-70"></div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-none">
          {"HAPPY".split("").map((char, i) => (
            <span key={i} className="inline-block animate-bounce-slow text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400" style={{ animationDelay: `${i * 0.1}s` }}>{char}</span>
          ))}
        </h1>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none">
          {"BIRTHDAY".split("").map((char, i) => (
            <span key={i} className="inline-block animate-bounce-slow text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400" style={{ animationDelay: `${(i + 5) * 0.1}s` }}>{char}</span>
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
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 px-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 max-w-md w-full border border-white border-opacity-20 shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mb-6 shadow-lg">
            <div className="gift-icon"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Birthday Celebration</h1>
          <p className="text-white text-opacity-80 text-lg">Let's make someone's day special!</p>
        </div>
        <div className="space-y-6">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter the birthday person's name" className="w-full p-4 rounded-xl bg-white bg-opacity-10 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg" />
          <button onClick={() => setShowCelebration(true)} className="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">Start Celebration!</button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
        

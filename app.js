const { useEffect, useState } = React;

function App() {
  const [fireworks, setFireworks] = useState([]);

  const colors = ['#FF6B6B', '#FFD700', '#4ECDC4', '#FF69B4', '#4169e1', '#E2B9FF', '#F7DC6F', '#BB8FCE'];

  // Generate fireworks for decoration
  const generateFireworks = () => {
    const newFireworks = [];
    for (let i = 0; i < 12; i++) {
      newFireworks.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 60 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 1.2
      });
    }
    setFireworks(newFireworks);
  };

  useEffect(() => {
    generateFireworks();
    const interval = setInterval(generateFireworks, 1800);
    return () => clearInterval(interval);
  }, []);

  // Sparkle particles
  const sparkles = Array.from({ length: 18 }, (_, i) => (
    <div
      key={i}
      className="sparkle-icon"
      style={{
        position: "absolute",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 70 + 10}%`,
        animation: `fade-in-up 1.5s ${(i * 0.2).toFixed(1)}s both`
      }}
    />
  ));

  return (
    <div style={{ position: "relative", width: "100vw", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Fireworks */}
      {fireworks.map(firework => (
        <div key={firework.id} className="firework" style={{
          left: `${firework.x}%`,
          top: `${firework.y}%`,
          animationDelay: `${firework.delay}s`
        }}>
          <div className="firework-explosion" style={{ "--firework-color": firework.color }} />
        </div>
      ))}
      {/* Sparkles */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 2 }}>
        {sparkles}
      </div>

      {/* Main Birthday Content */}
      <div style={{
        position: "relative",
        zIndex: 3,
        padding: "36px 28px 24px 28px",
        borderRadius: "32px",
        background: "rgba(28, 24, 48, 0.80)",
        boxShadow: "0 4px 40px 0 rgba(64, 0, 128, 0.18)",
        maxWidth: 720,
        width: "100%",
        margin: "0 auto",
        border: "2px solid rgba(255,255,255,0.10)"
      }}>
        <div className="birthday-title">
          Happy 18th Birthday! <span role="img" aria-label="party"></span>
        </div>
        <div className="birthday-subtitle" style={{ marginTop: 18 }}>
          Welcome to legal adulthood! Wishing you all the love, joy, and opportunities this new chapter brings.<br />
          Keep shining and enjoy every moment of your special day. 🥂💖
        </div>
        <div className="birthday-message" style={{ marginTop: 18 }}>
          May your special day be filled with happiness, laughter, and all your favorite things!<br />
          Wishing you a year ahead filled with joy, success, and beautiful moments! 💫✨
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

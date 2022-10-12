import "./styles.scss";

const cardData = [
  {
    title: "A tree needs to be your friend if you're going to paint him",
    body: "This is a fantastic little painting. A fan brush can be your best friend. If you didn't have baby clouds, you wouldn't have big clouds. We have all at one time or another mixed some mud. Let all these things just sort of happen. We're trying to teach you a technique here and how to use it.",
  },
  {
    title: "We don't have anything but happy trees here. ",
    body: "Absolutely no pressure. You are just a whisper floating across a mountain. Paint anything you want on the canvas. Create your own world. Any little thing can be your friend if you let it be. Everyone is going to see things differently - and that's the way it should be.",
  },
  {
    title: "I'm gonna add just a tiny little amount of Prussian Blue",
    body: "You don't have to be crazy to do this but it does help. I was blessed with a very steady hand; and it comes in very handy when you're doing these little delicate things. I'm sort of a softy, I couldn't shoot Bambi except with a camera. We'll throw some old gray clouds in here just sneaking around and having fun.",
  },
  {
    title: "It's almost like something out of a fairytale book.",
    body: "Water's like me. It's laaazy ... Boy, it always looks for the easiest way to do things You have freedom here. The only guide is your heart. Here's another little happy bush We need a shadow side and a highlight side. Poor old tree.",
  },
  {
    title: "Use what you see, don't plan it.",
    body: "",
  },
  {
    title: "These things happen automatically.",
    body: "All you have to do is just let them happen. Just let this happen. We just let this flow right out of our minds. We don't want to set these clouds on fire. If what you're doing doesn't make you happy - you're doing the wrong thing. We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted.",
  },
  {
    title: "Now, we're going to fluff this cloud. ",
    body: " Let's do it again then, what the heck. Take your time. Speed will come later. Isn't that fantastic? You can just push a little tree out of your brush like that.",
  },
  {
    title: "Just take out whatever you don't want. It'll change your entire perspective.",
    body: "If I paint something, I don't want to have to explain what it is. By now you should be quite happy about what's happening here. Imagination is the key to painting. If we're gonna walk though the woods, we need a little path. Let your imagination just wonder around when you're doing these things.",
  },
  {
    title: "Just a happy little shadow that lives in there.",
    body: "Steve wants reflections, so let's give him reflections. I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. If you hypnotize it, it will go away. We'll do another happy little painting.",
  },

]

export default function App() {
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <div className="logo">
            <strong>LOGO 👋</strong>
          </div>
          <nav>
            <ul>
              <li><a href="#">Toons</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Characters</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Store</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="hero">
        <img src="//picsum.photos/id/1062/1920/760" alt="ALT_TEXT_HERE" />
        <div className="wrapper">
          <h1>CATCHPHRASE!</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente exercitationem officiis dolorum atque labore harum maxime vero, necessitatibus pariatur blanditiis iste alias voluptates tempora velit. Odit iusto totam quibusdam maiores.</p>
        </div>
      </section>
      <section id="cards">
        <div className="wrapper">
          <h2>This is where some content lives!</h2>
          <div className="card-container">
            {cardData.map((data, i) => (
              <div className="card" key={`card-${i}`}>
                <div className="img-container">
                  <img loading="lazy" src={`//picsum.photos/800/600?random=${i}`} alt="Happy Little Picture" />
                </div>
                <div className="content">
                  <h3>{data.title}</h3>
                  <p>{data.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer>
        <div className="wrapper">
          <p>&copy;2022 Clique Studios, All Rights Reserved</p>
        </div>
      </footer>
      <div className="ball-animation-container">
        <div className="ball">🏀</div>
      </div>
    </div>
  );
}

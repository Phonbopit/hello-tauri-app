import { Link } from 'react-router-dom';

const InfoPage = () => {
  return (
    <div className="info">
      <h1 className="title">About Hello Tauri App</h1>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, nulla.
        Enim corrupti accusamus iusto eos labore velit, nulla hic animi facere
        dolore, inventore soluta! Voluptas officiis velit deserunt sed fugiat?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
        laborum dolores optio quas dolor, atque ea dignissimos minus, natus
        soluta quae minima? Molestiae consequatur sit magnam nobis? At,
        blanditiis ab.
      </p>

      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default InfoPage;

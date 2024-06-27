// src/components/NewsWidget.js

const NewsWidget = () => {
  const news = [
    { title: 'Comunidad Practica de Programacion', time: '1h ago', readers: '345 readers', link: 'https://www.facebook.com/groups/comunidad.programacion/' },
    { title: 'Fernando Herrera', time: '2h ago', readers: '323 readers', link: 'https://fernando-herrera.com/' },
    { title: 'Carrera de Ingenieria de Sistemas de la Universidad de Lima', time: '3h ago', readers: '234 readers', link: 'https://www.ulima.edu.pe/' },
    { title: 'UPC Ingeniería de Software.com', time: '4h ago', readers: '112 readers', link: 'https://pregrado.upc.edu.pe/facultad-de-ingenieria/ingenieria-de-software/' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">UPConnect News</h2>
      <ul className="list-none p-0">
        {news.map((item, index) => (
          <li key={index} className="mb-2">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              {item.title}
            </a>
            <p className="text-gray-500 text-sm">
              {item.time} &middot; {item.readers}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsWidget;

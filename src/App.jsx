import { useState } from "react";

const sections = [
  { id: "contacts", title: "Contatos", content: "Aqui você pode acessar sua lista de contatos e iniciar conversas." },
  { id: "lands", title: "Terrenos", content: "Informações detalhadas sobre terrenos e áreas de conservação." },
  { id: "calculator", title: "Calculadora", content: "Ferramenta para cálculos ambientais e sustentáveis." },
];

export default function App() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/caminho/para/sua/imagem.png')" }}>
      <header className="flex justify-between p-4 bg-opacity-90 bg-teal-900 text-white">
        <h1 className="text-xl font-bold">NaturaNexus</h1>
        <nav className="flex gap-4">
          <button className="hover:underline">Perguntas Frequentes</button>
          <button className="hover:underline">Suporte</button>
        </nav>
      </header>
      <main className="flex flex-col items-center mt-10">
        <p className="text-white text-center max-w-2xl">
          NaturaNexus é um projeto de website criado para facilitar a troca de informações sobre conservação e recuperação de áreas verdes.
        </p>
        <div className="flex gap-6 mt-6">
          {sections.map((section) => (
            <div key={section.id} className="bg-teal-700 text-white p-4 rounded-2xl shadow-lg w-40 text-center">
              <button onClick={() => setExpanded(expanded === section.id ? null : section.id)} className="text-lg font-semibold">
                {section.title}
              </button>
              {expanded === section.id && (
                <p className="mt-2 text-sm">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </main>
      
      <div className="flex p-4">
        <div className="w-3/4 bg-white p-4 rounded-lg shadow-md">API GOOGLE MAPS</div>
        <div className="w-1/4 flex flex-col gap-2 ml-4">
          {['Gerenciamento', 'Integração Maps', 'Calculadora', 'Dados Ambientais', 'Relatórios/Exportação'].map((item) => (
            <button key={item} className="bg-teal-600 text-white p-2 rounded-lg shadow-md hover:bg-teal-700">
              {item}
            </button>
          ))}
        </div>
      </div>
      
     
      <div className="flex p-4">
        <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-teal-900 font-semibold">Meu Perfil</h2>
          <div className="mt-4">Lista de Contatos</div>
          <input type="text" placeholder="Pesquise um contato..." className="mt-2 p-2 w-full rounded-lg border" />
        </div>
        <div className="w-2/3 bg-white p-4 rounded-lg shadow-md ml-4">
          <h2 className="text-gray-600">Contato Selecionado</h2>
        </div>
      </div>
    </div>
  );
}
